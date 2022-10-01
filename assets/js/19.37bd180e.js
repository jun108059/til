(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{576:function(t,a,s){t.exports=s.p+"assets/img/maven01.ddd38f9a.png"},577:function(t,a,s){t.exports=s.p+"assets/img/maven02.d44af2ef.png"},578:function(t,a,s){t.exports=s.p+"assets/img/maven03.696f53a5.png"},579:function(t,a,s){t.exports=s.p+"assets/img/maven04.75e632fe.png"},580:function(t,a,s){t.exports=s.p+"assets/img/maven05.b1af7be0.png"},581:function(t,a,s){t.exports=s.p+"assets/img/maven06.67758d13.png"},582:function(t,a,s){t.exports=s.p+"assets/img/maven07.e34ff41b.png"},583:function(t,a,s){t.exports=s.p+"assets/img/maven08.e0199257.png"},836:function(t,a,s){"use strict";s.r(a);var n=s(27),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"maven"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#maven"}},[t._v("#")]),t._v(" Maven")]),t._v(" "),n("p",[n("img",{attrs:{src:s(576),alt:"img"}})]),t._v(" "),n("h2",{attrs:{id:"_1-maven-이란"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-maven-이란"}},[t._v("#")]),t._v(" 1. Maven 이란?")]),t._v(" "),n("hr"),t._v(" "),n("p",[t._v("Java 프로젝트의 빌드를 자동화 해주는 Build Tool")]),t._v(" "),n("div",{staticClass:"language-shell script extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[t._v("💡 **Build 란?**\n- 소스코드 파일을 컴퓨터에서 실행할 수 있는 독립 소프트웨어 가공물로 변환하는 과정 또는 그에 대한 결과물 이다.\n - 이를 좀더 쉽게 풀어 말하자면 우리가 작성한 소스코드"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("java"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", 프로젝트에서 쓰인 각각의 파일 및 자원 등"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(".xml, .jpg, .jar, .properties"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("을 JVM이나 톰캣같은 WAS가 인식할 수 있는 구조로 패키징 하는 과정 및 결과물이라고 할 수 있다.\n")])])]),n("div",{staticClass:"language-shell script extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[t._v("💡 **Build Tool"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("빌드 도구"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("**\n- 빌드 도구란 프로젝트 생성, 테스트 빌드, 배포 등의 작업을 위한 전용 프로그램.\n - 빠른기간동안 계속해서 늘어나는 라이브러리 추가, 프로젝트를 진행하며 라이브러리의 버전 동기화의 어려움을 해소하고자 등장.\n - 초기의 java 빌드도구로 Ant를 많이 사용하였으나 최근 많은 빌드도구들이 생겨나 Maven이 많이 쓰였고, 현재는 Gradle이 많이 쓰인다.\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Ant는 스크립트 작성도 많고, 라이브러리 의존관리가 되지 않아 불편함"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("h3",{attrs:{id:"_1️⃣-메이븐-활용-패턴"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1️⃣-메이븐-활용-패턴"}},[t._v("#")]),t._v(" 1️⃣ "),n("strong",[t._v("메이븐 활용 패턴")])]),t._v(" "),n("ol",[n("li",[n("strong",[t._v("Build")])])]),t._v(" "),n("ul",[n("li",[t._v("소스 코드를 컴파일 한다.")]),t._v(" "),n("li",[t._v("테스트 코드를 컴파일 한다.")]),t._v(" "),n("li",[t._v("기타 패키지 생성을 위한 바이너리를 생성한다.")])]),t._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[n("strong",[t._v("Package")])])]),t._v(" "),n("ul",[n("li",[t._v("배포 가능한 jar, war, exe 파일 등을 생성한다.")])]),t._v(" "),n("ol",{attrs:{start:"3"}},[n("li",[n("strong",[t._v("Test")])])]),t._v(" "),n("ul",[n("li",[t._v("단위 테스트(Unit Test) 등을 실행한다.")]),t._v(" "),n("li",[t._v("빌드 결과가 정상적인지 점검한다.")])]),t._v(" "),n("ol",{attrs:{start:"4"}},[n("li",[n("strong",[t._v("Report")])])]),t._v(" "),n("ul",[n("li",[t._v("빌드/패키지/테스트 결과를 정리하고, 빌드 수행 리포트를 생성한다.")])]),t._v(" "),n("ol",{attrs:{start:"5"}},[n("li",[n("strong",[t._v("Release")])])]),t._v(" "),n("ul",[n("li",[t._v("빌드 후 생성된 아티팩트(artifact)를 로컬 혹은 원격 저장소에 저장(배포)한다.")])]),t._v(" "),n("h3",{attrs:{id:"_2️⃣-key-concept"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2️⃣-key-concept"}},[t._v("#")]),t._v(" 2️⃣ "),n("strong",[t._v("Key Concept")])]),t._v(" "),n("ol",[n("li",[n("strong",[t._v("Plugin")])])]),t._v(" "),n("ul",[n("li",[t._v("플러그인 실행 프레임워크")]),t._v(" "),n("li",[t._v("플러그인 메커니즘에 의해 기능이 확장(모든 작업은 플러그인이 수행된다)")]),t._v(" "),n("li",[t._v("모든 작업은 플러그인이 수행된다")]),t._v(" "),n("li",[t._v("플러그인은 다른 산출물(artifacts)와 같이 저장소에서 관리된다.")]),t._v(" "),n("li",[t._v("플러그인은 골(goal)의 집합이다.")])]),t._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[n("strong",[t._v("Lifecycle")])])]),t._v(" "),n("ul",[n("li",[t._v("일련의 단계를 골(goal)")]),t._v(" "),n("li",[t._v("논리적인 작업 흐름인 단계의 집합이 라이프사이클(Lifecycle)")])]),t._v(" "),n("ol",{attrs:{start:"3"}},[n("li",[n("strong",[t._v("Dependency")])])]),t._v(" "),n("ul",[n("li",[t._v("라이브러리 다운로드 자동화")]),t._v(" "),n("li",[t._v("maven은 선언적")]),t._v(" "),n("li",[t._v("maven이 관리")])]),t._v(" "),n("ol",{attrs:{start:"4"}},[n("li",[n("strong",[t._v("Profile")])])]),t._v(" "),n("ul",[n("li",[t._v("서로 다른 대상 환경(target environment)를 위한 다른 빌드 설정")]),t._v(" "),n("li",[t._v("다른 운영체제")]),t._v(" "),n("li",[t._v("다른 배포 환경")])]),t._v(" "),n("ol",{attrs:{start:"5"}},[n("li",[n("strong",[t._v("POM")])])]),t._v(" "),n("ul",[n("li",[t._v("Project Object Model")]),t._v(" "),n("li",[t._v("Project 당 하나의 pom.xml 파일을 하나씩 가진다.")]),t._v(" "),n("li",[t._v("자원 식별 기준(group id, artifact id, version)")])]),t._v(" "),n("h3",{attrs:{id:"_3️⃣-설정-파일"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3️⃣-설정-파일"}},[t._v("#")]),t._v(" 3️⃣ "),n("strong",[t._v("설정 파일")])]),t._v(" "),n("ol",[n("li",[n("strong",[t._v("Setting 파일")]),t._v(" "),n("ul",[n("li",[t._v("Maven 툴과 관련된 설정을 담당")]),t._v(" "),n("li",[n("code",[t._v("MAVEN_HOME/settings.xml")]),t._v(" : 모든 사용자에 적용되는 "),n("code",[t._v("전역적인")]),t._v(" maven 설정 정보")]),t._v(" "),n("li",[n("code",[t._v("USER_HOME/.m2/setting.xml")]),t._v(" : "),n("code",[t._v("특정 사용자")]),t._v("에 적용되는 maven 설정 정보")])])])]),t._v(" "),n("div",{staticClass:"language-shell script extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[t._v("주의할 점은 복수의 s의 유무이다.\n전역적인 **settings.xml** "),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),t._v("vs"),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v(" 특정 사용자에게 적용되는 **setting.xml**\n")])])]),n("ol",{attrs:{start:"2"}},[n("li",[n("strong",[t._v("pom.xml")])])]),t._v(" "),n("ul",[n("li",[t._v("Project Object Model")]),t._v(" "),n("li",[t._v("프로젝트 내 빌드설정을 담당.")]),t._v(" "),n("li",[t._v("프로젝트 최상위에 존재")]),t._v(" "),n("li",[t._v("dependency 관리도 한다.")])]),t._v(" "),n("p",[n("code",[t._v("Example pom.xml")])]),t._v(" "),n("div",{staticClass:"language-xml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token prolog"}},[t._v('<?xml version="1.0" encoding="UTF-8"?>')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("project")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("xmlns")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://maven.apache.org/POM/4.0.0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n         "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("xsi")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.w3.org/2001/XMLSchema-instance"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n         "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("xsi:")]),t._v("schemaLocation")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://maven.apache.org/POM/4.0.0   http://maven.apache.org/xsd/maven-4.0.0.xsd"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("modelVersion")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("4.0.0"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("modelVersion")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("com.youngjun"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 프로젝트를 생성하는 조직의 고유 아이디--\x3e")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("demo-maven"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 프로젝트를 식별하는 유일한 아이디--\x3e")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("1.0-SNAPSHOT"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 프로젝트 현재 버젼을 의미--\x3e")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("packaging")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("war"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("packaging")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 프로젝트를 어떤 형태로 패키징할지 결정한다. jav, war, ear, pom등이 해당된다.--\x3e")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 프로젝트와 의존관계에 있는 라이브러리를 관리 --\x3e")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependencies")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("javax.servlet"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("jstl"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("1.2"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependencies")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("project")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("h3",{attrs:{id:"_4️⃣-의존-라이브러리-추가하기"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4️⃣-의존-라이브러리-추가하기"}},[t._v("#")]),t._v(" 4️⃣ "),n("strong",[t._v("의존 라이브러리 추가하기")])]),t._v(" "),n("ul",[n("li",[n("p",[t._v("중앙 원격 저장소에서 라이브러리를 쉽게 받을 수 있다.")])]),t._v(" "),n("li",[n("p",[t._v("Maven Repository : "),n("a",{attrs:{href:"https://mvnrepository.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://mvnrepository.com/"),n("OutboundLink")],1)])]),t._v(" "),n("li",[n("p",[t._v("pom.xml에 dependencies Tag 안에 쓰고 저장하기")])])]),t._v(" "),n("div",{staticClass:"language-xml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 프로젝트와 의존관계에 있는 라이브러리를 관리 --\x3e")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependencies")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("javax.servlet"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("jstl"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("1.2"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependencies")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("ul",[n("li",[t._v("External Libraries에서 확인할 수 있다.")])]),t._v(" "),n("h3",{attrs:{id:"_5️⃣-lifecycle"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5️⃣-lifecycle"}},[t._v("#")]),t._v(" 5️⃣ "),n("strong",[t._v("LifeCycle")])]),t._v(" "),n("p",[t._v("Maven은 미리 정의하고 있는 빌드 순서를 라이프사이클 이라고 한다.")]),t._v(" "),n("ol",[n("li",[n("strong",[t._v("기본 라이프 사이클")])])]),t._v(" "),n("ul",[n("li",[t._v("compile : 소스 코드를 컴파일")]),t._v(" "),n("li",[t._v("test : 단위 테스트 실행 (기본설정은 단위 테스트가 실패하면 빌드 실패로 간주함)")]),t._v(" "),n("li",[t._v("package : 컴파일된 클래스 파일과 리소스 파일들을 war 혹은 jar와 같은 파일로 패키징")]),t._v(" "),n("li",[t._v("install : 패키징한 파일을 로컬 저장소에 배포 (USER_HOEM/.m2/)")]),t._v(" "),n("li",[t._v("deploy : 패키징한 파일을 원격 저장소에 배포 (nexus 혹은 maven central 저장소)")])]),t._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[n("strong",[t._v("clean 라이프 사이클")])])]),t._v(" "),n("ul",[n("li",[t._v("clean : maven  빌드를 통하여 생성된 모든 산출물을 삭제")])]),t._v(" "),n("ol",{attrs:{start:"3"}},[n("li",[n("strong",[t._v("site 라이프 사이클")])])]),t._v(" "),n("ul",[n("li",[t._v("site : maven 설정파일 정보를 활용하여 프로젝트에 대한 문서 사이트를 생성")]),t._v(" "),n("li",[t._v("site-deploy : 생성한 문서 사이트를 설정되어 있는 서버에 배포")])]),t._v(" "),n("h2",{attrs:{id:"_2-maven-설치"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-maven-설치"}},[t._v("#")]),t._v(" 2. Maven 설치")]),t._v(" "),n("hr"),t._v(" "),n("p",[t._v("Maven 공식 홈페이지 "),n("a",{attrs:{href:"http://maven.apache.org/download.cgi",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://maven.apache.org/download.cgi"),n("OutboundLink")],1),t._v(" 에서 "),n("strong",[t._v("Binary zip archive")]),t._v(" 다운로드")]),t._v(" "),n("p",[n("img",{attrs:{src:s(577),alt:"img"}})]),t._v(" "),n("h2",{attrs:{id:"_3-maven-설치-후-기본-설정"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-maven-설치-후-기본-설정"}},[t._v("#")]),t._v(" 3. Maven 설치 후 기본 설정")]),t._v(" "),n("hr"),t._v(" "),n("h3",{attrs:{id:"_1️⃣-환경변수-설정"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1️⃣-환경변수-설정"}},[t._v("#")]),t._v(" 1️⃣ 환경변수 설정")]),t._v(" "),n("div",{staticClass:"language-shell script extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Window키 + R"')]),t._v(" → "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sysdm.cpl"')]),t._v(" 입력 → "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"고급 탭"')]),t._v(" 클릭 → "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"환경 변수"')]),t._v(" 클릭\n")])])]),n("p",[n("img",{attrs:{src:s(578),alt:"img"}})]),t._v(" "),n("p",[t._v("아래와 같이 'Path'를 선택한 후 '편집' 버튼을 클릭한다.")]),t._v(" "),n("p",[t._v("Path 변수는 운영체제가 파일의 디렉터리를 파악하는 데 사용하는 경로이다. Path 변수에 디렉터리를 등록하면, 해당 디렉터리에 포함된 파일을 파일 경로 없이 파일 이름만으로도 사용할 수 있게 된다.")]),t._v(" "),n("p",[n("img",{attrs:{src:s(579),alt:"img"}})]),t._v(" "),n("p",[t._v("Maven이 설치된 경로를 Path에 추가하기 위해 '새로 만들기'를 클릭하여 "),n("code",[t._v("C:\\source\\apache-maven-3.6.3\\bin")]),t._v(" 을 입력하고 'Enter' 키를 누른다. Path 변수에 주소가 추가된 것을 확인하고 '확인' 버튼을 누른다.")]),t._v(" "),n("p",[n("img",{attrs:{src:s(580),alt:"img"}})]),t._v(" "),n("p",[t._v("이제 Path 변수에 제대로 등록되었는지 확인하자.")]),t._v(" "),n("p",[t._v("cmd에서 "),n("code",[t._v("mvn -version")]),t._v(" 을 입력하면 버전 정보가 출력된다.")]),t._v(" "),n("p",[n("img",{attrs:{src:s(581),alt:"img"}})]),t._v(" "),n("h3",{attrs:{id:"_2️⃣-maven-repository-변경하기-선택"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2️⃣-maven-repository-변경하기-선택"}},[t._v("#")]),t._v(" 2️⃣ Maven Repository 변경하기 (선택)")]),t._v(" "),n("p",[t._v("기본 경로가 아닌 다른 경로에 Maven Repository를 관리하고 싶으면 설정하면 된다.")]),t._v(" "),n("p",[t._v("기본 Maven Repository는 "),n("strong",[n("code",[t._v("${user.home}/.m2/repository")])]),t._v(" 폴더이다.")]),t._v(" "),n("ol",[n("li",[t._v("변경하고자 하는 경로 "),n("code",[t._v("C:\\source\\apache-maven-3.6.3")]),t._v(" 에 "),n("code",[t._v("reposiory")]),t._v(" 폴더 생성")]),t._v(" "),n("li",[n("code",[t._v("C:\\source\\apache-maven-3.6.3\\conf")]),t._v(" 에서 "),n("code",[t._v("settings.xml")]),t._v("파일 열기")]),t._v(" "),n("li",[n("code",[t._v("setting.xml")]),t._v(" 파일에서 "),n("strong",[n("localRepository")],1),t._v(" 주석 처리 부분에 로컬 저장소를 등록한다.")])]),t._v(" "),n("div",{staticClass:"language-xml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("localRepository")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("C:/source/apache-maven-3.6.3/repository"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("localRepository")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("p",[n("img",{attrs:{src:s(582),alt:"img"}})]),t._v(" "),n("h3",{attrs:{id:"_3️⃣-intellij-maven-연동"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3️⃣-intellij-maven-연동"}},[t._v("#")]),t._v(" 3️⃣ IntelliJ maven 연동")]),t._v(" "),n("ol",[n("li",[t._v("Setting 열기 ("),n("code",[t._v("ctrl + Alt + s")]),t._v(")")]),t._v(" "),n("li",[n("code",[t._v("Build, Execution, Deployment")]),t._v(" → "),n("code",[t._v("Build tools")]),t._v(" → "),n("code",[t._v("Maven")])]),t._v(" "),n("li",[n("code",[t._v("user settings file")]),t._v(" → "),n("code",[t._v("override")]),t._v(" 체크 박스 선택")])]),t._v(" "),n("p",[n("img",{attrs:{src:s(583),alt:"img"}})]),t._v(" "),n("p",[t._v("만약 Repository를 변경했다면 settings.xml 파일 경로도 변경해주어야한다.\n"),n("code",[t._v("C:\\source\\apache-maven-3.6.3\\conf\\settings.xml")])]),t._v(" "),n("h3",{attrs:{id:"reference"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[t._v("#")]),t._v(" Reference")]),t._v(" "),n("hr"),t._v(" "),n("p",[n("a",{attrs:{href:"https://devpad.tistory.com/19",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://devpad.tistory.com/19"),n("OutboundLink")],1)]),t._v(" "),n("p",[n("a",{attrs:{href:"https://nesoy.github.io/articles/2017-01/Maven",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://nesoy.github.io/articles/2017-01/Maven"),n("OutboundLink")],1)]),t._v(" "),n("p",[n("a",{attrs:{href:"https://blog.rufer.be/blog/knowledge-base/Project-specific-maven-settings-in-IntelliJ.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://blog.rufer.be/blog/knowledge-base/Project-specific-maven-settings-in-IntelliJ.html"),n("OutboundLink")],1)]),t._v(" "),n("p",[n("a",{attrs:{href:"https://goddaehee.tistory.com/199",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://goddaehee.tistory.com/199"),n("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);