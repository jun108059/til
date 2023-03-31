(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{813:function(t,a,e){"use strict";e.r(a);var r=e(12),n=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"spring-ioc-용어-정리"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring-ioc-용어-정리"}},[t._v("#")]),t._v(" Spring IoC 용어 정리")]),t._v(" "),a("h2",{attrs:{id:"빈-bean"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#빈-bean"}},[t._v("#")]),t._v(" 빈(bean)")]),t._v(" "),a("p",[t._v("빈 또는 빈 오브젝트는 스프링이 IoC방식으로 관리하는 오브젝트라는 뜻이다. 관리되는 오브젝트(managed object)라고 부르기도 한다. 주의할 점은 스프링을 사용하는 애플리케이션에서 만들어지는 모든 오브젝트가 다 빈은 아니라는 사실이다. 그중에서 스프링이 직접 그 생성과 제어를 담당하는 오브젝트만을 빈이라고 부른다.")]),t._v(" "),a("h2",{attrs:{id:"빈-팩토리-bean-factory"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#빈-팩토리-bean-factory"}},[t._v("#")]),t._v(" 빈 팩토리(bean factory)")]),t._v(" "),a("p",[t._v("스프링의 IoC를 담당하는 핵심 컨테이너를 가리킨다. 빈을 등록하고, 생성하고, 조회하고 돌려주고, 그 외에 부가적인 빈을 관리하는 기능을 담당한다. 보통은 이 빈 팩토리를 바로 사용하지 않고 이를 확장한 애플리케이션 컨텍스트를 이용한다. BeanFactory라고 붙여쓰면 빈 팩토리가 구혆라고 있는 가장 기본적인 인터페이스의 이름이 된다. 이 인터페이스에 getBean()과 같은 메소드가 정의되어 있다.")]),t._v(" "),a("h2",{attrs:{id:"애플리케이션-컨텍스트-application-context"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#애플리케이션-컨텍스트-application-context"}},[t._v("#")]),t._v(" 애플리케이션 컨텍스트(application context)")]),t._v(" "),a("p",[t._v("빈 팩토리를 확장한 IoC 컨테이너다. 빈을 등록하고 관리하는 기본적인 기능은 빈팩토리와 동일하다. 여기에 스프링이 제공하는 각종 부가 서비스를 추가로 제공한다. 빈 팩토리라고 부를 때는 주로 빈의 생성과 제어의 관점에서 이야기하는 것이고, 애플리케이션 컨텍스트라고 할 때는 스프링이 제공하는 애플리케이션 지원 기능을 모두 포함해서 이야기하는 것이라고 보면 된다. 스프링에서는 애플리케이션 컨텍스트라는 용어를 빈 팩토리보다 더 많이 사용한다. ApplicationContext라고 적으면 애플리케이션 컨텍스트가 구현해야 하는 기본 인터페이스를 가리키는 것이기도 하다. ApplicationContext는 BeanFactory를 상속한다.")]),t._v(" "),a("h2",{attrs:{id:"설정정보-설정-메타정보-configuration-metadata"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#설정정보-설정-메타정보-configuration-metadata"}},[t._v("#")]),t._v(" 설정정보/설정 메타정보(configuration metadata)")]),t._v(" "),a("p",[t._v("스프링의 설정정보란 애플리케이션 컨텍스트 또는 빈 팩토리가 IoC를 적용하기 위해 사용하는 메타정보를 말한다. 영어로 'configuration'이라고 하는데, 이는 구성정보 내지는 형상정보라는 의미다. 실제로 스프링의 설정정보는 컨테이너에 어떤 기능을 세팅하거나 조정하는 겨웅에도 사용하지만, 그보다는 IoC컨테이너에 의해 관리되는 애플리케이션 오브젝트를 생성하고 구성할 때 사용된다. 애플리케이션의 형상정보라고 부르기도 한다. 또는 애플리케이션의 전체 그림이 그려진 청사진이라고 부르기도 한다.")]),t._v(" "),a("hr"),t._v(" "),a("h4",{attrs:{id:"reference"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[t._v("#")]),t._v(" Reference")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://natana1992.tistory.com/33?category=645318",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://natana1992.tistory.com/33?category=645318"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=n.exports}}]);