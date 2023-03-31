(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{246:function(s,t,a){s.exports=a.p+"assets/img/1.elasticsearchLogo.5bfa3d03.png"},690:function(s,t,a){"use strict";a.r(t);var n=a(12),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"elasticsearch-데이터-업데이트-실습"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch-데이터-업데이트-실습"}},[s._v("#")]),s._v(" ElasticSearch 데이터 업데이트 실습")]),s._v(" "),t("p",[t("img",{attrs:{src:a(246),alt:"img"}})]),s._v(" "),t("hr"),s._v(" "),t("h3",{attrs:{id:"실습-환경"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#실습-환경"}},[s._v("#")]),s._v(" 실습 환경")]),s._v(" "),t("ul",[t("li",[s._v("💡 Elasticsearch 7.9.0")]),s._v(" "),t("li",[s._v("💡 Windows 10")]),s._v(" "),t("li",[s._v("💡 Git Bash")])]),s._v(" "),t("hr"),s._v(" "),t("h2",{attrs:{id:"_1-create-document-생성하기"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-create-document-생성하기"}},[s._v("#")]),s._v(" 1. (Create) Document 생성하기")]),s._v(" "),t("p",[s._v("업데이트 하려면 Document가 먼저 생성되어 있어야한다.")]),s._v(" "),t("p",[s._v("생성하는 명령어는 다음과 같다.")]),s._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-XPOST")]),s._v(" http://localhost:9200/classes/class/1/?pretty "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-H")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Content-Type: application/json'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{"title" : "Algorithm", "professor" : "yj_park"}\'')]),s._v("\n")])])]),t("p",[s._v("확인하기")]),s._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-XGET")]),s._v(" http://localhost:9200/classes/class/1/?pretty\n")])])]),t("p",[s._v("결과")]),s._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_index"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"classes"')]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_type"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"class"')]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_id"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_version"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_seq_no"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_primary_term"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"found"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" true,\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_source"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"title"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Algorithm"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"professor"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"yj_park"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("hr"),s._v(" "),t("h2",{attrs:{id:"_2-update-document에-field-추가하기"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-update-document에-field-추가하기"}},[s._v("#")]),s._v(" 2. (Update) Document에 Field 추가하기")]),s._v(" "),t("p",[s._v("과목은 "),t("code",[s._v("Algorithm")]),s._v("이고 교수는 "),t("code",[s._v("yj_park")]),s._v("인데")]),s._v(" "),t("p",[s._v("몇 학점짜리 강의인지 "),t("code",[s._v("Field")]),s._v("를 추가하고 싶다.")]),s._v(" "),t("p",[t("code",[s._v("_update")]),s._v("가 포함된 다음 명령어를 사용하면 된다.")]),s._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-XPOST")]),s._v(" http://localhost:9200/classes/class/1/_update?pretty "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-H")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Content-Type: application/json'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{"doc" : {"unit" : 1}}\'')]),s._v("\n")])])]),t("p",[s._v("결과")]),s._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_index"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"classes"')]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_type"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"class"')]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_id"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_version"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"result"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"updated"')]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_shards"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"total"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"successful"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"failed"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_seq_no"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_primary_term"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[s._v("확인해보기 위해 GET REST API를 작성해보자.")]),s._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-XGET")]),s._v(" http://localhost:9200/classes/class/1/?pretty\n")])])]),t("p",[s._v("결과")]),s._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_index"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"classes"')]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_type"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"class"')]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_id"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_version"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_seq_no"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_primary_term"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"found"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" true,\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_source"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"title"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Algorithm"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"professor"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"yj_park"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"unit"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("hr"),s._v(" "),t("h2",{attrs:{id:"_3-update-기존-field-값-변경하기"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-update-기존-field-값-변경하기"}},[s._v("#")]),s._v(" 3. (Update) 기존 Field 값 변경하기")]),s._v(" "),t("p",[s._v("학점 Field인 "),t("code",[s._v("unit")]),s._v("을 1학점에서 2학점으로 변경해보자.")]),s._v(" "),t("p",[s._v("새로운 field를 추가할 때와 같은 명령어를 입력하고 unit의 변경할 값만 넣어주면 된다.")]),s._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-XPOST")]),s._v(" http://localhost:9200/classes/class/1/_update?pretty "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-H")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Content-Type: application/json'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{"doc" : {"unit" : 2}}\'')]),s._v("\n")])])]),t("p",[s._v("변경됐는지 확인해보자.")]),s._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-XGET")]),s._v(" http://localhost:9200/classes/class/1/?pretty\n")])])]),t("p",[s._v("결과")]),s._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_index"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"classes"')]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_type"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"class"')]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_id"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_version"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_seq_no"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_primary_term"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"found"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" true,\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_source"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"title"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Algorithm"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"professor"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"yj_park"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"unit"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])])]),t("h2",{attrs:{id:"_4-update-script를-활용한-field-값-변경하기"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-update-script를-활용한-field-값-변경하기"}},[s._v("#")]),s._v(" 4. (Update) Script를 활용한 Field 값 변경하기")]),s._v(" "),t("p",[s._v("실제 코딩할 때 유용하게 쓰려면 "),t("code",[s._v("Script")]),s._v("를 활용하면 좋다.")]),s._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-XPOST")]),s._v(" http://localhost:9200/classes/class/1/_update?pretty "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-H")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Content-Type: application/json'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{"script" : "ctx._source.unit += 5"}\'')]),s._v("\n")])])]),t("p",[s._v("학점"),t("code",[s._v("unit")]),s._v("이 "),t("code",[s._v("5학점")]),s._v(" 더 올라갔는지 확인해보자")]),s._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-XGET")]),s._v(" http://localhost:9200/classes/class/1/?pretty\n")])])]),t("p",[s._v("결과")]),s._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_index"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"classes"')]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_type"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"class"')]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_id"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_version"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_seq_no"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_primary_term"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"found"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" true,\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_source"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"title"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Algorithm"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"professor"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"yj_park"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"unit"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("hr"),s._v(" "),t("blockquote",[t("p",[s._v("본 포스팅은 "),t("code",[s._v("Inflearn")]),s._v("의 "),t("a",{attrs:{href:"https://www.inflearn.com/course/elk-%EC%8A%A4%ED%83%9D-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EB%B6%84%EC%84%9D",target:"_blank",rel:"noopener noreferrer"}},[s._v("ELK 스택 (ElasticSearch, Logstash, Kibana) 으로 데이터 분석"),t("OutboundLink")],1),s._v(" 강의를 참고하여 작성되었습니다.")])]),s._v(" "),t("hr")])}),[],!1,null,null,null);t.default=e.exports}}]);