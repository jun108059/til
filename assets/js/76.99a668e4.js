(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{645:function(t,e,r){t.exports=r.p+"assets/img/boilerplateCode.b252057b.png"},822:function(t,e,r){"use strict";r.r(e);var a=r(12),s=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"보일러-플레이트"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#보일러-플레이트"}},[t._v("#")]),t._v(" 보일러 플레이트?")]),t._v(" "),e("p",[e("img",{attrs:{src:r(645),alt:"img"}})]),t._v(" "),e("h2",{attrs:{id:"보일러-플레이트란"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#보일러-플레이트란"}},[t._v("#")]),t._v(" 보일러 플레이트란")]),t._v(" "),e("blockquote",[e("p",[t._v("프로그래밍에서 상용구 코드를 의미")])]),t._v(" "),e("p",[t._v("github에 Opensource를 검색하다보면 boilerplate라는 용어를 많이 접하게 된다.")]),t._v(" "),e("p",[t._v("boilerplate란 표준 문안이라는 뜻의 단어로 프로그래밍에서의 boilerplate code는 위키피디아의 설명을 보면")]),t._v(" "),e("ul",[e("li",[t._v("최소한의 변경으로 재사용할 수 있는 것")]),t._v(" "),e("li",[t._v("적은 수정만으로 여러 곳에 활용 가능한 코드, 문구")]),t._v(" "),e("li",[t._v("각종 문서에서 반복적으로 인용되는 문서의 한 부분")])]),t._v(" "),e("p",[t._v("라고 설명되어있다.")]),t._v(" "),e("p",[t._v("어떤일을 하기위해서 꼭 작성해야 하는 코드로 자바에서는 클래스의 getter, setter 메소드가 대표적이다.")]),t._v(" "),e("p",[t._v("자바에서 getter, setter는 꼭 필요하지만 코드의 길이를 길어지게 하고 개발자에게 의미없는 노동을 강요하게 된다. 이부분이 자바의 단점 중 하나이다.")]),t._v(" "),e("p",[t._v("그래서 스칼라에서는 케이스 클래스를 통해 컴파일러에서 자동으로 작업을 처리할 수 있게 도와준다.")]),t._v(" "),e("p",[t._v("자바에서도 롬복을 이용하여 이부분을 자동으로 생성하게 할 수 있다. 보일러플레이트 코드를 제거하는 방법을 알아보자.")]),t._v(" "),e("h2",{attrs:{id:"보일러플레이트-코드-제거하는-방법"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#보일러플레이트-코드-제거하는-방법"}},[t._v("#")]),t._v(" 보일러플레이트 코드 제거하는 방법")]),t._v(" "),e("h3",{attrs:{id:"_1-어노테이션-프로세서-사용"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-어노테이션-프로세서-사용"}},[t._v("#")]),t._v(" 1. 어노테이션 프로세서 사용")]),t._v(" "),e("p",[t._v("사람이 몇시간동안 해야하는 작업을 컴퓨터는 수초내에 할 수도 있다. "),e("a",{attrs:{href:"https://www.charlezz.com/?p=1167",target:"_blank",rel:"noopener noreferrer"}},[t._v("어노테이션 프로세서"),e("OutboundLink")],1),t._v("를 이용하여 보일러 플레이트 코드 생성하는 자동화 작업을 한다면, 보일러플레이트 코드를 제거하는데 가장 큰 도움이 될 것이다.")]),t._v(" "),e("h3",{attrs:{id:"_2-플러그인-사용"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-플러그인-사용"}},[t._v("#")]),t._v(" 2. 플러그인 사용")]),t._v(" "),e("h4",{attrs:{id:"parcelable-구현"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#parcelable-구현"}},[t._v("#")]),t._v(" Parcelable 구현")]),t._v(" "),e("p",[t._v("안드로이드에서 IPC를 하기위해 사용하는 대표적인 객체가 "),e("a",{attrs:{href:"https://www.charlezz.com/?p=823",target:"_blank",rel:"noopener noreferrer"}},[t._v("Parcelable"),e("OutboundLink")],1),t._v("이다. Parcelable 구현 코드를 만드는 것은 매우 단순하고 반복적인 작업이다. 안드로이드 스튜디오 플러그인을 사용하면 한번에 보일러플레이트코드를 만들어준다.")]),t._v(" "),e("h4",{attrs:{id:"livetemplate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#livetemplate"}},[t._v("#")]),t._v(" LiveTemplate")]),t._v(" "),e("p",[t._v("안드로이드 스튜디오에 있는 LiveTemplate은 적은 타이핑으로 많은 코드를 자동으로 생성해준다.")]),t._v(" "),e("h4",{attrs:{id:"lombok"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lombok"}},[t._v("#")]),t._v(" Lombok")]),t._v(" "),e("p",[t._v("Lombok은 getter/setter/constructor 등을 자동으로 생성해주는 플러그인이다. 단독으로 사용할 수는 없고, 아티팩트 종속성을 추가하여 사용해야한다.")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://dzone.com/articles/reduce-boilerplate-code-your",target:"_blank",rel:"noopener noreferrer"}},[t._v("롬복 참고문서 바로가기"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/rzwitserloot/lombok",target:"_blank",rel:"noopener noreferrer"}},[t._v("롬복 깃허브 바로가기"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"_3-kotlin-사용"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-kotlin-사용"}},[t._v("#")]),t._v(" 3. Kotlin 사용")]),t._v(" "),e("p",[t._v("Java대신 Kotlin을 사용하는 것 자체만으로 많은 보일러플레이트코드를 제거할 수 있다. 한가지 예로 Kotlin의 data 클래스는 primary 생성자를 선언하는 것만으로 equals(), hashCode(), toString(), copy() 등을 자동으로 생성한다.")]),t._v(" "),e("h3",{attrs:{id:"_4-라이브러리-사용"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-라이브러리-사용"}},[t._v("#")]),t._v(" 4. 라이브러리 사용")]),t._v(" "),e("p",[t._v("Dagger, Glide, Retrofit, Databinding 등 현존하는 인기 안드로이드 라이브러리들은 모두 어노테이션 프로세서를 사용하여 보일러플레이트 코드를 생성한다. 프로젝트에 라이브러리를 적용하는 것만으로도 많은 보일러플레이트 코드를 제거할 수 있다.")]),t._v(" "),e("h3",{attrs:{id:"reference"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[t._v("#")]),t._v(" Reference")]),t._v(" "),e("ul",[e("li",[t._v("https://118k.tistory.com/755")]),t._v(" "),e("li",[t._v("https://medium.com/@charlezz/%EB%B3%B4%EC%9D%BC%EB%9F%AC%ED%94%8C%EB%A0%88%EC%9D%B4%ED%8A%B8-%EC%BD%94%EB%93%9C%EB%9E%80-boilerplate-code-83009a8d3297")]),t._v(" "),e("li",[t._v("https://web-front-end.tistory.com/27")])])])}),[],!1,null,null,null);e.default=s.exports}}]);