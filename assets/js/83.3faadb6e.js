(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{787:function(t,a,s){"use strict";s.r(a);var e=s(27),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"elasticsearch7-java-rest-client-시작하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch7-java-rest-client-시작하기"}},[t._v("#")]),t._v(" Elasticsearch7 Java REST Client 시작하기")]),t._v(" "),s("p",[t._v("🗓 20.09.05")]),t._v(" "),s("ul",[s("li",[t._v("공식문서를 통해 공부하고 있다.\n"),s("ul",[s("li",[s("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/client/java-rest/current/java-rest-high-getting-started-maven.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.elastic.co/guide/en/elasticsearch/client/java-rest/current/java-rest-high-getting-started-maven.html"),s("OutboundLink")],1)])])]),t._v(" "),s("li",[t._v("공식문서에서 Gradle configuration 설정을 compile로 한다.\n"),s("ul",[s("li",[t._v("implementation 차이점? "),s("a",{attrs:{href:"https://hack-jam.tistory.com/13",target:"_blank",rel:"noopener noreferrer"}},[t._v("정리한 블로그"),s("OutboundLink")],1),t._v(" 참고")])])])]),t._v(" "),s("h2",{attrs:{id:"⏹-javadoc-공식문서-rest-high-level-client"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#⏹-javadoc-공식문서-rest-high-level-client"}},[t._v("#")]),t._v(" ⏹ Javadoc 공식문서 (REST high level client)")]),t._v(" "),s("p",[t._v("rest-high-level 7.9.1 API는 "),s("a",{attrs:{href:"https://artifacts.elastic.co/javadoc/org/elasticsearch/client/elasticsearch-rest-high-level-client/7.9.1/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("공식문서"),s("OutboundLink")],1),t._v(" 내부 packages를 확인할 수 있다.")]),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"⏹-maven-repository"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#⏹-maven-repository"}},[t._v("#")]),t._v(" ⏹ Maven Repository")]),t._v(" "),s("p",[s("code",[t._v("high-level Java REST client")]),t._v("는 "),s("strong",[t._v("Maven Central")]),t._v("에서 Host 된다.")]),t._v(" "),s("ul",[s("li",[t._v("요구사항 : Java 1.8 이상 버전")])]),t._v(" "),s("p",[t._v("특정 버전을 적용하고자 하는 경우 "),s("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/client/java-rest/current/java-rest-high-getting-started-maven.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("공식문서"),s("OutboundLink")],1),t._v("에서 snapshot repo를 config에 추가하는 방법을 참고하자.")]),t._v(" "),s("h3",{attrs:{id:"gradle-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gradle-configuration"}},[t._v("#")]),t._v(" Gradle configuration")]),t._v(" "),s("p",[s("strong",[t._v("종속성 관리(dependency manager) Gradle configuration 추가")])]),t._v(" "),s("p",[s("code",[t._v("SpringProject/build.gradle")])]),t._v(" "),s("div",{staticClass:"language-shell script extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("dependencies "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    compile "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'org.elasticsearch.client:elasticsearch-rest-high-level-client:7.9.1'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("maven을 사용하면 아래와 같다.")]),t._v(" "),s("h3",{attrs:{id:"maven-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#maven-configuration"}},[t._v("#")]),t._v(" Maven configuration")]),t._v(" "),s("p",[s("code",[t._v("pom.xml")])]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.elasticsearch.client"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("elasticsearch-rest-high-level-client"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("7.9.1"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("의존성(종속성)에서 전의(transitive) 종속성에 의존한단다.\n"),s("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/client/java-rest/current/java-rest-high-getting-started-dependencies.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("공식문서"),s("OutboundLink")],1),t._v("에서 확인해볼 수 있다.")]),t._v(" "),s("p",[t._v("IntelliJ에는 gradle configuration을 수정하면 우측 상단에 Gradle을 Load 할 수 있는 버튼이 활성화된다. 눌러서 "),s("code",[t._v("Elasticsearch Rest High level client")]),t._v("를 Load해주자!")]),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"⏹-초기화-initaialization"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#⏹-초기화-initaialization"}},[t._v("#")]),t._v(" ⏹ 초기화(Initaialization)")]),t._v(" "),s("ul",[s("li",[t._v("RestHighLevelClient 인스턴스는 "),s("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/client/java-rest/current/java-rest-low-usage-initialization.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("REST low-level client builder"),s("OutboundLink")],1),t._v("의 위에서 돌아가기 때문에 다음과 같이 초기화 해서 connection을 만들어주자.")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RestHighLevelClient")]),t._v(" client "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RestHighLevelClient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RestClient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("builder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpHost")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"localhost"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpHost")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"localhost"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9201")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n * 비지니스 로직\n */")]),t._v("\n        \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n * 사용후 꼭 close\n */")]),t._v("\n client"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("close")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("code",[t._v("high-level client")]),t._v(" 는 제공된 "),s("strong",[t._v("builder")]),t._v("를 기반으로 요청을 수행하는 데 사용되는 "),s("code",[t._v("low-level client")]),t._v("를 내부적으로 만들어 낸다.")]),t._v(" "),s("p",[t._v("Elasticsearch는 "),s("code",[t._v("9200, 9201")]),t._v(" 포트처럼 여러 개의 노드 연결이 가능하다는 특징도 있다.")]),t._v(" "),s("p",[t._v("이 "),s("code",[t._v("low-level client")]),t._v("는 "),s("strong",[t._v("연결 pool")]),t._v("을 유지하고 "),s("strong",[t._v("일부 thread")]),t._v("를 시작하므로 작업이 제대로 완료되면 "),s("code",[t._v("high-level client")]),t._v(" 를 닫아야한다.")]),t._v(" "),s("p",[t._v("그러면 해당 리소스를 해제하기 위해 내부"),s("code",[t._v("low-level client")]),t._v("도 close된다.")]),t._v(" "),s("p",[t._v("Java 1.7 기능 중 "),s("code",[t._v("try")]),t._v("를 활용해 "),s("code",[t._v("auto close")]),t._v(" 하는 방법을 사용해도 된다.")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RestHighLevelClient")]),t._v(" client "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RestHighLevelClient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RestClient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("builder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t\t\t\t\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpHost")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"host"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpHost")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"host2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n     * 비지니스 로직\n     */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("앞으로 Java High Level Client를 활용할 때 RestHighLevelClient 인스턴스를 클라이언트로 참조할 것이다.")]),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"⏹-requestoptions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#⏹-requestoptions"}},[t._v("#")]),t._v(" ⏹ RequestOptions")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("RestHighLevelClient")]),t._v("의 모든 API는 "),s("code",[t._v("RequestOptions")]),t._v("를 허용한다.\n"),s("ul",[s("li",[s("strong",[t._v("RequestOptions는?")]),t._v(" "),s("ul",[s("li",[t._v("Elasticsearch에서 "),s("strong",[t._v("request(요청)을 실행하는 방법")]),t._v("을 변경하지 않고\n"),s("strong",[t._v("Request를 customize")]),t._v("하여 사용할 수 있는 방법")])])])])]),t._v(" "),s("li",[t._v("예를 들어, Request(요청)을 수신하는 노드를 제어할 "),s("code",[t._v("NodeSelector")]),t._v("를 지정하고 싶다면 Option customizing 예제를 "),s("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/client/java-rest/current/java-rest-low-usage-requests.html#java-rest-low-usage-request-options",target:"_blank",rel:"noopener noreferrer"}},[t._v("low level client documentation"),s("OutboundLink")],1),t._v(" 공식 문서를 참고하면 된다.")])]),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"asynchronous-usage-비동기-사용"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#asynchronous-usage-비동기-사용"}},[t._v("#")]),t._v(" Asynchronous usage (비동기 사용)")]),t._v(" "),s("ul",[s("li",[t._v("서로 다른 클라이언트에 걸친 모든 "),s("code",[t._v("method")]),t._v("은 traditional synchronous(전통적인 동기방식) 및 asynchronous variant(비동기 변수) 에서 존재한다.")]),t._v(" "),s("li",[s("strong",[t._v("차이점")]),t._v(" "),s("ul",[s("li",[t._v("비동기식 요청은 "),s("code",[t._v("REST Low Level Client")]),t._v("에서 비동기식 요청을 사용한다는 것")]),t._v(" "),s("li",[t._v("이는 여러 요청을 수행 중이거나 "),s("code",[t._v("rx java, Kotlin co-routines")]),t._v(" 또는 유사한 프레임워크를 사용하는 경우 유용하다.")])])])]),t._v(" "),s("h3",{attrs:{id:"비동기식-asynchronous-method"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#비동기식-asynchronous-method"}},[t._v("#")]),t._v(" 비동기식(asynchronous) method")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("Async")]),t._v("라는 단어를 이름에 포함 포함")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("Cancellable")]),t._v(" 인스턴스를 반환")])]),t._v(" "),s("li",[s("p",[t._v("동기식(synchronous) 변수(variant)와 동일한 "),s("strong",[t._v("Request object")]),t._v("를 수용하고\ngeneric "),s("code",[t._v("ActionListener<T>")]),t._v(" 수용 - "),s("strong",[t._v("T")]),t._v("는 synchronous method의 return type이다.")])]),t._v(" "),s("li",[s("p",[t._v("모든 비동기 메서드는 Request(요청)을 중단하려는 경우\n호출할 수 있는 "),s("code",[t._v("cancel")]),t._v(" 메서드와 함께 "),s("code",[t._v("Cancelable")]),t._v(" 개체(object)를 "),s("strong",[t._v("return")]),t._v("한다.")]),t._v(" "),s("ul",[s("li",[t._v("더 이상 필요하지 않은 요청을 취소하는 것은 Elasticsearch에 불필요한 부하를 주지 않는 좋은 방법이다.")]),t._v(" "),s("li",[s("code",[t._v("Cancellable")]),t._v(" 인스턴스를 사용하는 것은 선택 사항이며, 필요하지 않은 경우 이 인스턴스를 안전하게 무시(safely ignore)할 수 있다.")])])])]),t._v(" "),s("hr")])}),[],!1,null,null,null);a.default=n.exports}}]);