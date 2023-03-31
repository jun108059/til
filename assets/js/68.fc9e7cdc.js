(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{487:function(e,r,t){e.exports=t.p+"assets/img/nexus01.87aae76c.png"},745:function(e,r,t){"use strict";t.r(r);var s=t(12),a=Object(s.a)({},(function(){var e=this,r=e._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"nexus"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#nexus"}},[e._v("#")]),e._v(" Nexus")]),e._v(" "),r("p",[r("img",{attrs:{src:t(487),alt:"img"}})]),e._v(" "),r("h2",{attrs:{id:"nexus란"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#nexus란"}},[e._v("#")]),e._v(" Nexus란?")]),e._v(" "),r("hr"),e._v(" "),r("ul",[r("li",[e._v("Sonatype 에서 만든 저장소 관리자 프로젝트")]),e._v(" "),r("li",[e._v("다양한 Format의 사설 저장소를 만들 수 있으며 메인 저장소를 Cache 할 수 있는 기능 또한 제공하여 저장소를 관리할 수 있도록 도와주는 관리자 도구")]),e._v(" "),r("li",[r("strong",[e._v("Maven")]),e._v(" 에서 사용할 수 있는 가장 널리 사용되는 무료 저장소")])]),e._v(" "),r("h3",{attrs:{id:"_1️⃣-필요성"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1️⃣-필요성"}},[e._v("#")]),e._v(" 1️⃣ 필요성")]),e._v(" "),r("hr"),e._v(" "),r("p",[r("strong",[e._v("사설 리포지토리가 왜 필요할까?")])]),e._v(" "),r("ul",[r("li",[e._v("회사/단체의 화이트 리스트로 인해 외부 리포지토리에 접속하기 어려운 경우 Proxy 역할")]),e._v(" "),r("li",[e._v("특히 비상시 외부 인터넷이 느리거나 리포지토리가 다운되는 등 여러 상황에서도 빠르게 받을 수 있음")]),e._v(" "),r("li",[e._v("현재 Maven에 올라와 있지 않은 자료들은 효율적으로 관리하기 위하여")]),e._v(" "),r("li",[e._v("한번 "),r("strong",[e._v("다운로드 받은 dependency는 로컬에 저장")]),e._v("되어서 협업 시 다른 PC에도 설치해야 함")]),e._v(" "),r("li",[e._v("서버에도 동일한 설정들을 해줘야 함으로 서버 구조가 복잡할수록 잔업 증가")]),e._v(" "),r("li",[e._v("예외 파일로 인한 설정이 줄어들어 전체적인 일관성이 증가")]),e._v(" "),r("li",[e._v("개발팀에서 사용하는 공통 라이브러리들을 공유")]),e._v(" "),r("li",[e._v("특정 솔루션을 사용하기 위한 3rd Party 라이브러리의 관리")])]),e._v(" "),r("h3",{attrs:{id:"_2️⃣-nexus-2-x-→-3-x"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2️⃣-nexus-2-x-→-3-x"}},[e._v("#")]),e._v(" 2️⃣ Nexus 2.X → 3.X")]),e._v(" "),r("hr"),e._v(" "),r("ul",[r("li",[e._v("Nexus 3는 아키텍처와 기능을 완전히 새로 작성하여 성능 및 사용성 개선을 하였고, 더 많은 Format을 지원하며, 2016년 4월 릴리즈")]),e._v(" "),r("li",[e._v("아키텍처와 기능을 완전히 새로 작성하여 만들어졌기 때문에 2.X 버전과의 동등성과 하위호환성이 보장되지 않음")]),e._v(" "),r("li",[e._v("Maven, Yum 이외에 Docker, npm, Ruby Gems 등 지원 포맷 확장")])]),e._v(" "),r("p",[e._v("2.x 버전에서 3.x 버전으로 업그레이드 한다면 "),r("a",{attrs:{href:"https://support.sonatype.com/hc/en-us/articles/226489388-Nexus-Repository-Manager-2-x-to-3-x-Feature-Equivalency",target:"_blank",rel:"noopener noreferrer"}},[e._v("(Nexus Repository Manager 2.x to 3.x Feature Equivalency)"),r("OutboundLink")],1),e._v(" 를 참고")]),e._v(" "),r("h3",{attrs:{id:"_3️⃣-nexus-3-설치"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3️⃣-nexus-3-설치"}},[e._v("#")]),e._v(" 3️⃣ Nexus 3 설치")]),e._v(" "),r("hr"),e._v(" "),r("p",[e._v("공식 문서만 잘 따라하면 된다.")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://help.sonatype.com/repomanager3",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://help.sonatype.com/repomanager3"),r("OutboundLink")],1)])]),e._v(" "),r("p",[r("strong",[e._v("설치 방법 2가지")])]),e._v(" "),r("ol",[r("li",[e._v("공식 문서에서 제공하는 압축 파일을 통해 설치 및 실행하는 방법")]),e._v(" "),r("li",[e._v("Docker 이미지로 설치 및 실행하는 방법 ()")])]),e._v(" "),r("p",[e._v("Docker 이미지로 설치하는 방법은 "),r("a",{attrs:{href:"https://github.com/sonatype/docker-nexus3",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/sonatype/docker-nexus3"),r("OutboundLink")],1),e._v(" 에 잘 설명되어있다.")]),e._v(" "),r("p",[e._v("참고 : Nexus로 docker Registry 관리하기")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.slideshare.net/ssuser800974/sonatype-nexus-docker-registry",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.slideshare.net/ssuser800974/sonatype-nexus-docker-registry"),r("OutboundLink")],1)])]),e._v(" "),r("h3",{attrs:{id:"reference"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[e._v("#")]),e._v(" Reference")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://kingbbode.tistory.com/37",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://kingbbode.tistory.com/37"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"https://gs.saro.me/dev?tn=466",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://gs.saro.me/dev?tn=466"),r("OutboundLink")],1)])])}),[],!1,null,null,null);r.default=a.exports}}]);