<p align="center">
    <img width="300px" src="/docs/.vuepress/public/images/img-nginx/nginx.PNG" align="center" alt="Membership" />
    <h2 align="center">NGINX</h2>
    <p align="center">트래픽이 많은 웹사이트를 위해 확장성을 고려해 설계한 비동기 이벤트 기반 구조의 웹서버</p>
</p>

---

## ✔️NGINX는?

웹서버 소프트웨어로, 가벼움과 높은 성능을 목표로 한다. 웹 서버, 리버스 프록시 및 메일 프록시 기능을 가진다.

`Nginx`는 요청에 응답하기 위해 비동기 이벤트 기반 구조를 가진다. 이것은 `Apache` HTTP 서버의 스레드/프로세스 기반 구조를 가지는 것과는 대조적이다. 이러한 구조는 서버에 많은 부하가 생길 경우의 성능을 예측하기 쉽게 해준다.

`Apache`보다 동작이 단순하고 동시접속 처리에 특화 되었다고 한다.

Request 처리 방식에서 `Apache` 서버와는 다르다는 것이 핵심적인 차이이다.

Event-Driven 방식을 채택하여 높은 성능을 발휘한다.

한 마디로

> 더 적은 자원으로 더 빠르게 서비스

--- 

아파치와 Nginx의 특징을 정리하면 다음과 같다.

### Apache

- 쓰레드 / 프로세스 기반 구조로 요청 하나 당 쓰레드 하나가 처리하는 구조
- 사용자가 많으면 많은 쓰레드 생성, 메모리 및 CPU 낭비
- 1 쓰레드 : 1 클라이언트

### Nginx

- 비동기 Event-Driven 구조
- 다수의 연결을 효과적으로 처리 가능
- 코어 모듈이 Apache보다 적은 리소스로 빠르게 동작 가능

쓰레드 기반은 하나의 커넥션 - 하나의 쓰레드를 먹지만, Event-driven 구조는 여러 커넥션을 Event Handler에서 비동기 방식으로 처리해서 먼저 처리되는 것부터 로직이 진행되도록 한다.

`동기와 비동기`의 차이점을 간단히 설명하면

- 동기(Synchronous) : A가 B에게 데이터를 요청했을 때, 이 요청에 따른 응답을 주어야만 A가 다시 작업 처리가 가능 (하나의 요청, 하나의 작업에 충실)

- 비동기(Asynchronous) : A의 요청을 B가 즉시 주지 않아도, A의 유휴시간으로 또 다른 작업 처리가 가능한 방식

자세한 비동기 방식과 Event-driven 방식 정리는 아래 글을 참고하자

- 비동기VS동기(https://blog.naver.com/jhc9639/221108496101)

> Event-Driven이란 주기적으로 이벤트가 발생했는지 확인하고 이벤트가 감지되었을 때 이벤트를 처리하는 방식

> 마찬가지로 Nginx는 주기적으로 이벤트가 발생했는지 확인하고 이벤트가 감지되었을 때 어플리케이션 서버로 이벤트가 있음을 알림 

> 이때 이벤트 감지와 이벤트를 어플리케이션 서버에게 알려주는 것은 커널이 해결하기 때문에 `Nginx`는 적은 비용으로 비동기적으로 이벤트를 처리

### 최근 동향

예전에는 Apache httpd가 점유율이 높았지만 이제는 Nginx가 가장 대중적으로 사용된다.

AWS에서 WAS 선택으로 NGINX 사용량이 계속 늘어나고 있는 추세이다.

![img](/docs/.vuepress/public/images/img-nginx/nginx-WebSeverChart.PNG)



## ✔️Nginx의 역할

1. HTTP server
1. Reverse proxy server
1. Mail proxy server
1. Generic TCP/UDP proxy server

![img](/docs/.vuepress/public/images/img-nginx/nginx-behavior.png)
(▲출처 : https://whatisthenext.tistory.com/123)

### HTTP server

기본적으로 정적파일을 처리하는 `web server`의 역할을 할 수 있다.

자세히 설명하면 HTML, CSS, JavaScript, 이미지와 같은 정보를 웹 브라우저(Chrome, Iexplore, Opera, Firefox 등)에 전송하는 역할을 한다. (HTTP 프로토콜을 준수)

### Reverse proxy server

![img](/docs/.vuepress/public/images/img-nginx/nginx-reverse-proxy.PNG)
(▲출처 : https://whatisthenext.tistory.com/123)

클라이언트의 요청을 각 Application server에 배분해준다.

클라이언트에서는 80포트로만 요청이 들어오는데, 이 들어오는 요청을 8080, 8081 등 여러 Application server로 보내준다.

일반적으로 리버스 프록시는 각 application server에 요청을 배분해서 부하를 분산하고 (load balancing) 캐시 서버로서의 역할을 하지만 WAS에 리버스 프록시를 두는 이유는 주로 요청에 대한 버퍼링이다.

단일 프로세스가 처리할 수 있는 요청수를 제한하는 서버에서는 통신 속도가 느린 클라이언트(A)가 있으면 nginx가 없는 경우 A 때문에 1개의 프로세스가 응답 대기 상태가 된다. 리버스 프록시는 응답을 버퍼링 해 Server가 각 클라이언트와 통신을 신경쓰지 않고 지연 없이 처리할 수 있게 한다.

> 클라이언트는 가짜 서버에 요청(request)하면, 프록시 서버가 배후 서버(reverse server)로부터 데이터를 가져오는 역할을 한다. 여기서 프록시 서버가 `Nginx`, 리버스 서버가 `응용프로그램 서버`를 의미한다.

> 웹 응용프로그램 서버에 리버스 프록시(Nginx)를 두는 이유는 요청(request)에 대한 버퍼링이 있기 때문이다. 클라이언트가 직접 App 서버에 직접 요청하는 경우, 프로세스 1개가 응답 대기 상태가 되어야만 한다. 따라서 프록시 서버를 둠으로써 요청을 배분하는 역할을 한다.

> nginx.conf 파일에서 `location` 지시어를 사용하여 요청을 배분한다.


## Nginx의 사용 예시

Nginx은 크게 세 가지 용도로 사용된다.

1. 트래픽이 많은 웹서버
2. 어플리케이션 서버의 소켓을 가리기 위한 프록시 서버
3. 클러스터링된 어플리케이션 서버의 로드밸런서

위 세 가지 용도로 사용할 수 있고, 설정을 통해서 원하는 방식으로 사용이 가능하다.

## ✔️Reference

- nginx-공식페이지(http://nginx.org/en/)
- 블로그(https://hygjob.wordpress.com/2017/05/27/nginx-%EC%97%AD%ED%95%A0/)
- 블로그(https://smjeon.dev/etc/nginx/)
- https://eggrollfactory.tistory.com/18
- https://whatisthenext.tistory.com/123
- https://wiserloner.tistory.com/284
- https://hojak99.tistory.com/464
- https://blog.naver.com/jhc9639/221108496101