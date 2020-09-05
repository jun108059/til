(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{411:function(t,a,e){"use strict";e.r(a);var o=e(27),l=Object(o.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"tistory에-정리했다"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tistory에-정리했다"}},[t._v("#")]),t._v(" Tistory에 정리했다!")]),t._v(" "),e("p",[t._v("https://dev-youngjun.tistory.com/39")]),t._v(" "),e("h1",{attrs:{id:"gcp-essentials-cloud-shell-및-gcloud-시작하기"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gcp-essentials-cloud-shell-및-gcloud-시작하기"}},[t._v("#")]),t._v(" GCP Essentials - Cloud Shell 및 gcloud 시작하기")]),t._v(" "),e("blockquote",{staticStyle:{"font-size":"1.12em"},attrs:{"data-ke-style":"style3"}},[e("b",[t._v("Qwiklabs GCP Essentials 실습 목차")]),e("br"),e("a",{attrs:{href:"https://dev-youngjun.tistory.com/37?category=891632"}},[t._v("(1) 2020/04/11 - [GCP] - GCP Essentials - Qwiklabs 실습 개요")]),e("br"),e("a",{attrs:{href:"https://dev-youngjun.tistory.com/38?category=891632",target:"_blank",rel:"noopener"}},[t._v("(2) 2020/04/12 - [GCP] - GCP Essentials - 가상 머신 만들기 실습")]),e("br"),t._v("(3) 2020/04/13 - [GCP] - GCP Essentials - Cloud Shell 및 gcloud 시작하기")]),t._v(" "),e("p",[e("span",[t._v("Qwiklabs의 GCP Essentials Quest를 수강하며 작성한 포스팅이다.")]),e("br"),e("br")]),t._v(" "),e("p",[t._v('[##_Image|kage@N61pP/btqDmnD9hoz/yarxIWEAS2lyVclOOg4CN1/img.png|alignCenter|width="229" height="231" data-origin-width="120" data-origin-height="121"|GCP Essentials gcloud Quest 이미지||_##]')]),t._v(" "),e("p",[t._v("세 번째 실습인 "),e("span",{staticStyle:{"background-color":"#f6e199"}},[e("b",[t._v("[Cloud Shell 및 gcloud 시작하기]")])]),t._v(" Quest를 실습해보자.")]),t._v(" "),e("p",[t._v('[##_Image|kage@cypT3g/btqDkzS3aMe/jLA5nmT18Uujk3WklRWxl0/img.png|alignCenter|data-filename="GCP가상머신만들기(1).png" data-origin-width="959" data-origin-height="86" width="748" height="67"|Google Cloud Self-Paced Labs 대표 사진||_##]')]),t._v(" "),e("h2",{attrs:{"data-ke-size":"size26"}},[e("span",{staticStyle:{"background-color":"#99cefa"}},[t._v("개요")])]),t._v(" "),e("p",{staticStyle:{"font-size":"1.12em"},attrs:{"data-ke-size":"size16"}},[e("b",[t._v("Google Cloud Shell")]),t._v("에서는?")]),t._v(" "),e("ul",{staticStyle:{"list-style-type":"disc"},attrs:{"data-ke-list-type":"disc"}},[e("li",[e("span",{staticStyle:{"background-color":"#dddddd"}},[t._v("gcloud")]),e("span",[t._v(" ")]),t._v("명령줄을 사용하여 "),e("span",{staticStyle:{color:"#ee2323"}},[t._v("Google Cloud Platform에 호스팅된 컴퓨팅 리소스에 액세스")]),t._v("할 수 있다.")]),t._v(" "),e("li",[t._v("Cloud Shell은 "),e("b",[t._v("Debian 기반 가상 머신")]),t._v("으로, 영구적인 5GB 홈 디렉터리를 제공하여 "),e("span",{staticStyle:{color:"#ee2323"}},[t._v("GCP 프로젝트와 리소스를 원활하게 관리")]),t._v("할 수 있도록 한다.")]),t._v(" "),e("li",[t._v("Cloud SDK"),e("span",[t._v(" ")]),e("span",{staticStyle:{"background-color":"#dddddd"}},[t._v("gcloud")]),t._v("와 필요한 기타 유틸리티는 Cloud Shell에 사전 설치되어 있으므로 간단하게 시작하고 실행할 수 있다.")])]),t._v(" "),e("h4",{attrs:{"data-ke-size":"size20"}},[e("b",[t._v("실습할 내용")])]),t._v(" "),e("ul",[e("li",[e("span",{staticStyle:{"background-color":"#dddddd"}},[t._v("gcloud")]),e("span",[t._v(" ")]),t._v("명령어 사용 연습")]),t._v(" "),e("li",[e("b",[t._v("Google Cloud Platform에 호스팅된 컴퓨팅 서비스에 연결")])])]),t._v(" "),e("h4",{attrs:{"data-ke-size":"size20"}},[e("b",[t._v("기본 요건")])]),t._v(" "),e("p",{staticStyle:{"font-size":"1.12em"},attrs:{"data-ke-size":"size16"}},[e("span",{staticStyle:{"background-color":"#dddddd"}},[t._v("vim, emacs, nano")]),e("span",[t._v(" ")]),t._v("등 표준 Linux 텍스트 편집기에 관한 기본 지식")]),t._v(" "),e("p",[t._v(" ")]),t._v(" "),e("h2",{attrs:{"data-ke-size":"size26"}},[e("span",{staticStyle:{"background-color":"#99cefa"}},[t._v("설정")])]),t._v(" "),e("p",[e("span",{staticStyle:{"background-color":"#f6e199"}},[e("b",[t._v("실습 시작 버튼을 클릭하기 전에")])])]),t._v(" "),e("p",[t._v(" ")]),t._v(" "),e("p",[t._v("다음 안내를 확인하자!")]),t._v(" "),e("ul",[e("li",[t._v("실습에는 시간 제한이 있으며 일시 중지할 수 없다.")]),t._v(" "),e("li",[t._v("실습 시작을 클릭하면 타이머가 시작되고 Cloud 리소스를 사용할 수 있는 시간이 얼마나 남았는지 표시된다.")])]),t._v(" "),e("p",[t._v("Qwiklabs 실습을 통해 시뮬레이션이나 데모 환경이 아닌"),e("span",[t._v(" ")]),e("b",[t._v("실제 클라우드 환경에서 직접 실습 활동을 진행")]),t._v("할 수 있다. 실습 시간 동안 Google Cloud Platform에 로그인하고 액세스 하는 데 사용할 수 있는"),e("span",[t._v(" ")]),e("b",[t._v("새로운 임시 사용자 인증 정보가 제공된다")]),t._v(".")]),t._v(" "),e("p",[t._v(" ")]),t._v(" "),e("p",[e("span",{staticStyle:{"background-color":"#f6e199"}},[e("b",[t._v("준비할 사항")])])]),t._v(" "),e("p",[t._v(" ")]),t._v(" "),e("p",[t._v("이 실습을 완료하려면 다음을 준비해야 한다.")]),t._v(" "),e("ul",[e("li",[t._v("표준 인터넷 브라우저(Chrome 브라우저 권장)")]),t._v(" "),e("li",[t._v("실습을 완료할 시간")])]),t._v(" "),e("blockquote",{attrs:{"data-ke-style":"style2"}},[e("b",[t._v("참고:")]),e("span",[t._v(" ")]),t._v("이미 개인용 GCP 계정이나 프로젝트가 있어도 이 실습에서는 사용하지 마세요!")]),t._v(" "),e("p",[e("br"),e("span",{staticStyle:{"background-color":"#f6e199"}},[e("b",[t._v("실습을 시작하고 콘솔에 로그인하는 방법")])])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://dev-youngjun.tistory.com/38",target:"_blank",rel:"noopener"}},[t._v("2020/04/12 - [GCP] - GCP Essentials - 가상 머신 만들기 실습")])]),t._v(" "),e("p",[t._v("이전 글에서 자세하게 설명했다! 콘솔에 로그인 하는 방법은 이전 글에서 확인하자.")]),t._v(" "),e("p",[t._v(" ")]),t._v(" "),e("h2",[e("span",{staticStyle:{"background-color":"#99cefa"}},[t._v("Cloud Shell 시작")])]),t._v(" "),e("p",[t._v("(1) GCP Console의 오른쪽 상단에 있는 아이콘을 클릭하여 Cloud Shell 세션을 열자.")]),t._v(" "),e("p",[t._v('[##_Image|kage@oBfmv/btqDk6iLBwX/pqpsGHtfXLtevTKllAjxhK/img.png|alignCenter|data-filename="(3)CloudShell&gcloud(1).png" data-origin-width="902" data-origin-height="324" width="782" height="281"|오른쪽 상단 툴바에서 Console을 열 수 있다.||_##]')]),t._v(" "),e("p",[t._v("(2) "),e("b",[t._v("Continue")]),t._v("를 클릭하자.")]),t._v(" "),e("p",[t._v('[##_Image|kage@ccU7EX/btqDk7oqXoF/A46Fv1IAyZHRNkkQ3XUYXK/img.png|alignCenter|data-filename="(3)CloudShell&gcloud(2).png" data-origin-width="648" data-origin-height="276"|||_##]')]),t._v(" "),e("p",[e("span",[t._v("Cloud Shell이 활성화되면 명령줄을 사용하여 Cloud SDK"),e("span",[t._v(" ")])]),t._v("gcloud"),e("span",[e("span",[t._v(" ")]),t._v("명령어나 가상 머신 인스턴스에서 사용할 수 있는 다른 도구를 호출할 수 있다. ")])]),t._v(" "),e("p",[e("span",[t._v("이 실습의 뒷부분에서는 여러 프로젝트와 Cloud Shell 세션 간에 파일을 저장하기 위해 영구 디스크 저장소에서 사용되는"),e("span",[t._v(" ")])]),e("span",{staticStyle:{"background-color":"#dddddd"}},[t._v("$HOME")]),e("span",[e("span",[t._v(" ")]),t._v("디렉터리를 사용하게 됩니다."),e("span",[t._v(" ")])]),e("span",{staticStyle:{"background-color":"#dddddd"}},[t._v("$HOME")]),e("span",[e("span",[t._v(" ")]),t._v("디렉터리는 본인에게만 공개되며 다른 사용자는 액세스할 수 없습니다.")])]),t._v(" "),e("p",[t._v(" ")]),t._v(" "),e("h2",{attrs:{"data-ke-size":"size26"}},[e("span",{staticStyle:{"background-color":"#99cefa"}},[t._v("리전 및 영역의 이해")])]),t._v(" "),e("blockquote",{attrs:{"data-ke-style":"style3"}},[t._v("앞부분은 지난 Quest와 겹치는 내용이지만 알아두어야 이해가 되기 때문에 다시 한번 정리했다. ")]),t._v(" "),e("p",[t._v("일부 Compute Engine 리소스는 리전이나 영역(zone)에 있다.")]),t._v(" "),e("p",[t._v(" ")]),t._v(" "),e("p",[e("span",{staticStyle:{"background-color":"#f6e199"}},[e("b",[t._v("리전이란?")])])]),t._v(" "),e("p",[t._v("리소스를 실행할 수 있는 특정 지리적 위치이다. 각 리전에는"),e("span",[t._v(" ")]),e("b",[t._v("하나 이상의 영역")]),t._v("이 있다.")]),t._v(" "),e("blockquote",{attrs:{"data-ke-style":"style2"}},[e("span",[t._v("예를 들어 us-central1 리전은")]),e("span",[t._v(" ")]),e("span",[t._v("us-central1-a,")]),e("span",[t._v(" ")]),e("span",[t._v("us-central1-b,")]),e("span",[t._v(" ")]),e("span",[t._v("us-central1-c")]),e("span",[t._v(" ")]),e("span",[t._v("및")]),e("span",[t._v(" ")]),e("span",[t._v("us-central1-f")]),e("span",[t._v(" ")]),e("span",[t._v("영역이 있는 미국 중부의 리전을 나타낸다.")])]),t._v(" "),e("p",[t._v('[##_Image|kage@CSxWI/btqDohJKYju/wC7ovps814AKI0wkkestgk/img.png|alignCenter|data-filename="(3)CloudShell&gcloud(3).png" data-origin-width="707" data-origin-height="221"|출처 : Qwiklabs Cloud Shell 및 gcloud 시작하기 Quest||_##]')]),t._v(" "),e("p",[e("span",[t._v("영역 내에 상주하는 리소스를"),e("span",[t._v(" ")]),e("b",[e("span",[t._v("영역별 리소스")])]),t._v("라고 한다.")])]),t._v(" "),e("ul",[e("li",[e("span",[t._v("가상 머신 인스턴스와 영구 디스크는 영역에 상주한다.")])]),t._v(" "),e("li",[e("span",[t._v("영구 디스크를 가상 머신 인스턴스에 연결하려면"),e("span",[t._v(" ")]),e("span",{staticStyle:{color:"#ee2323"}},[t._v("두 리소스가 모두 같은 영역에 있어야 한다")]),t._v(".")])]),t._v(" "),e("li",[e("span",[t._v("마찬가지로 인스턴스에 정적 IP 주소를 할당하려는 경우"),e("span",[t._v(" ")]),e("span",{staticStyle:{color:"#ee2323"}},[t._v("인스턴스가 정적 IP와 같은 리전에 있어야 합니다.")])])])]),t._v(" "),e("blockquote",{attrs:{"data-ke-style":"style3"}},[e("a",{attrs:{href:"https://cloud.google.com/compute/docs/regions-zones/"}},[t._v("리전 및 영역 문서")]),e("span",[t._v("에서 리전과 영역에 관해 자세히 알아보고 전체 목록을 확인하자.")])]),t._v(" "),e("p",[t._v(" ")]),t._v(" "),e("p",[e("span",{staticStyle:{"background-color":"#f6e199"}},[e("b",[t._v("기본 리전과 영역 설정 명령어")])])]),t._v(" "),e("p",[t._v(" ")]),t._v(" "),e("p",[t._v("다음 값을 사용하여 기본 리전과 영역이 설정된다.")]),t._v(" "),e("pre",{staticClass:"go",attrs:{id:"code_1586631577672","data-ke-language":"go","data-ke-type":"codeblock"}},[e("code",[t._v("google-compute-default-zone google-compute-default-region")])]),t._v(" "),e("p",[t._v(" ")]),t._v(" "),e("p",[e("span",{staticStyle:{"background-color":"#f6e199"}},[e("b",[t._v("설정 확인 명령어")])])]),t._v(" "),e("p",[t._v(" ")]),t._v(" "),e("p",[e("span",{staticStyle:{color:"#333333"}},[t._v("기본 리전 및 영역 설정을 확인하려면 다음")]),e("span",{staticStyle:{color:"#333333"}},[t._v(" ")]),e("span",{staticStyle:{color:"#333333","background-color":"#dddddd"}},[t._v("gcloud")]),e("span",{staticStyle:{color:"#333333"}},[t._v(" ")]),e("span",{staticStyle:{color:"#333333"}},[t._v("명령어를 실행하자.")])]),t._v(" "),e("pre",{staticClass:"go",attrs:{id:"code_1586631710459","data-ke-language":"go","data-ke-type":"codeblock"}},[e("code",[t._v("gcloud compute project-info describe --project <your_project_ID>")])]),t._v(" "),e("p",[t._v("<your_project_id>를 대체할 값은 Console의 홈페이지에서 확인하거나 이 실습을 시작한 Qwiklabs 탭에서 프로젝트 ID를 사용하여 찾을 수 있다.")]),t._v(" "),e("p",[t._v(" ")]),t._v(" "),e("p",[t._v('[##_Image|kage@IVBAO/btqDmVm7XjJ/72DatM5yDkCZDDKQK8lHI1/img.png|alignCenter|data-filename="(3)CloudShell&gcloud(4).png" data-origin-width="664" data-origin-height="352"|key - value로 구성된 기본 영역과 리전이 보인다!||_##]')]),t._v(" "),e("blockquote",{attrs:{"data-ke-style":"style2"}},[t._v("뒤에 나오는 실습은 지금 설정된 영역("),e("span",{staticStyle:{"background-color":"#dddddd"}},[t._v("google-compute-default-zone")]),t._v(")을 사용한다."),e("br"),t._v("설정 확인 출력에서 "),e("span",{staticStyle:{"background-color":"#9feec3"}},[t._v("기본 영역 및 리전 메타데이터 값")]),t._v("을 찾아서 기억하자!"),e("span",{staticStyle:{"background-color":"#dddddd"}},[e("br"),t._v("google-compute-default-region")]),e("span",[t._v(" ")]),t._v("및"),e("span",[t._v(" ")]),e("span",{staticStyle:{"background-color":"#dddddd"}},[t._v("google-compute-default-zone")]),e("span",[t._v(" ")]),e("span",{staticStyle:{color:"#ee2323"}},[t._v("키와 값이 누락되면 기본 영역이나 리전이 설정되지 않은 것이다.")])]),t._v(" "),e("p",[t._v(" ")]),t._v(" "),e("p",[t._v(" ")]),t._v(" "),e("h2",[e("span",{staticStyle:{"background-color":"#99cefa"}},[t._v("Cloud SDK 초기화")])]),t._v(" "),e("p",[e("b",[e("span",{staticStyle:{"background-color":"#dddddd"}},[t._v("gcloud")]),e("span",[t._v(" ")]),t._v("CLI는 Google Cloud SDK에 포함되어 있다. ")])]),t._v(" "),e("ol",{staticStyle:{"list-style-type":"decimal"},attrs:{"data-ke-list-type":"decimal"}},[e("li",[t._v("시스템에 SDK를 다운로드하고 설치")]),t._v(" "),e("li",[e("span",{staticStyle:{"background-color":"#dddddd"}},[t._v("gcloud init")]),t._v("을 실행하여 SDK를 초기화")]),t._v(" "),e("li",[e("span",{staticStyle:{"background-color":"#dddddd"}},[t._v("gcloud")]),e("span",[t._v(" ")]),t._v("명령줄 도구를 사용할 수 있다.")])]),t._v(" "),e("blockquote",{attrs:{"data-ke-style":"style2"}},[e("span",{staticStyle:{"background-color":"#dddddd"}},[t._v("gcloud")]),e("span",[t._v(" ")]),t._v("CLI는 Cloud Shell에서 자동으로 제공된다."),e("br"),e("span",{staticStyle:{color:"#333333","font-size":"16px","letter-spacing":"0px"}},[t._v("이 실습에서는 Cloud Shell을 사용하고 있으므로")]),e("span",{staticStyle:{color:"#333333","font-size":"16px","letter-spacing":"0px"}},[t._v(" ")]),e("span",{staticStyle:{color:"#333333","font-size":"16px","letter-spacing":"0px"}},[e("span",{staticStyle:{"background-color":"#dddddd"}},[t._v("gcloud")]),t._v("를 "),e("span",{staticStyle:{color:"#ee2323"}},[t._v("수동으로 설치할 필요가 없다.")])])]),t._v(" "),e("h2",{attrs:{id:"step7","data-ke-size":"size26"}},[e("span",{staticStyle:{"background-color":"#99cefa"}},[t._v("환경 변수 설정")])]),t._v(" "),e("p",[e("b",[e("span",{staticStyle:{"background-color":"#f6e199"}},[t._v("환경 변수란?")])])]),t._v(" "),e("p",[t._v("말 그대로 환경을 정의하는 변수.")]),t._v(" "),e("p",[t._v("API 또는 실행파일을 포함하는 스크립트를 작성할 때 "),e("span",{staticStyle:{color:"#006dd7"}},[e("b",[t._v("원하는 변수를 정의하면 시간을 절약")])]),t._v("할 수 있다.")]),t._v(" "),e("p",[t._v(" ")]),t._v(" "),e("p",[t._v("다음 명령어로 몇 가지 환경 변수를 만들어보자.")]),t._v(" "),e("pre",{staticClass:"go",attrs:{id:"code_1586632210264","data-ke-language":"go","data-ke-type":"codeblock"}},[e("code",[t._v("export PROJECT_ID=<your_project_ID>")])]),t._v(" "),e("p",[e("b",[t._v("ZONE 환경 변수를 설정")]),t._v("(이전 명령어의 영역 값 사용).")]),t._v(" "),e("pre",{staticClass:"go",attrs:{id:"code_1586632228928","data-ke-language":"go","data-ke-type":"codeblock"}},[e("code",[t._v("export ZONE=<your_zone>")])]),t._v(" "),e("p",[e("b",[t._v("변수가 제대로 설정되어 있는지 확인")])]),t._v(" "),e("pre",{staticClass:"go",attrs:{id:"code_1586632243051","data-ke-language":"go","data-ke-type":"codeblock"}},[e("code",[t._v("echo $PROJECT_ID \necho $ZONE")])]),t._v(" "),e("p",[t._v(" ")]),t._v(" "),e("p",[t._v(" ")]),t._v(" "),e("p",[t._v('[##_Image|kage@mbIdd/btqDk5j1WEK/xKWxtQpKtXRC4vENjq3l60/img.png|alignCenter|data-filename="(3)CloudShell&gcloud(5).png" data-origin-width="913" data-origin-height="169"|변수가 잘 설정되었는지 확인해보았다.||_##]')]),t._v(" "),e("h2",{attrs:{id:"step7"}},[e("span",{staticStyle:{"background-color":"#99cefa"}},[t._v("gcloud를 사용하여 가상 머신 만들기")])]),t._v(" "),e("p",[e("span",{staticStyle:{"background-color":"#dddddd"}},[t._v("gcloud")]),t._v("를 사용하여 "),e("b",[t._v("새로운 가상 머신 인스턴스")]),t._v("를 만들자. 다음과 같은 명령어를 사용하면 된다.")]),t._v(" "),e("ul",[e("li",[e("b",[e("span",{staticStyle:{"background-color":"#dddddd"}},[t._v("gcloud compute")])]),t._v("를 사용하면 Compute Engine API를 사용할 때보다 익숙한 형식으로"),e("span",{staticStyle:{color:"#ee2323"}},[t._v(" Google Compute Engine 리소스를 쉽게 관리")]),t._v("할 수 있다.")]),t._v(" "),e("li",[e("b",[e("span",{staticStyle:{"background-color":"#dddddd"}},[t._v("instances create")])]),t._v("는 "),e("span",{staticStyle:{color:"#ee2323"}},[t._v("새 인스턴스")]),t._v("를 만든다.")])]),t._v(" "),e("p",{staticStyle:{"font-size":"1.12em"},attrs:{"data-ke-size":"size16"}},[e("b",[e("span",{staticStyle:{"background-color":"#f6e199"}},[t._v("가상 머신 생성하기")])])]),t._v(" "),e("p",[t._v("다음을 실행하여 가상 머신을 만들어보자.")]),t._v(" "),e("pre",{staticClass:"go",attrs:{id:"code_1586632561580","data-ke-language":"go","data-ke-type":"codeblock"}},[e("code",[t._v("gcloud compute instances create gcelab2 --machine-type n1-standard-2 --zone $ZONE")])]),t._v(" "),e("ul",[e("li",[t._v("가상 머신의 이름은 "),e("b",[t._v("'gcelab2'")]),t._v("이며")]),t._v(" "),e("li",[e("span",{staticStyle:{"background-color":"#dddddd"}},[t._v("--machine-type")]),t._v(" 플래그를 사용하여 머신 유형을"),e("b",[t._v(" 'n1-standard-2'")]),t._v("로 지정합니다.")]),t._v(" "),e("li",[e("span",{staticStyle:{"background-color":"#dddddd"}},[t._v("--zone")]),t._v(" 플래그를 사용하여 "),e("b",[t._v("환경 변수와 함께 정의한 영역에서 생성")]),t._v("되게끔 지정합니다.")])]),t._v(" "),e("p",[t._v(" ")]),t._v(" "),e("p",[t._v('[##_Image|kage@b7cKjx/btqDogqyZvf/VhJKgDcKL4uKkfMviMEKH0/img.png|alignCenter|data-filename="(3)CloudShell&gcloud(6).png" data-origin-width="1151" data-origin-height="154"|가상 머신이 정상적으로 만들어졌다!||_##]')]),t._v(" "),e("p",[t._v(" ")]),t._v(" "),e("blockquote",{attrs:{"data-ke-style":"style2"}},[e("span",{staticStyle:{color:"#ee2323"}},[e("span",{staticStyle:{"background-color":"#dddddd"}},[t._v("--zone")]),t._v(" 플래그를 생략")]),t._v("하면"),e("span",[t._v(" ")]),e("span",{staticStyle:{"background-color":"#dddddd"}},[t._v("gcloud")]),t._v("가 "),e("b",[t._v("기본 속성을 기준")]),t._v("으로 원하는 영역을 추론할 수 있다."),e("span",[t._v(" "),e("br")]),e("b",[e("span",{staticStyle:{"background-color":"#dddddd"}},[t._v("머신 유형")]),e("span",[t._v(" ")]),t._v("및"),e("span",[t._v(" ")]),e("span",{staticStyle:{"background-color":"#dddddd"}},[t._v("이미지")]),t._v("와 같은 기타 필수 인스턴스 설정")]),t._v("은 "),e("span",{staticStyle:{color:"#ee2323"}},[t._v("create 명령어에 지정되지 않은 경우 "),e("b",[t._v("기본값으로 설정")])]),t._v("된다.")]),t._v(" "),e("p",[t._v(" ")]),t._v(" "),e("p",[e("span",{staticStyle:{"background-color":"#dddddd"}},[t._v("create")]),e("span",[e("span",[t._v(" ")]),t._v("명령어의 도움말을 표시하면 기본값을 볼 수 있다.")])]),t._v(" "),e("pre",{staticClass:"go",staticStyle:{margin:"20px auto 0px",display:"block",overflow:"auto",padding:"15px",color:"#383a42",background:"#f6f7f8","font-size":"14px","border-radius":"3px","font-family":"Menlo, Consolas, Monaco, monospace",border:"1px solid #dddddd",cursor:"default","z-index":"1"},attrs:{id:"code_1586634209754","data-ke-language":"go","data-ke-type":"codeblock"}},[e("code",[t._v("gcloud compute instances create --help")])]),t._v(" "),e("p",[t._v(" ")]),t._v(" "),e("p",{staticStyle:{"font-size":"1.12em"},attrs:{"data-ke-size":"size16"}},[e("b",[e("span",{staticStyle:{"background-color":"#f6e199"}},[t._v("완료된 작업 테스트하기")])])]),t._v(" "),e("p",[e("b",[t._v("진행 상황 확인")]),t._v("을 클릭하여 실행한 작업을 확인해보자.")]),t._v(" "),e("p",[t._v(" ")]),t._v(" "),e("p",[t._v('[##_Image|kage@bdZPQZ/btqDlO3axYN/hfP8KqkR7jojKwEoNBQrJ0/img.png|alignCenter|data-filename="(3)CloudShell&gcloud(7).png" data-origin-width="522" data-origin-height="98"|완료했다!||_##]')]),t._v(" "),e("h2",{attrs:{id:"step7"}},[e("span",{staticStyle:{"background-color":"#99cefa"}},[t._v("gcloud 명령어 사용")])]),t._v(" "),e("p",[t._v(" ")]),t._v(" "),e("p",{staticStyle:{"font-size":"1.12em"},attrs:{"data-ke-size":"size16"}},[e("span",{staticStyle:{"background-color":"#f6e199"}},[e("b",[t._v("gcloud 명령어 사용 안내(도움말)")])])]),t._v(" "),e("p",[e("span"),e("span",{staticStyle:{"background-color":"#dddddd"}},[t._v("gcloud")]),e("span",[t._v(" ")]),t._v("호출 명령어의 끝에"),e("span",[t._v(" ")]),e("span",{staticStyle:{"background-color":"#dddddd"}},[t._v("-h")]),e("span",[t._v(" ")]),t._v("플래그를 추가하면 참고할 수 있는 간단한 사용 안내가 표시된다.")]),t._v(" "),e("p",[t._v("Cloud Shell에서 다음 명령어를 실행해보자.")]),t._v(" "),e("pre",{staticClass:"go",attrs:{id:"code_1586634289046","data-ke-language":"go","data-ke-type":"codeblock"}},[e("code",[t._v("gcloud -h")])]),t._v(" "),e("p",[e("span",{staticStyle:{color:"#ffffff"}},[t._v("gcloud ")]),e("span",{staticStyle:{color:"#ffffff"}},[t._v("-")]),e("span",{staticStyle:{color:"#ffffff"}},[t._v("h")])]),t._v(" "),e("p",[t._v('[##_Image|kage@bFMvUR/btqDnwtRw1S/h2RjvKBqlUFmMEkYA60m51/img.png|alignCenter|data-filename="(3)CloudShell&gcloud(8).png" data-origin-width="835" data-origin-height="368"|명령어 사용 도움말이 출력됐다. 엄청 많다!||_##]')]),t._v(" "),e("p",[t._v(" ")]),t._v(" "),e("p",[e("span",{staticStyle:{"background-color":"#9feec3"}},[e("b",[t._v("더 상세한 도움말")])]),t._v("을 확인하려면"),e("span",[t._v(" ")]),e("span",{staticStyle:{"background-color":"#dddddd"}},[t._v("--help")]),e("span",[t._v(" ")]),t._v("플래그를 추가하거나"),e("span",[t._v(" ")]),e("span",{staticStyle:{"background-color":"#dddddd"}},[t._v("gcloud help")]),e("span",[t._v(" ")]),t._v("명령어를 실행하면 된다.")]),t._v(" "),e("p",[t._v("Cloud Shell에서 다음 명령어를 실행해 보자.")]),t._v(" "),e("pre",{staticClass:"go",attrs:{id:"code_1586634312217","data-ke-language":"go","data-ke-type":"codeblock"}},[e("code",[t._v("gcloud config --help")])]),t._v(" "),e("blockquote",{attrs:{"data-ke-style":"style2"}},[e("span",{staticStyle:{color:"#666666"}},[t._v("도움말 콘텐츠를 스크롤하려면")]),e("span",{staticStyle:{color:"#666666"}},[t._v(" ")]),e("b",[t._v("Enter")]),e("span",{staticStyle:{color:"#666666"}},[t._v(" ")]),e("span",{staticStyle:{color:"#666666"}},[t._v("키나")]),e("span",{staticStyle:{color:"#666666"}},[t._v(" ")]),e("b",[t._v("스페이스바")]),e("span",{staticStyle:{color:"#666666"}},[t._v("를 누르면 된다.")]),e("br"),e("span",{staticStyle:{color:"#666666"}},[t._v("표시된 콘텐츠에서 나가려면")]),e("span",{staticStyle:{color:"#666666"}},[t._v(" ")]),e("span",{staticStyle:{"background-color":"#dddddd"}},[t._v("q")]),e("span",{staticStyle:{color:"#666666"}},[t._v("를 입력하자.")]),e("span",{staticStyle:{color:"#666666"}})]),t._v(" "),e("p",[t._v("이제 다음 명령어를 실행해 보자.")]),t._v(" "),e("pre",{staticClass:"go",attrs:{id:"code_1586634465521","data-ke-language":"go","data-ke-type":"codeblock"}},[e("code",[t._v("gcloud help config")])]),t._v(" "),e("p",[e("span",{staticStyle:{"background-color":"#dddddd"}},[t._v("gcloud config --help")]),e("span",[t._v(" ")]),t._v("및"),e("span",[t._v(" ")]),e("span",{staticStyle:{"background-color":"#dddddd"}},[t._v("gcloud help config")]),e("span",[t._v(" ")]),t._v("명령어의 "),e("span",{staticStyle:{color:"#ee2323"}},[e("b",[t._v("기능이 같다")])]),t._v("는 것을 알 수 있다.")]),t._v(" "),e("p",[t._v("두 명령어 모두 상세한 도움말을 표시한다.")]),t._v(" "),e("p",[t._v(" ")]),t._v(" "),e("p",[t._v(" ")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://cloud.google.com/sdk/gcloud/reference/"}},[t._v("gcloud"),e("span",[t._v(" ")]),t._v("전역 플래그")]),t._v("는 호출 레벨에 따른 명령어 동작을 제어한다.")]),t._v(" "),e("p",[t._v("플래그는 SDK 속성에서 설정된 모든 값을 재정의한다.")]),t._v(" "),e("p",[t._v(" ")]),t._v(" "),e("p",{staticStyle:{"font-size":"1.12em"},attrs:{"data-ke-size":"size16"}},[e("span",{staticStyle:{"background-color":"#f6e199"}},[e("b",[t._v("환경에서 구성 목록을 확인")])])]),t._v(" "),e("pre",{staticClass:"go",attrs:{id:"code_1586634621580","data-ke-language":"go","data-ke-type":"codeblock"}},[e("code",[t._v("gcloud config list")])]),t._v(" "),e("p",[t._v(" ")]),t._v(" "),e("p",[t._v('[##_Image|kage@b5umXM/btqDkAxGRdo/N5MgyLfjCHHj3VpAMJDlMK/img.png|alignCenter|data-filename="(3)CloudShell&gcloud(9).png" data-origin-width="839" data-origin-height="277"| 환경 구성 목록을 확인할 수 있다.||_##]')]),t._v(" "),e("p",[t._v("설정된 "),e("span",{staticStyle:{"background-color":"#9feec3"}},[t._v("다른 속성을 확인")]),t._v("하려면 다음을 호출하여 모든 속성을 표시할 수 있다.")]),t._v(" "),e("pre",{staticClass:"go",attrs:{id:"code_1586634668091","data-ke-language":"go","data-ke-type":"codeblock"}},[e("code",[t._v("gcloud config list --all")])]),t._v(" "),e("p",[t._v("다음을 통해"),e("span",[t._v(" ")]),e("span",{staticStyle:{"background-color":"#dddddd"}},[t._v("components")]),t._v("를 나열합니다.")]),t._v(" "),e("pre",{staticClass:"go",attrs:{id:"code_1586634688437","data-ke-language":"go","data-ke-type":"codeblock"}},[e("code",[t._v("gcloud components list")])]),t._v(" "),e("p",[t._v("이 명령어로 실습에서 사용할 수 있는 "),e("span",{staticStyle:{"background-color":"#9feec3"}},[t._v("구성요소가 표시")]),t._v("된다.")]),t._v(" "),e("p",[t._v(" ")]),t._v(" "),e("p",[t._v('[##_Image|kage@TMSZl/btqDlOhGXB8/j0GIFbEkKJCx3kk6bSBuZ1/img.png|alignCenter|data-filename="(3)CloudShell&gcloud(10).png" data-origin-width="903" data-origin-height="768"|구성 요소를 확인할 수 있다||_##]')]),t._v(" "),e("p",[t._v(" ")]),t._v(" "),e("p",[e("b",[t._v("새로운 구성요소(components)를 설치해 보자! ")])]),t._v(" "),e("p",[t._v(" ")]),t._v(" "),e("h2",{attrs:{id:"step10","data-ke-size":"size26"}},[e("span",{staticStyle:{"background-color":"#99cefa"}},[t._v("자동 완성")])]),t._v(" "),e("p",{staticStyle:{"font-size":"1.12em"},attrs:{"data-ke-size":"size16"}},[e("b",[e("span",{staticStyle:{"background-color":"#f6e199"}},[t._v("gcloud interactive")])])]),t._v(" "),e("ul",{staticStyle:{"list-style-type":"disc"},attrs:{"data-ke-list-type":"disc"}},[e("li",[t._v("명령어 및 플래그를 자동으로 추천하고 명령어 입력 시 하단에 인라인 도움말 스니펫을 표시한다.")]),t._v(" "),e("li",[t._v("드롭다운 메뉴를 사용해서 명령어 및 하위 명령어 이름과 같은 정적 정보와 플래그 이름 및 열거형 플래그 값을 자동으로 완성할 수 있다!")])]),t._v(" "),e("p",[t._v("다음을 통해 베타 구성요소를 설치하자.")]),t._v(" "),e("pre",{staticClass:"go",attrs:{id:"code_1586634818418","data-ke-language":"go","data-ke-type":"codeblock"}},[e("code",[t._v("gcloud components install beta")])]),t._v(" "),e("p",[t._v(" ")]),t._v(" "),e("p",[e("b",[t._v("gcloud interactive")]),e("span",[e("b",[e("span",[t._v(" ")]),t._v("모드")]),t._v("로 전환해보자.")])]),t._v(" "),e("pre",{staticClass:"go",attrs:{id:"code_1586634833343","data-ke-language":"go","data-ke-type":"codeblock"}},[e("code",[t._v("gcloud beta interactive")])]),t._v(" "),e("p",[t._v(" ")]),t._v(" "),e("p",[t._v('[##_Image|kage@daulEl/btqDnxTRjwJ/ckbmDxxAL13nEpRKvZrXq1/img.png|alignCenter|data-filename="(3)CloudShell&gcloud(11).png" data-origin-width="887" data-origin-height="331"|beta 구성요소를 설치하고 interactive 모드로 전환한 화면이다.||_##]')]),t._v(" "),e("p",[t._v(" ")]),t._v(" "),e("ul",{staticStyle:{"list-style-type":"disc"},attrs:{"data-ke-list-type":"disc"}},[e("li",[e("span"),e("b",[t._v("Tab")]),e("span",[t._v(" ")]),t._v("키를 클릭하여 파일 경로 및 리소스 인수를 입력한다.")]),t._v(" "),e("li",[t._v("드롭다운 메뉴가 나타나면"),e("span",[t._v(" ")]),e("b",[t._v("Tab")]),e("span",[t._v(" ")]),t._v("키를 사용하여 목록을 이동할 수 있다.")]),t._v(" "),e("li",[e("b",[t._v("스페이스바")]),t._v("를 사용하여 원하는 항목을 선택한다.")])]),t._v(" "),e("p",[t._v(" ")]),t._v(" "),e("p",{staticStyle:{"font-size":"1.12em"},attrs:{"data-ke-size":"size16"}},[e("span",{staticStyle:{"background-color":"#9feec3"}},[e("b",[t._v("테스트")])])]),t._v(" "),e("p",[t._v("먼저 다음 명령어를 입력한 후 자동 완성을 사용하여 명령어를 완성해보자.")]),t._v(" "),e("pre",{staticClass:"go",attrs:{id:"code_1586634846650","data-ke-language":"go","data-ke-type":"codeblock"}},[e("code",[t._v("gcloud compute instances describe <your_vm>")])]),t._v(" "),e("p",[t._v('[##_Image|kage@bubC9W/btqDj13nTs8/xaCIUu5CmFVyRbiEzKMBEK/img.png|alignCenter|data-filename="(3)CloudShell&gcloud(12).png" data-origin-width="828" data-origin-height="218"|실제로 하이라이팅 된 부분이 자동완성된다! 신기하다!||_##]')]),t._v(" "),e("p",{staticStyle:{"font-size":"1.12em"},attrs:{"data-ke-size":"size16"}},[e("span",{staticStyle:{"background-color":"#9feec3"}},[e("b",[t._v("F2 토글 key 사용")])])]),t._v(" "),e("p",[t._v("Cloud Shell 하단에 이 기능을 설정하는 단축키가 표시된다. 여기에서 F2 토글을 사용할 수 있다.")]),t._v(" "),e("p",[t._v("F2:help:STATE를 통해 활성 도움말 섹션(ON: 사용, OFF: 사용 중지)을 전환한다.")]),t._v(" "),e("p",[t._v(" ")]),t._v(" "),e("p",[t._v('[##_Image|kage@d2aBXs/btqDkz6zbXo/gkqusrhAhLKhEhlTmTWvdK/img.png|alignCenter|data-filename="(3)CloudShell&gcloud(13).png" data-origin-width="847" data-origin-height="260"|F2를 누르면 도움말 섹션이 사라진다!||_##]')]),t._v(" "),e("p",[t._v(" ")]),t._v(" "),e("h2",{attrs:{id:"step11","data-ke-size":"size26"}},[e("span",{staticStyle:{"background-color":"#99cefa"}},[t._v("VM 인스턴스에 SSH 사용")])]),t._v(" "),e("p",{staticStyle:{"font-size":"1.12em"},attrs:{"data-ke-size":"size16"}},[e("span",{staticStyle:{"background-color":"#f6e199"}},[e("b",[e("span",{staticStyle:{color:"#333333"}},[t._v("gcloud compute")])])])]),t._v(" "),e("p",[e("span",{staticStyle:{"background-color":"#dddddd"}},[t._v("gcloud compute")]),t._v("를 사용하면 인스턴스에 쉽게 연결할 수 있다."),e("span",[t._v(" ")]),e("span",{staticStyle:{"background-color":"#dddddd"}},[t._v("gcloud compute ssh")]),e("span",[t._v(" ")]),t._v("명령어는 SSH에 래퍼 기능을 제공하여 인증 및 "),e("span",{staticStyle:{"background-color":"#9feec3"}},[e("b",[t._v("인스턴스 이름과 IP 주소의 매핑을 처리")])]),t._v("하게 한다!")]),t._v(" "),e("p",[t._v(" ")]),t._v(" "),e("p",[e("span",{staticStyle:{"background-color":"#dddddd"}},[t._v("gcloud compute ssh")]),t._v("를 사용하여 가상 머신에 SSH를 사용해보자.")]),t._v(" "),e("pre",{staticClass:"go",attrs:{id:"code_1586634886642","data-ke-language":"go","data-ke-type":"codeblock"}},[e("code",[t._v("gcloud compute ssh gcelab2 --zone $ZONE")])]),t._v(" "),e("p",[t._v('[##_Image|kage@A5PuX/btqDnxzyNPV/MsG5DXf3qXyLY1itKicnlk/img.png|alignCenter|data-filename="(3)CloudShell&gcloud(14).png" data-origin-width="816" data-origin-height="214"|ZONE 변수를 넣고 gcloud compute로 인스턴스를 연결해보자||_##]')]),t._v(" "),e("p",[e("b",[e("span",{staticStyle:{color:"#333333"}},[t._v("계속하려면 'Y'를 입력하자.")])]),e("span")]),t._v(" "),e("p",[t._v(" ")]),t._v(" "),e("p",[t._v('[##_Image|kage@0zmGs/btqDj3tg2Io/AReyv6ocRdJBIOJOO3phsk/img.png|alignCenter|data-filename="(3)CloudShell&gcloud(15).png" data-origin-width="838" data-origin-height="72"|암호 섹션은 공백으로 둔다||_##]')]),t._v(" "),e("p",[e("b",[e("span",[e("span",{staticStyle:{color:"#333333"}},[t._v("암호 섹션에서는")]),e("span",{staticStyle:{color:"#333333"}},[t._v(" ")]),t._v("Enter"),e("span",{staticStyle:{color:"#333333"}},[t._v(" ")]),e("span",{staticStyle:{color:"#333333"}},[t._v("키를 눌러 암호를 공백으로 두자!")])])])]),t._v(" "),e("p",[t._v(" ")]),t._v(" "),e("p",[t._v("변경할 내용이 없는 경우 'exit'를 입력하면 원격 셸이 종료되어 SSH 연결을 끊으면 된다.")]),t._v(" "),e("p",[t._v(" ")]),t._v(" "),e("p",[t._v(" ")]),t._v(" "),e("h2",{attrs:{id:"step12","data-ke-size":"size26"}},[e("span",{staticStyle:{"background-color":"#99cefa"}},[t._v("홈 디렉터리 사용")])]),t._v(" "),e("p",{staticStyle:{"font-size":"1.12em"},attrs:{"data-ke-size":"size16"}},[e("span",{staticStyle:{"background-color":"#f6e199"}},[e("b",[t._v("HOME 디렉터리")])])]),t._v(" "),e("p",[t._v("이제 홈 디렉터리를 사용해보자. Cloud Shell 홈 디렉터리의 콘텐츠는 "),e("span",{staticStyle:{"background-color":"#9feec3"}},[e("b",[t._v("가상 머신을 종료했다가 다시 시작해도 모든 Cloud Shell 세션의 프로젝트에서 유지")])]),t._v("된다.")]),t._v(" "),e("p",[t._v(" ")]),t._v(" "),e("p",[t._v("다음과 같이 현재 작업 디렉터리를 변경한다.")]),t._v(" "),e("pre",{staticClass:"go",attrs:{id:"code_1586634973661","data-ke-language":"go","data-ke-type":"codeblock"}},[e("code",[t._v("cd $HOME")])]),t._v(" "),e("p",[t._v("vi"),e("span",[e("span",[t._v(" ")]),t._v("텍스트 편집기를 사용하여"),e("span",[t._v(" ")])]),t._v(".bashrc"),e("span",[e("span",[t._v(" ")]),t._v("구성 파일을 열어보자.")])]),t._v(" "),e("pre",{staticClass:"go",attrs:{id:"code_1586634989962","data-ke-language":"go","data-ke-type":"codeblock"}},[e("code",[t._v("vi ./.bashrc")])]),t._v(" "),e("p",[t._v('[##_Image|kage@dv2SlP/btqDml0EUQ6/Gy7HtLNsOx16MCdFKSRLdK/img.png|alignCenter|data-filename="(3)CloudShell&gcloud(16).png" data-origin-width="812" data-origin-height="366"|홈 디렉터리에서 열어본 bashrc 구성 파일||_##]')]),t._v(" "),e("p",[t._v(" ")]),t._v(" "),e("p",[e("span",[t._v("편집기가 열리면서 파일 콘텐츠가 표시된다."),e("span",[t._v(" ")])])]),t._v(" "),e("p",[e("span",{staticStyle:{"background-color":"#dddddd"}},[t._v("ESC 키를 누른 후 :wq")]),e("span",[t._v("를 입력하여 편집기를 종료할 수 있다!")])]),t._v(" "),e("p",[t._v(" ")]),t._v(" "),e("p",[t._v(" ")]),t._v(" "),e("h2",{attrs:{id:"step13","data-ke-size":"size26"}},[e("span",{staticStyle:{"background-color":"#99cefa"}},[t._v("배운 내용 테스트하기")])]),t._v(" "),e("p",[e("span",[t._v("아래는 이 실습에서 배운 내용을 복습하기 위한 객관식 문제이다.")]),e("span")]),t._v(" "),e("p",[t._v("해석하면 다음과 같다.")]),t._v(" "),e("blockquote",{attrs:{"data-ke-style":"style3"}},[e("span",[e("span",{staticStyle:{color:"#000000"}},[t._v("GCP 서비스 및 리소스와 상호 작용하는 세 가지 기본적인 방법은 다음과 같습니다.")])])]),t._v(" "),e("p",[t._v(" ")]),t._v(" "),e("p",[t._v('[##_Image|kage@bjn5Ra/btqDk55luJL/KkvzopCfN4HlzT2GEpwZw1/img.png|alignCenter|data-filename="(3)CloudShell&gcloud(17).png" data-origin-width="530" data-origin-height="275"|세 가지 기본적인 방법은 이렇다!||_##]')]),t._v(" "),e("p",[t._v(" ")]),t._v(" "),e("p",[t._v(" ")]),t._v(" "),e("h2",{attrs:{id:"step13"}},[e("span",{staticStyle:{"background-color":"#99cefa"}},[t._v("끝났다!")])]),t._v(" "),e("p",[t._v('[##_Image|kage@len7H/btqDkAj90Od/1ozkw0IOWLRZoI9Nla1QLK/img.png|alignCenter|data-origin-width="0" data-origin-height="0"|실습 완료했다!||_##]')]),t._v(" "),e("p",[t._v(" ")])])}),[],!1,null,null,null);a.default=l.exports}}]);