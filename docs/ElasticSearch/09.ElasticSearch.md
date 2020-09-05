# Elasticsearch7 Java REST Client 시작하기

🗓 20.09.05

- 공식문서를 통해 공부하고 있다.
    - [https://www.elastic.co/guide/en/elasticsearch/client/java-rest/current/java-rest-high-getting-started-maven.html](https://www.elastic.co/guide/en/elasticsearch/client/java-rest/current/java-rest-high-getting-started-maven.html)
- 공식문서에서 Gradle configuration 설정을 compile로 한다.
    - implementation 차이점? [정리한 블로그](https://hack-jam.tistory.com/13) 참고

## ⏹ Javadoc 공식문서 (REST high level client)

rest-high-level 7.9.1 API는 [공식문서](https://artifacts.elastic.co/javadoc/org/elasticsearch/client/elasticsearch-rest-high-level-client/7.9.1/index.html) 내부 packages를 확인할 수 있다.

---

## ⏹ Maven Repository

`high-level Java REST client`는 **Maven Central**에서 Host 된다.

- 요구사항 : Java 1.8 이상 버전

특정 버전을 적용하고자 하는 경우 [공식문서](https://www.elastic.co/guide/en/elasticsearch/client/java-rest/current/java-rest-high-getting-started-maven.html)에서 snapshot repo를 config에 추가하는 방법을 참고하자.

### Gradle configuration

**종속성 관리(dependency manager) Gradle configuration 추가**

`SpringProject/build.gradle`

```bash
dependencies {
    compile 'org.elasticsearch.client:elasticsearch-rest-high-level-client:7.9.1'
}
```

maven을 사용하면 아래와 같다.

### Maven configuration

`pom.xml`

```xml
<dependency>
    <groupId>org.elasticsearch.client</groupId>
    <artifactId>elasticsearch-rest-high-level-client</artifactId>
    <version>7.9.1</version>
</dependency>
```

의존성(종속성)에서 전의(transitive) 종속성에 의존한단다.
[공식문서](https://www.elastic.co/guide/en/elasticsearch/client/java-rest/current/java-rest-high-getting-started-dependencies.html)에서 확인해볼 수 있다.

IntelliJ에는 gradle configuration을 수정하면 우측 상단에 Gradle을 Load 할 수 있는 버튼이 활성화된다. 눌러서 `Elasticsearch Rest High level client`를 Load해주자!

---

## ⏹ 초기화(Initaialization)

- RestHighLevelClient 인스턴스는 [REST low-level client builder](https://www.elastic.co/guide/en/elasticsearch/client/java-rest/current/java-rest-low-usage-initialization.html)의 위에서 돌아가기 때문에 다음과 같이 초기화 해서 connection을 만들어주자.

```java
RestHighLevelClient client = new RestHighLevelClient(
        RestClient.builder(
                new HttpHost("localhost", 9200, "http"),
                new HttpHost("localhost", 9201, "http")
				)
);

/*
 * 비지니스 로직
 */
        
/*
 * 사용후 꼭 close
 */
 client.close();
```

`high-level client` 는 제공된 **builder**를 기반으로 요청을 수행하는 데 사용되는 `low-level client`를 내부적으로 만들어 낸다. 

Elasticsearch는 `9200, 9201` 포트처럼 여러 개의 노드 연결이 가능하다는 특징도 있다.

이 `low-level client`는 **연결 pool**을 유지하고 **일부 thread**를 시작하므로 작업이 제대로 완료되면 `high-level client` 를 닫아야한다.

그러면 해당 리소스를 해제하기 위해 내부`low-level client`도 close된다.

Java 1.7 기능 중 `try`를 활용해 `auto close` 하는 방법을 사용해도 된다.

```java
try(RestHighLevelClient client = new RestHighLevelClient(
				RestClient.builder(
								new HttpHost("host",9200,"http")
                ,new HttpHost("host2",9200,"http")
        )
);){
    /*
     * 비지니스 로직
     */
}
```

앞으로 Java High Level Client를 활용할 때 RestHighLevelClient 인스턴스를 클라이언트로 참조할 것이다.

---

## ⏹ RequestOptions

- `RestHighLevelClient`의 모든 API는 `RequestOptions`를 허용한다.
    - **RequestOptions는?**
        - Elasticsearch에서 **request(요청)을 실행하는 방법**을 변경하지 않고
        **Request를 customize**하여 사용할 수 있는 방법
- 예를 들어, Request(요청)을 수신하는 노드를 제어할 `NodeSelector`를 지정하고 싶다면 Option customizing 예제를 [low level client documentation](https://www.elastic.co/guide/en/elasticsearch/client/java-rest/current/java-rest-low-usage-requests.html#java-rest-low-usage-request-options) 공식 문서를 참고하면 된다.

---

## Asynchronous usage (비동기 사용)

- 서로 다른 클라이언트에 걸친 모든 `method`은 traditional synchronous(전통적인 동기방식) 및 asynchronous variant(비동기 변수) 에서 존재한다.
- **차이점**
    - 비동기식 요청은 `REST Low Level Client`에서 비동기식 요청을 사용한다는 것
    - 이는 여러 요청을 수행 중이거나 `rx java, Kotlin co-routines` 또는 유사한 프레임워크를 사용하는 경우 유용하다.

### 비동기식(asynchronous) method

- `Async`라는 단어를 이름에 포함 포함
- `Cancellable` 인스턴스를 반환
- 동기식(synchronous) 변수(variant)와 동일한 **Request object**를 수용하고 
generic `ActionListener<T>` 수용 - **T**는 synchronous method의 return type이다.

- 모든 비동기 메서드는 Request(요청)을 중단하려는 경우 
호출할 수 있는 `cancel` 메서드와 함께 `Cancelable` 개체(object)를 **return**한다.
    - 더 이상 필요하지 않은 요청을 취소하는 것은 Elasticsearch에 불필요한 부하를 주지 않는 좋은 방법이다.
    - `Cancellable` 인스턴스를 사용하는 것은 선택 사항이며, 필요하지 않은 경우 이 인스턴스를 안전하게 무시(safely ignore)할 수 있다.

---