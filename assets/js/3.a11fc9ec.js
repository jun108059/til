(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{315:function(t,s,a){t.exports=a.p+"assets/img/docker-logo.fbe6ffad.png"},330:function(t,s,a){t.exports=a.p+"assets/img/docker-container.e87890ba.png"},364:function(t,s,a){t.exports=a.p+"assets/img/Docker_Architecture.e372289b.png"},365:function(t,s,a){t.exports=a.p+"assets/img/architecture2.20e831b9.png"},366:function(t,s,a){t.exports=a.p+"assets/img/vm-vs-docker.c1eb8b78.png"},367:function(t,s,a){t.exports=a.p+"assets/img/image-layer.5f06d8e9.png"},368:function(t,s,a){t.exports=a.p+"assets/img/image-url.c3e521ac.png"},369:function(t,s,a){t.exports=a.p+"assets/img/docker-pull.8ad5acba.png"},370:function(t,s,a){t.exports=a.p+"assets/img/swarm-kubernetes.9a58211e.png"},414:function(t,s,a){"use strict";a.r(s);var e=a(27),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"docker란"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker란"}},[t._v("#")]),t._v(" Docker란?")]),t._v(" "),e("p",[e("img",{attrs:{src:a(315),alt:"img"}})]),t._v(" "),e("h4",{attrs:{id:"🧱preference"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#🧱preference"}},[t._v("#")]),t._v(" 🧱Preference")]),t._v(" "),e("blockquote",[e("p",[t._v("Ubuntu 16.04"),e("br"),t._v("\nDocker CE"),e("br"),t._v(" "),e("a",{attrs:{href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker Hub"),e("OutboundLink")],1),t._v(" 계정")])]),t._v(" "),e("hr"),t._v(" "),e("h4",{attrs:{id:"📚목차"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#📚목차"}},[t._v("#")]),t._v(" 📚목차")]),t._v(" "),e("p",[e("strong",[t._v("1. "),e("a",{attrs:{href:"##1.-what-is-docker?"}},[t._v("What Is Docker?")])]),e("br"),t._v(" "),e("strong",[t._v("2. "),e("a",{attrs:{href:"##2.-docker-%EC%A3%BC%EC%9A%94%EA%B0%9C%EB%85%90"}},[t._v("Docker 주요개념")])])]),t._v(" "),e("blockquote",[e("p",[t._v("2-1. "),e("a",{attrs:{href:"###2-1.-%EC%9D%B4%EB%AF%B8%EC%A7%80(image)"}},[t._v("이미지(Image)")]),e("br"),t._v("\n2-2. "),e("a",{attrs:{href:"###2-2.-%EC%BB%A8%ED%85%8C%EC%9D%B4%EB%84%88(container)"}},[t._v("컨테이너(Container)")])])]),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"_1-what-is-docker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-what-is-docker"}},[t._v("#")]),t._v(" 1. What Is Docker?")]),t._v(" "),e("p",[e("code",[t._v("컨테이너 기반의 오픈소스 가상화 플랫폼")])]),t._v(" "),e("p",[t._v("Docker는 애플리케이션을 신속하게 구축, 테스트 및 배포할 수 있는 소프트웨어 플랫폼이다."),e("br"),t._v("\nDocker는 소프트웨어를 "),e("code",[t._v("컨테이너")]),t._v("라는 표준화 된 유닛으로 패키징하며, 이 컨테이너에는 라이브러리,"),e("br"),t._v("\n시스템 도구, 코드, 런타임 등 소프트웨어를 실행하는 데 필요한 모든 것이 포함되어 있다."),e("br"),t._v("\nDocker를 사용하면 환경에 구애받지 않고 애플리케이션을 신속하게 배포 및 확장할 수 있으며"),e("br"),t._v("\n코드가 문제 없이 실행될 것임을 확신할 수 있다.")]),t._v(" "),e("blockquote",[e("ul",[e("li",[t._v("하드웨어의 발전으로 더 많은 효율성을 내기 위해 가상화 사용")]),t._v(" "),e("li",[t._v("게스트 OS 사용 - 하드웨어에 의존적인 명령어 사용 : 성능 저하 불러일으킴")]),t._v(" "),e("li",[t._v("Docker는 게스트 OS가 없음")]),t._v(" "),e("li",[t._v("따라서, 기존의 가상 시스템보다 퍼포먼스가 좋음")]),t._v(" "),e("li",[t._v("실행환경을 컨테이너로 추상화, 동일한 인터페이스 제공")]),t._v(" "),e("li",[t._v("따라서, 프래그램의 배포 관리 단순화")])])]),t._v(" "),e("p",[t._v("컨테이너는 (대충 말하자면) 애플리케이션을 환경에 구애 받지 않고 실행하는 기술이다."),e("br"),t._v("\n일례로 깃랩"),e("code",[t._v("gitlab")]),t._v("이라는 도구를 우분투에 설치하려면 깃랩 공식 문서에서는 다음과 같이 하라고 안내하고 있다.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" update\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" openssh-server ca-certificates\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y postfix\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.deb.sh "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("EXTERNAL_URL")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://gitlab.example.com"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" gitlab-ee\n")])])]),e("p",[e("code",[t._v("CentOS")]),t._v("를 사용한다면 명령어가 조금 달라진다.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" yum "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" policycoreutils-python openssh-server\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" sshd\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl start sshd\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" firewall-cmd --permanent --add-service"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("http\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl reload firewalld\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" yum "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" postfix\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" postfix\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl start postfix\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.rpm.sh "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("EXTERNAL_URL")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://gitlab.example.com"')]),t._v(" yum "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y gitlab-ee\n")])])]),e("p",[t._v("그러나 컨테이너 도구인 도커Docker가 설치되어 있다면 어느 환경이든 상관 없이 다음 명령어를 사용하여 깃랩을 실행할 수 있다. (이 명령도 간단해보이진 않겠지만, 그저 운영체제별로 존재하는 복잡한 설치 과정을 겪지 않는다는 점만 기억하시면 된다.)")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ docker run --detach "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --hostname gitlab.example.com "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --publish "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("443")]),t._v(":443 --publish "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v(":80 --publish "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),t._v(":22 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --name gitlab "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --restart always "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --volume /srv/gitlab/config:/etc/gitlab "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --volume /srv/gitlab/logs:/var/log/gitlab "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --volume /srv/gitlab/data:/var/opt/gitlab "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    gitlab/gitlab-ce:latest\n")])])]),e("p",[e("img",{attrs:{src:a(364),alt:"img"}})]),t._v(" "),e("h2",{attrs:{id:"_2-docker-주요개념"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-docker-주요개념"}},[t._v("#")]),t._v(" 2. Docker 주요개념")]),t._v(" "),e("h3",{attrs:{id:"_2-1-이미지-image"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-이미지-image"}},[t._v("#")]),t._v(" 2-1. 이미지(Image)")]),t._v(" "),e("p",[e("img",{attrs:{src:a(365),alt:"img"}})]),t._v(" "),e("p",[t._v("이미지는 컨테이너 실행에 필요한 파일과 설정 값 등을 포함하고 있는 것으로 상태 값을 가지지 않고 변하지 않음(Immutable). 컨테이너는 이미지를 실행한 상태라고 볼 수 있고 추가되거나 변하는 값은 컨테이너에 저장됨.\n같은 이미지에서 여러 개의 컨테이너를 생성할 수 있고 컨테이너의 상태가 바뀌거나"),e("br"),t._v("\n컨테이너가 삭제되더라도 이미지는 변하지 않고 그대로 존재!")]),t._v(" "),e("blockquote",[e("p",[t._v("ubuntu이미지는 ubuntu를 실행하기 위한 모든 파일을 가지고 있고 MySQL이미지는"),e("br"),t._v("\ndebian을 기반으로 MySQL을 실행하는데 필요한 파일과 실행 명령어,"),e("br"),t._v("\n포트 정보 등을 가지고 있다. 좀 더 복잡한 예로 Gitlab 이미지는 centos를 기반으로"),e("br"),t._v("\nruby, go, database, redis, gitlab source, nginx등을 가지고 있다.")])]),t._v(" "),e("p",[t._v("말 그대로 이미지는 컨테이너를 실행하기 위한 모든 정보를 가지고 있기 때문에 더 이상\n의존성 파일을 컴파일하고 이것저것 설치할 필요가 없음!")]),t._v(" "),e("p",[t._v("이제 새로운 서버가 추가되면 미리 만들어 놓은 이미지를 다운받고 컨테이너만 생성하면 됨.\n한 서버에 여러 개의 컨테이너를 실행할 수 있고, 수십, 수백, 수천 대의 서버도 문제없음!")]),t._v(" "),e("ul",[e("li",[t._v("docker 이미지는 레이어의 형태")]),t._v(" "),e("li",[t._v("변경되는 부분만 따로 이미지 생성")]),t._v(" "),e("li",[t._v("생성된 이미지는 부모의 이미지 바라봄")]),t._v(" "),e("li",[t._v("상대적으로 경량화 가능")])]),t._v(" "),e("p",[t._v("Docker 이미지는 "),e("a",{attrs:{href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[e("em",[t._v("Docker hub")]),e("OutboundLink")],1),t._v("에 등록하거나 Docker Registry\n저장소를 직접 만들어 관리할 수 있다. 현재 공개된 도커 이미지는 50만개가 넘고 Docker hub의\n이미지 다운로드 수는 80억회에 이른다!")]),t._v(" "),e("p",[t._v("누구나 쉽게 이미지를 만들고 배포할 수 있는 구조이다.")]),t._v(" "),e("p",[e("strong",[t._v("왜 이렇게 핫할까?")])]),t._v(" "),e("blockquote",[e("p",[t._v("도커는 완전히 새로운 기술이 아니며 이미 존재하는 기술을 잘 포장했다고 볼 수 있다."),e("br"),t._v("\n컨테이너, 오버레이 네트워크"),e("code",[t._v("overlay network")]),t._v(", 유니온 파일 시스템"),e("code",[t._v("union file systems")]),t._v("등"),e("br"),t._v("\n이미 존재하는 기술을 도커처럼 잘 조합하고 사용하기 쉽게 만든 것은 없었고 사용자들이"),e("br"),t._v("\n원하는 기능을 간단하지만 획기적인 아이디어로 구현했다.")])]),t._v(" "),e("p",[e("em",[t._v("Overlay Network")])]),t._v(" "),e("ul",[e("li",[t._v("네트워크 추상화")]),t._v(" "),e("li",[t._v("underlay network (물리적 L2, L4…) - 기존 네트워크 방식")]),t._v(" "),e("li",[t._v("underlay위에 존재하게 됨.")])]),t._v(" "),e("h3",{attrs:{id:"_2-2-컨테이너-container"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-컨테이너-container"}},[t._v("#")]),t._v(" 2-2. 컨테이너(Container)")]),t._v(" "),e("p",[e("img",{attrs:{src:a(330),alt:"img"}})]),t._v(" "),e("ul",[e("li",[t._v("도커의 이미지가 실행된 상태")]),t._v(" "),e("li",[t._v("격리된 공간에서 프로세스가 동작하는 기술")])]),t._v(" "),e("p",[t._v("가상화 기술의 하나지만 기존방식과는 차이가 있음")]),t._v(" "),e("p",[t._v("기존의 가상화 방식은 주로 "),e("strong",[t._v("OS를 가상화")]),t._v("함")]),t._v(" "),e("blockquote",[e("p",[t._v("VMware나 VirtualBox같은 가상머신은 호스트 OS위에 게스트 OS 전체를 가상화하여 사용하는 방식."),e("br"),t._v("\n이 방식은 여러가지 OS를 가상화(리눅스에서 윈도우를 돌린다던가) 할 수 있고 비교적 사용법이"),e("br"),t._v("\n간단하지만 무겁고 느려서 운영환경에선 사용할 수 없었다.")])]),t._v(" "),e("p",[t._v("이러한 상황을 개선하기 위해 CPU의 가상화 기술(HVM)을 이용한 "),e("strong",[t._v("KVM")]),t._v("(Kernel-based Virtual Machine)과\n반가상화(Paravirtualization)방식의 "),e("strong",[t._v("Xen")]),t._v("이 등장한다.")]),t._v(" "),e("p",[t._v("이러한 방식은 게스트 OS가 필요하긴 하지만 전체 OS를 가상화하는 방식이 아니였기 때문에 호스트형 가상화 방식에 비해 성능이 향상됨")]),t._v(" "),e("p",[t._v("이러한 기술들은 "),e("code",[t._v("OpenStack")]),t._v("이나 "),e("code",[t._v("AWS")]),t._v(", "),e("code",[t._v("Rackspace")]),t._v("같은 "),e("strong",[t._v("클라우드 서비스")]),t._v("에서 가상 컴퓨팅 기술의 기반이 되었다.")]),t._v(" "),e("p",[e("img",{attrs:{src:a(366),alt:"img"}})]),t._v(" "),e("p",[t._v("전가상화든 반가상화든 추가적인 OS를 설치하여 가상화 하는 방법은 어쨌든 성능문제가 있었고\n이를 개선하기 위해 "),e("strong",[t._v("프로세스를 격리")]),t._v(" 하는 방식이 등장한다.")]),t._v(" "),e("p",[t._v("리눅스에서는 이 방식을 리눅스 컨테이너라고 하고 단순히 프로세스를 격리 시키기 때문에\n가볍고 빠르게 동작한다. CPU나 메모리는 딱 프로세스가 필요한 만큼만 추가로 사용하고\n성능적으로도 거의 손실이 없다.")]),t._v(" "),e("blockquote",[e("p",[t._v("하나의 서버에 여러 개의 컨테이너를 실행하면 서로 영향을 미치지 않고 독립적으로 실행되어"),e("br"),t._v("\n마치 가벼운 VMVirtual Machine을 사용하는 느낌을 준다.")]),t._v(" "),e("p",[t._v("실행중인 컨테이너에 접속하여 명령어를 입력할 수 있고 "),e("code",[t._v("apt-get")]),t._v("이나 "),e("code",[t._v("yum")]),t._v("으로 패키지를"),e("br"),t._v("\n설치할 수 있으며 사용자도 추가하고 여러개의 프로세스를 백그라운드로 실행할 수도 있다.")]),t._v(" "),e("p",[t._v("CPU나 메모리 사용량을 제한할 수 있고 호스트의 특정 포트와 연결하거나 호스트의 특정"),e("br"),t._v("\n디렉토리를 내부 디렉토리인 것처럼 사용할 수도 있다.")])]),t._v(" "),e("h3",{attrs:{id:"_2-3-레이어-저장방식-layer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-레이어-저장방식-layer"}},[t._v("#")]),t._v(" 2-3. 레이어 저장방식(Layer)")]),t._v(" "),e("p",[e("img",{attrs:{src:a(367),alt:"img"}})]),t._v(" "),e("p",[t._v("도커 이미지는 컨테이너를 실행하기 위한 모든 정보를 가지고 있기 때문에 보통 용량이 수백 MB에 이른다."),e("br"),t._v("\n처음 이미지를 다운받을 땐 크게 부담이 안되지만 기존 이미지에 파일 하나 추가했다고 수백 MB를 다시"),e("br"),t._v("\n다운받는다면 매우 비효율적일 수 밖에 없다.")]),t._v(" "),e("p",[t._v("도커는 이런 문제를 해결하기 위해 "),e("strong",[t._v("레이어(Layer)")]),t._v(" 라는 개념을 사용하고 유니온 파일 시스템을 이용하여"),e("br"),t._v("\n여러개의 레이어를 하나의 파일시스템으로 사용할 수 있게 해준다.")]),t._v(" "),e("p",[t._v("이미지는 여러 개의 읽기 전용 레이어로 구성되고 파일이 추가되거나 수정되면 새로운 레이어가 생성된다.\nubuntu 이미지가 "),e("code",[t._v("A")]),t._v(" + "),e("code",[t._v("B")]),t._v(" + "),e("code",[t._v("C")]),t._v("의 집합이라면, ubuntu 이미지를 베이스로 만든 nginx 이미지는\n"),e("code",[t._v("A")]),t._v(" + "),e("code",[t._v("B")]),t._v(" + "),e("code",[t._v("C")]),t._v(" + "),e("code",[t._v("nginx")]),t._v("가 된다.")]),t._v(" "),e("p",[t._v("webapp 이미지를 nginx 이미지 기반으로 만들었다면 예상대로 "),e("code",[t._v("A")]),t._v(" + "),e("code",[t._v("B")]),t._v(" + "),e("code",[t._v("C")]),t._v(" + "),e("code",[t._v("nginx")]),t._v(" + "),e("code",[t._v("source")]),t._v(" 레이어로 구성된다.\nwebapp 소스를 수정하면 "),e("code",[t._v("A")]),t._v(", "),e("code",[t._v("B")]),t._v(", "),e("code",[t._v("C")]),t._v(", "),e("code",[t._v("nginx")]),t._v(" 레이어를 제외한 새로운 "),e("code",[t._v("source(v2)")]),t._v("\n레이어만 다운받으면 되기 때문에 굉장히 효율적으로 이미지를 관리할 수 있다.")]),t._v(" "),e("p",[t._v("컨테이너를 생성할 때도 레이어 방식을 사용하는데 기존의 이미지 레이어 위에 읽기/쓰기 레이어를 추가한다.\n이미지 레이어를 그대로 사용하면서 컨테이너가 실행중에 생성하는 파일이나 변경된 내용은 읽기/쓰기 레이어에\n저장되므로 여러개의 컨테이너를 생성해도 최소한의 용량만 사용한다.")]),t._v(" "),e("p",[t._v("가상화의 특성상 이미지 용량이 크고 여러대의 서버에 배포하는걸 감안하면 단순하지만 엄청나게 영리한 설계이다.")]),t._v(" "),e("p",[e("strong",[t._v("이미지 경로")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(368),alt:"img"}})]),t._v(" "),e("p",[t._v("이미지는 url 방식으로 관리하며 태그를 붙일 수 있다. ubuntu 14.04 이미지는 "),e("code",[t._v("docker.io/library/ubuntu:14.04")]),t._v("\n또는 "),e("code",[t._v("docker.io/library/ubuntu:trusty")]),t._v(" 이고 "),e("code",[t._v("docker.io/library")]),t._v("는 생략 가능하여 "),e("code",[t._v("ubuntu:14.04")]),t._v(" 로 사용할 수 있다."),e("br"),t._v("\n이러한 방식은 이해하기 쉽고 편리하게 사용할 수 있으며 태그 기능을 잘 이용하면 테스트나 롤백도 쉽게 할 수 있다!")]),t._v(" "),e("h4",{attrs:{id:"dockerfile"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile"}},[t._v("#")]),t._v(" Dockerfile")]),t._v(" "),e("div",{staticClass:"language-Dockerfile extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# vertx/vertx3 debian version")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" subicura/vertx3"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("3.3.1\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("MAINTAINER")]),t._v(" chungsub.kim@purpleworks.co.kr\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ADD")]),t._v(" build/distributions/app"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("3.3.1.tar /\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ADD")]),t._v(" config.template.json /app"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("3.3.1/bin/config.json\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ADD")]),t._v(" docker/script/start.sh /usr/local/bin/\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" ln "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("s /usr/local/bin/start.sh /start.sh\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("EXPOSE")]),t._v(" 8080\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("EXPOSE")]),t._v(" 7000\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CMD")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"start.sh"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),e("p",[t._v("도커는 이미지를 만들기 위해 "),e("code",[t._v("Dockerfile")]),t._v("이라는 파일에 자체 DSLDomain-specific language언어를 이용하여\n이미지 생성 과정을 적는다. 추후에 문법에 대해 자세히 다루겠지만 위 샘플을 보면 그렇게 복잡하지 않다는 걸 알 수 있다.")]),t._v(" "),e("p",[t._v("이것은 굉장히 간단하지만 유용한 아이디어인데, 서버에 어떤 프로그램을 설치하려고 이것 저것\n의존성 패키지를 설치하고 설정파일을 만들었던 경험이 있다면 더 이상 그 과정을 블로깅 하거나\n메모장에 적지 말고 "),e("code",[t._v("Dockerfile")]),t._v("로 관리하면 된다. 이 파일은 소스와 함께 버전 관리 되고\n원한다면 누구나 이미지 생성과정을 보고 수정할 수 있다.")]),t._v(" "),e("h4",{attrs:{id:"docker-hub"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-hub"}},[t._v("#")]),t._v(" Docker Hub")]),t._v(" "),e("p",[e("img",{attrs:{src:a(369),alt:"img"}})]),t._v(" "),e("p",[t._v("도커 이미지의 용량은 보통 수백메가로 수기가가 넘는 경우도 흔하다.")]),t._v(" "),e("p",[t._v("이렇게 큰 용량의 이미지를 서버에 저장하고 관리하는 것은 쉽지 않은데")]),t._v(" "),e("p",[t._v("도커는 Docker hub를 통해 공개 이미지를 무료로 관리해 준다.")]),t._v(" "),e("p",[t._v("하루에도 엄청난 용량의 이미지가 전세계에서 다운로드 되고 트래픽 비용만 해도 어마어마 할 것 같은데 다 무료다!")]),t._v(" "),e("h4",{attrs:{id:"command와-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#command와-api"}},[t._v("#")]),t._v(" Command와 API")]),t._v(" "),e("p",[t._v("도커 클라이언트의 커맨드 명령어는 정말 잘 만들어져 있다.")]),t._v(" "),e("p",[t._v("대부분의 명령어는 직관적이고 사용하기 쉬우며 컨테이너의 복잡한 시스템 구성을 이해하지 못하더라도 편하게 사용할 수 있다.")]),t._v(" "),e("p",[t._v("또한 http기반의 Rest API도 지원하여 확장성이 굉장히 좋고 훌륭한 3rd party 툴이 나오기 좋은 환경이다!")]),t._v(" "),e("h4",{attrs:{id:"container-orchestration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#container-orchestration"}},[t._v("#")]),t._v(" Container Orchestration")]),t._v(" "),e("p",[e("img",{attrs:{src:a(370),alt:"img"}})]),t._v(" "),e("p",[t._v("도커 호스트들을 관리하기 위한 툴들.")]),t._v(" "),e("p",[t._v("애플리케이션을 지원하기 위해 컨테이너를 배포하고 구성하는 것을 컨테이너 오케스트레이션이라고 하며,\n컨테이너 오케스트레이션 도구("),e("code",[t._v("docker SWARM")]),t._v(", "),e("code",[t._v("쿠버네티스")]),t._v(" 등)를 통해 수행된다.")]),t._v(" "),e("h3",{attrs:{id:"reference"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[t._v("#")]),t._v(" Reference")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://subicura.com/2017/01/19/docker-guide-for-beginners-1.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("초보를 위한 도커 안내서 - 도커란 무엇인가?"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://docs.docker.com/engine/docker-overview/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker 공식 문서"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://gwonsungjun.github.io/articles/2018-06/awsDocker",target:"_blank",rel:"noopener noreferrer"}},[t._v("AWSKRUG Container Hands-On #1 - 모두의 Docker"),e("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);