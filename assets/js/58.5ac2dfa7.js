(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{246:function(s,t,a){s.exports=a.p+"assets/img/1.elasticsearchLogo.5bfa3d03.png"},691:function(s,t,a){"use strict";a.r(t);var n=a(12),r=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"elasticsearch-벌크-bulk"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch-벌크-bulk"}},[s._v("#")]),s._v(" ElasticSearch 벌크(Bulk)")]),s._v(" "),t("p",[t("img",{attrs:{src:a(246),alt:"img"}})]),s._v(" "),t("hr"),s._v(" "),t("h3",{attrs:{id:"실습-환경"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#실습-환경"}},[s._v("#")]),s._v(" 실습 환경")]),s._v(" "),t("ul",[t("li",[s._v("💡 Elasticsearch 7.9.0")]),s._v(" "),t("li",[s._v("💡 Windows 10")]),s._v(" "),t("li",[s._v("💡 Git Bash")])]),s._v(" "),t("hr"),s._v(" "),t("p",[s._v("Bulk는 간단히 설명하면 여러개의 Document(데이터)를 한번에 "),t("code",[s._v("ES")]),s._v("에 삽입하는 방법이다.")]),s._v(" "),t("h2",{attrs:{id:"_1-bulk-post"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-bulk-post"}},[s._v("#")]),s._v(" 1. BULK POST")]),s._v(" "),t("p",[s._v("명령어 구조는 다음과 같다.")]),s._v(" "),t("p",[t("code",[s._v('curl -XPOST "/ES주소/"_bulk --data-binary @"file명".json')])]),s._v(" "),t("p",[s._v("실제로 사용해보자.")]),s._v(" "),t("p",[s._v("삽입하고자 하는 Document 내용을 "),t("a",{attrs:{href:"https://github.com/jun108059/til/blob/master/practice/ElasticSearch/classes.json",target:"_blank",rel:"noopener noreferrer"}},[s._v("JSON file"),t("OutboundLink")],1),s._v("에서 확인해보면")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("첫 번째 Line")]),s._v(" : Meta information")]),s._v(" "),t("li",[t("strong",[s._v("두 번째 Line")]),s._v(" : 실제 들어갈 값")])]),s._v(" "),t("div",{staticClass:"language-JSON extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"index"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"_index"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"classes"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"_type"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"class"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"_id"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"title"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Machine Learning"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"Professor"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"YoungJun Park"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"major"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Computer Science"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"semester"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"spring"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fall"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"student_count"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"unit"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"rating"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"submit_date"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2020-01-02"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"school_location"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"lat"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("36.00")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"lon"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("-120.00")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[s._v("이렇게 "),t("code",[s._v("2 Line")]),s._v(" 씩 반복되는 포맷이 저장되어있다.")]),s._v(" "),t("blockquote",[t("p",[s._v("POST 명령어로 삽입해보자.")])]),s._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-XPOST")]),s._v(" http://localhost:9200/_bulk?pretty --data-binary @classes.json "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-H")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Content-Type: application/json'")]),s._v("\n")])])]),t("blockquote",[t("p",[s._v("만약 Bulk Request Error가 발생한다면 JSON file 마지막에 엔터를 입력해 "),t("code",[s._v("New Line")]),s._v("을 입력해주면 된다.")])]),s._v(" "),t("p",[s._v("잘 들어갔는지 "),t("code",[s._v("1번 id")]),s._v("부터 확인해보자.")]),s._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-XGET")]),s._v(" http://localhost:9200/classes/class/1/?pretty\n")])])]),t("p",[s._v("결과")]),s._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_index"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"classes"')]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_type"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"class"')]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_id"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_version"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_seq_no"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_primary_term"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"found"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" true,\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_source"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"title"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Machine Learning"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Professor"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"YoungJun Park"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"major"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Computer Science"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"semester"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"spring"')]),s._v(",\n      "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fall"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"student_count"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"unit"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rating"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"submit_date"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2020-01-02"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"school_location"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"lat"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("36.0")]),s._v(",\n      "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"lon"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-120.0")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("hr"),s._v(" "),t("p",[t("code",[s._v("2번 id")]),s._v("도 확인해보면")]),s._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-XGET")]),s._v(" http://localhost:9200/classes/class/2/?pretty\n")])])]),t("p",[s._v("결과")]),s._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_index"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"classes"')]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_type"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"class"')]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_id"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2"')]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_version"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_seq_no"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_primary_term"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"found"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" true,\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_source"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"title"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Network"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Professor"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"YoungJun Park"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"major"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Computer Science"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"semester"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fall"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"student_count"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"unit"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rating"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"submit_date"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2020-02-02"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"school_location"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"lat"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("36.0")]),s._v(",\n      "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"lon"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-120.0")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[s._v("잘 삽입된 것을 확인할 수 있다.")]),s._v(" "),t("hr")])}),[],!1,null,null,null);t.default=r.exports}}]);