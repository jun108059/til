(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{246:function(s,t,a){s.exports=a.p+"assets/img/1.elasticsearchLogo.5bfa3d03.png"},689:function(s,t,a){"use strict";a.r(t);var n=a(12),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"elasticsearch-데이터-입력-조회-삭제-실습"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch-데이터-입력-조회-삭제-실습"}},[s._v("#")]),s._v(" ElasticSearch 데이터 입력, 조회, 삭제 실습")]),s._v(" "),t("p",[t("img",{attrs:{src:a(246),alt:"img"}})]),s._v(" "),t("hr"),s._v(" "),t("h3",{attrs:{id:"실습-환경"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#실습-환경"}},[s._v("#")]),s._v(" 실습 환경")]),s._v(" "),t("ul",[t("li",[s._v("💡 Elasticsearch 7.9.0")]),s._v(" "),t("li",[s._v("💡 Windows 10")]),s._v(" "),t("li",[s._v("💡 Git Bash")])]),s._v(" "),t("hr"),s._v(" "),t("p",[s._v("시작하기 전 지난 포스팅에 정리한 표를 참고하고자 아래에 넣어두겠다.")]),s._v(" "),t("p",[t("code",[s._v("GET")]),s._v(", "),t("code",[s._v("POST")]),s._v(", "),t("code",[s._v("PUT")]),s._v(", "),t("code",[s._v("DELETE")]),s._v(" 를 먼저 실습해보고자 한다.")]),s._v(" "),t("hr"),s._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"center"}},[s._v("ElasticSearch")]),s._v(" "),t("th",{staticStyle:{"text-align":"center"}},[s._v("RDB")])])]),s._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"center"}},[t("strong",[s._v("Index")])]),s._v(" "),t("td",{staticStyle:{"text-align":"center"}},[s._v("Database")])]),s._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[t("strong",[s._v("Type")])]),s._v(" "),t("td",{staticStyle:{"text-align":"center"}},[s._v("Table")])]),s._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[t("strong",[s._v("Document")])]),s._v(" "),t("td",{staticStyle:{"text-align":"center"}},[s._v("Row")])]),s._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[t("strong",[s._v("Field")])]),s._v(" "),t("td",{staticStyle:{"text-align":"center"}},[s._v("Column")])]),s._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[t("strong",[s._v("Mapping")])]),s._v(" "),t("td",{staticStyle:{"text-align":"center"}},[s._v("Schema")])])])]),s._v(" "),t("p",[s._v("▲ 저장 구조")]),s._v(" "),t("hr"),s._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"center"}},[s._v("ElasticSearch")]),s._v(" "),t("th",{staticStyle:{"text-align":"center"}},[s._v("RDB")]),s._v(" "),t("th",{staticStyle:{"text-align":"center"}},[s._v("CRUD")])])]),s._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"center"}},[t("strong",[s._v("GET")])]),s._v(" "),t("td",{staticStyle:{"text-align":"center"}},[s._v("Select")]),s._v(" "),t("td",{staticStyle:{"text-align":"center"}},[s._v("Read")])]),s._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[t("strong",[s._v("POST")])]),s._v(" "),t("td",{staticStyle:{"text-align":"center"}},[s._v("Insert")]),s._v(" "),t("td",{staticStyle:{"text-align":"center"}},[s._v("Create")])]),s._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[t("strong",[s._v("PUT")])]),s._v(" "),t("td",{staticStyle:{"text-align":"center"}},[s._v("Update")]),s._v(" "),t("td",{staticStyle:{"text-align":"center"}},[s._v("Update")])]),s._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[t("strong",[s._v("DELETE")])]),s._v(" "),t("td",{staticStyle:{"text-align":"center"}},[s._v("Delete")]),s._v(" "),t("td",{staticStyle:{"text-align":"center"}},[s._v("Delete")])])])]),s._v(" "),t("p",[s._v("▲ Query")]),s._v(" "),t("hr"),s._v(" "),t("h2",{attrs:{id:"_1-create-index-만들기"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-create-index-만들기"}},[s._v("#")]),s._v(" 1. (Create) Index 만들기")]),s._v(" "),t("p",[s._v("아래 명령어를 입력하면 index가 생성된다.")]),s._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-XPUT")]),s._v(" http://localhost:9200/classes?pretty\n")])])]),t("p",[s._v("결과")]),s._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"acknowledged"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" true,\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shards_acknowledged"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" true,\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"index"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"classes"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("hr"),s._v(" "),t("h2",{attrs:{id:"_2-read-index-조회하기"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-read-index-조회하기"}},[s._v("#")]),s._v(" 2. (Read) Index 조회하기")]),s._v(" "),t("p",[s._v("index가 잘 만들어졌는지 확인해보자.")]),s._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-XGET")]),s._v(" http://localhost:9200/classes?pretty\n")])])]),t("p",[s._v("결과")]),s._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"classes"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"aliases"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mappings"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"settings"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"index"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"creation_date"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1597992858432"')]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"number_of_shards"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"number_of_replicas"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"uuid"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vPVLv77BSICCXk9VWekU_w"')]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"version"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"created"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"7090099"')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"provided_name"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"classes"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("hr"),s._v(" "),t("h2",{attrs:{id:"_3-delete-index-삭제하기"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-delete-index-삭제하기"}},[s._v("#")]),s._v(" 3. (Delete) Index 삭제하기")]),s._v(" "),t("p",[s._v("삭제해보자.")]),s._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-XDELETE")]),s._v(" http://localhost:9200/classes?pretty\n")])])]),t("p",[s._v("결과")]),s._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"acknowledged"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[s._v("잘 삭제되었는지 확인해보자.")]),s._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-XGET")]),s._v(" http://localhost:9200/classes?pretty\n")])])]),t("p",[s._v("결과")]),s._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"error"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"root_cause"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"type"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"index_not_found_exception"')]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"reason"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"no such index [classes]"')]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"resource.type"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"index_or_alias"')]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"resource.id"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"classes"')]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"index_uuid"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_na_"')]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"index"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"classes"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"type"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"index_not_found_exception"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"reason"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"no such index [classes]"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"resource.type"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"index_or_alias"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"resource.id"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"classes"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"index_uuid"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_na_"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"index"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"classes"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"status"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("404")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[s._v("없는 index에 접근해 404 에러를 띄우는 것을 확인할 수 있다.")]),s._v(" "),t("h2",{attrs:{id:"_4-create-document-만들기"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-create-document-만들기"}},[s._v("#")]),s._v(" 4. (Create) Document 만들기")]),s._v(" "),t("p",[s._v("Table의 Row와 유사한 개념으로 "),t("code",[s._v("JSON 형식")]),s._v("의 문서라는 차이점이 있다.")]),s._v(" "),t("p",[s._v("아래 명령어를 통해 생성할 수 있다.")]),s._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-XPOST")]),s._v(" http://localhost:9200/classes/class/1/ "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{"title" : "ElasticSearch", "professor" : "Youngjun_Park"}\'')]),s._v("\n")])])]),t("p",[s._v("Window10 환경에서 실행하여 "),t("code",[s._v("406 Error")]),s._v("가 출력된다면 이 명령어를 사용하면 된다.")]),s._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-XPOST")]),s._v(" http://localhost:9200/classes/class/1/?pretty "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-H")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Content-Type: application/json'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{"title" : "ElasticSearch", "professor" : "Youngjun_Park"}\'')]),s._v("\n")])])]),t("p",[s._v("그래도 안된다면 내가 겪었던 문제와 같을 것 같으니 "),t("RouterLink",{attrs:{to:"/ElasticSearch/Error-handling.html"}},[s._v("Error-Handling page")]),s._v("를 참고하도록 하자!")],1),s._v(" "),t("p",[s._v("정상적으로 생성됐다면 아래와 비슷한 출력을 볼 수 있다.")]),s._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_index"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"classes"')]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_type"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"class"')]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_id"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_version"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"result"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"created"')]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_shards"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"total"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"successful"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"failed"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_seq_no"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_primary_term"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[s._v("잘 생성됐는지 확인해보자.")]),s._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-XGET")]),s._v(" http://localhost:9200/classes/class/1/?pretty\n")])])]),t("p",[s._v("결과")]),s._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_index"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"classes"')]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_type"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"class"')]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_id"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_version"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_seq_no"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_primary_term"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"found"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" true,\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_source"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"title"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ElasticSearch"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"professor"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Youngjun_Park"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("h2",{attrs:{id:"_5-json-file의-데이터-삽입하기"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-json-file의-데이터-삽입하기"}},[s._v("#")]),s._v(" 5. JSON File의 데이터 삽입하기")]),s._v(" "),t("p",[s._v("매번 데이터를 넣을 때 마다 위와 같이 작성할 수는 없다.")]),s._v(" "),t("p",[s._v("아래에 보이는 "),t("code",[s._v("JSON")]),s._v(" 파일 데이터를 Insert해보자.")]),s._v(" "),t("div",{staticClass:"language-JSON extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"title"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Algorithm"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"Professor"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Youngjun Park"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"major"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Computer Science"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"semester"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"spring"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fall"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"student_count"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"unit"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"rating"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[t("code",[s._v("@'file명'")]),s._v(" 을 포함한 다음 명령어를 통해 JSON 데이터를 삽일할 수 있다.")]),s._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-XPUT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-H")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Content-Type: application/json'")]),s._v(" http://localhost:9200/classes/class/1/?pretty "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" @oneclass.json\n")])])]),t("p",[s._v("결과")]),s._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_index"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"classes"')]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_type"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"class"')]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_id"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_version"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"result"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"updated"')]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_shards"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"total"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"successful"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"failed"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_seq_no"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_primary_term"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[s._v("데이터가 잘 들어갔는지 확인해보자.")]),s._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-GET")]),s._v(" http://localhost:9200/classes/class/1/?pretty\n")])])]),t("p",[s._v("결과")]),s._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_index"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"classes"')]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_type"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"class"')]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_id"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_version"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_seq_no"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_primary_term"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"found"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" true,\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_source"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"title"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Algorithm"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Professor"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Youngjun Park"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"major"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Computer Science"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"semester"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"spring"')]),s._v(",\n      "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fall"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"student_count"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"unit"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rating"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("hr"),s._v(" "),t("blockquote",[t("p",[s._v("본 포스팅은 "),t("code",[s._v("Inflearn")]),s._v("의 "),t("a",{attrs:{href:"https://www.inflearn.com/course/elk-%EC%8A%A4%ED%83%9D-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EB%B6%84%EC%84%9D",target:"_blank",rel:"noopener noreferrer"}},[s._v("ELK 스택 (ElasticSearch, Logstash, Kibana) 으로 데이터 분석"),t("OutboundLink")],1),s._v(" 강의를 참고하여 작성되었습니다.")])])])}),[],!1,null,null,null);t.default=e.exports}}]);