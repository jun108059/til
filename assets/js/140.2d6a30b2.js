(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{799:function(e,r,s){"use strict";s.r(r);var o=s(12),n=Object(o.a)({},(function(){var e=this,r=e._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"mac-os-permission-denied-해결하기"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mac-os-permission-denied-해결하기"}},[e._v("#")]),e._v(" [Mac OS] 'permission denied'해결하기")]),e._v(" "),r("h2",{attrs:{id:"homebrew의-permission-denied"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#homebrew의-permission-denied"}},[e._v("#")]),e._v(" Homebrew의 Permission denied")]),e._v(" "),r("p",[e._v("brew를 통해 애플리케이션을 install 하다보면 ‘Permission denied’ 에러를 종종 보게된다.")]),e._v(" "),r("p",[r("code",[e._v("$ Error: Permission denied @ dir_s_mkdir — /usr/local/Frameworks")])]),e._v(" "),r("p",[e._v("설치하는 프로그램이 시스템 단으로 접근하려고 할 때 일어나는 문제이다.")]),e._v(" "),r("p",[e._v("처음에는 단순히 sudo brew install을 하면 되겠거니 생각했는데, sudo brew 명령어를 사용하면 다음과 같이 퇴짜를 맞는다.")]),e._v(" "),r("p",[r("code",[e._v("$ Error: Running Homebrew as root is extremely dangerous and no longer supported.")])]),e._v(" "),r("blockquote",[r("p",[e._v("이 문제를 해결하는 대표적인 방법은 접근하려고 하는 디렉토리에게만 권한을 주는 것이다.")])]),e._v(" "),r("p",[e._v("permission denied 에러메세지가 어느 디렉토리에서 거절이 됐는지 알려주기 때문에 이 디렉토리에게 sudo 권한을 주면 된다.")]),e._v(" "),r("p",[e._v("위의 경우 /usr/local/Frameworks에서 접근이 제한됐으므로 이 폴더에 대한 접근을 허용시켜주자")]),e._v(" "),r("p",[r("code",[e._v("$ sudo chown -R ${name} /usr/local/Frameworks")])]),e._v(" "),r("ul",[r("li",[e._v("${name}에 당신의 os 로그인 계정 이름을 넣으면 된다.")])]),e._v(" "),r("p",[e._v("이 명령어를 입력 후 비밀번호를 입력!")]),e._v(" "),r("p",[e._v("이제 다시 brew install ${library} 를 실행하면 정상적으로 설치가 되는 것을 볼 수 있다!")]),e._v(" "),r("hr"),e._v(" "),r("h3",{attrs:{id:"reference"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[e._v("#")]),e._v(" Reference")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://worthpreading.tistory.com/89",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://worthpreading.tistory.com/89"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);r.default=n.exports}}]);