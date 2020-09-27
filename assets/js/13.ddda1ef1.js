(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{598:function(e,_,v){e.exports=v.p+"assets/img/06-pod(1).68d2b637.png"},599:function(e,_,v){e.exports=v.p+"assets/img/06-pod(2).c20767e4.png"},600:function(e,_,v){e.exports=v.p+"assets/img/06-pod(3).e5be08b0.png"},601:function(e,_,v){e.exports=v.p+"assets/img/06-pod(4).929f5369.png"},602:function(e,_,v){e.exports=v.p+"assets/img/06-pod(5).4bb180ed.png"},603:function(e,_,v){e.exports=v.p+"assets/img/06-pod(6).24ba0e05.png"},604:function(e,_,v){e.exports=v.p+"assets/img/06-pod(7).ee93fb9c.png"},605:function(e,_,v){e.exports=v.p+"assets/img/06-pod(8).03730a6d.png"},606:function(e,_,v){e.exports=v.p+"assets/img/06-pod(9).a284b8a3.png"},607:function(e,_,v){e.exports=v.p+"assets/img/06-pod(10).1922ae0b.png"},728:function(e,_,v){"use strict";v.r(_);var o=v(27),t=Object(o.a)({},(function(){var e=this,_=e.$createElement,o=e._self._c||_;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"_7-pod의-특징"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_7-pod의-특징"}},[e._v("#")]),e._v(" 7.Pod의 특징")]),e._v(" "),o("p",[e._v("Kubernetes Pod 특징은 크게 3가지로 나눌 수 있다.")]),e._v(" "),o("ol",[o("li",[e._v("Container")]),e._v(" "),o("li",[e._v("Label")]),e._v(" "),o("li",[e._v("Node Schedule")])]),e._v(" "),o("h2",{attrs:{id:"_1-container"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-container"}},[e._v("#")]),e._v(" 1. Container")]),e._v(" "),o("p",[e._v("pod 안에는 하나의 독립적인 서비스를 제공할 수 있는 컨테이너들이 있다.")]),e._v(" "),o("p",[e._v("컨테이너들은 서비스가 연결될 수 있도록 Port 가지고 있음")]),e._v(" "),o("p",[e._v("한 컨테이너가 포트를 하나 이상 가질 수 있지만 한 파트에서 컨테이너들끼리 Port가 중복될 수 없다!")]),e._v(" "),o("p",[e._v("두 컨테이너는 하나의 호스트로 묶여있다고 생각하면 됨")]),e._v(" "),o("p",[e._v("컨테이너1에서 컨테이너2로 접근할 때 "),o("code",[e._v("localhost:8080")]),e._v(" 으로 접근할 수 있음")]),e._v(" "),o("p",[o("img",{attrs:{src:v(598),alt:"img"}})]),e._v(" "),o("p",[e._v("▲ Pod 내부 Container1, Container2의 특징")]),e._v(" "),o("hr"),e._v(" "),o("p",[e._v("Pod가 생성될 때 고유의 IP 주소가 할당이 되는데")]),e._v(" "),o("p",[e._v("쿠버네티스 클러스터 내에서만 할당된 IP에 접근을 할 수 있음")]),e._v(" "),o("ul",[o("li",[e._v("외부에서는 접근할 수 없음")])]),e._v(" "),o("p",[o("img",{attrs:{src:v(599),alt:"img"}})]),e._v(" "),o("p",[e._v("▲ Kubernetes Cluster IP는 외부에서 접근할 수 없음")]),e._v(" "),o("p",[e._v("만약 Pod에 문제가 생기면 시스템이 문제를 감지해서 Pod를 자동으로 삭제하고")]),e._v(" "),o("p",[e._v("재생성하는데 이때 IP주소는 재생성된다. ("),o("strong",[e._v("휘발성임!")]),e._v(")")]),e._v(" "),o("hr"),e._v(" "),o("p",[e._v("이런 pod를 생성하는 yaml 파일 내용을 보면")]),e._v(" "),o("p",[o("img",{attrs:{src:v(600),alt:"img"}})]),e._v(" "),o("p",[e._v("▲ Container 생성 yaml 파일")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("Pod name")]),e._v(": pod-1")]),e._v(" "),o("li",[o("code",[e._v("containers")]),e._v("에 container1과 container2를 만들 것")]),e._v(" "),o("li",[o("code",[e._v("container1")]),e._v("은 이미지가 p8000이라는 이름이고 8000번 포트로 오픈되어있음")]),e._v(" "),o("li",[o("code",[e._v("container2")]),e._v("는 이미지가 p8080이라는 이름이고 8080번 포트로 오픈되어있음")])]),e._v(" "),o("h2",{attrs:{id:"_2-label"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2-label"}},[e._v("#")]),e._v(" 2. Label")]),e._v(" "),o("p",[e._v("라벨은 "),o("code",[e._v("pod")]),e._v("뿐만아니라 모든 Object에 달 수 있는데 Pod에서 가장 많이 사용 됨")]),e._v(" "),o("p",[e._v("라벨을 사용하는 이유는 목적에 따라 Object를 분류하고")]),e._v(" "),o("p",[e._v("분류된 Object들만 따로 골라서 연결하기 위해서이다.")]),e._v(" "),o("p",[e._v("라벨의 구성은 Key와 Value가 한쌍이고 한 Pod에는 여러개의 Label을 달 수 있음")]),e._v(" "),o("p",[o("img",{attrs:{src:v(601),alt:"img"}})]),e._v(" "),o("p",[e._v("▲ Label의 구성")]),e._v(" "),o("p",[e._v("6개의 Pod가 있는데 Label을 확인해보자.")]),e._v(" "),o("p",[o("code",[e._v("Pod1")]),e._v("은 Key가 type이고 Value가 Web이다.")]),e._v(" "),o("p",[e._v("web이라고 붙어있는 Label에 위치가 'lo' 라고 표현되어 있는데")]),e._v(" "),o("p",[e._v("하나는 Pod1의 dev 위치, 다른 하나는 Pod4 production 위치에 있다.")]),e._v(" "),o("p",[e._v("한마디로 web/db/server 타입이 각각 개발환경과 상용환경에 구성이 되어있는 것!")]),e._v(" "),o("p",[e._v("한쌍은 다른 한쌍은 상용에서 돌아가는 Pod(Pod4~6)")]),e._v(" "),o("p",[e._v("이상황에 만약 웹 개발자가 web 화면만 보고 싶을 경우!")]),e._v(" "),o("p",[e._v("type이 web인 Label이 달린 pod들을 Service에 연결해서")]),e._v(" "),o("p",[e._v("Service에 정보를 웹개발자에게 알려주면 된다.")]),e._v(" "),o("p",[e._v("상용환경을 담당하는 운영자라면")]),e._v(" "),o("p",[e._v("lo:production 라벨의 pod들을 Service에 연결해서 운영자에게 알려주면")]),e._v(" "),o("p",[e._v("각각의 담당자는 자신이 원하는 Pod를 골라서 접속할 수 있다.")]),e._v(" "),o("blockquote",[o("p",[e._v("사용목적에 따라 Label을 잘 달아놓으면"),o("br"),e._v("\n해쉬태크를 붙여서 검색용도를 활용하듯 원하는 용도로 선택해서 사용 가능!")])]),e._v(" "),o("p",[e._v("아래 yaml 파일 내용을 확인해보자.")]),e._v(" "),o("p",[o("img",{attrs:{src:v(602),alt:"img"}})]),e._v(" "),o("p",[e._v("▲ Label 관련 yaml 파일")]),e._v(" "),o("p",[e._v("Pod를 만들 때 labels에 Key와 Value형식으로 값을 넣을 수 있다.")]),e._v(" "),o("p",[o("img",{attrs:{src:v(603),alt:"img"}})]),e._v(" "),o("p",[e._v("▲ Service에서 selector")]),e._v(" "),o("p",[e._v("추후에 Service를 만들 때 selector에 Key-Value를 넣으면 해당 내용과 매칭되는 Label이 붙어있는 Pod에 연결 됨")]),e._v(" "),o("h2",{attrs:{id:"_3-node-schedule"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_3-node-schedule"}},[e._v("#")]),e._v(" 3. Node Schedule")]),e._v(" "),o("p",[e._v("Pod는 결국 여러 Node들 중에 하나의 Node에 올라가야함")]),e._v(" "),o("p",[e._v("그 방법이 "),o("strong",[e._v("Node Schedule")])]),e._v(" "),o("ol",[o("li",[e._v("직접 Node를 선택하는 방법")]),e._v(" "),o("li",[e._v("Kubernetes가 자동으로 연결해주는 방법")])]),e._v(" "),o("h3",{attrs:{id:"⏹3-1-직접-node를-선택"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#⏹3-1-직접-node를-선택"}},[e._v("#")]),e._v(" ⏹3-1. 직접 Node를 선택")]),e._v(" "),o("p",[o("img",{attrs:{src:v(604),alt:"img"}}),o("br"),e._v("\n▲ Node Schedule - 직접 Node 선택")]),e._v(" "),o("p",[e._v("Pod에 Label을 달았던 것 처럼 Node에 Label을 달고 Pod를 만들 때 Node를 지정할 수 있음")]),e._v(" "),o("p",[e._v("yaml파일을 확인해보자.")]),e._v(" "),o("p",[o("img",{attrs:{src:v(605),alt:"img"}}),o("br"),e._v("\n▲ Node 직접 선택 yaml 파일")]),e._v(" "),o("p",[e._v("Pod를 만들 때 nodeSelector라는 항목에 Node label과 매칭되는 Key-Value를 넣으면 된다.")]),e._v(" "),o("h3",{attrs:{id:"⏹3-2-kubernetes가-node-자동-선택"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#⏹3-2-kubernetes가-node-자동-선택"}},[e._v("#")]),e._v(" ⏹3-2. Kubernetes가 Node 자동 선택")]),e._v(" "),o("p",[e._v("Kubernetes의 스케줄러가 판단해서 지정해준다!")]),e._v(" "),o("p",[o("img",{attrs:{src:v(606),alt:"img"}}),o("br"),e._v("\n▲ Kubernetes가 Node를 자동 선택")]),e._v(" "),o("p",[e._v("Node에는 전체 사용가능한 자원량이 있음 (Memory의 CPU가 대표적)")]),e._v(" "),o("p",[e._v("메모리로 예를 들면")]),e._v(" "),o("p",[e._v("node1에는 몇개의 Pod가 들어가있어서 남는 메모리가 1Giga이고")]),e._v(" "),o("p",[e._v("node2에는 3.7Gi가 남은 상태임")]),e._v(" "),o("p",[e._v("Pod를 생성할 때 Pod에서 요구될 resource의 사용량을 명시할 수 있음")]),e._v(" "),o("p",[e._v("그림의 Pod는 2G를 요구한다고 했을 때")]),e._v(" "),o("p",[e._v("Kubernetes가 알아서 node2로 pod를 스케줄링 해줌!")]),e._v(" "),o("p",[e._v("사용량을 넣는 큰 이유중 하나가")]),e._v(" "),o("p",[e._v("만약 사용량을 설정하지 않으면 Pod안에 있는 앱에서 부하가 생길 때 무한정 Node의 자원을 사용하려고 하고")]),e._v(" "),o("p",[e._v("다른 pod들은 자원이 없어서 다같이 죽게된다.")]),e._v(" "),o("p",[e._v("pod를 만들 때 yaml 내용을 보자.")]),e._v(" "),o("p",[o("img",{attrs:{src:v(607),alt:"img"}}),o("br"),e._v("\n▲ Pod 생성 시 resource 할당 yaml 파일")]),e._v(" "),o("p",[e._v("아래 Pod를 만들 때 yaml내용을 보면 Pod에서 사용될 resource를 지정해준다.")]),e._v(" "),o("p",[e._v("requests는 momory 2Gi를 요구한다는 것이고")]),e._v(" "),o("p",[e._v("limits는 최대 허용 메모리가 3Gi라는 내용임.")]),e._v(" "),o("blockquote",[o("p",[e._v("💡 limits에 대해")]),e._v(" "),o("ol",[o("li",[e._v("Memory : 초과시 Pod를 종료!")]),e._v(" "),o("li",[e._v("Cpu : 초과시 request로 낮춤, 종료시키지 않음"),o("br"),e._v(" "),o("strong",[e._v("이유는?")]),o("br"),e._v("\n각 자원에 대한 특성 때문"),o("br"),e._v("\n예를들어 우리가 파일을 복사할 때"),o("br"),e._v("\n하나를 복사하고 있는데 또다른 하나를 복사하면 첫번쨰 파일이 느려지면서 두번째 파일이 복사가 됨"),o("br"),e._v("\n프로세스들이 CPU자원을 쓰는데 있어서 서로 문제를 일으키지 않음!(조금 느려짐)"),o("br"),e._v("\n하지만 파일을 복사하는데 두번째 파일이 첫번째 파일이 쓰는 메모리를 침범한 경우"),o("br"),e._v("\n잘못된 메모리를 참조했다고 하며 프로세스가 종료되는 경우가 있음"),o("br"),e._v("\n메모리는 잘못되면 프로세스간의 치명적인 문제를 일으키기 때문이다."),o("br"),e._v("\n자원의 성격에 따라 kubernetes에서도 다르게 판단하는 것!")])])])])}),[],!1,null,null,null);_.default=t.exports}}]);