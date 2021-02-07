(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{584:function(t,a,r){t.exports=r.p+"assets/img/haproxy00.0c0adf84.png"},585:function(t,a,r){t.exports=r.p+"assets/img/haproxy10.1266a320.png"},586:function(t,a,r){t.exports=r.p+"assets/img/haproxy11.a4bfbdf5.png"},587:function(t,a,r){t.exports=r.p+"assets/img/haproxy12.6f265281.png"},588:function(t,a,r){t.exports=r.p+"assets/img/haproxy01.72cfc719.png"},589:function(t,a,r){t.exports=r.p+"assets/img/haproxy02.43fb3605.png"},590:function(t,a,r){t.exports=r.p+"assets/img/haproxy03.0ff86a7a.png"},591:function(t,a,r){t.exports=r.p+"assets/img/haproxy04.dc8ba655.png"},592:function(t,a,r){t.exports=r.p+"assets/img/haproxy05.0af2cfe2.png"},593:function(t,a,r){t.exports=r.p+"assets/img/haproxy06.2751c58a.png"},594:function(t,a,r){t.exports=r.p+"assets/img/haproxy07.b4e29fa9.png"},595:function(t,a,r){t.exports=r.p+"assets/img/haproxy08.580ba68c.png"},596:function(t,a,r){t.exports=r.p+"assets/img/haproxy09.719b8eac.png"},597:function(t,a,r){t.exports=r.p+"assets/img/haproxy13.37abe2d4.png"},598:function(t,a,r){t.exports=r.p+"assets/img/haproxy14.5960b112.gif"},828:function(t,a,r){"use strict";r.r(a);var e=r(27),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"haproxy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#haproxy"}},[t._v("#")]),t._v(" HAProxy")]),t._v(" "),e("p",[e("img",{attrs:{src:r(584),alt:"img"}})]),t._v(" "),e("p",[t._v("HAProxy를 공부하기 앞서 로드밸런싱(Load Balancing)을 알아야한다.")]),t._v(" "),e("h2",{attrs:{id:"로드밸런싱이란"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#로드밸런싱이란"}},[t._v("#")]),t._v(" 로드밸런싱이란?")]),t._v(" "),e("p",[t._v("하나의 서비스에 대한 부하를 여러 서버로 분산하는 것")]),t._v(" "),e("h2",{attrs:{id:"왜-로드밸런서가-필요할까"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#왜-로드밸런서가-필요할까"}},[t._v("#")]),t._v(" 왜 로드밸런서가 필요할까")]),t._v(" "),e("p",[e("img",{attrs:{src:r(585),alt:"img"}})]),t._v(" "),e("p",[t._v("▲ "),e("em",[t._v("일반적인 개인 서버의 구조(")]),e("a",{attrs:{href:"https://blog.develope.kr/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://blog.develope.kr/"),e("OutboundLink")],1),t._v(")")]),t._v(" "),e("p",[t._v("위 사진처럼 클라이언트가 한두명 일경우 서버는 여유롭게 응답할 수 있지만, 클라이언트가 많아지면 요청에 대한 응답을 할 수 없게 될 수 있다.")]),t._v(" "),e("p",[t._v("서버 측은, 이러한 문제를 해결하기 위한 두가지 방법을 고려할 수 있다.")]),t._v(" "),e("ol",[e("li",[t._v("Scale-up")]),t._v(" "),e("li",[t._v("Scale-out")])]),t._v(" "),e("h3",{attrs:{id:"scale-up"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#scale-up"}},[t._v("#")]),t._v(" Scale-up")]),t._v(" "),e("ul",[e("li",[t._v("서버의 사양을 높이는 경우")]),t._v(" "),e("li",[t._v("하나의 서버가 한번에 더 많은 응답을 처리할 수 있음")])]),t._v(" "),e("h3",{attrs:{id:"scale-out"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#scale-out"}},[t._v("#")]),t._v(" Scale-out")]),t._v(" "),e("ul",[e("li",[t._v("부하를 여러 서버에게 분산하는 경우")])]),t._v(" "),e("blockquote",[e("p",[t._v("HAProxy는 Scale-out을 위해 로드밸런싱을 해주는 SW 로드밸런서이다.")])]),t._v(" "),e("h2",{attrs:{id:"기존의-로드밸런서-load-balancer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#기존의-로드밸런서-load-balancer"}},[t._v("#")]),t._v(" 기존의 로드밸런서(Load Balancer)")]),t._v(" "),e("h3",{attrs:{id:"hw-load-balancer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hw-load-balancer"}},[t._v("#")]),t._v(" HW Load Balancer")]),t._v(" "),e("ul",[e("li",[t._v("L2 : Mac 주소 기반 로드밸런싱")]),t._v(" "),e("li",[t._v("L3 : IP 주소 기반 로드밸런싱")]),t._v(" "),e("li",[t._v("L4 : Transport Layer(IP와 Port) Level - Load Balancing(TCP, UDP)")]),t._v(" "),e("li",[t._v("L7 : Application Layer(사용자의 Request) Level - Load Balancing(HTTP, HTTPS, FTP)")])]),t._v(" "),e("p",[e("img",{attrs:{src:r(586),alt:"img"}})]),t._v(" "),e("p",[e("img",{attrs:{src:r(587),alt:"img"}})]),t._v(" "),e("h3",{attrs:{id:"load-balancer의-기능"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#load-balancer의-기능"}},[t._v("#")]),t._v(" Load Balancer의 기능")]),t._v(" "),e("p",[e("strong",[t._v("(1) NAT(Network Address Translation)")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("사설 IP 주소를 공인 IP 주소로 바꾸는 데 사용")]),t._v("하는 통신망의 주소 변조기")])]),t._v(" "),e("p",[e("strong",[t._v("(2) DSR(Dynamic Source Routing protocol)")])]),t._v(" "),e("ul",[e("li",[t._v("로드 밸런서 사용 시 "),e("strong",[t._v("서버에서 클라이언트로 되돌아가는 경우 목적지 주소를 스위치의 IP 주소가 아닌 클라이언트의 IP 주소로 전달")]),t._v("해서 네트워크 스위치를 거치지 않고 바로 클라이언트를 찾아가는 개념")])]),t._v(" "),e("p",[e("strong",[t._v("(3) Tunneling")])]),t._v(" "),e("ul",[e("li",[t._v("인터넷상에서 눈에 보이지 않는 통로를 만들어 통신할 수 있게 하는 개념으로, "),e("strong",[t._v("데이터를 캡슐화해서 연결된 상호 간에만 캡슐화된 패킷을 구별해 캡슐화를 해제")]),t._v("할 수 있다.")])]),t._v(" "),e("h2",{attrs:{id:"haproxy란"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#haproxy란"}},[t._v("#")]),t._v(" HAProxy란?")]),t._v(" "),e("p",[e("img",{attrs:{src:r(588),alt:"img"}})]),t._v(" "),e("p",[t._v("L4, L7와 같은 Hardware LoadBalancer를 대체하기 위한 Open Source로 Reverse Proxy를 기반으로 한 L4, L7 Software LoadBalancer이다.")]),t._v(" "),e("p",[t._v("Nginx에 비해 Active Heath Check가 가능하므로 좀 더 안정적으로 사용할 수 있으며 HAProxy 설정 추가를 통해 Scale-Out도 할 수 있다.")]),t._v(" "),e("p",[t._v("HTTP 통신의 경우 Web-Server (Nginx, Apache 등)를 이중화 시켜줄수 있으며 HTTP와 같은 표준 프로토콜이 아닌 TCP Socket 통신에 대해서도 이중화처리가 가능하다.")]),t._v(" "),e("p",[t._v("HAProxy의 경우 HA를 구성하기위해 Keepalived를 많이 사용한다. Keepalived를 사용하여 HAProxy를 이중화하면 아래와 같은 그림이다.")]),t._v(" "),e("p",[e("img",{attrs:{src:r(589),alt:"img"}})]),t._v(" "),e("h2",{attrs:{id:"haproxy-동작방식"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#haproxy-동작방식"}},[t._v("#")]),t._v(" HAProxy 동작방식")]),t._v(" "),e("p",[t._v("HAProxy는 기본적으로 Reverse Proxy 형태로 동작한다. (즉, 실제 서버 앞단에 존재하며 서버로 오는 요청을 대신 받아 뒷단의 서버에 전달하고 결과를 리턴받아 요청한 곳에 다시 전달하는 역할을 한다.)")]),t._v(" "),e("p",[t._v("HAProxy의 동작 흐름은 다음과 같다.")]),t._v(" "),e("p",[e("img",{attrs:{src:r(590),alt:"img"}})]),t._v(" "),e("ol",[e("li",[t._v("최초 접근시 서버에 요청 전달")]),t._v(" "),e("li",[t._v("응답시 쿠키 (Cookie) 에 서버 정보 추가 후 반환")]),t._v(" "),e("li",[t._v("재 요청시 Proxy에서 쿠키 정보 확인 후 최초 요청 서버로 전달")]),t._v(" "),e("li",[t._v("다시 접근 시 쿠키를 추가할 필요없이 서버에 전달 (클라이언트에 쿠키 정보가 계속 존재하여 재사용)")])]),t._v(" "),e("h2",{attrs:{id:"haproxy-ha"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#haproxy-ha"}},[t._v("#")]),t._v(" HAProxy HA")]),t._v(" "),e("p",[t._v("HAProxy는 기본적으로 VRRP (Virtual Router Redundancy Protocol) 를 지원한다.")]),t._v(" "),e("p",[e("img",{attrs:{src:r(591),alt:"img"}})]),t._v(" "),e("p",[t._v("위 그림과 같이 HAProxy를 이중화하여 Master 장애 발생시 Slave가 Master의 VIP를 가져와 Master로 승격된다. 무중단 서비스이지만 1초정도의 순단 현상은 발생할 수 있다.")]),t._v(" "),e("h2",{attrs:{id:"haproxy-ha-동작방식"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#haproxy-ha-동작방식"}},[t._v("#")]),t._v(" HAProxy HA 동작방식")]),t._v(" "),e("p",[t._v("HA로 설정된 HAProxy의 동작흐름이 단일 HAProxy와 다른점은 최초 접근시 쿠키에 바로 서버 정보를 입력하지 않고 서버에서 Jsessionid가 전달될 때 서버 정보를 합쳐서 전달한다는 것이다.")]),t._v(" "),e("p",[e("img",{attrs:{src:r(592),alt:"img"}})]),t._v(" "),e("ol",[e("li",[t._v("쿠키에 정보가 없고 X-Forwarded-For에 정보 추가")]),t._v(" "),e("li",[t._v("쿠키에 추가 없음")]),t._v(" "),e("li",[t._v("Jsessionid 추가")]),t._v(" "),e("li",[t._v("서버 정보와 Jsessionid를 쿠키에 추가")]),t._v(" "),e("li",[t._v("쿠키에서 서버 판별 후 Jsessionid만 전달")])]),t._v(" "),e("h2",{attrs:{id:"haproxy-환경-예제"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#haproxy-환경-예제"}},[t._v("#")]),t._v(" HAProxy 환경 예제")]),t._v(" "),e("h3",{attrs:{id:"_1-l4-switch-haproxy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-l4-switch-haproxy"}},[t._v("#")]),t._v(" 1. L4 Switch + HAProxy")]),t._v(" "),e("p",[e("img",{attrs:{src:r(593),alt:"img"}})]),t._v(" "),e("ul",[e("li",[t._v("L4 스위치 이중화와 HAProxy 이중화로 구성하는 방법으로 해당 구성이 보통 FM 구성이다.")])]),t._v(" "),e("h3",{attrs:{id:"_2-gslb-global-service-load-balancing-haproxy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-gslb-global-service-load-balancing-haproxy"}},[t._v("#")]),t._v(" 2. GSLB (Global Service Load Balancing) + HAProxy")]),t._v(" "),e("p",[e("img",{attrs:{src:r(594),alt:"img"}})]),t._v(" "),e("ul",[e("li",[t._v("Global 서비스의 경우 IDC간 이중화 및 Global 환경에서 무정지 서비스를 위한 DR (Disaster Recovery, 재해복구) 시스템 구축이 필요하다.")]),t._v(" "),e("li",[t._v("GSLB L4 스위치를 사용할수도 있지만 GSLB 구성용 L4 스위치의 경우 고가이기에 위의 그림은 DNS (BIND) 를 이용한 구축형태이다.")]),t._v(" "),e("li",[t._v("클라이언트가 DNS로 도메인 조회시 근거리 IDC 정보를 전달하는 방법이다.")])]),t._v(" "),e("h2",{attrs:{id:"haproxy-구성하기"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#haproxy-구성하기"}},[t._v("#")]),t._v(" HAProxy 구성하기")]),t._v(" "),e("p",[t._v("테스트 환경")]),t._v(" "),e("ul",[e("li",[t._v("OS : Ubuntu 18.04")]),t._v(" "),e("li",[t._v("HAProxy Server 2EA : 192.168.219.125 / 192.168.219.126")]),t._v(" "),e("li",[t._v("Web Node 2EA :")])]),t._v(" "),e("h3",{attrs:{id:"_1-kernel-paramater-수정"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-kernel-paramater-수정"}},[t._v("#")]),t._v(" 1. Kernel Paramater 수정")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# echo 'net.ipv4.ip_nonlocal_bind=1' >> /etc/sysctl.conf")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# echo 'net.ipv4.ip_forward = 1' >> /etc/sysctl.conf")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# sysctl -p 또는 Reboot")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cat /proc/sys/net/ipv4/ip_nonlocal_bind")]),t._v("\n")])])]),e("p",[e("img",{attrs:{src:r(595),alt:"img"}})]),t._v(" "),e("p",[t._v("net.ipv4.ip_nonlocal_bind 옵션은 프로그램이 시스템 상의 장치에 없는 주소로 Binding 할 수 있도록 할 수 있게하는 커널 파라미터이다.")]),t._v(" "),e("p",[t._v("즉 Network Interface에 등록되지 않은 동적 IP (VIP와 같은) 를 연결할 때 사용한다.")]),t._v(" "),e("h3",{attrs:{id:"_2-haproxy-설치"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-haproxy-설치"}},[t._v("#")]),t._v(" 2. HAProxy 설치")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# apt install -y haproxy")]),t._v("\n")])])]),e("p",[t._v("→ Ubuntu 18.04에서 기본 Repo로 설치시 1.8.8 버전이 설치된다.")]),t._v(" "),e("p",[t._v("현재 (2020-10) 2.1.4버전이 최신버전이며 1.5버전부터 SSL을 지원하기 때문에 기본설치방법으로도 SSL 사용이 가능하지만 최신 버전을 사용하고 싶다면 wget을 사용하여 다운로드 후 컴파일하거나 별도 Repo를 추가시켜준다.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# apt-add-repository ppa:vbernat/haproxy-2.1")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# apt update")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# apt install -y haproxy 또는 apt install -y haproxy=2.1")]),t._v("\n")])])]),e("p",[t._v("→ 위와 같은 방법으로 Repo 추가 후 설치하면 2.1.4 버전이 설치된다.")]),t._v(" "),e("h3",{attrs:{id:"_3-haproxy-설정"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-haproxy-설정"}},[t._v("#")]),t._v(" 3. HAProxy 설정")]),t._v(" "),e("p",[e("strong",[t._v("(1) HAProxy Config 섹션")])]),t._v(" "),e("p",[t._v("global, defaults, listen, frontend, backend의 영역으로 구분된다.")]),t._v(" "),e("ul",[e("li",[t._v("global : 전체 영역에 걸쳐 적용되는 기본 설정을 담당")]),t._v(" "),e("li",[t._v("defaults : 이후 오는 영역(frontend, backend, listen)에 적용되는 설정")]),t._v(" "),e("li",[t._v("frontend : 클라이언트 연결을 받아들이는 소켓에 대한 설정")]),t._v(" "),e("li",[t._v("backend : 앞에서 들어온 연결에 할당될 프록시 서버들에 대한 설정")]),t._v(" "),e("li",[t._v("listen : frontend와 backend로 사용되는 포트를 한번에 설정하는 영역으로 TCP 프록시에서만 이용")])]),t._v(" "),e("p",[t._v("Option Manual : "),e("a",{attrs:{href:"https://cbonte.github.io/haproxy-dconv/1.8/configuration.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://cbonte.github.io/haproxy-dconv/1.8/configuration.html"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("strong",[t._v("(2) Balance Option")])]),t._v(" "),e("p",[t._v("Roundrobin : 순차적으로 분배")]),t._v(" "),e("p",[t._v("static-rr : 서버에 부여된 가중치에 따라서 분배")]),t._v(" "),e("p",[t._v("leastconn : 접속수가 가장 적은 서버로 분배")]),t._v(" "),e("p",[t._v("source : 운영중인 서버의 가중치를 나눠서 접속자 IP 해싱(hashing)해서 분배")]),t._v(" "),e("p",[t._v("uri : 접속하는 URI를 해싱해서 운영중인 서버의 가중치를 나눠서 분배 (URI의 길이 또는 depth로 해싱)")]),t._v(" "),e("p",[t._v("url_param : HTTP GET 요청에 대해서 특정 패턴이 있는지 여부 확인 후 조건에 맞는 서버로 분배 (조건 없는 경우 round_robin으로 처리)")]),t._v(" "),e("p",[t._v("hdr : HTTP 헤더에서 hdr("),e("name",[t._v(")으로 지정된 조건이 있는 경우에 대해서만 분배 (조건없는 경우 round robin 으로 처리)")])],1),t._v(" "),e("p",[t._v("rdp-cookie : TCP 요청에 대한 RDP 쿠키에 따른 분배")]),t._v(" "),e("p",[e("strong",[t._v("(3) HAProxy 설정")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# vim /etc/haproxy/haproxy.cfg")]),t._v("\n")])])]),e("ul",[e("li",[t._v("global # 전역 섹션 프로세스 전체에 영향을 주는 내용")]),t._v(" "),e("li",[t._v("log 127.0.0.1 local1 notice # 지정한 ip (127.0.0.1) 또는 소켓 (/dev/log)에 로그를 보냄")]),t._v(" "),e("li",[t._v("local1 뒤에는 로그 레벨을 지정할 수 있는데 notice를 붙이면 emerg-notice 레벨을 보내고")]),t._v(" "),e("li",[t._v("local1 notice notice 로 설정하면 notice 레벨만 syslog로 보냄 (notice는 최소레벨을 의미)")]),t._v(" "),e("li",[t._v('rsyslog에서 "local1.notice /var/log/haproxy.log" 형식으로 설정필요 (# echo "local1.notice /var/log/haproxy.log" → /etc/rsyslog.d/50-default.conf)')]),t._v(" "),e("li",[t._v("chroot /var/lib/haproxy # 서비스 Jail 경로, 슈퍼유저로 실행 시 모든 동작은 이 안에서만 수행 (보안 상승)")]),t._v(" "),e("li",[t._v("stats socket /run/haproxy/admin.sock mode 660 level admin expose-fd listeners # stats page를 사용하기 위한 Unix 소켓 바인딩")]),t._v(" "),e("li",[t._v("stats timeout 30s # stats에 timeout 시간 설정 (stats_page timeout)")]),t._v(" "),e("li",[t._v("user haproxy # 프로세스 사용자")]),t._v(" "),e("li",[t._v("group haproxy # 프로세스 그룹")]),t._v(" "),e("li",[t._v("daemon # 백그라운드로 동작")]),t._v(" "),e("li",[t._v("maxconn 4000 # 프로세스당 최대 연결 개수")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("ca-base /etc/ssl/certs\ncrt-base /etc/ssl/private\n\nssl-default-bind-ciphers ECDH+AESGCM:DH+AESGCM:ECDH+AES256:DH+AES256:ECDH+AES128:DH+AES:RSA+AESGCM:RSA+AES:"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("aNULL:"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("MD5:"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("DSS\nssl-default-bind-options no-sslv3\n")])])]),e("ul",[e("li",[t._v("defaults # front, back, listen에 관련된 전역 섹션")]),t._v(" "),e("li",[t._v("log global # 로그는 기본적으로 global 설정을 따르겠다는 옵션")]),t._v(" "),e("li",[t._v("mode http # http 프로토콜을 사용하는 로드밸런싱 모드")]),t._v(" "),e("li",[t._v("option httplog # 기본 Log는 SIP, DIP와 Name만 표기하므로 이 옵션을 사용해 좀 더 자세하게 출력")]),t._v(" "),e("li",[t._v("option dontlognull # 로그 비대화 방지를 위해 Probe(정찰, 스캔)과 같은 잡다한 기록을 HAProxy Log화 하지않는 옵션")]),t._v(" "),e("li",[t._v("option forwardfor # 클라이언트 정보 전달 (X-Forwarded-For 헤더를 넣어서 전달)")]),t._v(" "),e("li",[t._v("option httpclose # keep-alive 문제 발생시 off 옵션")]),t._v(" "),e("li",[t._v("timeout http-request 10s # Request시의 헤더에만 적용, DDos 방어를 위해 HTTP 요청 타임아웃시간 설정 (클라이언트의 연결 타임아웃과는 무관한 HAProxy 서버의 옵션임)")]),t._v(" "),e("li",[t._v("timeout http-keep-alive 10s # 클라이언트 요청에 따른 응답 전송 후 다음 요청 대기시간 설정 (http-request가 선행함)")]),t._v(" "),e("li",[t._v("timeout connect 10s # TCP 패킷 손실을 막기위한 Real 서버로의 연결 최대 지연시간 설정 (Backend에 적용되나 전역으로 설정 가능)")]),t._v(" "),e("li",[t._v("timeout client 1m # 외부 클라이언트 요청이나 데이터와의 연결 최대 시간 (Request와 같이 사용하여 서버 안정성을 구현)")]),t._v(" "),e("li",[t._v("timeout server 1m # 서버가 데이터를 승인하거나 전송해야할 때의 연결 최대 시간")]),t._v(" "),e("li",[t._v("timeout queue 1m # 서버의 maxconn 도달시 무한정 보류상태로 두지 않고 HTTP 503 응답을 보내면서 연결을 버리는 시간 설정 (Surge Queue Time)")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 에러 파일 설정")]),t._v("\nerrorfile "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("400")]),t._v(" /etc/haproxy/errors/400.http\nerrorfile "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("403")]),t._v(" /etc/haproxy/errors/403.http\nerrorfile "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("408")]),t._v(" /etc/haproxy/errors/408.http\nerrorfile "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),t._v(" /etc/haproxy/errors/500.http\nerrorfile "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("502")]),t._v(" /etc/haproxy/errors/502.http\nerrorfile "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("503")]),t._v(" /etc/haproxy/errors/503.http\nerrorfile "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("504")]),t._v(" /etc/haproxy/errors/504.http\n")])])]),e("p",[t._v("listen stats_page # Listen은 Front / Back의 연결 포트 / 옵션들을 정의함 (TCP 제어나 Proxy에 주로 사용)")]),t._v(" "),e("ul",[e("li",[t._v("bind *:8080 # 접속 포트 지정")]),t._v(" "),e("li",[t._v("stats enable # 상태 페이지 활성화")]),t._v(" "),e("li",[t._v("stats realm HAProxy Statistics # 브라우저 타이틀")]),t._v(" "),e("li",[t._v("stats uri / # 접근할 URI 경로")]),t._v(" "),e("li",[t._v("stats auth admin:admin # 인증 추가 (auth [User]:[Password])")])]),t._v(" "),e("p",[t._v("frontend haproxy # 클라이언트 연결을 받아들이는 소켓에 대한 설정 (WAF 기능에 가까움)")]),t._v(" "),e("ul",[e("li",[t._v("bind *:80 # 접속 포트 지정")]),t._v(" "),e("li",[t._v("mode http # 프로토콜 유형 설정")]),t._v(" "),e("li",[t._v("default_backend server # Front서버에서 전달할 기본 backend")])]),t._v(" "),e("p",[t._v("backend server # Front에서 들어온 연결에 할당될 프록시 서버들에 대한 설정")]),t._v(" "),e("ul",[e("li",[t._v("mode http # 프로토콜 유형 설정")]),t._v(" "),e("li",[t._v("balance roundrobin # LoadBalancer 유형 설정")]),t._v(" "),e("li",[t._v("cookie SVID insert indirect nocache maxlife 10m # Sticky Session 설정 (maxlife는 유지기간 설정)")]),t._v(" "),e("li",[t._v("option httpchk GET / # healthcheck uri로 GET 뒤의 경로에 curl 명령으로 http header 값 [200 OK] 확인 (server 옵션에서 inter값으로 주기 설정)")]),t._v(" "),e("li",[t._v("http-check expect status 200 # http check시 header 값이 200이면 정상을 의미")]),t._v(" "),e("li",[t._v("server web01 192.168.50.11:80 cookie web01 check inter 3000 rise 2 fall 5 # real server")]),t._v(" "),e("li",[t._v("server web02 192.168.50.12:80 cookie web02 check inter 3000 rise 2 fall 5 # real server")]),t._v(" "),e("li",[t._v("#server [host명] [ip]:[port] cookie [서버쿠키명] check inter [주기(m/s)] rise [서버구동여부점검횟수] fall [서비스중단]")]),t._v(" "),e("li",[t._v("#inter는 ms단위이며 값이 2000이면 2초")]),t._v(" "),e("li",[t._v("#rise는 서버 정상 동작 체크로 2로 설정시 2번 정상 체크되면 정상으로 간주")]),t._v(" "),e("li",[t._v("#fall은 서버 실패 동작 체크로 5로 설정시 5번 정상 체크에 실패하면 서버를 비정상으로 간주")])]),t._v(" "),e("h2",{attrs:{id:"haproxy-서비스-시작"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#haproxy-서비스-시작"}},[t._v("#")]),t._v(" HAProxy 서비스 시작")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# /etc/init.d/haproxy start -f /etc/haproxy/haproxy.cfg")]),t._v("\n")])])]),e("h3",{attrs:{id:"haproxy-stats-page"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#haproxy-stats-page"}},[t._v("#")]),t._v(" HAProxy Stats Page")]),t._v(" "),e("p",[t._v("브라우저에 설정한 stats uri를 입력하여 접근하면 web ui로 확인할 수 있다.")]),t._v(" "),e("p",[t._v("https://(haproxy server ip 또는 vip):8080")]),t._v(" "),e("p",[e("img",{attrs:{src:r(596),alt:"img"}})]),t._v(" "),e("h2",{attrs:{id:"haproxy의-장애-대응"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#haproxy의-장애-대응"}},[t._v("#")]),t._v(" HAProxy의 장애 대응")]),t._v(" "),e("p",[t._v("로드밸런서 자체를 이중화하여 장애에 대비한다.")]),t._v(" "),e("p",[e("img",{attrs:{src:r(597),alt:"img"}})]),t._v(" "),e("h3",{attrs:{id:"장애-발생-시-시나리오"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#장애-발생-시-시나리오"}},[t._v("#")]),t._v(" 장애 발생 시 시나리오")]),t._v(" "),e("p",[e("img",{attrs:{src:r(598),alt:"img"}})]),t._v(" "),e("ol",[e("li",[t._v("이중화된 로드밸런서들은 서로 HC (Health Check)함")]),t._v(" "),e("li",[t._v("Primary 로드밸런서가 장애가 발생했을 경우 가상 IP(Virtual IP, VIP)는 Secondary 로드밸런서로 전달")]),t._v(" "),e("li",[t._v("Secondary 로드밸런서가 서비스를 유지")])]),t._v(" "),e("h3",{attrs:{id:"reference"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[t._v("#")]),t._v(" Reference")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://lascrea.tistory.com/212",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://lascrea.tistory.com/212"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"http://dveamer.github.io/architecture/HAProxyAndKeepalived.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://dveamer.github.io/architecture/HAProxyAndKeepalived.html"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"http://coffeenix.net/board_print.php?bd_code=1771",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://coffeenix.net/board_print.php?bd_code=1771"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://findstar.pe.kr/2018/07/27/install-haproxy/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://findstar.pe.kr/2018/07/27/install-haproxy/"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://d2.naver.com/helloworld/284659",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://d2.naver.com/helloworld/284659"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://livegs.tistory.com/43",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://livegs.tistory.com/43"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.joinc.co.kr/w/Site/cloud/ClusterLBWithOpenSource",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.joinc.co.kr/w/Site/cloud/ClusterLBWithOpenSource"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://myungin.tistory.com/entry/haproxycfg-%EA%B8%B0%EB%B3%B8-%EC%84%A4%EC%A0%95",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://myungin.tistory.com/entry/haproxycfg-%EA%B8%B0%EB%B3%B8-%EC%84%A4%EC%A0%95"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://m.blog.naver.com/PostView.nhn?blogId=wideeyed&logNo=221303339246&proxyReferer=https%3A%2F%2Fwww.google.co.kr%2F",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://m.blog.naver.com/PostView.nhn?blogId=wideeyed&logNo=221303339246&proxyReferer=https%3A%2F%2Fwww.google.co.kr%2F"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://blog.develope.kr/2020/01/haproxy%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EB%A1%9C%EB%93%9C-%EB%B0%B8%EB%9F%B0%EC%8B%B1-%EA%B5%AC%EC%B6%95%ED%95%98%EA%B8%B0-1-%EB%A1%9C%EB%93%9C%EB%B0%B8%EB%9F%B0%EC%8B%B1%EC%9D%B4%EB%9E%80/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://blog.develope.kr/2020/01/haproxy를-이용한-로드-밸런싱-구축하기-1-로드밸런싱이란/"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=s.exports}}]);