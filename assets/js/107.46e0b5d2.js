(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{743:function(e,s,a){"use strict";a.r(s);var r=a(12),t=Object(r.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"messaging-system"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#messaging-system"}},[e._v("#")]),e._v(" Messaging System")]),e._v(" "),s("blockquote",[s("p",[e._v("Kafka를 사용하는 이유와 배경에 대해 공부하며 적은 글입니다. 정확하지 않은 내용이 있을 수 있습니다😊")])]),e._v(" "),s("p",[e._v("웹 서버 Back-End를 구성할 때 대용량의 데이터를 처리하기 위한 성능을 고려해야합니다.")]),e._v(" "),s("p",[e._v("회사에서 수 만건의 메일을 보내거나 수 천건의 푸시 알림을 보내야하려면 웹서버에서 부하를 어떻게 처리하는게 좋을까요!")]),e._v(" "),s("h2",{attrs:{id:"_1-기존-서버의-문제점"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-기존-서버의-문제점"}},[e._v("#")]),e._v(" 1.기존 서버의 문제점")]),e._v(" "),s("p",[e._v("많은 데이터 처리로 인해 대기하는 요청이 쌓이게 되고 서버 성능이 저하되거나 최악의 경우 서버가 다운되는 상황이 발생합니다.")]),e._v(" "),s("p",[e._v("요즘 관심있게 살펴보는 주제가 MSA인데요, MSA에서는 데이터 송수신 방법으로 메시징 시스템을 사용합니다.")]),e._v(" "),s("p",[e._v("메시징 시스템은 Kafka, RabbitMQ, Active MQ, AWS SQS, Java JMS 등이 있는데요.")]),e._v(" "),s("p",[e._v("MSA에서는 시스템 간의 호출이 많기 때문에 서비스간 결합도를 낮추기 위해서, 비동기 요청, 성능, 안정성 등 여러가지 이점이 있어서 메시징 시스템을 사용하게 됩니다.")]),e._v(" "),s("p",[e._v("이 글에서는 Kafka, RabbitMQ를 배우기 전에 알아두면 좋은 전반적인 메시징 시스템에 대해 알아보겠습니다.")]),e._v(" "),s("ol",[s("li",[e._v("용어 정리")])]),e._v(" "),s("p",[e._v('MOM ( Message Oriented Middleware, 메시지 지향 미들웨어 )\n독립된 애플리케이션 간에 데이터를 주고받을 수 있도록 하는 시스템 디자인\n함수 호출, 공유메모리 등의 방식이 아닌, 메시지 교환을 이용하는 중간 계층에 대한 인프라 아키텍쳐 개념\n분산 컴퓨팅이 가능해지며, 서비스간의 결합성이 낮아짐\n비동기로 메시지를 전달하는 것이 특징\nQueue, Broadcast, Multicast 등의 방식으로 메시지 전달\nPub/Sub 구조\n메시지를 발행하는 Publisher(Producer), 메시지를 소비하는 Subscribe(Consumer)로 구성\nMessage Broker\n메시지 처리 또는 메시지 수신자에게 메시지를 전달하는 시스템이며, 일반적으로 MOM을 기반으로 구축됨\nMQ ( Message Queue, 메시지 큐 )\nMessage Broker와 MOM을 구현한 소프트웨어 ( RabbitMQ, ActiveMQ, kafka 등.. )\nMOM은 메시지 전송 보장을 해야하므로 AMQP를 구현함\nAMQP ( Advanced Message Queueing Protocol )\n메시지를 안정적으로 주고받기 위한 인터넷 프로토콜\n정리하면 흔히 알고 있는 소프트웨어 RabbitMQ, kafka 등은 "AMQP를 구현한 MOM 시스템이다"고 생각하면 되겠습니다.')]),e._v(" "),s("p",[e._v("각 소프트웨어마다 아키텍쳐, 지원하는 기능 등의 차이가 있으므로 장단점이 존재할 수 밖에 없지만요.")]),e._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[e._v("메시징 시스템이란?")])]),e._v(" "),s("p",[e._v('메시징 시스템이라하면, "문자, 이메일 같은 메시지들을 처리하는 시스템인가?"라고 생각할 수 있는데, 꼭 그런건 아닙니다.')]),e._v(" "),s("p",[e._v("로그 데이터, 이벤트 메시지 등 API로 호출할 때 보내는 데이터들을 처리하는 시스템이라고 생각하면 됩니다.")]),e._v(" "),s("p",[e._v("예를 들어, 다음과 같이 자동 메일을 발송 시스템이 있다고 가정하겠습니다.")]),e._v(" "),s("p",[e._v("회원가입을 했을 때, 이메일을 발송하는 MemberService\n주문완료가 되었을 때, 이메일을 발송하는 OrderService\n메일을 실제 발송하는 MailService")]),e._v(" "),s("p",[e._v("이렇게 서비스가 분리되었을 때 프로세스는 다음과 같습니다.")]),e._v(" "),s("p",[e._v("MemberService에서 회원가입, OrderService에서 주문완료 이벤트가 발생\nMessaging Client로 메일 전송에 필요한 데이터( 받는/보내는 사람 이메일 주소, 메시지 제목/내용 등.. )를 API 호출\nMessaging Client에서 MOM을 구현한 소프트웨어(ex. kafka)로 메시지를 생산\nMailService에서 메시지가 존재하는지 구독하고 있다가 메시지가 존재하면 메시지를 소비\nMailService에서 API 정보들을 통해 User에게 메일 발송\n이러한 구조를 Publish/Subscribe 또는 Producer/Consumer라고 합니다.")]),e._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[e._v("장/단점")])]),e._v(" "),s("p",[e._v("위 구조의 장단점은 다음과 같습니다.")]),e._v(" "),s("p",[e._v("장점\n서비스간의 결합성이 낮아지므로 각자의 비즈니스 로직에만 집중\n메시지 처리 방식은 Message Broker에 위임\n각 서비스는 Client를 통해 메시지를 보내고 받기만 하면 됨\n각 서비스는 비동기 방식으로 메시지를 보내기만 하면, Message Broker에서 순서 보장, 메시지 전송 보장등을 처리\n메시징 시스템이 잠깐 다운되어도 각 서비스에는 직접적인 영향을 미치지 않음\n단점\nMessage Broker 구축, 예를 들면 kafka 클러스터 구축에 필요한 금전, 인적자원에 대한 비용\n비동기의 양면성 - 정말 메시지가 잘 전달되었는가?\n함수 호출, 공유메모리 사용 방식보다 메시징 시스템을 사용했을 때 호출 구간이 늘어나므로 네트워크 비용 발생")]),e._v(" "),s("p",[e._v("이상으로 메시징 시스템에 대해 알아보았습니다.")]),e._v(" "),s("h4",{attrs:{id:"reference"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[e._v("#")]),e._v(" Reference")]),e._v(" "),s("p",[e._v("https://stackoverflow.com/questions/13202200/message-broker-vs-mom-message-oriented-middleware/36999850#36999850")]),e._v(" "),s("p",[e._v("https://victorydntmd.tistory.com/343")]),e._v(" "),s("p",[e._v("https://kji6252.github.io/2015/12/18/message-quere/")])])}),[],!1,null,null,null);s.default=t.exports}}]);