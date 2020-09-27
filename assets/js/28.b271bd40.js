(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{651:function(v,e,t){v.exports=t.p+"assets/img/01-nginx.997fe155.png"},652:function(v,e,t){v.exports=t.p+"assets/img/01-nginx-WebSeverChart.4fecb82d.png"},653:function(v,e,t){v.exports=t.p+"assets/img/01-nginx-behavior.32507bc3.png"},654:function(v,e,t){v.exports=t.p+"assets/img/01-nginx-reverse-proxy.707a0f1e.png"},741:function(v,e,t){"use strict";t.r(e);var r=t(27),_=Object(r.a)({},(function(){var v=this,e=v.$createElement,r=v._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[r("h1",{attrs:{id:"nginx란"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#nginx란"}},[v._v("#")]),v._v(" NGINX란")]),v._v(" "),r("p",{attrs:{align:"center"}},[r("img",{attrs:{width:"300px",src:t(651),align:"center",alt:"Membership"}})]),r("h2",{attrs:{align:"center"}},[v._v("NGINX")]),v._v(" "),r("p",{attrs:{align:"center"}},[v._v("트래픽이 많은 웹사이트를 위해 확장성을 고려해 설계한 비동기 이벤트 기반 구조의 웹서버")]),v._v(" "),r("p"),v._v(" "),r("hr"),v._v(" "),r("h2",{attrs:{id:"✔️nginx는"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#✔️nginx는"}},[v._v("#")]),v._v(" ✔️NGINX는?")]),v._v(" "),r("p",[v._v("웹서버 소프트웨어로, 가벼움과 높은 성능을 목표로 한다. 웹 서버, 리버스 프록시 및 메일 프록시 기능을 가진다.")]),v._v(" "),r("p",[r("code",[v._v("Nginx")]),v._v("는 요청에 응답하기 위해 비동기 이벤트 기반 구조를 가진다. 이것은 "),r("code",[v._v("Apache")]),v._v(" HTTP 서버의 스레드/프로세스 기반 구조를 가지는 것과는 대조적이다. 이러한 구조는 서버에 많은 부하가 생길 경우의 성능을 예측하기 쉽게 해준다.")]),v._v(" "),r("p",[r("code",[v._v("Apache")]),v._v("보다 동작이 단순하고 동시접속 처리에 특화 되었다고 한다.")]),v._v(" "),r("p",[v._v("Request 처리 방식에서 "),r("code",[v._v("Apache")]),v._v(" 서버와는 다르다는 것이 핵심적인 차이이다.")]),v._v(" "),r("p",[v._v("Event-Driven 방식을 채택하여 높은 성능을 발휘한다.")]),v._v(" "),r("p",[v._v("한 마디로")]),v._v(" "),r("blockquote",[r("p",[v._v("더 적은 자원으로 더 빠르게 서비스")])]),v._v(" "),r("hr"),v._v(" "),r("p",[v._v("아파치와 Nginx의 특징을 정리하면 다음과 같다.")]),v._v(" "),r("h3",{attrs:{id:"apache"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#apache"}},[v._v("#")]),v._v(" Apache")]),v._v(" "),r("ul",[r("li",[v._v("쓰레드 / 프로세스 기반 구조로 요청 하나 당 쓰레드 하나가 처리하는 구조")]),v._v(" "),r("li",[v._v("사용자가 많으면 많은 쓰레드 생성, 메모리 및 CPU 낭비")]),v._v(" "),r("li",[v._v("1 쓰레드 : 1 클라이언트")])]),v._v(" "),r("h3",{attrs:{id:"nginx"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#nginx"}},[v._v("#")]),v._v(" Nginx")]),v._v(" "),r("ul",[r("li",[v._v("비동기 Event-Driven 구조")]),v._v(" "),r("li",[v._v("다수의 연결을 효과적으로 처리 가능")]),v._v(" "),r("li",[v._v("코어 모듈이 Apache보다 적은 리소스로 빠르게 동작 가능")])]),v._v(" "),r("p",[v._v("쓰레드 기반은 하나의 커넥션 - 하나의 쓰레드를 먹지만, Event-driven 구조는 여러 커넥션을 Event Handler에서 비동기 방식으로 처리해서 먼저 처리되는 것부터 로직이 진행되도록 한다.")]),v._v(" "),r("p",[r("code",[v._v("동기와 비동기")]),v._v("의 차이점을 간단히 설명하면")]),v._v(" "),r("ul",[r("li",[r("p",[v._v("동기(Synchronous) : A가 B에게 데이터를 요청했을 때, 이 요청에 따른 응답을 주어야만 A가 다시 작업 처리가 가능 (하나의 요청, 하나의 작업에 충실)")])]),v._v(" "),r("li",[r("p",[v._v("비동기(Asynchronous) : A의 요청을 B가 즉시 주지 않아도, A의 유휴시간으로 또 다른 작업 처리가 가능한 방식")])])]),v._v(" "),r("p",[v._v("자세한 비동기 방식과 Event-driven 방식 정리는 아래 글을 참고하자")]),v._v(" "),r("ul",[r("li",[v._v("비동기VS동기(https://blog.naver.com/jhc9639/221108496101)")])]),v._v(" "),r("blockquote",[r("p",[v._v("Event-Driven이란 주기적으로 이벤트가 발생했는지 확인하고 이벤트가 감지되었을 때 이벤트를 처리하는 방식")])]),v._v(" "),r("blockquote",[r("p",[v._v("마찬가지로 Nginx는 주기적으로 이벤트가 발생했는지 확인하고 이벤트가 감지되었을 때 어플리케이션 서버로 이벤트가 있음을 알림")])]),v._v(" "),r("blockquote",[r("p",[v._v("이때 이벤트 감지와 이벤트를 어플리케이션 서버에게 알려주는 것은 커널이 해결하기 때문에 "),r("code",[v._v("Nginx")]),v._v("는 적은 비용으로 비동기적으로 이벤트를 처리")])]),v._v(" "),r("h3",{attrs:{id:"최근-동향"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#최근-동향"}},[v._v("#")]),v._v(" 최근 동향")]),v._v(" "),r("p",[v._v("예전에는 Apache httpd가 점유율이 높았지만 이제는 Nginx가 가장 대중적으로 사용된다.")]),v._v(" "),r("p",[v._v("AWS에서 WAS 선택으로 NGINX 사용량이 계속 늘어나고 있는 추세이다.")]),v._v(" "),r("p",[r("img",{attrs:{src:t(652),alt:"img"}})]),v._v(" "),r("h2",{attrs:{id:"✔️nginx의-역할"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#✔️nginx의-역할"}},[v._v("#")]),v._v(" ✔️Nginx의 역할")]),v._v(" "),r("ol",[r("li",[v._v("HTTP server")]),v._v(" "),r("li",[v._v("Reverse proxy server")]),v._v(" "),r("li",[v._v("Mail proxy server")]),v._v(" "),r("li",[v._v("Generic TCP/UDP proxy server")])]),v._v(" "),r("p",[r("img",{attrs:{src:t(653),alt:"img"}}),v._v("\n(▲출처 : https://whatisthenext.tistory.com/123)")]),v._v(" "),r("h3",{attrs:{id:"http-server"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#http-server"}},[v._v("#")]),v._v(" HTTP server")]),v._v(" "),r("p",[v._v("기본적으로 정적파일을 처리하는 "),r("code",[v._v("web server")]),v._v("의 역할을 할 수 있다.")]),v._v(" "),r("p",[v._v("자세히 설명하면 HTML, CSS, JavaScript, 이미지와 같은 정보를 웹 브라우저(Chrome, Iexplore, Opera, Firefox 등)에 전송하는 역할을 한다. (HTTP 프로토콜을 준수)")]),v._v(" "),r("h3",{attrs:{id:"reverse-proxy-server"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#reverse-proxy-server"}},[v._v("#")]),v._v(" Reverse proxy server")]),v._v(" "),r("p",[r("img",{attrs:{src:t(654),alt:"img"}}),v._v("\n(▲출처 : https://whatisthenext.tistory.com/123)")]),v._v(" "),r("p",[v._v("클라이언트의 요청을 각 Application server에 배분해준다.")]),v._v(" "),r("p",[v._v("클라이언트에서는 80포트로만 요청이 들어오는데, 이 들어오는 요청을 8080, 8081 등 여러 Application server로 보내준다.")]),v._v(" "),r("p",[v._v("일반적으로 리버스 프록시는 각 application server에 요청을 배분해서 부하를 분산하고 (load balancing) 캐시 서버로서의 역할을 하지만 WAS에 리버스 프록시를 두는 이유는 주로 요청에 대한 버퍼링이다.")]),v._v(" "),r("p",[v._v("단일 프로세스가 처리할 수 있는 요청수를 제한하는 서버에서는 통신 속도가 느린 클라이언트(A)가 있으면 nginx가 없는 경우 A 때문에 1개의 프로세스가 응답 대기 상태가 된다. 리버스 프록시는 응답을 버퍼링 해 Server가 각 클라이언트와 통신을 신경쓰지 않고 지연 없이 처리할 수 있게 한다.")]),v._v(" "),r("blockquote",[r("p",[v._v("클라이언트는 가짜 서버에 요청(request)하면, 프록시 서버가 배후 서버(reverse server)로부터 데이터를 가져오는 역할을 한다. 여기서 프록시 서버가 "),r("code",[v._v("Nginx")]),v._v(", 리버스 서버가 "),r("code",[v._v("응용프로그램 서버")]),v._v("를 의미한다.")])]),v._v(" "),r("blockquote",[r("p",[v._v("웹 응용프로그램 서버에 리버스 프록시(Nginx)를 두는 이유는 요청(request)에 대한 버퍼링이 있기 때문이다. 클라이언트가 직접 App 서버에 직접 요청하는 경우, 프로세스 1개가 응답 대기 상태가 되어야만 한다. 따라서 프록시 서버를 둠으로써 요청을 배분하는 역할을 한다.")])]),v._v(" "),r("blockquote",[r("p",[v._v("nginx.conf 파일에서 "),r("code",[v._v("location")]),v._v(" 지시어를 사용하여 요청을 배분한다.")])]),v._v(" "),r("h3",{attrs:{id:"nginx의-사용-예시"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#nginx의-사용-예시"}},[v._v("#")]),v._v(" Nginx의 사용 예시")]),v._v(" "),r("p",[v._v("Nginx은 크게 세 가지 용도로 사용된다.")]),v._v(" "),r("ol",[r("li",[v._v("트래픽이 많은 웹서버")]),v._v(" "),r("li",[v._v("어플리케이션 서버의 소켓을 가리기 위한 프록시 서버")]),v._v(" "),r("li",[v._v("클러스터링된 어플리케이션 서버의 로드밸런서")])]),v._v(" "),r("p",[v._v("위 세 가지 용도로 사용할 수 있고, 설정을 통해서 원하는 방식으로 사용이 가능하다.")]),v._v(" "),r("h2",{attrs:{id:"✔️reference"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#✔️reference"}},[v._v("#")]),v._v(" ✔️Reference")]),v._v(" "),r("ul",[r("li",[v._v("nginx-공식페이지(http://nginx.org/en/)")]),v._v(" "),r("li",[v._v("블로그(https://hygjob.wordpress.com/2017/05/27/nginx-%EC%97%AD%ED%95%A0/)")]),v._v(" "),r("li",[v._v("블로그(https://smjeon.dev/etc/nginx/)")]),v._v(" "),r("li",[v._v("https://eggrollfactory.tistory.com/18")]),v._v(" "),r("li",[v._v("https://whatisthenext.tistory.com/123")]),v._v(" "),r("li",[v._v("https://wiserloner.tistory.com/284")]),v._v(" "),r("li",[v._v("https://hojak99.tistory.com/464")]),v._v(" "),r("li",[v._v("https://blog.naver.com/jhc9639/221108496101")])])])}),[],!1,null,null,null);e.default=_.exports}}]);