(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{810:function(t,a,n){"use strict";n.r(a);var e=n(27),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"init과-clinit의-차이점"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#init과-clinit의-차이점"}},[t._v("#")]),t._v(" init과 clinit의 차이점")]),t._v(" "),n("p",[t._v("코드를 분석하다 보니 clinit 관련 내용을 확인하게 되었는데 init과 무슨 차이가 있나 궁금했다.")]),t._v(" "),n("h2",{attrs:{id:"_1-공식문서-설명"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-공식문서-설명"}},[t._v("#")]),t._v(" 1.공식문서 설명")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://docs.oracle.com/javase/specs/jvms/se7/html/jvms-2.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("오라클 공식문서"),n("OutboundLink")],1),t._v("에는 이렇게 설명되어있다.")]),t._v(" "),n("blockquote",[n("p",[t._v("2.9. Special Methods\nAt the level of the Java virtual machine, every constructor (§2.12) appears as an instance initialization method that has the special name "),n("init",[t._v(". This name is supplied by a compiler. Because the name "),n("init",[t._v(" is not a valid identifier, it cannot be used directly in a program written in the Java programming language. Instance initialization methods may be invoked only within the Java virtual machine by the invokespecial instruction, and they may be invoked only on uninitialized class instances. An instance initialization method takes on the access permissions (§2.7.4) of the constructor from which it was derived.\nA class or interface has at most one class or interface initialization method and is initialized (§2.17.4) by invoking that method. The initialization method of a class or interface is static and takes no arguments. It has the special name "),n("clinit",[t._v(". This name is supplied by a compiler. Because the name "),n("clinit",[t._v(" is not a valid identifier, it cannot be used directly in a program written in the Java programming language. Class and interface initialization methods are invoked implicitly by the Java virtual machine; they are never invoked directly from any Java virtual machine inw2struction, but are invoked only indirectly as part of the class initialization process.")])],1)],1)],1)],1)]),t._v(" "),n("p",[t._v("잘 읽어보아도 이해가 잘 안된다.")]),t._v(" "),n("h2",{attrs:{id:"_2-예시"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-예시"}},[t._v("#")]),t._v(" 2.예시")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://stackoverflow.com/questions/8517121/java-what-is-the-difference-between-init-and-clinit/8517200",target:"_blank",rel:"noopener noreferrer"}},[t._v("stack overflow"),n("OutboundLink")],1),t._v("에 좋은 예시가 있다.")]),t._v(" "),n("p",[n("code",[t._v("<init>")]),t._v(" is the (or one of the) constructor(s) for the instance, and non-static field initialization.")]),t._v(" "),n("p",[n("code",[t._v("<clinit>")]),t._v(" are the static initialization blocks for the class, and static field initialization.")]),t._v(" "),n("p",[n("code",[t._v("init")]),t._v("은 인스턴스의 생성자이며 non-static(비 정적) 필드 초기화이고,")]),t._v(" "),n("p",[n("code",[t._v("clinit")]),t._v("은 클래스에 대한 static(정적) 초기화 블록 및 정적 필드 초기화라고 한다.")]),t._v(" "),n("p",[t._v("아래 코드를 보면 정확히 이해가 된다!")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("X")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Log")]),t._v(" log "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LogFactory")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLog")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// <clinit>")]),t._v("\n\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// <init>")]),t._v("\n\n   "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("X")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// <init>")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// <clinit>")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=s.exports}}]);