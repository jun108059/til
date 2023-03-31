(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{807:function(a,t,s){"use strict";s.r(t);var r=s(12),e=Object(r.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"더-쉬운-쿠버네티스를-위한-11가지-도구"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#더-쉬운-쿠버네티스를-위한-11가지-도구"}},[a._v("#")]),a._v(" 더 ‘쉬운’ 쿠버네티스를 위한 11가지 도구")]),a._v(" "),t("p",[a._v("원문보기:\nhttp://www.itworld.co.kr/howto/139498#csidxe4eb0a677874fe5bd547c5c4448b625")]),a._v(" "),t("p",[a._v("2019-12-16 작성 기사")]),a._v(" "),t("p",[a._v("쿠버네티스는 컨테이너화된 애플리케이션을 대규모로 배포하기 위한 가장 유력한 표준으로 자리잡았다.\n그러나 쿠버네티스가 복잡한 컨테이너 배포를 관리할 수 있게 해주는 것과는 별개로, 쿠버네티스를 쉽게 사용하는 데 도움이 되는 툴도 있을까?\n쿠버네티스 자체도 너무 복잡하고 골치 아프고 관리하기 어려울 수 있다.")]),a._v(" "),t("p",[a._v("물론 쿠버네티스의 매끄럽지 않은 부분들은 쿠버네티스가 발전하고 성장하면서 프로젝트 내에서 다듬어질 것이다.\n그러나 어떤 사람들은 쿠버네티스를 쉽게 다룰 수 있게 될 때까지 그냥 앉아서 기다리지 않고 프로덕션에서\n쿠버네티스를 사용할 때 발생하는 여러 일반적인 문제에 대해 스스로 해결책을 만들어 내놓았다.")]),a._v(" "),t("h2",{attrs:{id:"비트나미-캐빈-bitnami-cabin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#비트나미-캐빈-bitnami-cabin"}},[a._v("#")]),a._v(" 비트나미 캐빈(Bitnami Cabin)")]),a._v(" "),t("h3",{attrs:{id:"ios와-안드로이드를-위한-쿠버네티스-대시보드"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ios와-안드로이드를-위한-쿠버네티스-대시보드"}},[a._v("#")]),a._v(" iOS와 안드로이드를 위한 쿠버네티스 대시보드")]),a._v(" "),t("p",[a._v("현대 웹 애플리케이션이나 서비스라면 당연히 모바일 인터페이스가 있어야 한다.\n캐빈은 쿠버네티스 관리자를 위해 iOS 또는 안드로이드 스마트폰에서 액세스할 수 있는 쿠버네티스 대시보드 버전을 제공한다.\n헬름(Helm) 차트, 배포 확장, 포드 로그 읽기, 쿠버네티스로 호스팅되는 웹 기반 앱 액세스를 비롯해\n정식 쿠버네티스 대시보드에서 사용할 수 있는 기능 상당수를 캐빈에서 실행할 수 있다.")]),a._v(" "),t("h2",{attrs:{id:"골드핑거-goldpinger"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#골드핑거-goldpinger"}},[a._v("#")]),a._v(" 골드핑거(Goldpinger)")]),a._v(" "),t("h3",{attrs:{id:"쿠버네티스-클러스터-시각화"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#쿠버네티스-클러스터-시각화"}},[a._v("#")]),a._v(" 쿠버네티스 클러스터 시각화")]),a._v(" "),t("p",[a._v("인간은 시각적 동물이다. 그래프와 차트를 보면 큰 그림을 더 쉽게 이해할 수 있다.\n쿠버네티스 클러스터의 복잡함과 넓은 범위를 감안하면 시각적인 보조 도구의 유용함은 말할 필요도 없다.")]),a._v(" "),t("p",[a._v("재미있는 이름의 골드핑거는 블룸버그 기술 팀이 오픈소스로 공개한 툴로,\n쿠버네티스 클러스터 내에서 실행되면서 노드 간의 관계를 인터랙티브 지도로 표시해준다.\n정상 노드는 녹색으로, 비정상 노드는 빨간색으로 표시된다. 노드를 클릭하면 세부 내용을 볼 수 있다.\n스웨거(Swagger)로 API를 맞춤 설정해서 보고 기능과 메트릭스를 추가하거나 기타 통합이 가능하다.")]),a._v(" "),t("h2",{attrs:{id:"k9s"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#k9s"}},[a._v("#")]),a._v(" K9s")]),a._v(" "),t("h3",{attrs:{id:"전체-화면-쿠버네티스-cli-ui"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#전체-화면-쿠버네티스-cli-ui"}},[a._v("#")]),a._v(" 전체 화면 쿠버네티스 CLI UI")]),a._v(" "),t("p",[a._v("관리자들은 “단일 창” 유틸리티를 좋아한다. K9s는 쿠버네티스 클러스터용 전체 화면 CLI UI다.\n실행 중인 포드, 로그, 배포를 한눈에 볼 수 있는 시야를 제공하며 신속한 셸 액세스가 가능하다.\n참고로 K9s의 정상적인 작동을 위해서는 사용자에게 사용자 및 네임스페이스 수준에서 쿠버네티스 읽기 권한을 부여해야 한다.")]),a._v(" "),t("h2",{attrs:{id:"캅스-kops"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#캅스-kops"}},[a._v("#")]),a._v(" 캅스(Kops)")]),a._v(" "),t("h3",{attrs:{id:"쿠버네티스-클러스터를-위한-명령줄"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#쿠버네티스-클러스터를-위한-명령줄"}},[a._v("#")]),a._v(" 쿠버네티스 클러스터를 위한 명령줄")]),a._v(" "),t("p",[a._v("쿠버네티스 팀이 개발한 캅스는 명령줄에서 쿠버네티스 클러스터를 관리할 수 있게 해주는 툴이다.\nAWS와 GCE에서 실행되는 클러스터를 지원하며 VM웨어 v스피어 및 기타 환경 지원도 현재 개발 중이다.\n설정 및 해체 과정을 자동화하는 것 외에 다른 종류의 자동화에도 유용하다.\n예를 들어 테라폼(Terraform) 구성을 생성해서 테라폼을 사용해 클러스터를 재배포할 수 있게 해준다.")]),a._v(" "),t("h2",{attrs:{id:"큐브박스-kubebox"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#큐브박스-kubebox"}},[a._v("#")]),a._v(" 큐브박스(Kubebox)")]),a._v(" "),t("h3",{attrs:{id:"쿠버네티스용-터미널-콘솔"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#쿠버네티스용-터미널-콘솔"}},[a._v("#")]),a._v(" 쿠버네티스용 터미널 콘솔")]),a._v(" "),t("p",[a._v("쿠버네티스용 고급 터미널 콘솔인 큐브박스는 단순히 쿠버네티스와 그 API에 대한 보기 좋은 셸이 아니다.\n메모리/CPU 사용량, 포드 목록, 실행 로그, 구성 편집기를 인터랙티브하게 표시해주는 기능을 한다.\n무엇보다 리눅스, 윈도우, 맥OS용 독립형 애플리케이션으로 제공된다는 점이 좋다.")]),a._v(" "),t("h2",{attrs:{id:"큐브-ps1-kube-ps1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#큐브-ps1-kube-ps1"}},[a._v("#")]),a._v(" 큐브-ps1(Kube-ps1)")]),a._v(" "),t("h3",{attrs:{id:"스마트한-쿠버네티스-명령-프롬프트"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#스마트한-쿠버네티스-명령-프롬프트"}},[a._v("#")]),a._v(" 스마트한 쿠버네티스 명령 프롬프트")]),a._v(" "),t("p",[a._v("이름을 보고 오해하기 쉽지만 큐브-ps1은 쿠버네티스용 1세대 소니 플레이스테이션 에뮬레이터가 아니다.\n배시(Bash)에 추가되는 툴로, 현재 쿠버네티스 컨텍스트와 네임스페이스를 프롬프트에 표시한다.\n큐브 셸(Kube-shell)에도 이 툴이 다른 많은 유용한 기능과 함께 포함되어 있지만\n더 똑똑한 프롬프트만 필요하다면 오버헤드가 거의 없는 큐브-ps1이 적당하다.")]),a._v(" "),t("h2",{attrs:{id:"큐브-프롬프트-kube-prompt"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#큐브-프롬프트-kube-prompt"}},[a._v("#")]),a._v(" 큐브-프롬프트(Kube-prompt)")]),a._v(" "),t("h3",{attrs:{id:"인터랙티브-쿠버네티스-클라이언트"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#인터랙티브-쿠버네티스-클라이언트"}},[a._v("#")]),a._v(" 인터랙티브 쿠버네티스 클라이언트")]),a._v(" "),t("p",[a._v("큐브-프롬프트 역시 미니멀하면서 유용한 쿠버네티스 CLI 수정 툴이다.\n쿠버네티스 클라이언트와 ‘인터랙티브 명령 세션’을 시작할 수 있다.\n큐브 프롬프트를 사용하면 모든 명령 앞에 kubectl을 입력할 필요가 없으며,\n각 명령의 컨텍스트 정보를 사용한 자동 완성 기능도 제공된다.")]),a._v(" "),t("h2",{attrs:{id:"큐브-셸-kube-shell"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#큐브-셸-kube-shell"}},[a._v("#")]),a._v(" 큐브-셸(Kube-shell)")]),a._v(" "),t("h3",{attrs:{id:"쿠버네티스-cli용-셸"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#쿠버네티스-cli용-셸"}},[a._v("#")]),a._v(" 쿠버네티스 CLI용 셸")]),a._v(" "),t("p",[a._v("쿠버네티스 명령줄은 강력하지만 모든 명령줄 앱이 그렇듯이 옵션을 탐색하고 선택하는 과정이 번거롭다.\n큐브-셸은 표준 쿠버네티스 명령줄을 통합 셸로 포장해서 쿠버네티스 서버에서 제공하는\n제안을 포함해(예를 들어 서비스 이름) 일반적인 명령을 위한 자동 완성과 자동 제안을 제공한다.\n또한 더욱 강력한 명령 내역 기능, vi 스타일의 편집 모드, 그리고 사용자와 네임스페이스,\n클러스터, 기타 설치별 세부 사항에 대한 실행 컨텍스트 정보도 제공한다.")]),a._v(" "),t("h2",{attrs:{id:"큐브스파이"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#큐브스파이"}},[a._v("#")]),a._v(" 큐브스파이")]),a._v(" "),t("h3",{attrs:{id:"쿠버네티스-리소스-실시간-모니터링"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#쿠버네티스-리소스-실시간-모니터링"}},[a._v("#")]),a._v(" 쿠버네티스 리소스 실시간 모니터링")]),a._v(" "),t("p",[a._v("풀루미(Pulumi)의 큐브스파이는 쿠버네티스 리소스의 변경을 실시간으로 추적하고\n현재 상황에 대한 일종의 텍스트 뷰 대시보드를 제공하는 진단 툴이다.\n예를 들어 포드가 부팅되는 과정에서 포드 정의가 Etcd에 작성되고,\n포드가 노드에서 실행되도록 예약되고, 노드의 큐블릿(Kublet)이 포드를 생성하고,\n최종적으로 포드가 실행 중으로 표시되기까지의 상태 변경을 감시할 수 있다.\n큐브스파이는 독립형 바이너리 또는 Kubectl 플러그인으로 실행이 가능하다.")]),a._v(" "),t("h2",{attrs:{id:"큐브-옵스-뷰-kube-ops-viw"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#큐브-옵스-뷰-kube-ops-viw"}},[a._v("#")]),a._v(" 큐브-옵스-뷰(Kube-ops-viw)")]),a._v(" "),t("h3",{attrs:{id:"여러-쿠버네티스-클러스터에-대한-대시보드"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#여러-쿠버네티스-클러스터에-대한-대시보드"}},[a._v("#")]),a._v(" 여러 쿠버네티스 클러스터에 대한 대시보드")]),a._v(" "),t("p",[a._v("쿠버네티스에는 범용 모니터링을 위한 유용한 대시보드가 있지만\n쿠버네티스 커뮤니티에서는 쿠버네티스 관리자에게 유용하게끔 데이터를 제공하는 다른 수단에 대한 여러 실험이 진행 중이다.\n큐브-옵스-뷰는 이러한 실험 중 하나이며 여러 쿠버네티스 클러스터에 대한 전체적인 시야를 그래픽으로 제공해서\n클러스터 전반의 CPU/메모리 사용량, 포드 상태 등을 한눈에 볼 수 있게 해준다.\n단, 이 툴의 용도는 엄격히 시각화로 제한되기 때문에 명령을 호출할 수는 없다.\n그러나 큐브-옵스-뷰가 제공하는 시각화는 눈에 잘 띄고 효율적이며, 운영 센터의 벽면 모니터에 잘 어울린다.")]),a._v(" "),t("h2",{attrs:{id:"스턴-stern-큐브테일-kubetail"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#스턴-stern-큐브테일-kubetail"}},[a._v("#")]),a._v(" 스턴(Stern), 큐브테일(Kubetail)")]),a._v(" "),t("h3",{attrs:{id:"쿠버네티스를-위한-로그-테일링"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#쿠버네티스를-위한-로그-테일링"}},[a._v("#")]),a._v(" 쿠버네티스를 위한 로그 테일링")]),a._v(" "),t("p",[a._v("스턴을 사용하면 쿠버네티스의 포드와 컨테이너에서 tail 명령에 따른 컬러 코드가 적용된 출력을 생성할 수 있다.\n여러 리소스의 모든 출력을 한눈에 읽을 수 있는 하나의 스트림으로 보낼 수 있는 빠른 방법이다.\n또한 컬러 코드를 통해 간편히 스트림을 구분할 수 있다.")]),a._v(" "),t("h2",{attrs:{id:"큐브테일"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#큐브테일"}},[a._v("#")]),a._v(" 큐브테일")]),a._v(" "),t("p",[a._v("여러 포드의 로그를 하나의 스트림으로 집계하고 다양한 포드와 컨테이너에 컬러 코드를 적용한다.\n큐브테일은 배시 스크립트이므로 셸만 있으면 된다.")])])}),[],!1,null,null,null);t.default=e.exports}}]);