(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{407:function(t,e,a){"use strict";a.r(e);var s=a(27),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"tistory에-정리했다"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tistory에-정리했다"}},[t._v("#")]),t._v(" Tistory에 정리했다!")]),t._v(" "),a("p",[t._v("https://dev-youngjun.tistory.com/40")]),t._v(" "),a("blockquote",{staticStyle:{"font-size":"1.12em"},attrs:{"data-ke-style":"style3"}},[a("b",[t._v("Qwiklabs GCP Essentials 실습 목차")]),a("br"),a("a",{attrs:{href:"https://dev-youngjun.tistory.com/37?category=891632"}},[t._v("(1) 2020/04/11 - [GCP] - GCP Essentials - Qwiklabs 실습 개요")]),a("br"),a("a",{attrs:{href:"https://dev-youngjun.tistory.com/38?category=891632"}},[t._v("(2) 2020/04/12 - [GCP] - GCP Essentials - 가상 머신 만들기 실습")]),a("br"),a("a",{attrs:{href:"https://dev-youngjun.tistory.com/39",target:"_blank",rel:"noopener"}},[t._v("(3) 2020/04/13 - [GCP] - GCP Essentials - Cloud Shell 및 gcloud 시작하기")]),a("br"),t._v("(4) 2020/04/14 - [GCP] - GCP Essentials - Kubernetes Engine 사용하기")]),t._v(" "),a("p",[a("span",[t._v("Qwiklabs의 GCP Essentials Quest를 수강하며 작성한 포스팅이다.")]),a("span")]),t._v(" "),a("p",[t._v('[##_Image|kage@lWzdG/btqDj13n3FC/urJYT7SLW7gUu4E8feWIfk/img.png|alignCenter|data-filename="(4)Kubernetes-Engine(0).png" data-origin-width="177" data-origin-height="192" width="217" height="234"|GCP Essentials  Kubernetes Engine||_##]')]),t._v(" "),a("p",[a("span",[t._v("네 번째 실습인 ")]),a("span",{staticStyle:{"background-color":"#f6e199"}},[a("b",[t._v("[Kubernetes Engine 사용하기]")])]),a("span",[a("span",[t._v(" ")]),t._v("Quest를 실습해보자.")]),a("br"),a("br")]),t._v(" "),a("p",[t._v('[##_Image|kage@xpqmg/btqDn0O14qg/mV9GwyyaYSY8yHz3IHef5k/img.png|alignCenter|data-filename="GCP가상머신만들기(1).png" data-origin-width="959" data-origin-height="86" width="805" height="73"|Google Cloud Self-Paced Labs 대표 사진||_##]')]),t._v(" "),a("h2",{attrs:{"data-ke-size":"size26"}},[a("span",{staticStyle:{"background-color":"#99cefa"}},[t._v("개요")])]),t._v(" "),a("p",{staticStyle:{"font-size":"1.12em"},attrs:{"data-ke-size":"size16"}},[a("b",[t._v("Google Kubernetes Engine")]),t._v("에서는?")]),t._v(" "),a("ul",{staticStyle:{"list-style-type":"disc"},attrs:{"data-ke-list-type":"disc"}},[a("li",[a("span",[a("span",{staticStyle:{color:"#333333"}},[t._v("GKE(")]),a("a",{attrs:{href:"https://cloud.google.com/kubernetes-engine/"}},[t._v("Google Kubernetes Engine")]),a("span",{staticStyle:{color:"#333333"}},[t._v(")")])])]),t._v(" "),a("li",[a("span",[t._v("Google 인프라를 사용하여 컨테이너식 애플리케이션을 배포, 관리 및 확장할 수 있는 관리형 환경을 제공")])]),t._v(" "),a("li",[a("span",[t._v("Kubernetes Engine 환경은"),a("span",[t._v(" ")]),a("a",{attrs:{href:"https://cloud.google.com/kubernetes-engine/docs/concepts/cluster-architecture"}},[t._v("컨테이너 클러스터")]),t._v("를 형성하도록 그룹화된 여러 머신("),a("a",{attrs:{href:"https://cloud.google.com/compute"}},[t._v("Google Compute Engine")]),a("span",[t._v(" ")]),t._v("인스턴스 등)으로 구성되어 있다. ")])])]),t._v(" "),a("p",{staticStyle:{"font-size":"1.12em"},attrs:{"data-ke-size":"size16"}},[a("b",[a("span",[t._v("실습할 내용")])])]),t._v(" "),a("ul",{staticStyle:{"list-style-type":"disc"},attrs:{"data-ke-list-type":"disc"}},[a("li",[a("span",[a("span",{staticStyle:{"background-color":"#9feec3"}},[t._v("GKE")]),t._v("를 사용하여 "),a("b",[t._v("직접 컨테이너를 생성하고 애플리케이션을 배포")])])])]),t._v(" "),a("h3",[t._v("Kubernetes Engine을 사용한 클러스터 조정")]),t._v(" "),a("ul",{staticStyle:{"list-style-type":"disc"},attrs:{"data-ke-list-type":"disc"}},[a("li",[t._v("Kubernetes Engine 클러스터는"),a("span",[t._v(" ")]),a("a",{attrs:{href:"https://kubernetes.io/"}},[t._v("Kubernetes")]),a("span",[t._v(" ")]),t._v("오픈소스 클러스터 관리 시스템을 기반으로 한다.")]),t._v(" "),a("li",[t._v("Kubernetes는 컨테이너 클러스터와 상호작용할 수 있는 메커니즘을 제공한다.")]),t._v(" "),a("li",[t._v("Kubernetes 명령어와 리소스를 사용하면 "),a("b",[t._v("애플리케이션을 배포 및 관리하고 관리 작업을 수행하고 정책을 설정하며 배포된 작업의 상태를 모니터링")]),t._v("할 수 있습니다.")])]),t._v(" "),a("p",[a("span",{staticStyle:{"background-color":"#f6e199"}},[a("b",[t._v("Kubernetes")])]),t._v("는 널리 쓰이는 "),a("span",{staticStyle:{"background-color":"#9feec3"}},[t._v("Google 서비스와 동일한 설계 원칙")]),t._v("을 따르고 있어 자동 관리, 애플리케이션 컨테이너의 모니터링 및 활성 여부 조사, 자동 확장, 순차적 업데이트와 같은 "),a("span",{staticStyle:{"background-color":"#9feec3"}},[t._v("이점을 그대로 누릴 수 있다")]),t._v(". 10년 이상 컨테이너를 통해 프로덕션 작업을 실행해 온 Google의 경험이 녹아든 기술을 활용하여 컨테이너 클러스터에서 애플리케이션을 실행할 수 있다.")]),t._v(" "),a("h3",[t._v("Google Cloud Platform에서 사용하는 Kubernetes")]),t._v(" "),a("p",[a("b",[t._v("Kubernetes Engine 클러스터")]),t._v("를 실행하면 Google Cloud Platform이 제공하는 "),a("span",{staticStyle:{"background-color":"#9feec3"}},[t._v("고급 클러스터 관리 기술의 이점도 활용")]),t._v("할 수 있다. 예를 들면 다음과 같다.")]),t._v(" "),a("ul",[a("li",[t._v("Compute Engine 인스턴스를 위한"),a("span",[t._v(" ")]),a("a",{attrs:{href:"https://cloud.google.com/compute/docs/load-balancing-and-autoscaling"}},[t._v("부하 분산")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://cloud.google.com/kubernetes-engine/docs/node-pools"}},[t._v("노드 풀")]),t._v("로 클러스터 안에 하위 노드 집합을 지정하여 유연성 강화")]),t._v(" "),a("li",[t._v("클러스터에서 노드 인스턴스 개수의"),a("span",[t._v(" ")]),a("a",{attrs:{href:"https://cloud.google.com/kubernetes-engine/docs/cluster-autoscaler"}},[t._v("자동 확장")])]),t._v(" "),a("li",[t._v("클러스터에서 노드 소프트웨어의"),a("span",[t._v(" ")]),a("a",{attrs:{href:"https://cloud.google.com/kubernetes-engine/docs/node-auto-upgrade"}},[t._v("자동 업그레이드")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://cloud.google.com/kubernetes-engine/docs/how-to/node-auto-repair"}},[t._v("노드 자동 복구")]),t._v("로 노드 상태 및 가용성 유지 관리")]),t._v(" "),a("li",[t._v("Stackdriver를 통한"),a("span",[t._v(" ")]),a("a",{attrs:{href:"https://cloud.google.com/kubernetes-engine/docs/how-to/logging"}},[t._v("로깅 및 모니터링")]),t._v("으로 클러스터 현황에 대한 가시성 확보")])]),t._v(" "),a("p",[t._v("이제 Kubernetes 관련 기본 사항을 파악했으므로, Kubernetes Engine을 사용하여 컨테이너식 애플리케이션을 배포하는 방법을 배워 보자.")]),t._v(" "),a("p",[t._v(" ")]),t._v(" "),a("h2",{attrs:{id:"step3","data-ke-size":"size26"}},[a("span",{staticStyle:{"background-color":"#99cefa"}},[t._v("설정 및 요구사항")])]),t._v(" "),a("p",[a("span",{staticStyle:{"background-color":"#dddddd"}},[a("span",{staticStyle:{color:"#333333"}},[t._v("이전 실습 때 했던 설정이다! 필요하면 열어보자.")])])]),t._v(" "),a("div",{attrs:{"data-ke-type":"moreLess","data-text-more":"더보기","data-text-less":"닫기"}},[a("a",{staticClass:"btn-toggle-moreless"},[t._v("더보기")]),t._v(" "),a("div",{staticClass:"moreless-content"},[a("p",[a("span",{staticStyle:{"background-color":"#f6e199"}},[a("b",[t._v("실습 시작 버튼을 클릭하기 전에")])])]),t._v(" "),a("p",[t._v(" ")]),t._v(" "),a("p",[t._v("다음 안내를 확인하자!")]),t._v(" "),a("ul",[a("li",[t._v("실습에는 시간 제한이 있으며 일시 중지할 수 없다.")]),t._v(" "),a("li",[t._v("실습 시작을 클릭하면 타이머가 시작되고 Cloud 리소스를 사용할 수 있는 시간이 얼마나 남았는지 표시된다.")])]),t._v(" "),a("p",[t._v("Qwiklabs 실습을 통해 시뮬레이션이나 데모 환경이 아닌"),a("span",[t._v(" ")]),a("b",[t._v("실제 클라우드 환경에서 직접 실습 활동을 진행")]),t._v("할 수 있다. 실습 시간 동안 Google Cloud Platform에 로그인하고 액세스 하는 데 사용할 수 있는"),a("span",[t._v(" ")]),a("b",[t._v("새로운 임시 사용자 인증 정보가 제공된다")]),t._v(".")]),t._v(" "),a("p",[t._v(" ")]),t._v(" "),a("p",[a("span",[a("b",[t._v("준비할 사항")])])]),t._v(" "),a("p",[t._v(" ")]),t._v(" "),a("p",[t._v("이 실습을 완료하려면 다음을 준비해야 한다.")]),t._v(" "),a("ul",[a("li",[t._v("표준 인터넷 브라우저(Chrome 브라우저 권장)")]),t._v(" "),a("li",[t._v("실습을 완료할 시간")])]),t._v(" "),a("blockquote",{attrs:{"data-ke-style":"style2"}},[a("b",[t._v("참고:")]),a("span",[t._v(" ")]),t._v("이미 개인용 GCP 계정이나 프로젝트가 있어도 이 실습에서는 사용하지 마세요!")]),t._v(" "),a("p",[t._v(" ")]),t._v(" "),a("p",[a("span",{staticStyle:{"background-color":"#f6e199"}},[a("b",[t._v("실습을 시작하고 콘솔에 로그인하는 방법")])])]),t._v(" "),a("p",[t._v(" ")]),t._v(" "),a("p",[t._v("(1)"),a("span",[t._v(" ")]),a("b",[t._v("실습 시작")]),a("span",[t._v(" ")]),t._v("버튼을 클릭합니다. 실습 비용을 결제해야 하는 경우 결제 수단을 선택할 수 있는 팝업이 열린다. 왼쪽에 있는 패널에서 이 실습에 사용해야 하는 임시 사용자 인증 정보를 확인할 수 있다.")]),t._v('\n[##_Image|kage@vcmne/btqDk6JYhJC/0HENoASSWnbF11uuR077c0/img.png|alignCenter|srcset="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FcptVix%2FbtqDmV1zixH%2FhdLkf0BGoOcf5yj1UI1XK1%2Fimg.png" data-origin-width="272" data-origin-height="337"|실습 시작을 누르면 로그인 정보를 준다.||_##]\n'),a("p",[t._v(" ")]),t._v(" "),a("p",[t._v("(2) 사용자 이름을 복사한 다음"),a("span",[t._v(" ")]),a("b",[t._v("Google 콘솔 열기")]),t._v("를 클릭하자. 실습에서 리소스가 실행되며"),a("span",[t._v(" ")]),a("b",[t._v("계정 선택")]),a("span",[t._v(" ")]),t._v("페이지를 표시하는 다른 탭이 열린다.")]),t._v(" "),a("blockquote",{attrs:{"data-ke-style":"style2"}},[a("b",[t._v("팁:")]),a("span",[t._v(" ")]),t._v("두 탭은 각각 별도의 창에 나란히 여세요.")]),t._v('\n[##_Image|kage@lcqVA/btqDj3fPR20/OETwAyQ9pxHTvzu6fmNcx1/img.png|alignCenter|srcset="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FphBFx%2FbtqDkzk75MW%2Fd83ZFpWOkskh3rSgwm9LL0%2Fimg.png" width="384" height="457" data-origin-width="474" data-origin-height="564"|로그인 정보에 위에서 받은 정보를 입력하자||_##]\n'),a("p",[t._v(" ")]),t._v(" "),a("p",[t._v("(3) 만약 계정 선택 페이지에 로그인 되어있다면"),a("span",[t._v(" ")]),a("b",[t._v("다른 계정 사용")]),t._v("을 클릭!")]),t._v(" "),a("p",[t._v(" ")]),t._v(" "),a("p",[t._v("(4) 로그인 페이지가 위와 같이 열리면 연결 세부 정보"),a("b",[a("span",[t._v(" ")]),t._v("패널에서 복사한 사용자 이름과 비밀번호를 붙여 넣자.")])]),t._v(" "),a("p",[t._v(" ")]),t._v(" "),a("blockquote",{attrs:{"data-ke-style":"style2"}},[a("b",[t._v("중요:")]),a("span",[t._v(" ")]),t._v("연결 세부 정보 패널에 표시된 사용자 인증 정보를 사용해야 합니다. 본인의 Qwiklabs 사용자 인증 정보를 사용하지 마세요. 이미 개인용 GCP 계정이 있어도 이 실습에서 사용하지 마세요"),a("span",{staticStyle:{color:"#ee2323"}},[t._v("(요금 청구 방지)")]),t._v(".")]),t._v(" "),a("p",[t._v("(5) 이후에 표시되는 페이지를 클릭하여 넘기자.")]),t._v(" "),a("ul",[a("li",[t._v("이용약관에 동의")]),t._v(" "),a("li",[t._v("임시 계정이므로 복구 옵션이나 2단계 인증을 추가하지 않음(CONFIRM)")]),t._v(" "),a("li",[t._v("무료 평가판을 신청하지 않는다.")])]),t._v('\n[##_Image|kage@bOBhgp/btqDmWlZXYN/z3L3kJyQH7PajYzAU54k9k/img.png|alignCenter|srcset="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FdmAmqt%2FbtqDmm6dZ4g%2FrbssrtPSzABGiJJ4TrEvvk%2Fimg.png" data-origin-width="763" data-origin-height="412"|이용약관과 복구 옵션은 스킵한다.(CONFIRM을 누르면 된다)||_##]\n'),a("p",[t._v(" ")]),t._v(" "),a("p",[t._v("잠시 후"),a("span",[t._v(" ")]),a("span",[t._v("GCP Console")]),t._v("이 이 탭에서 열린다.")]),t._v('\n[##_Image|kage@cBhZ5Y/btqDn1mTqoC/8AghnbjqppQejgUINIWYWk/img.png|alignCenter|srcset="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FcJNBB0%2FbtqDn1twPeA%2FWfHsTBJnGlQRw9jsbWzdx1%2Fimg.png" width="426" height="482" data-origin-width="571" data-origin-height="648"|GCP Console에서 환영해준다.||_##]\n'),a("p",[t._v(" ")]),t._v(" "),a("p",[t._v("왼쪽 상단에 탐색 메뉴를 클릭해서 메뉴를 살펴보자!")]),t._v('\n[##_Image|kage@bwh6nB/btqDmnKWo86/4o3783ASPx0jxoCT7H2KD0/img.png|alignCenter|srcset="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FcZXiO0%2FbtqDnwUPR16%2F9O3cakOl0UsldJiUo92nXk%2Fimg.png" data-origin-width="662" data-origin-height="220"|탐색 메뉴는 좌측 상단에 있다.||_##]')])]),t._v(" "),a("h2",{attrs:{id:"step3"}},[a("span",{staticStyle:{"background-color":"#99cefa"}},[t._v("Google Cloud Shell 활성화하기")])]),t._v(" "),a("p",[a("span",{staticStyle:{"background-color":"#dddddd"}},[a("span",{staticStyle:{color:"#333333"}},[t._v("이전 실습 때 했던 설정이다! 필요하면 열어보자.")])])]),t._v(" "),a("div",{attrs:{"data-ke-type":"moreLess","data-text-more":"더보기","data-text-less":"닫기"}},[a("a",{staticClass:"btn-toggle-moreless"},[t._v("더보기")]),t._v(" "),a("div",{staticClass:"moreless-content"},[a("p",[a("span",{staticStyle:{"background-color":"#f6e199"}},[a("b",[t._v("Google Cloud Shell은?")])])]),t._v(" "),a("blockquote",{attrs:{"data-ke-style":"style3"}},[t._v("다양한 개발 도구가 탑재된 가상 머신")]),t._v(" "),a("ul",[a("li",[t._v("5GB의 영구 홈 디렉터리를 제공하며 Google Cloud에서 실행된다.")]),t._v(" "),a("li",[t._v("Google Cloud Shell을 사용하면 명령줄을 통해 GCP 리소스에 액세스 할 수 있다.")])]),t._v(" "),a("p",[t._v(" ")]),t._v(" "),a("p",[t._v("(1) GCP Console의 오른쪽 상단 툴바에서"),a("span",[t._v(" ")]),a("b",[t._v("Cloud Shell 열기")]),a("span",[t._v(" ")]),t._v("버튼을 클릭하자.")]),t._v('\n[##_Image|kage@7lZCf/btqDnw1IEh2/eSebnjWwZgKlnFRei0FhG1/img.png|alignCenter|srcset="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FCPOY1%2FbtqDk5RHJBc%2F5DyEyVBdZoNbKp97rKC3sk%2Fimg.png" data-origin-width="902" data-origin-height="324"|오른쪽 상단 툴바에서 Console을 열 수 있다.||_##]\n'),a("p",[t._v(" ")]),t._v(" "),a("p",[a("span",[t._v("(2)"),a("span",[t._v(" ")])]),a("b",[t._v("Continue를")]),a("span",[a("span",[t._v(" ")]),t._v("클릭하자.")])]),t._v('\n[##_Image|kage@XaE5r/btqDj3thiqp/7NDNKJYVLJR8dI8KFKCSJk/img.png|alignCenter|srcset="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2F1zd51%2FbtqDml0yvQ9%2Fcv1nyGM4ceoNpEOmu56W71%2Fimg.png" data-origin-width="648" data-origin-height="276"|환경을 프로비저닝하고 연결하는 데 약간의 시간이 걸린다.||_##]\n'),a("p",[a("span",[t._v("연결되면 이미 인증되었으며 프로젝트는"),a("span",[t._v(" ")]),a("b",[t._v("PROJECT_ID ")]),t._v("PROJECT_ID로 설정된다.")])]),t._v(" "),a("p",[t._v(" ")]),t._v('\n[##_Image|kage@m3hVI/btqDnxl2avf/9Wmcq5swVlrdQ7fkIMLqbK/img.png|alignCenter|srcset="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2Fbr1FnD%2FbtqDnxzrlQ3%2F6eqVuu5yDj873KrR1iBqZ1%2Fimg.png" data-origin-width="963" data-origin-height="268"|프로젝트 ID가 보인다!||_##]')])]),t._v(" "),a("h2",{attrs:{"data-ke-size":"size26"}},[a("span",{staticStyle:{"background-color":"#99cefa"}},[t._v("gcloud란?")])]),t._v(" "),a("p",[a("span",{staticStyle:{"background-color":"#dddddd"}},[a("span",{staticStyle:{color:"#333333"}},[t._v("이전 포스팅에서 공부했던 내용이다! 까먹었다면 다시 확인해보자.")])])]),t._v(" "),a("div",{attrs:{"data-ke-type":"moreLess","data-text-more":"더보기","data-text-less":"닫기"}},[a("a",{staticClass:"btn-toggle-moreless"},[t._v("더보기")]),t._v(" "),a("div",{staticClass:"moreless-content"},[a("p",[a("span",[a("b",[t._v("gcloud는?")])])]),t._v(" "),a("blockquote",{attrs:{"data-ke-style":"style3"}},[a("span",[t._v(" Google Cloud Platform의 명령줄 도구")])]),t._v(" "),a("p",[a("span",[a("b",[t._v("Cloud Shell에 사전 설치")]),t._v("되어 있으며"),a("span",[t._v(" ")]),a("span",{staticStyle:{color:"#ee2323"}},[t._v("탭 자동 완성을 지원")]),t._v("한다!")])]),t._v(" "),a("p",[t._v(" ")]),t._v(" "),a("p",[a("span",[t._v("가장 간단한 명령어를 살펴보자.")])]),t._v(" "),a("p",[t._v(" ")]),t._v(" "),a("p",[a("b",[a("span",[t._v("(1) 사용 중인 계정 이름 목록 확인")])])]),t._v(" "),a("pre",{staticClass:"go",staticStyle:{overflow:"auto",margin:"0px",padding:"0px",color:"#555555","font-style":"normal","font-variant-ligatures":"normal","font-variant-caps":"normal","font-weight":"400","letter-spacing":"normal",orphans:"2","text-align":"start","text-indent":"0px","text-transform":"none",widows:"2","word-spacing":"0px","-webkit-text-stroke-width":"0px","text-decoration-style":"initial","text-decoration-color":"initial"},attrs:{id:"code_1586640402366","data-ke-language":"go","data-ke-type":"codeblock"}},[a("code",[t._v("gcloud auth list")])]),t._v(" "),a("p",[a("b",[t._v("(2) 프로젝트 ID 목록 확인")])]),t._v(" "),a("pre",{staticClass:"go",staticStyle:{overflow:"auto",margin:"0px",padding:"0px",color:"#555555","font-style":"normal","font-variant-ligatures":"normal","font-variant-caps":"normal","font-weight":"400","letter-spacing":"normal",orphans:"2","text-align":"start","text-indent":"0px","text-transform":"none",widows:"2","word-spacing":"0px","-webkit-text-stroke-width":"0px","text-decoration-style":"initial","text-decoration-color":"initial"},attrs:{id:"code_1586640402366","data-ke-language":"go","data-ke-type":"codeblock"}},[a("code",[t._v("glcoud config list project")])]),t._v('\n[##_Image|kage@qQimR/btqDogxkYip/f2s4CoKF7IJkXlwiuggQ61/img.png|alignCenter|srcset="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FIEck9%2FbtqDljvmG9y%2FOkX5Ow2sBb2tqM4CUH0bqk%2Fimg.png" data-origin-width="0" data-origin-height="0"|실제로 Shell에서 실행하면 다음과 같이 출력된다.||_##]\n'),a("blockquote",{attrs:{"data-ke-style":"style3"}},[a("b",[t._v("gcloud")]),a("span",[t._v(" ")]),t._v("관련 전체 설명서는"),a("span",[t._v(" ")]),a("a",{attrs:{href:"https://cloud.google.com/sdk/gcloud"}},[t._v("Google Cloud gcloud 개요에서")]),a("span",[t._v(" ")]),t._v("확인할 수 있다.")])])]),t._v(" "),a("p",[t._v(" ")]),t._v(" "),a("h2",{attrs:{id:"step4","data-ke-size":"size26"}},[a("span",{staticStyle:{"background-color":"#99cefa"}},[t._v("기본 컴퓨팅 영역 설정")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://cloud.google.com/compute/docs/regions-zones/#available"}},[t._v("컴퓨팅 영역")]),t._v("이란 클러스터와 리소스가 존재하는 대략적인 지역적 위치입니다. 예를 들어 us-central1-a는 us-central1 리전의 영역입니다.")]),t._v(" "),a("p",[t._v("Cloud Shell에서 새 세션을 시작하고, 다음 명령어를 실행하여 기본 컴퓨팅 영역을"),a("span",[t._v(" ")]),t._v("us-central1-a로 설정합니다.")]),t._v(" "),a("pre",{staticClass:"go",attrs:{id:"code_1586640473231","data-ke-language":"go","data-ke-type":"codeblock"}},[a("code",[t._v("gcloud config set compute/zone us-central1-a")])]),t._v(" "),a("p",[a("span",[t._v("다음이 출력됩니다.")])]),t._v(" "),a("pre",{staticClass:"go",attrs:{id:"code_1586640483657","data-ke-language":"go","data-ke-type":"codeblock"}},[a("code",[t._v("Updated property [compute/zone].")])]),t._v(" "),a("p",[t._v("<결과넣기/ 위에 지울지 말지 결정>")]),t._v(" "),a("h2",{attrs:{id:"step5"}},[a("span",{staticStyle:{"background-color":"#99cefa"}},[t._v("Kubernetes Engine 클러스터 만들기")])]),t._v(" "),a("p",[t._v(" ")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://cloud.google.com/kubernetes-engine/docs/concepts/cluster-architecture"}},[t._v("클러스터")]),t._v("는 1개 이상의"),a("span",[t._v(" ")]),t._v("클러스터 마스터"),a("span",[t._v(" ")]),t._v("머신과"),a("span",[t._v(" ")]),t._v("노드라는 다수의 작업자 머신으로 구성됩니다. 노드란 클러스터를 구성하기 위해 필요한 Kubernetes 프로세스를 실행하는"),a("span",[t._v(" ")]),a("a",{attrs:{href:"https://cloud.google.com/compute/docs/instances/"}},[t._v("Compute Engine VM(가상 머신) 인스턴스")]),t._v("입니다.")]),t._v(" "),a("p",[t._v(" ")]),t._v(" "),a("p",[t._v("클러스터를 생성하려면 다음과 같은 명령어를 실행합니다. 이때"),a("span",[t._v(" ")]),t._v("[CLUSTER-NAME]을 내가 선택한 클러스터 이름으로 대체해야 합니다(예:"),a("span",[t._v(" ")]),t._v("my-cluster). 클러스터 이름은 문자로 시작하고 영숫자로 끝나야 하며 40자를 초과할 수 없습니다.")]),t._v(" "),a("pre",{staticClass:"go",attrs:{id:"code_1586640522343","data-ke-language":"go","data-ke-type":"codeblock"}},[a("code",[t._v("gcloud container clusters create [CLUSTER-NAME]")])]),t._v(" "),a("p",[a("span",[t._v("표시되는 경고는 모두 무시해도 괜찮습니다. 클러스터 생성이 완료되는 데는 몇 분이 걸릴 수 있습니다. 잠시 후 다음과 비슷한 결과가 표시됩니다.")])]),t._v(" "),a("p",[t._v(" ")]),t._v(" "),a("p",[a("span",[t._v("<결과넣기>")])]),t._v(" "),a("p",[t._v(" ")]),t._v(" "),a("p",[a("span",[a("b",[t._v("내 진행 상황 확인하기")]),a("span",[t._v("를 클릭하여 목표를 확인합니다.")])])]),t._v(" "),a("p",[t._v(" ")]),t._v(" "),a("p",[t._v("<진행상태 OK 넣기>")]),t._v(" "),a("p",[t._v(" ")]),t._v(" "),a("h2",{attrs:{id:"step6","data-ke-size":"size26"}},[a("span",{staticStyle:{"background-color":"#99cefa"}},[t._v("클러스터의 사용자 인증 정보 얻기")])]),t._v(" "),a("p",[t._v("클러스터를 만든 후 클러스터와 상호작용하려면 사용자 인증 정보를 얻어야 합니다.")]),t._v(" "),a("p",[t._v(" ")]),t._v(" "),a("p",[t._v("클러스터를 인증하려면 다음 명령어를 실행합니다. 이때"),a("span",[t._v(" ")]),t._v("[CLUSTER-NAME]을 내 클러스터 이름으로 대체해야 합니다.")]),t._v(" "),a("pre",{staticClass:"go",attrs:{id:"code_1586640597684","data-ke-language":"go","data-ke-type":"codeblock"}},[a("code",[t._v("gcloud container clusters get-credentials [CLUSTER-NAME]")])]),t._v(" "),a("p",[a("span",[t._v("다음과 비슷한 결과가 표시됩니다.")])]),t._v(" "),a("p",[t._v(" ")]),t._v(" "),a("p",[a("span",[t._v("<결과 넣기>")])]),t._v(" "),a("h2",{attrs:{id:"step7","data-ke-size":"size26"}},[a("span",{staticStyle:{"background-color":"#99cefa"}},[t._v("클러스터에 애플리케이션 배포하기")])]),t._v(" "),a("p",[t._v("클러스터가 생성되었으므로 이제 "),a("a",{attrs:{href:"https://cloud.google.com/kubernetes-engine/docs/concepts/kubernetes-engine-overview"}},[t._v("컨테이너식 애플리케이션")]),t._v("을 배포할 수 있습니다. 이번 실습에서는 hello-app을 클러스터에서 실행합니다.")]),t._v(" "),a("p",[t._v(" ")]),t._v(" "),a("p",[t._v("Kubernetes Engine에서는 Kubernetes 객체를 사용해 클러스터의 리소스를 생성하고 관리합니다. 웹 서버와 같은 상태 비추적 애플리케이션을 배포할 때는 Kubernetes에서"),a("span",[t._v(" ")]),a("a",{attrs:{href:"https://kubernetes.io/docs/concepts/workloads/controllers/deployment/"}},[t._v("배포")]),a("span",[t._v(" ")]),t._v("객체를 사용합니다."),a("span",[t._v(" ")]),a("a",{attrs:{href:"https://kubernetes.io/docs/concepts/services-networking/service/"}},[t._v("서비스")]),a("span",[t._v(" ")]),t._v("객체는 인터넷에서 애플리케이션에 액세스하기 위한 규칙과 부하 분산을 정의합니다.")]),t._v(" "),a("p",[t._v(" ")]),t._v(" "),a("p",[t._v("Cloud Shell에서 다음"),a("span",[t._v(" ")]),a("a",{attrs:{href:"https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#create"}},[t._v("kubectl create")]),a("span",[t._v(" ")]),t._v("명령어를 실행하여"),a("span",[t._v(" ")]),t._v("hello-app"),a("span",[t._v(" ")]),t._v("컨테이너 이미지에서 새 배포"),a("span",[t._v(" ")]),t._v("hello-server를 생성합니다.")]),t._v(" "),a("pre",{staticClass:"go",attrs:{id:"code_1586640635541","data-ke-language":"go","data-ke-type":"codeblock"}},[a("code",[t._v("kubectl create deployment hello-server --image=gcr.io/google-samples/hello-app:1.0")])]),t._v(" "),a("p",[a("span",[t._v("다음과 같은 결과가 표시됩니다.")])]),t._v(" "),a("p",[t._v(" ")]),t._v(" "),a("p",[a("span",[t._v("<결과추가>")]),a("span")]),t._v(" "),a("p",[t._v(" ")]),t._v(" "),a("p",[t._v(" ")]),t._v(" "),a("p",[t._v("이 Kubernetes 명령어를 사용하면"),a("span",[t._v(" ")]),t._v("hello-server를 나타내는 배포 객체가 생성됩니다. 여기서"),a("span",[t._v(" ")]),t._v("--image는 배포할 컨테이너 이미지를 지정합니다. 해당 명령어는"),a("span",[t._v(" ")]),a("a",{attrs:{href:"https://cloud.google.com/container-registry/docs"}},[t._v("Google Container Registry")]),a("span",[t._v(" ")]),t._v("버킷에서 예시 이미지를 가져옵니다.")]),t._v(" "),a("p",[t._v(" ")]),t._v(" "),a("p",[t._v("gcr.io/google-samples/hello-app:1.0은 가져올 특정 이미지 버전을 나타냅니다. 버전이 지정되지 않은 경우 최신 버전이 사용됩니다.")]),t._v(" "),a("p",[t._v(" ")]),t._v(" "),a("p",[t._v("이제 다음의"),a("span",[t._v(" ")]),a("a",{attrs:{href:"https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#expose"}},[t._v("kubectl expose")]),a("span",[t._v(" ")]),t._v("명령어를 실행하여 Kubernetes 서비스를 생성합니다. 이 서비스는 애플리케이션을 외부 트래픽에 노출할 수 있게 해주는 Kubernetes 리소스입니다.")]),t._v(" "),a("p",[t._v(" ")]),t._v(" "),a("pre",{staticClass:"go",attrs:{id:"code_1586640681153","data-ke-language":"go","data-ke-type":"codeblock"}},[a("code",[t._v("kubectl expose deployment hello-server --type=LoadBalancer --port 8080")])]),t._v(" "),a("p",[t._v("이 명령어에서")]),t._v(" "),a("ul",[a("li",[t._v("--port를 통해 컨테이너가 노출될 포트가 지정됩니다.")]),t._v(" "),a("li",[t._v('type="LoadBalancer"는 컨테이너의 Compute Engine 부하 분산기를 만듭니다.')])]),t._v(" "),a("p",[t._v("다음과 같은 결과가 표시됩니다.")]),t._v(" "),a("p",[t._v(" ")]),t._v(" "),a("p",[t._v("<결과추가>")]),t._v(" "),a("p",[t._v(" ")]),t._v(" "),a("p",[a("b",[t._v("내 진행 상황 확인하기")]),a("span",[t._v("를 클릭하여 목표를 확인합니다.")])]),t._v(" "),a("p",[t._v(" ")]),t._v(" "),a("p",[a("span",[t._v("<OK화면 추가>")])]),t._v(" "),a("p",[t._v(" ")]),t._v(" "),a("p",[a("span",[a("a",{attrs:{href:"https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#get"}},[t._v("kubectl get")]),a("span",[t._v("을 실행하여"),a("span",[t._v(" ")])]),t._v("hello-server"),a("span",[a("span",[t._v(" ")]),t._v("서비스를 검사합니다.")])])]),t._v(" "),a("p",[t._v(" ")]),t._v(" "),a("pre",{staticClass:"go",attrs:{id:"code_1586640711220","data-ke-language":"go","data-ke-type":"codeblock"}},[a("code",[t._v("kubectl get service")])]),t._v(" "),a("p",[a("span",[t._v("다음과 비슷한 결과가 표시됩니다.")])]),t._v(" "),a("p",[t._v(" ")]),t._v(" "),a("p",[a("span",[t._v("<결과 추가>")])]),t._v(" "),a("p",[t._v(" ")]),t._v(" "),a("blockquote",{attrs:{"data-ke-style":"style3"}},[a("span",[a("b",[t._v("참고:")]),a("span",[a("span",[t._v(" ")]),t._v("외부 IP 주소가 생성되는 데는 1분 정도 걸릴 수 있습니다"),a("span",[t._v(" ")])]),t._v("EXTERNAL-IP"),a("span",[a("span",[t._v(" ")]),t._v('열이 "대기중" 상태이면 위 명령어를 다시 실행하세요.')])])]),t._v(" "),a("p",[t._v("이 명령어의 출력에서"),a("span",[t._v(" ")]),t._v("EXTERNAL IP"),a("span",[t._v(" ")]),t._v("열에 있는 서비스의 외부 IP 주소를 복사합니다.")]),t._v(" "),a("p",[t._v(" ")]),t._v(" "),a("p",[t._v("외부 IP 주소와 노출된 포트를 사용해 웹브라우저에서 애플리케이션을 확인합니다.")]),t._v(" "),a("p",[t._v(" ")]),t._v(" "),a("pre",{staticClass:"html xml",attrs:{id:"code_1586640748857","data-ke-language":"html","data-ke-type":"codeblock"}},[a("code",[t._v("http://[EXTERNAL-IP]:8080")])]),t._v(" "),a("p",[t._v(" ")]),t._v(" "),a("p",[a("span",[t._v("페이지가 다음과 비슷하게 표시됩니다.")])]),t._v(" "),a("p",[t._v(" ")]),t._v(" "),a("p",[a("span",[t._v("<페이지 불러오기>")])]),t._v(" "),a("p",[t._v(" ")]),t._v(" "),a("p",[a("span",[a("b",[t._v("내 진행 상황 확인하기")]),a("span",[t._v("를 클릭하여 목표를 확인합니다.")])])]),t._v(" "),a("p",[t._v(" ")]),t._v(" "),a("p",[a("span",[a("span",[t._v("<OK 상태 넣기>")])])]),t._v(" "),a("p",[t._v(" ")]),t._v(" "),a("h2",{attrs:{id:"step8","data-ke-size":"size26"}},[a("span",{staticStyle:{"background-color":"#99cefa"}},[t._v("삭제")])]),t._v(" "),a("p",[a("span",[t._v("클러스터를 삭제하려면 다음 명령어를 실행합니다.")])]),t._v(" "),a("p",[t._v(" ")]),t._v(" "),a("pre",{staticClass:"go",attrs:{id:"code_1586640804296","data-ke-language":"go","data-ke-type":"codeblock"}},[a("code",[t._v("gcloud container clusters delete [CLUSTER-NAME]")])]),t._v(" "),a("p",[t._v(" ")]),t._v(" "),a("p",[a("span",[t._v("메시지가 표시되면"),a("span",[t._v(" ")])]),a("b",[t._v("Y")]),a("span",[t._v("를 입력하여 확인합니다. 클러스터를 삭제하는 데는 몇 분이 걸릴 수 있습니다. 삭제된 Google Kubernetes Engine 클러스터에 관한 자세한 내용은 이"),a("span",[t._v(" ")])]),a("a",{attrs:{href:"https://cloud.google.com/kubernetes-engine/docs/how-to/deleting-a-cluster"}},[t._v("문서")]),a("span",[t._v("에서 확인하세요.")])]),t._v(" "),a("p",[t._v(" ")]),t._v(" "),a("p",[a("b",[t._v("내 진행 상황 확인하기")]),a("span",[t._v("를 클릭하여 목표를 확인합니다.")])]),t._v(" "),a("p",[t._v(" ")]),t._v(" "),a("p",[a("span",[t._v("<OK 넣기>")])]),t._v(" "),a("p",[t._v(" ")]),t._v(" "),a("p",[t._v(" ")]),t._v(" "),a("h2",{attrs:{"data-ke-size":"size26"}},[a("span",{staticStyle:{"background-color":"#99cefa"}},[t._v("끝났다!")])]),t._v(" "),a("p",[a("span",[t._v("<끝화면 넣기>")])]),t._v(" "),a("p",[t._v(" ")]),t._v(" "),a("p",[a("span",[t._v("Kubernetes Engine에 컨테이너화된 애플리케이션을 배포했다!")])])])}),[],!1,null,null,null);e.default=n.exports}}]);