(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{772:function(t,a,s){"use strict";s.r(a);var n=s(12),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"db-복제-지연"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#db-복제-지연"}},[t._v("#")]),t._v(" DB 복제 지연")]),t._v(" "),a("ul",[a("li",[t._v("Main-Replica 구조에서 발생")]),t._v(" "),a("li",[t._v("Main DB(Write DB)에서 데이터 변경이 일어난 후, Replica DB(Read DB)로의 복제가 즉시 이루어지지 않는 경우를 "),a("code",[t._v("복제가 지연됐다")]),t._v("고 표현함")]),t._v(" "),a("li",[t._v("이런 지연이 생기는 동안에 애플리케이션 로직이 Replica DB를 조회하면 아직 반영되지 않은 예전 데이터 조회")])]),t._v(" "),a("h2",{attrs:{id:"시나리오"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#시나리오"}},[t._v("#")]),t._v(" 시나리오")]),t._v(" "),a("div",{staticClass:"language-kotlin extra-class"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 사용자의 계정 잔액을 증가시키는 로직")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("increaseBalance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("userId"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" String"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" amount"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Int"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1. Main DB에 사용자 잔액 증가 반영")]),t._v("\n    userRepository"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("increaseBalance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("userId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" amount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2. 이벤트를 생성하여 다른 서비스에 잔액 변경을 알림")]),t._v("\n    eventPublisher"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("publishBalanceIncreasedEvent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("userId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" amount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3. 현재 잔액을 Replica DB에서 조회")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" currentBalance "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" userRepository"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBalance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("userId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 4. 현재 잔액이 특정 조건을 만족하면 보너스 지급")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("currentBalance "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        bonusService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("grantBonus")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("userId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("복제 지연이 발생하면, 3번 Replica DB에서 잔액이 10,000원 이상 될 것으로 예상했지만 1번의 Main DB에 잔액 증가가 반영되기 전 데이터를 읽어오기 때문에 보너스가 지급되지 않는다.")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/jun108059/til/assets/42997924/7f5b1ad6-3efa-494a-90d7-ff3364a24590",alt:"image"}})]),t._v(" "),a("h2",{attrs:{id:"해결-방법"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#해결-방법"}},[t._v("#")]),t._v(" 해결 방법")]),t._v(" "),a("h3",{attrs:{id:"_1-maindb-읽기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-maindb-읽기"}},[t._v("#")]),t._v(" 1. MainDB 읽기")]),t._v(" "),a("ul",[a("li",[t._v("해당 로직에서는 insert-select를 동일한 MainDB에 query하도록 할 수 있다.")]),t._v(" "),a("li",[t._v("단점은 Main DB에 부하가 발생한다")])]),t._v(" "),a("h3",{attrs:{id:"_2-로직-설계"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-로직-설계"}},[t._v("#")]),t._v(" 2. 로직 설계")]),t._v(" "),a("ul",[a("li",[t._v("로직을 설계할 때, 복제 지연 가능성을 고려하여 데이터 불일치가 발생해도 시스템이 제대로 동작하도록 설계")]),t._v(" "),a("li",[t._v("ex) insert 후 의도적으로 지연시간을 두어, 복제가 완료된 이후에 select 한다")])]),t._v(" "),a("blockquote",[a("p",[t._v("🤔 이렇게 로직을 설계하려면 로직 처리 지연 시간을 얼마나 둬야 되는지, 복제 지연이 얼마나 길게 발생하는지 알아야되는데 어떻게 파악할까?")])]),t._v(" "),a("h4",{attrs:{id:"복제-지연-시간-모니터링"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#복제-지연-시간-모니터링"}},[t._v("#")]),t._v(" 복제 지연 시간 모니터링")]),t._v(" "),a("ul",[a("li",[t._v("DB 복제 지연 모니터링 방법은 Grafana, Prometheus, Datadog 등의 솔루션을 통해 시각화하고 alert도 연동할 수 있다!")]),t._v(" "),a("li",[t._v('아래 그래프를 보면, 복제 지연 시간을 y축 "초"로 확인할 수 있다.')])]),t._v(" "),a("img",{attrs:{width:"755",alt:"image",src:"https://github.com/jun108059/til/assets/42997924/0ffb4126-e764-42d2-8c6e-1d1f48a63246"}}),t._v(" "),a("h3",{attrs:{id:"_3-분산-트랜잭션을-통한-데이터-일관성-유지"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-분산-트랜잭션을-통한-데이터-일관성-유지"}},[t._v("#")]),t._v(" 3. 분산 트랜잭션을 통한 데이터 일관성 유지")]),t._v(" "),a("ul",[a("li",[t._v("분산 트랜잭션(Distributed Transaction)은 여러 시스템 간에 데이터의 일관성을 유지하기 위해 사용하는 기술이다")]),t._v(" "),a("li",[t._v("각 시스템이 개별적으로 트랜잭션을 관리하는 대신, 여러 시스템이 참여하는 전체 트랜잭션을 관리하여 모든 시스템의 데이터 상태를 일관되게 유지하려는 목적이 있다")]),t._v(" "),a("li",[t._v("2단계 커밋(2-Phase Commit)과 3단계 커밋(3-Phase Commit), 사가 패턴(Saga Pattern) 등이 분산 트랜잭션을 구현하는 데 사용되는 대표적인 알고리즘과 패턴이다")]),t._v(" "),a("li",[t._v("자세히 다루기는 내용이 많기 때문에 이후에 따로 정리할 예정이다")])])])}),[],!1,null,null,null);a.default=e.exports}}]);