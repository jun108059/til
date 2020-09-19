# Elasticsearch7 - Java Rest Client

🗓 20.09.05

자바 언어를 위해 제공되는 클라이언트에는 두 가지 종류가 있다. 내부적으로 HTTP REST API를 사용해 통신하는 방식과 네티(Netty)모듈을 이용해 네이티브 클라이언트를 통해 통신하는 방식이다.

## 1. REST Client VS Transport Client

### ⏹ REST Client

- Java High Level REST Client라고 불린다.
- HTTP방식을 이용해 엘라스틱서치와 통신한다.
- 내부적으로는 HttpClient 모듈을 사용한다.
- HTTPS 사용이 가능하다.

### ⏹ Transport Client(Netty)

- Java Client라고도 불린다.
- 초기부터 제공되던 클라이언트 방식으로, 상대적으로 빠른 속도를 보장한다.
- 소켓을 이용해 엘라스틱서치와 통신한다.
- 내부적으로는 Netty모듈을 사용한다.

초기버전의 엘라스틱서치에서는 소켓을 이용하는 Transport 클라이언트만 제공됬다. 일종의 엘라스틱서치 노드와 비슷한 방식으로 동작하기 때문에 속도는 빠르지만 엘라스틱서치가 버전업될 때마다 제공되는 기능이나 API의 명세에 따라 클래스나 메서드가 바뀌는 문제점이 있었다. 이러한 문제점을 해결하기 위해서 새로운 모듈인 REST 클라이언트가 도입됐다.

아직까지 Transport방식이 사용되기도 하지만 Elasticsearch 7.0부터는 해당 방식이 deprecated됐다.

출처:

[코딩스타트 블로그](https://coding-start.tistory.com/172)

