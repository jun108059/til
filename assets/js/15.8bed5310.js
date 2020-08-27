(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{314:function(s,t,a){s.exports=a.p+"assets/img/1.elasticsearchLogo.5bfa3d03.png"},400:function(s,t,a){"use strict";a.r(t);var n=a(27),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"elasticsearch-매핑-mapping"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch-매핑-mapping"}},[s._v("#")]),s._v(" ElasticSearch 매핑(Mapping)")]),s._v(" "),n("p",[n("img",{attrs:{src:a(314),alt:"img"}})]),s._v(" "),n("hr"),s._v(" "),n("h3",{attrs:{id:"실습-환경"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#실습-환경"}},[s._v("#")]),s._v(" 실습 환경")]),s._v(" "),n("ul",[n("li",[s._v("💡 Elasticsearch 7.9.0")]),s._v(" "),n("li",[s._v("💡 Windows 10")]),s._v(" "),n("li",[s._v("💡 Git Bash")])]),s._v(" "),n("hr"),s._v(" "),n("p",[n("code",[s._v("Mapping")]),s._v("은 RDB에서 스키마와 같은 개념이다.")]),s._v(" "),n("p",[s._v("이전 포스팅에서 살펴본 것처럼 "),n("code",[s._v("Mapping")]),s._v(" 없이도 데이터를 넣고 읽을 수 있었다.")]),s._v(" "),n("p",[s._v("하지만 실제로 서비스를 할 때 "),n("code",[s._v("Mapping")]),s._v("을 하지 않을 경우 여러 문제가 발생할 수 있다.")]),s._v(" "),n("ul",[n("li",[s._v("Document에 날짜를 넣고 싶은데 단순히 텍스트로 들어간다.")])]),s._v(" "),n("p",[s._v("와 같은 상황에 "),n("code",[s._v("Kibana")]),s._v(" 등의 가시화 도구와 분석을 할 때 타입이 맞지 않는 문제가 대표적이다.")]),s._v(" "),n("hr"),s._v(" "),n("p",[s._v("실습에서 사용할 데이터는 다음과 같다.")]),s._v(" "),n("p",[n("code",[s._v("Mapping")]),s._v(" 실습을 하기위해 Index를 먼저 삭제한 이후에 다시 생성하겠다.")]),s._v(" "),n("hr"),s._v(" "),n("h2",{attrs:{id:"_1-index-삭제하고-다시-만들기"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-index-삭제하고-다시-만들기"}},[s._v("#")]),s._v(" 1. Index 삭제하고 다시 만들기")]),s._v(" "),n("h3",{attrs:{id:"✔-삭제하기"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#✔-삭제하기"}},[s._v("#")]),s._v(" ✔ 삭제하기")]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -XDELETE http://localhost:9200/classes?pretty\n")])])]),n("h3",{attrs:{id:"✔-생성하기"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#✔-생성하기"}},[s._v("#")]),s._v(" ✔ 생성하기")]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -XPUT http://localhost:9200/classes?pretty\n")])])]),n("h3",{attrs:{id:"✔-확인하기"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#✔-확인하기"}},[s._v("#")]),s._v(" ✔ 확인하기")]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -XGET http://localhost:9200/classes?pretty\n")])])]),n("p",[s._v("결과를 보면 "),n("code",[s._v("mappings")]),s._v(" 부분이 비어있는 것을 확인할 수 있다.")]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"classes"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"aliases"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mappings"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"settings"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"index"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"creation_date"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1598314352997"')]),s._v(",\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"number_of_shards"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),s._v(",\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"number_of_replicas"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),s._v(",\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"uuid"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vLmOaHZLRMW_7kOZbi0ZRg"')]),s._v(",\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"version"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"created"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"7090099"')]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"provided_name"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"classes"')]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),n("hr"),s._v(" "),n("h2",{attrs:{id:"_2-mapping-생성하기"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-mapping-생성하기"}},[s._v("#")]),s._v(" 2. Mapping 생성하기")]),s._v(" "),n("p",[n("code",[s._v("Mapping")]),s._v("으로 데이터 타입을 미리 지정해주기 위해 mapping JSON 파일이 있어야한다.")]),s._v(" "),n("blockquote",[n("p",[s._v("참고한 강의에서는 mapping type을 "),n("code",[s._v("string")]),s._v("으로 주었는데 이는 6.x 버전부터 "),n("code",[s._v("text")]),s._v("로 바뀌었다. 자세한 내용을 보고싶다면 포스팅 중 "),n("RouterLink",{attrs:{to:"/ElasticSearch/Error-handling.html"}},[s._v("Error-handling")]),s._v("을 확인하거나, "),n("a",{attrs:{href:"https://stackoverflow.com/questions/47452770/no-handler-for-type-string-declared-on-field-name",target:"_blank",rel:"noopener noreferrer"}},[s._v("stackoverflow"),n("OutboundLink")],1),s._v(" 내용을 읽어볼 것을 권장한다.")],1)]),s._v(" "),n("div",{staticClass:"language-JSON extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"class"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"properties"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"title"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t\t\t"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"type"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"text"')]),s._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"professor"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t\t\t"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"type"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"text"')]),s._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"major"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t\t\t"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"type"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"text"')]),s._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"semester"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t\t\t"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"type"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"text"')]),s._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"student_count"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t\t\t"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"type"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"integer"')]),s._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"unit"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t\t\t"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"type"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"integer"')]),s._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"rating"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t\t\t"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"type"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"integer"')]),s._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"submit_date"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t\t\t"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"type"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"date"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t\t\t\t"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"format"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"yyyy-MM-dd"')]),s._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"school_location"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t\t\t"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"type"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"geo_point"')]),s._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),n("p",[s._v("다음과 같은 "),n("code",[s._v("JSON")]),s._v(" 파일로 mapping 시켜보자.")]),s._v(" "),n("hr"),s._v(" "),n("p",[s._v("X PUT 명령어를 사용해 mapping을 생성한다. 다음과 같이 입력하면 된다.")]),s._v(" "),n("p",[n("code",[s._v("curl -XPUT 'http://localhost:9200/classes/class/_mapping' -d @classesRating_mapping.json")])]),s._v(" "),n("p",[s._v("지난 포스팅과 마찬가지로 Windows에서는 Content-Type 을 H 옵션으로 입력해줘야한다.")]),s._v(" "),n("p",[s._v("그리고 7.x 버전은 "),n("a",{attrs:{href:"https://www.elastic.co/kr/blog/moving-from-types-to-typeless-apis-in-elasticsearch-7-0",target:"_blank",rel:"noopener noreferrer"}},[s._v("공식 문서"),n("OutboundLink")],1),s._v("에 나와있는 것과 같이 무형식 API를 사용하므로 "),n("code",[s._v("include_type_name=true")]),s._v("를 추가해주어야 한다.")]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -XPUT "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://localhost:9200/classes/class/_mapping?include_type_name=true&pretty'")]),s._v(" -d @classesRating_mapping.json -H "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Content-Type: application/json'")]),s._v("\n")])])]),n("p",[s._v("Error 없이 정상적으로 수행됐다면 class 타입에 mapping이 추가된 것이다.")]),s._v(" "),n("p",[s._v("확인해보자!")]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -XGET http://localhost:9200/classes?pretty\n")])])]),n("p",[s._v("결과")]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"classes"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"aliases"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mappings"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"properties"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"major"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"type"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"text"')]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"professor"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"type"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"text"')]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rating"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"type"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"integer"')]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"school_location"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"type"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"geo_point"')]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"semester"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"type"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"text"')]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"student_count"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"type"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"integer"')]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"submit_date"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"type"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"date"')]),s._v(",\n          "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"format"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"yyyy-MM-dd"')]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"title"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"type"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"text"')]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"unit"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"type"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"integer"')]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"settings"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"index"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"creation_date"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1598314352997"')]),s._v(",\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"number_of_shards"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),s._v(",\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"number_of_replicas"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),s._v(",\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"uuid"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vLmOaHZLRMW_7kOZbi0ZRg"')]),s._v(",\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"version"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"created"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"7090099"')]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"provided_name"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"classes"')]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),n("p",[s._v("참고로 type 중 "),n("code",[s._v("geo_point")]),s._v("는 지도에 실제 위치를 띄어줄 수 있는 type이다.")]),s._v(" "),n("h2",{attrs:{id:"_3-실제-데이터를-index에-bulk하기"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-실제-데이터를-index에-bulk하기"}},[s._v("#")]),s._v(" 3. 실제 데이터를 Index에 bulk하기")]),s._v(" "),n("p",[s._v("여러 "),n("code",[s._v("Document")]),s._v("를 "),n("code",[s._v("bulk")]),s._v("로 한번에 넣어보자.")]),s._v(" "),n("h3",{attrs:{id:"✔-bulk-하기"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#✔-bulk-하기"}},[s._v("#")]),s._v(" ✔ Bulk 하기")]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -XPOST http://localhost:9200/_bulk?pretty --data-binary @classes.json -H "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Content-Type: application/json'")]),s._v("\n")])])]),n("h3",{attrs:{id:"✔-확인하기-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#✔-확인하기-2"}},[s._v("#")]),s._v(" ✔ 확인하기")]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -XGET http://localhost:9200/classes/class/1/?pretty\n")])])]),n("p",[s._v("결과")]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_index"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"classes"')]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_type"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"class"')]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_id"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_version"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_seq_no"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_primary_term"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"found"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" true,\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_source"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"title"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Machine Learning"')]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Professor"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"YoungJun Park"')]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"major"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Computer Science"')]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"semester"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"spring"')]),s._v(",\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fall"')]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"student_count"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"unit"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rating"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"submit_date"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2020-01-02"')]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"school_location"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"lat"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("36.0")]),s._v(",\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"lon"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" -120.0\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])])]),n("p",[s._v("Mapping type이 정상적으로 입력된 것을 확인할 수 있다!")]),s._v(" "),n("hr"),s._v(" "),n("blockquote",[n("p",[s._v("본 포스팅은 "),n("code",[s._v("Inflearn")]),s._v("의 "),n("a",{attrs:{href:"https://www.inflearn.com/course/elk-%EC%8A%A4%ED%83%9D-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EB%B6%84%EC%84%9D",target:"_blank",rel:"noopener noreferrer"}},[s._v("ELK 스택 (ElasticSearch, Logstash, Kibana) 으로 데이터 분석"),n("OutboundLink")],1),s._v(" 강의를 참고하여 작성되었습니다.")])]),s._v(" "),n("hr")])}),[],!1,null,null,null);t.default=e.exports}}]);