(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{372:function(t,s,a){t.exports=a.p+"assets/img/mvc-sample.7d1756d4.png"},373:function(t,s,a){t.exports=a.p+"assets/img/mvc-sample2.f2c59c25.png"},374:function(t,s,a){t.exports=a.p+"assets/img/mvc-sample4.1d4479ec.png"},375:function(t,s,a){t.exports=a.p+"assets/img/mvc-sample3.2713c782.png"},460:function(t,s,a){"use strict";a.r(s);var n=a(27),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"mvc-pattern"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mvc-pattern"}},[t._v("#")]),t._v(" MVC Pattern")]),t._v(" "),n("h2",{attrs:{id:"_1-mvc란"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-mvc란"}},[t._v("#")]),t._v(" 1. MVC란?")]),t._v(" "),n("p",[t._v("MVC는 Model-View-Controller 의 약자입니다.")]),t._v(" "),n("p",[t._v("개발 할 때, 3가지 형태로 역할을 나누어 개발하는 방법론입니다.")]),t._v(" "),n("p",[t._v("비지니스 처리 로직과 사용자 인터페이스 요소를 분리시켜 서로 영향없이 개발 하기 수월하다는 장점이 있습니다.")]),t._v(" "),n("hr"),t._v(" "),n("h3",{attrs:{id:"⏹-model"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#⏹-model"}},[t._v("#")]),t._v(" ⏹ Model")]),t._v(" "),n("p",[n("code",[t._v("Model")]),t._v("은 어플리케이션이 “무엇”을 할 것인지를 정의 합니다. 내부 비지니스 로직을 처리하기 위한 역할을 할 것입니다.")]),t._v(" "),n("ul",[n("li",[t._v("처리되는 알고리즘, DB와 상호작용(CRUD), 데이터 등등 ..")])]),t._v(" "),n("h3",{attrs:{id:"⏹-controller"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#⏹-controller"}},[t._v("#")]),t._v(" ⏹ Controller")]),t._v(" "),n("p",[n("code",[t._v("Controller")]),t._v("는 모델이 “"),n("strong",[t._v("어떻게")]),t._v("” 처리할 지를 알려주는 역할을 할 것이고, 모바일에서는 "),n("strong",[t._v("화면의 로직처리")]),t._v(" 부분입니다. 화면에서 사용자의 요청을 받아서 처리되는 부분을 구현하게 되며, 요청 내용을 분석해 Model과 View에 업데이트 요청을 하게 됩니다.")]),t._v(" "),n("h3",{attrs:{id:"⏹-view"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#⏹-view"}},[t._v("#")]),t._v(" ⏹ View")]),t._v(" "),n("p",[n("code",[t._v("View")]),t._v('는 화면에 "'),n("strong",[t._v("무엇")]),t._v('"인가를 "'),n("strong",[t._v("보여주기 위한 역할")]),t._v('"을 합니다. 컨트롤러 하위에 종속되어, 모델이나 컨트롤러가 보여주려고 하는 모든 필요한 것들을 보여줄 것입니다.')]),t._v(" "),n("ul",[n("li",[t._v('최종 사용자게에 "'),n("strong",[t._v("무엇")]),t._v('"을 화면(UI)으로 보여줌')])]),t._v(" "),n("p",[t._v("그리고 Controller는 Model과 View가 각각 무엇을 해야 할 지를 알고 통제합니다. 비지니스 로직을 처리하는 Model과 완전히 UI에 의존적인 View가 서로 직접 이야기 할 수 없게 합니다.")]),t._v(" "),n("p",[n("img",{attrs:{src:a(372),alt:"img"}})]),t._v(" "),n("p",[t._v("(▲ 출처 : "),n("a",{attrs:{href:"https://medium.com/@jang.wangsu/%EB%94%94%EC%9E%90%EC%9D%B8%ED%8C%A8%ED%84%B4-mvc-%ED%8C%A8%ED%84%B4%EC%9D%B4%EB%9E%80-1d74fac6e256",target:"_blank",rel:"noopener noreferrer"}},[t._v("Clint Jang"),n("OutboundLink")],1),t._v(" MVC 구조)")]),t._v(" "),n("hr"),t._v(" "),n("h2",{attrs:{id:"_2-mvc의-한계"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-mvc의-한계"}},[t._v("#")]),t._v(" 2. MVC의 한계")]),t._v(" "),n("p",[t._v("MVC에서 "),n("code",[t._v("View")]),t._v("는 Controller에 연결되어 화면을 구성하는 단위요소이므로 "),n("code",[t._v("다수의 View")]),t._v("들을 가질 수 있습니다.")]),t._v(" "),n("p",[t._v("그리고 "),n("code",[t._v("Model")]),t._v("은 Controller를 통해서 View와 연결되지만, 이렇게 Controller를 통해서 하나의 View에 연결될 수 있는 "),n("code",[t._v("Model")]),t._v("도 여러 개가 될 수 있습니다.")]),t._v(" "),n("blockquote",[n("p",[t._v("💡 뷰와 모델이 서로 의존성을 띄게 됩니다.")])]),t._v(" "),n("p",[t._v("즉, 화면에 복잡한 화면과 데이터의 구성 필요한 구성이라면, Controller에 "),n("strong",[t._v("다수의 Model과 View가 복잡하게 연결되어 있는 상황")]),t._v("이 생길 수 있습니다.")]),t._v(" "),n("p",[n("img",{attrs:{src:a(373),alt:"img"}})]),t._v(" "),n("p",[t._v("(▲ 출처 : "),n("a",{attrs:{href:"https://medium.com/@jang.wangsu/%EB%94%94%EC%9E%90%EC%9D%B8%ED%8C%A8%ED%84%B4-mvc-%ED%8C%A8%ED%84%B4%EC%9D%B4%EB%9E%80-1d74fac6e256",target:"_blank",rel:"noopener noreferrer"}},[t._v("Clint Jang"),n("OutboundLink")],1),t._v(" MVC 한계)")]),t._v(" "),n("p",[t._v("MVC가 너무 복잡하고 비대해져서, 새 기능을 추가할때마다 크고 작은 문제점을 가지고 소드 분석이나 테스트도 어렵죠.")]),t._v(" "),n("blockquote",[n("p",[t._v("💡 이런 형태의 MVC를"),n("br"),t._v(" "),n("strong",[t._v("Massive ViewController (대규모 MVC 어플리케이션)")]),n("br"),t._v("\n라고 부릅니다.")])]),t._v(" "),n("p",[t._v("MVC의 한계를 표현한 용어 인 것 같습니다.")]),t._v(" "),n("p",[t._v("대부분의 사람들(당연히 저도 포함)은 MVC를 구성할 때, View와 Model을 중재하는 Controller를 작성하면 Controller의 비중이 크지 않을 것으로 생각했지만, 복잡한 화면을 구현하게 되면 대규모 MVC 어플리케이션 형태로 구현하게 되었습니다.")]),t._v(" "),n("p",[t._v("Controller는 View와 라이프 사이클과 강하게 연결되어 있어서 분리할 수도 없고, 코드 분석/수정과 테스트가 모두 힘들어지죠. 그리고 복잡하게 엮어있는 Model과 View는 여러 Side-Effect를 불러와서 프로그램 운영을 힘들게 하지요.")]),t._v(" "),n("p",[t._v("그래서 위의 문제점을 보완한 여러 다양한!! 패턴을 파생되었습니다.")]),t._v(" "),n("blockquote",[n("p",[t._v("💡 MVP, MVVM, Viper, Clean Architecture, Flux, Redux, RxMVVM…")])]),t._v(" "),n("p",[t._v("파생된 패턴들은 시간이 되는 데로 다시 공부하고 정리하면 글을 작성하겠습니다.")]),t._v(" "),n("hr"),t._v(" "),n("h2",{attrs:{id:"_3-mvc의-자세한-개념"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-mvc의-자세한-개념"}},[t._v("#")]),t._v(" 3. MVC의 자세한 개념")]),t._v(" "),n("h3",{attrs:{id:"⏹-mvc-용어-분석"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#⏹-mvc-용어-분석"}},[t._v("#")]),t._v(" ⏹ MVC 용어 분석")]),t._v(" "),n("h3",{attrs:{id:"model"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#model"}},[t._v("#")]),t._v(" Model")]),t._v(" "),n("blockquote",[n("p",[t._v("Model represents an object or JAVA POJO carrying data. It can also have logic to update controller if its data changes.")])]),t._v(" "),n("p",[t._v("모델은 데이터를 가지고 있는 객체 또는 JAVA POJO입니다. 데이터가 바뀌었을 때 컨트롤러의 데이터를 업데이트 하는 로직도 포함합니다.")]),t._v(" "),n("p",[t._v("예를들어 '학생'이라는 데이터 set에 대해 모델을 만든다면 Student 클래스의 멤버 변수와 멤버 함수는 이정도 되겠네요")]),t._v(" "),n("ul",[n("li",[t._v("멤버 변수 : rollNo(학번), name(학생 이름)")]),t._v(" "),n("li",[t._v("멤버 함수 : getRollNo, setRollNo, getName, setName")])]),t._v(" "),n("p",[t._v("보통 학번, 학생 이름과 같이 모델에서 다룰만한 데이터 들은 데이터베이스에 저장하죠!")]),t._v(" "),n("p",[t._v("그럴 경우 데이터베이스와 상호작용 하며 "),n("code",[t._v("CRUD")]),t._v(" 작업을 하는 것도 모델의 멤버함수(getter, setter 등)들이 처리 합니다.")]),t._v(" "),n("hr"),t._v(" "),n("h3",{attrs:{id:"view"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#view"}},[t._v("#")]),t._v(" View")]),t._v(" "),n("blockquote",[n("p",[t._v("View represents the visualization of the data that model contains.")])]),t._v(" "),n("p",[t._v("모델에 포함된 데이터의 시각화를 담당합니다.")]),t._v(" "),n("p",[t._v("여기서 '모델에 포함된 데이터'란 학번과 학생 이름입니다! 즉 View는 학번과 학생 이름이라는 데이터가 어플리케이션상에서 UI에 어떻게 나타날지에 관련된 코드 덩어리 입니다.")]),t._v(" "),n("p",[t._v("웹 어플리케이션이라면 HTML, Android 앱이라면 xml이 이 부분의 표현을 담당하는 언어죠. 즉 프로젝트의 View 폴더에는 웹 앱이라면 주로 html, 안드로이드 앱이라면 주로 xml 파일들이 들어 있을 거에요.")]),t._v(" "),n("hr"),t._v(" "),n("h3",{attrs:{id:"controller"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#controller"}},[t._v("#")]),t._v(" Controller")]),t._v(" "),n("blockquote",[n("p",[t._v("Controller acts on both model and view. It controls the data flow into model object and updates the view whenever data changes. It keeps view and model separate.")])]),t._v(" "),n("p",[t._v("컨트롤러는 모델과 뷰에 전부 영향을 미칩니다. 모델 객체로의 데이터 흐름을 제어하고 데이터가 update 되었을 때 뷰를 갱신합니다. 컨트롤러는 뷰와 모델의 역할을 분리합니다.")]),t._v(" "),n("hr"),t._v(" "),n("blockquote",[n("p",[t._v("💡 모델과 뷰를 사용하는 건 컨트롤러, 컨트롤러를 사용하는 건 어플리케이션!")])]),t._v(" "),n("p",[t._v("컨트롤러는 모델과 뷰 객체를 활용해서 멤버 함수를 만듭니다. 컨트롤러의 역할은 어플리케이션에서 사용할 interface 함수들을 제공하는 것이죠.")]),t._v(" "),n("p",[t._v("어플리케이션의 역할은 컨트롤러 객체의 함수들을 잘 사용해서 적절한 데이터를 적절한 UI에 보여주는 프로그램이 되는 것이겠죠.")]),t._v(" "),n("p",[t._v("그리고 컨트롤러를 사용하는 게 어플리케이션이라는 말의 의미는, 어플리케이션에서 데이터와 관련된 작업을 하고 싶다면 모델, 뷰 객체는 건드릴 필요 없이 "),n("strong",[t._v("컨트롤러 객체")]),t._v("만 가지고 놀면 된다는 의미입니다.")]),t._v(" "),n("p",[t._v("이 관점에서 계속 본다면, 컨트롤러를 기준으로 추상화가 한단계 생기네요. 컨트롤러 윗 레벨에서는 데이터베이스는 물론이고 모델과 뷰에 대해서도 알 필요가 없고 '컨트롤러 객체의 조작법'만 알면 되는거죠.")]),t._v(" "),n("p",[n("img",{attrs:{src:a(374),alt:"img"}})]),t._v(" "),n("p",[t._v("(▲ 출처 : "),n("a",{attrs:{href:"https://medium.com/@jang.wangsu/%EB%94%94%EC%9E%90%EC%9D%B8%ED%8C%A8%ED%84%B4-mvc-%ED%8C%A8%ED%84%B4%EC%9D%B4%EB%9E%80-1d74fac6e256",target:"_blank",rel:"noopener noreferrer"}},[t._v("hanee24"),n("OutboundLink")],1),t._v(" MVC 도식화)")]),t._v(" "),n("hr"),t._v(" "),n("h2",{attrs:{id:"_5-예제"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-예제"}},[t._v("#")]),t._v(" 5. 예제")]),t._v(" "),n("p",[t._v("코드 출처 : "),n("a",{attrs:{href:"https://hanee24.github.io/2018/02/14/what-is-mvc-pattern/",target:"_blank",rel:"noopener noreferrer"}},[t._v("hanee"),n("OutboundLink")],1)]),t._v(" "),n("h3",{attrs:{id:"_1-model"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-model"}},[t._v("#")]),t._v(" (1) Model")]),t._v(" "),n("p",[n("code",[t._v("Student.java")])]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Student")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" rollNo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   \n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRollNo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" rollNo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   \n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setRollNo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" rollNo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rollNo "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" rollNo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   \n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getName")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   \n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setName")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h3",{attrs:{id:"_2-view"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-view"}},[t._v("#")]),t._v(" (2) View")]),t._v(" "),n("p",[n("code",[t._v("StudentView.java")])]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StudentView")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("printStudentDetails")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" studentName"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" studentRollNo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Student: "')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Name: "')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" studentName"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Roll No: "')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" studentRollNo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h3",{attrs:{id:"_3-controller"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-controller"}},[t._v("#")]),t._v(" (3) Controller")]),t._v(" "),n("p",[n("code",[t._v("StudentController.java")])]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StudentController")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Student")]),t._v(" model"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StudentView")]),t._v(" view"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StudentController")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Student")]),t._v(" model"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StudentView")]),t._v(" view"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("model "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" model"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("view "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" view"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setStudentName")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      model"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setName")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    \n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getStudentName")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" model"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getName")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    \n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setStudentRollNo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" rollNo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      model"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setRollNo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rollNo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("      \n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getStudentRollNo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" model"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRollNo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("     \n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateView")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("           \n      view"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("printStudentDetails")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("model"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getName")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" model"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRollNo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h3",{attrs:{id:"_4-어플리케이션-컨트롤러-사용"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-어플리케이션-컨트롤러-사용"}},[t._v("#")]),t._v(" 4. 어플리케이션 : 컨트롤러 사용")]),t._v(" "),n("p",[n("code",[t._v("MVCPatternDemo.java")])]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MVCPatternDemo")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//fetch student record based on his roll no from the database")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Student")]),t._v(" model  "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("retriveStudentFromDatabase")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Create a view : to write student details on console")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StudentView")]),t._v(" view "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StudentView")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n      "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StudentController")]),t._v(" controller "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StudentController")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("model"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" view"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n      controller"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateView")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//update model data")]),t._v("\n      controller"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setStudentName")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"John"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n      controller"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateView")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Student")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("retriveStudentFromDatabase")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Student")]),t._v(" student "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Student")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      student"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setName")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Robert"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      student"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setRollNo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"10"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" student"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h3",{attrs:{id:"_5-output"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-output"}},[t._v("#")]),t._v(" (5) Output")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("Student: \nName: Robert\nRoll No: "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\nStudent: \nName: John\nRoll No: "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n")])])]),n("h2",{attrs:{id:"_6-결론"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-결론"}},[t._v("#")]),t._v(" 6. 결론")]),t._v(" "),n("p",[n("code",[t._v("MVC")]),t._v("는 "),n("code",[t._v("Model-View-Controller")]),t._v("의 약자입니다. 개발할 때 3가지 형태로 구분하여 개발하는 "),n("strong",[t._v("소프트웨어 개발 방법론")]),t._v("입니다.")]),t._v(" "),n("p",[t._v("그 3가지 요소를 설명하면")]),t._v(" "),n("p",[n("strong",[t._v("Model")]),t._v("은 "),n("strong",[t._v("무엇")]),t._v("을 할지 정의합니다. 비지니스 로직에서의 알고리즘, 데이터 등의 기능을 처리합니다.")]),t._v(" "),n("p",[n("strong",[t._v("Controller")]),t._v("는 "),n("strong",[t._v("어떻게")]),t._v(" 할지를 정의합니다. 클라이언트의 요청을 받아서 화면 처리기능과 "),n("code",[t._v("Model")]),t._v("과 "),n("code",[t._v("View")]),t._v("를 연결시켜주는 역할을 합니다.")]),t._v(" "),n("p",[n("strong",[t._v("View")]),t._v("는 "),n("strong",[t._v("무엇을 화면을 보여주는")]),t._v(" 역할을 하지요. 웹이라면 웹페이지, 모바일이라면 어플의 화면의 보여지는 부분입니다.")]),t._v(" "),n("hr"),t._v(" "),n("p",[n("code",[t._v("MVC")]),t._v("는 "),n("strong",[t._v("복잡한 대규모 프로그램을 개발을 하게 되면서 문제점이 확인")]),t._v("되었습니다.")]),t._v(" "),n("p",[t._v("다수의 View와 Model이 Controller를 통해 복잡하게 연결될 수 있기 때문에 Controller가 뚱뚱해지게 되는 **Massive ViewController(대규모 MVC 어플리케이션)**가 되어버립니다.")]),t._v(" "),n("p",[t._v("View와 Controller가 라이브사이클에 강하게 연결되어있고, 더불어 Controller를 통해 View와 Model간에도 관계가 복잡하게 연결되어있어서 수정시 테스트가 힘들고, 파악이 어렵기 때문에 여러 Side-Effect를 불러오게 되는 문제점이 있습니다.")]),t._v(" "),n("p",[t._v("그래서 MVC는 위 문제점을 해결하기 위해 여러 페러다임을 수용한 다양한 패턴을 파생시켰습니다.")]),t._v(" "),n("p",[t._v("간단히 이미지로 표현하면")]),t._v(" "),n("p",[n("img",{attrs:{src:a(375),alt:"img"}})]),t._v(" "),n("p",[t._v("(▲ 출처 : "),n("a",{attrs:{href:"https://medium.com/@jang.wangsu/%EB%94%94%EC%9E%90%EC%9D%B8%ED%8C%A8%ED%84%B4-mvc-%ED%8C%A8%ED%84%B4%EC%9D%B4%EB%9E%80-1d74fac6e256",target:"_blank",rel:"noopener noreferrer"}},[t._v("Clint Jang"),n("OutboundLink")],1),t._v(" MVC 도식화)")]),t._v(" "),n("p",[t._v("왼쪽은 핵심만, 오른쪽은 다른 해석으로 표현한 그림입니다.")]),t._v(" "),n("hr"),t._v(" "),n("h3",{attrs:{id:"reference"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[t._v("#")]),t._v(" Reference")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://hanee24.github.io/2018/02/14/what-is-mvc-pattern/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MVC Pattern 이란? - 개념 및 자바 예제"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://medium.com/@jang.wangsu/%EB%94%94%EC%9E%90%EC%9D%B8%ED%8C%A8%ED%84%B4-mvc-%ED%8C%A8%ED%84%B4%EC%9D%B4%EB%9E%80-1d74fac6e256",target:"_blank",rel:"noopener noreferrer"}},[t._v("[디자인패턴] MVC 패턴이란?"),n("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);