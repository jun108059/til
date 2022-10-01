(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{660:function(v,t,a){v.exports=a.p+"assets/img/vmvscontainer01.1a422672.png"},661:function(v,t,a){v.exports=a.p+"assets/img/vmvscontainer02.528abbe6.png"},662:function(v,t,a){v.exports=a.p+"assets/img/vmvscontainer03.ec5d5c96.png"},663:function(v,t,a){v.exports=a.p+"assets/img/vmvscontainer04.635c0b9b.png"},880:function(v,t,a){"use strict";a.r(t);var _=a(27),e=Object(_.a)({},(function(){var v=this,t=v.$createElement,_=v._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"_3-vm-vs-container"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-vm-vs-container"}},[v._v("#")]),v._v(" 3.VM vs Container")]),v._v(" "),_("h2",{attrs:{id:"_1-vm-과-container의-차이"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-vm-과-container의-차이"}},[v._v("#")]),v._v(" 1. VM 과 Container의 차이")]),v._v(" "),_("h3",{attrs:{id:"시스템-구조에서-오는-차이점"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#시스템-구조에서-오는-차이점"}},[v._v("#")]),v._v(" 시스템 구조에서 오는 차이점?")]),v._v(" "),_("ul",[_("li",[v._v("공통적으로 "),_("code",[v._v("하나의 서버")]),v._v("가 있음")]),v._v(" "),_("li",[v._v("한 서버에는 기본적으로 어떤 운영체제가 됐건 "),_("code",[v._v("Host OS")]),v._v("가 올라감")])]),v._v(" "),_("h4",{attrs:{id:"vm의-경우"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#vm의-경우"}},[v._v("#")]),v._v(" VM의 경우")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("Host OS")]),v._v("위에 VM을 가상화 시켜주기 위해 여러 "),_("code",[v._v("Hypervisor")]),v._v("가 존재")]),v._v(" "),_("li",[v._v("이런 것들을 사용해서 원하는 운영체제로 "),_("code",[v._v("Guest OS")]),v._v("를 올려 여러 "),_("code",[v._v("VM")]),v._v("을 만들 수 있음")]),v._v(" "),_("li",[v._v("이 Guest OS도 Host OS와 마찬가지로 "),_("strong",[v._v("하나의 OS를 독립적으로 가지고 있는 것처럼 사용")]),v._v("할 수 있음")]),v._v(" "),_("li",[v._v("원하는 Application을 설치해 각각의 서비스를 만들 수 있음")])]),v._v(" "),_("h4",{attrs:{id:"container의-경우"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#container의-경우"}},[v._v("#")]),v._v(" Container의 경우")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("Host OS")]),v._v(" 설치까지 동일하고")]),v._v(" "),_("li",[v._v("이 OS위에 "),_("code",[v._v("Container 가상화")]),v._v("를 시켜주는 여러 가지 "),_("strong",[v._v("SW")]),v._v("들이 있음")]),v._v(" "),_("li",[v._v("현재는 "),_("code",[v._v("Docker")]),v._v("를 가장 많이 사용하고 있는 추세")]),v._v(" "),_("li",[_("strong",[v._v("Docker가 Container를 만들어줌!")])])]),v._v(" "),_("p",[_("img",{attrs:{src:a(660),alt:"img"}})]),v._v(" "),_("h2",{attrs:{id:"_2-container란"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-container란"}},[v._v("#")]),v._v(" 2. Container란?")]),v._v(" "),_("ul",[_("li",[v._v("예를 들어 리눅스는 버전이 있는데 버전에 따라 기본적으로 설치되는 라이브러리가 다름")]),v._v(" "),_("li",[v._v("Linux 6버전으로 개발을 진행할 경우 Linux 6버전에 설치되어있는 OpenJDK 라이브러리를 사용해서 개발함")]),v._v(" "),_("li",[v._v("만약 리눅스 7버전에서 사용하면 버전 차이에 따른 문제가 생길 것임")])]),v._v(" "),_("blockquote",[_("p",[v._v("그래서 우린 docker를 설치해 Container 이미지를 만들면 이 이미지에는 서비스와 서비스에 필요한 라이브러리를 같이 묶어서 가지고 있음")])]),v._v(" "),_("div",{staticClass:"language-bash extra-class"},[_("pre",{pre:!0,attrs:{class:"language-bash"}},[_("code",[v._v("Docker만 설치되어있으면 다른 버전의 Linux에서도 안정적인 Container로 시스템을 구동시킬 수 있다는 의미\n")])])]),_("p",[_("img",{attrs:{src:a(661),alt:"img"}})]),v._v(" "),_("h3",{attrs:{id:"도커의-다른-기능"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#도커의-다른-기능"}},[v._v("#")]),v._v(" 도커의 다른 기능")]),v._v(" "),_("ul",[_("li",[v._v("여러 Container간에 호스트 자원을 분리해서 사용하게 해줌")]),v._v(" "),_("li",[v._v("이게 리눅스 고유 기술인 "),_("code",[v._v("namespace")]),v._v("와 "),_("code",[v._v("cgroups")]),v._v("을 사용해서 격리하는 기술")])]),v._v(" "),_("p",[_("img",{attrs:{src:a(662),alt:"img"}})]),v._v(" "),_("ul",[_("li",[_("code",[v._v("namespace")]),v._v("는 커널에 관련된 영역을 분리")]),v._v(" "),_("li",[_("code",[v._v("cgroups")]),v._v("는 자원에 관련된 영역을 분리")])]),v._v(" "),_("p",[v._v("정리하면 "),_("code",[v._v("Docker")]),v._v("와 같은 "),_("code",[v._v("Container 가상화 솔루션")]),v._v("은 OS에서 제공하는 "),_("strong",[v._v("자원 격리 기술")]),v._v("을 이용해 "),_("code",[v._v("Container")]),v._v("라는 단위로 서비스를 분리할 수 있게 만들어 줌")]),v._v(" "),_("p",[v._v("이를 통해 "),_("code",[v._v("Container 가상화")]),v._v("가 설치된 OS에서는 "),_("strong",[v._v("개발 환경에 대한 걱정 없이 배포")]),v._v("가 가능하게 됨")]),v._v(" "),_("hr"),v._v(" "),_("h2",{attrs:{id:"_3-보안과-효율성-측면"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-보안과-효율성-측면"}},[v._v("#")]),v._v(" 3. 보안과 효율성 측면")]),v._v(" "),_("h3",{attrs:{id:"효율성-측면"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#효율성-측면"}},[v._v("#")]),v._v(" 효율성 측면")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("VM 가상화")]),v._v(" - OS를 매번 띄워야 함")]),v._v(" "),_("li",[_("code",[v._v("Container 가상화")]),v._v(" - 하나의 OS를 공유")])]),v._v(" "),_("div",{staticClass:"language-bash extra-class"},[_("pre",{pre:!0,attrs:{class:"language-bash"}},[_("code",[v._v("Container가 빠를 수 밖에 없음\n")])])]),_("blockquote",[_("p",[v._v("💡 단점은 없을까?"),_("br"),v._v("\nVM은 내가 window를 사용하더라도 "),_("code",[v._v("새로운 Guest OS")]),v._v("로 Linux를 사용할 수 있는데\nContainer는 그렇게 사용할 수 없음")])]),v._v(" "),_("h3",{attrs:{id:"보안-측면"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#보안-측면"}},[v._v("#")]),v._v(" 보안 측면")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("VM 가상화")]),v._v(" - 게스트 OS가 뚫려도 다른 게스트 OS나 호스트OS와 완벽하게 분리되어 각각 VM끼리 피해 X")]),v._v(" "),_("li",[_("code",[v._v("Container 가상화")]),v._v(" - 한 Container가 뚫려 OS영역에 접근하면 다른 Container도 위험에 노출하지만 이런 점은 계속해서 보완하는 중임")])]),v._v(" "),_("hr"),v._v(" "),_("h2",{attrs:{id:"_4-시스템-개발-측면"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-시스템-개발-측면"}},[v._v("#")]),v._v(" 4. 시스템 개발 측면")]),v._v(" "),_("p",[_("img",{attrs:{src:a(663),alt:"img"}})]),v._v(" "),_("p",[v._v("위 예시를 통해 살펴보자.")]),v._v(" "),_("h3",{attrs:{id:"vm-가상화"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#vm-가상화"}},[v._v("#")]),v._v(" VM 가상화")]),v._v(" "),_("p",[v._v("일반적으로 우리는 한 "),_("code",[v._v("서비스")]),v._v("를 만들 때 한가지 언어를 사용해 여러 모듈이 한 서비스로 돌아감")]),v._v(" "),_("p",[v._v("만약 A와 B모듈이 괜찮은데 C모듈의 부하가 많이 가는 상황이면 VM을 하나 더 생성해 띄우게 됨")]),v._v(" "),_("p",[v._v("자원 사용과 성능 입장에서 Guest OS가 2개가 올라가게 됨")]),v._v(" "),_("h4",{attrs:{id:"a와-b는-필요없지만-한-패키지기-때문에-따라-올라가는-비효율-발생"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#a와-b는-필요없지만-한-패키지기-때문에-따라-올라가는-비효율-발생"}},[v._v("#")]),v._v(" A와 B는 필요없지만 한 패키지기 때문에 따라 올라가는 비효율 발생")]),v._v(" "),_("h3",{attrs:{id:"container-가상화"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#container-가상화"}},[v._v("#")]),v._v(" Container 가상화")]),v._v(" "),_("p",[v._v("Container의 경우 한 서비스를 만들 때 모듈별로 쪼개서 각각의 컨테이너에 담는 것("),_("code",[v._v("마이크로 서비스")]),v._v(")을 권하고 있고 각 모듈에 맞는 "),_("code",[v._v("최적화된 언어를 사용")]),v._v("하는 것을 권장")]),v._v(" "),_("p",[v._v("여기서 쿠버네티스는 여러 컨테이너들을 하나의 "),_("code",[v._v("Pod")]),v._v("라는 개념으로 묶을 수 있고 하나의 "),_("code",[v._v("Container")]),v._v("를 "),_("code",[v._v("pod")]),v._v("로 묶을 수 있어서 "),_("strong",[v._v("하나의 pod는 하나의 배포 단위")]),v._v("가 됨")]),v._v(" "),_("p",[v._v("쿠버네티스는 이 기능을 쉽게 제공하기 때문에 이렇게 만들어 놓으면 내가 필요한 pod만 확장을 할 수 있음")]),v._v(" "),_("h4",{attrs:{id:"시스템을-모듈별로-쪼개서-개발할-때-큰-장점이-있음"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#시스템을-모듈별로-쪼개서-개발할-때-큰-장점이-있음"}},[v._v("#")]),v._v(" 시스템을 모듈별로 쪼개서 개발할 때 큰 장점이 있음")])])}),[],!1,null,null,null);t.default=e.exports}}]);