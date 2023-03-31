(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{511:function(t,n,e){t.exports=e.p+"assets/img/JenkinsLogo.a1bc8934.png"},748:function(t,n,e){"use strict";e.r(n);var r=e(12),a=Object(r.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"_1-젠킨스란"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-젠킨스란"}},[t._v("#")]),t._v(" 1. 젠킨스란?")]),t._v(" "),n("p",[n("img",{attrs:{src:e(511),alt:"img"}})]),t._v(" "),n("p",[n("strong",[t._v("Open Source CI(Continuous Integration) Tool")])]),t._v(" "),n("h3",{attrs:{id:"_1️⃣-젠킨스가-할-수-있는-일"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1️⃣-젠킨스가-할-수-있는-일"}},[t._v("#")]),t._v(" 1️⃣ 젠킨스가 할 수 있는 일")]),t._v(" "),n("ul",[n("li",[t._v("개발 소스 빌드 과정의 공통 배치화")]),t._v(" "),n("li",[t._v("스케줄 및 사용자 액션 기타 다양한 트리거에 의한 배치 작업 실행")]),t._v(" "),n("li",[t._v("Job간의 pipeline을 통한 작업")]),t._v(" "),n("li",[t._v("다양한 시스템과의 연동 작업")]),t._v(" "),n("li",[t._v("실행된 Job의 로그 수집")])]),t._v(" "),n("h2",{attrs:{id:"_2-젠킨스-사용하기"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-젠킨스-사용하기"}},[t._v("#")]),t._v(" 2. 젠킨스 사용하기")]),t._v(" "),n("h3",{attrs:{id:"_1️⃣-설치하기"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1️⃣-설치하기"}},[t._v("#")]),t._v(" 1️⃣ 설치하기")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("yum 설치")])])]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-O")]),t._v(" /etc/yum.repos.d/jenkins.repo "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("http://pkg.jenkins-ci.org/redhat/jenkins.repo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("http://pkg.jenkins-ci.org/redhat/jenkins.repo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("rpm")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("https://jenkins-ci.org/redhat/jenkins-ci.org.key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("http://pkg.jenkins-ci.org/redhat/jenkins-ci.org.key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nyum "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" jenkins\nyum installed jenkins\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" jenkins restart\n")])])]),n("p",[t._v("브라우저에서 "),n("a",{attrs:{href:"http://jenkins/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://jenkinsip:8080"),n("OutboundLink")],1),t._v(" 접속")]),t._v(" "),n("h3",{attrs:{id:"_2️⃣-플러그인-설치"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2️⃣-플러그인-설치"}},[t._v("#")]),t._v(" 2️⃣ "),n("strong",[t._v("플러그인 설치")])]),t._v(" "),n("p",[t._v("빌드에 필요한 jenkins 플러그인 설치")]),t._v(" "),n("ul",[n("li",[t._v("시작화면에서 좌측 메뉴 Jenkins 관리 > 플러그인 관리 항목")])]),t._v(" "),n("blockquote",[n("p",[n("strong",[t._v("Maven 빌드를 위한 플러그인")]),n("br"),t._v(" "),n("a",{attrs:{href:"http://wiki.jenkins-ci.org/display/JENKINS/M2+Release+Plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("Maven Release Plug-in Plug-in"),n("OutboundLink")],1),t._v(" : 메이븐 빌드의 maven-release-plugin (release 과정을 처리하는) 과 연동하기 위한 jenkins 플러그인"),n("br"),t._v(" "),n("a",{attrs:{href:"https://wiki.jenkins-ci.org/display/JENKINS/Maven+Repo+Cleaner+Plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("Maven Repository Scheduled Cleanup Plugin"),n("OutboundLink")],1),t._v(" : 빌드후 생긴 로컬 리파지토리를 주기적으로 제거함")])]),t._v(" "),n("h3",{attrs:{id:"배포관련"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#배포관련"}},[t._v("#")]),t._v(" "),n("strong",[t._v("배포관련")])]),t._v(" "),n("p",[n("a",{attrs:{href:"https://wiki.jenkins-ci.org/display/JENKINS/Nexus+Artifact+Uploader",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nexus Artifact Uploader"),n("OutboundLink")],1),t._v(" : 빌드 결과물을 Nexus 에 강제 업로드 하기 위한 플러그인")]),t._v(" "),n("p",[n("a",{attrs:{href:"http://wiki.jenkins-ci.org/display/JENKINS/Publish+Over+SSH+Plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("Publish Over SSH"),n("OutboundLink")],1),t._v(" : ssh 를 통한 파일 배포 원격 커멘드 처리를 위한 플러그인")]),t._v(" "),n("h3",{attrs:{id:"알림-관련"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#알림-관련"}},[t._v("#")]),t._v(" "),n("strong",[t._v("알림 관련")])]),t._v(" "),n("p",[n("a",{attrs:{href:"http://wiki.jenkins-ci.org/display/JENKINS/Slack+Plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("Slack Notification Plugin"),n("OutboundLink")],1),t._v("\n: jenkins 슬랙 연동")]),t._v(" "),n("p",[t._v("먼저 슬랙에 채널 및 슬랙 jenkins플러그인을 설치하고 jenkins 관리")]),t._v(" "),n("blockquote",[n("p",[t._v("시스템설정에서 Slack 셋팅을 완료하셔야 합니다."),n("br"),t._v("\n그렇지 않을 경우 jenkins가 정상 동작하지 않습니다. (null point error)")])])])}),[],!1,null,null,null);n.default=a.exports}}]);