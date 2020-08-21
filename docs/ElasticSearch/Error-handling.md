# Error Handling Note

## header not supported Error

### 문제점

**2020.08.21**  
`ES`에서 `index`를 생성하고 확인하고 삭제할 때는 아무 Error가 나지 않았는데

`Document`를 만들 때 다음과 같은 Error가 발생한다.

```bash
{
  "error" : "Content-Type header [application/x-www-form-urlencoded] is not supported",
  "status" : 406
}
```

### 원인

`Elasticsearch` 6.0 이후 버전에 도입된 [업격한 content-type 확인](https://www.elastic.co/kr/blog/strict-content-type-checking-for-elasticsearch-rest-requests)으로 인해 발생하는 Error이다.

### 해결방법

`curl` 명령어에 옵션을 다음과 같이 추가해서 실행해야 한다.

```bash
-H 'Content-Type: application/json'
```

### Example

**Error 상황**

```bash
$ curl -XPOST http://localhost:9200/classes/class/1/?pretty -d @oneclass.json

{
  "error" : "Content-Type header [application/x-www-form-urlencoded] is not supported",
  "status" : 406
}
```

**해결**

```bash
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

```bash
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

```bash
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
