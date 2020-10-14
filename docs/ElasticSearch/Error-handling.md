# Error Handling Note

Elasticsearch 7.9 버전을 사용하면서 발생한 Error를 정리하였다.

---

### 실습 환경

- 💡 Elasticsearch 7.9.0
- 💡 Windows 10
- 💡 Git Bash

---

## header not supported Error

### 문제점

**2020.08.21**  
`ES`에서 `index`를 생성하고 확인하고 삭제할 때는 아무 Error가 나지 않았는데

`Document`를 만들 때 다음과 같은 Error가 발생한다.

```shell script
{
  "error" : "Content-Type header [application/x-www-form-urlencoded] is not supported",
  "status" : 406
}
```

### 원인

`Elasticsearch` 6.0 이후 버전에 도입된 [업격한 content-type 확인](https://www.elastic.co/kr/blog/strict-content-type-checking-for-elasticsearch-rest-requests)으로 인해 발생하는 Error이다.

### 해결방법

`curl` 명령어에 옵션을 다음과 같이 추가해서 실행해야 한다.

```shell script
-H 'Content-Type: application/json'
```

### Example

**Error 상황**

```shell script
$ curl -XPOST http://localhost:9200/classes/class/1/?pretty -d @oneclass.json

{
  "error" : "Content-Type header [application/x-www-form-urlencoded] is not supported",
  "status" : 406
}
```

**해결**

```shell script
$ curl -XPOST http://localhost:9200/classes/class/1/?pretty -H 'Content-Type: application/json' -d @oneclass.json
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   394  100   222  100   172   1734   1343 --:--:-- --:--:-- --:--:--  3078{
  "_index" : "classes",
  "_type" : "class",
  "_id" : "1",
  "_version" : 1,
  "result" : "created",
  "_shards" : {
    "total" : 2,
    "successful" : 1,
    "failed" : 0
  },
  "_seq_no" : 0,
  "_primary_term" : 1
}

```

---

## Could not resolve host: application

### 문제점

**2020.08.21**  
Windows10 개발 환경에서 Elasticsearch를 테스트 중에 위 `header` 문제를 해결한 듯 하였는데 아래에 이런 `Error`가 더 있었다.

```shell script
curl: (6) Could not resolve host: application
```

### 원인

[Cmder](https://cmder.net/)이라는 Windows 콘솔 에뮬레이터를 사용하면 `ls`와 같은 명령어를 사용할 수 있기 때문에 괜찮을 줄 알았지만 Unix 명령어를 오류없이 사용하는 것은 아직 안되는 것 같다.

### 해결방법

[Git Bash](https://gitforwindows.org/)를 사용해 똑같은 명령어를 작성했는데 잘 된다.

~~Cmder을 삭제해야겠다.~~

---

## The Bulk request must be terminated by a newline [\\n]

### 문제점

`JSON file`을 Bulk 하는 과정에서 Error 가 발생했다.  
**2020.08.21**  

```shell script
{
  "error" : {
    "root_cause" : [
      {
        "type" : "illegal_argument_exception",
        "reason" : "The bulk request must be terminated by a newline [\\n]"
      }
    ],
    "type" : "illegal_argument_exception",
    "reason" : "The bulk request must be terminated by a newline [\\n]"
  },
  "status" : 400
}
```

### 원인

Error 설명대로 `New Line`으로 끝나야되는데 `New Line`이 없어서 그런 것 같다.

### 해결방법

JSON file에 엔터를 두 번 쳤다.

~~이렇게 단순한 Error는 적지도 말아야겠다. Error 잡는 시간보다 정리하는게 더 오래걸렸음~~

---

## Mapping 설정에서 문제점(Elasticsearch 7.x 버전)

**2020.08.24**

### ✔ 문제점

Elasticsearch 7.x 버전에서 `Mapping`을 생성하는 실습 도중 에러가 발생했다.

에러문구는 다음과 같다.

```shell script
{
  "error" : {
    "root_cause" : [
      {
        "type" : "illegal_argument_exception",
        "reason" : "Types cannot be provided in put mapping requests, unless the include_type_name parameter is set to true."
      }
    ],
    "type" : "illegal_argument_exception",
    "reason" : "Types cannot be provided in put mapping requests, unless the include_type_name parameter is set to true."
  },
  "status" : 400
}
```

---

### 원인

- `Elasticsearch 7.x` 버전부터는 `curl` 리퀘스트에서 헤더를 명확히 설정해주어야 한다.
- `mapping`을 생성할 때에는 `include_type_name`을 `true`로 설정해주어야 한다.

---

### 해결방법

#### 1️⃣ `mapping`을 생성할 때 아래와 같이 Content-Type 추가

`-H 'Content-Type: application/json'`

전체 커멘드 라인

```shell script
$ curl -XPUT http://localhost:9200/classes/class/_mapping -d @classesRating_mapping.json -H 'Content-Type: application/json'
```

다른 에러 발생

```shell script
{
  "error" : {
    "root_cause" : [
      {
        "type" : "illegal_argument_exception",
        "reason" : "Types cannot be provided in put mapping requests, unless the include_type_name parameter is set to true."
      }
    ],
    "type" : "illegal_argument_exception",
    "reason" : "Types cannot be provided in put mapping requests, unless the include_type_name parameter is set to true."
  },
  "status" : 400
}
```

이 에러에 대해 [Elasticsearch 공식 문서](https://www.elastic.co/kr/blog/moving-from-types-to-typeless-apis-in-elasticsearch-7-0)를 찾아보면 7.0 버전 부터는 무형식 API를 도입함에 따라 

**include_type_name=true를 인덱스 생성, 템플릿, 매핑 API로 전달** 하라는 내용이 있다.

추가해보았다.

#### 2️⃣ `include_type_name=true` 추가

```shell script
$ curl -XPUT 'http://localhost:9200/classes/class/_mapping?include_type_name=true&pretty' -d @classesRating_mapping.json -H 'Content-Type: application/json'
```

또 다른 에러가 발생했다.

```shell script
{
  "error" : {
    "root_cause" : [
      {
        "type" : "mapper_parsing_exception",
        "reason" : "No handler for type [string] declared on field [professor]"
      }
    ],
    "type" : "mapper_parsing_exception",
    "reason" : "No handler for type [string] declared on field [professor]"
  },
  "status" : 400
}

```

이 원인을 [stackoverflow](https://stackoverflow.com/questions/47452770/no-handler-for-type-string-declared-on-field-name)에서 찾을 수 있는데 6.0 버전 이상부터 Mapping Type 중 `String`을 삭제하고 `text`로 변경하여 사용한다고 한다.

따라서 기존의 mapping 타입 중 string을 삭제하면 해결된다.


[참고한 글](https://www.inflearn.com/questions/12385)

---