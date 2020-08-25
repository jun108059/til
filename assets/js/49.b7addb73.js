(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{430:function(_,t,s){"use strict";s.r(t);var E=s(27),v=Object(E.a)({},(function(){var _=this,t=_.$createElement,s=_._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[s("h1",{attrs:{id:"mysql-1장-시작하기-db-생성-테이블-생성-select"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mysql-1장-시작하기-db-생성-테이블-생성-select"}},[_._v("#")]),_._v(" (MySQL) 1장 시작하기. (DB 생성, 테이블 생성, SELECT)")]),_._v(" "),s("p",[_._v("데이터 베이스를 공부하면서 공부 내용을 포스트 해보려 합니다.\nmySQL을 사용했으며, 버전은 5.7.15 for MAC 입니다. (버전 확인 : mysql --version)")]),_._v(" "),s("h2",{attrs:{id:"reference"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[_._v("#")]),_._v(" Reference")]),_._v(" "),s("p",[_._v("출처: https://futurists.tistory.com/11 [미래학자]")]),_._v(" "),s("h3",{attrs:{id:"목차"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#목차"}},[_._v("#")]),_._v(" 목차")]),_._v(" "),s("ol",[s("li",[_._v("데이터 베이스 생성 (CREATE DATABASE)")]),_._v(" "),s("li",[_._v("데이터 베이스를 사용할 사용자 추가 (GRANT PRIVILEGES)")]),_._v(" "),s("li",[_._v("테이블 생성 (CREATE TABLE)")]),_._v(" "),s("li",[_._v("데이터 삽입 (INSERT)")]),_._v(" "),s("li",[_._v("데이터 선택 (SELECT)")]),_._v(" "),s("li",[_._v("데이터 조건 선택 (WHERE)")]),_._v(" "),s("li",[_._v("와일드 카드 (LIKE, %, _)")])]),_._v(" "),s("hr"),_._v(" "),s("ol",[s("li",[_._v("데이터 베이스 생성 (CREATE DATABASE)")])]),_._v(" "),s("div",{staticClass:"language-SQL extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("CREATE")]),_._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("DATABASE")]),_._v(" study_db "),s("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("default")]),_._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("CHARACTER")]),_._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("SET")]),_._v(" UTF8"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v(" \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("SHOW")]),_._v(" DATABAS "),s("span",{pre:!0,attrs:{class:"token comment"}},[_._v("# > #은 mysql에서 주석 ")]),_._v("\n")])])]),s("p",[_._v("1 : study_db 라는 데이터 베이스를 생성하고 한글을 사용할 수 있는 UTF8로 문자열을 저장")]),_._v(" "),s("p",[_._v("2 : 데이터 베이스 목록 보기")]),_._v(" "),s("p",[_._v("데이터 베이스의 목록을 살펴보면 우리가 만든 db 외에 다른 db가 보입니다. 그것은 mySQL의 시스템에서 사용하는 db라 신경 안쓰셔도 됩니다.")]),_._v(" "),s("blockquote",[s("p",[_._v("데이터 베이스의 모든 이름(데이터 베이스, 테이블), 칼럼에는 소문자를 사용하는게 좋으며 공백 대신 _를 사용합니다.")])]),_._v(" "),s("blockquote",[s("p",[_._v("q 데이터 베이스 조작어 (CREATE, SELECT 등)는 대문자를 사용하는 것이 좋습니다.")])]),_._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[_._v("데이터 베이스를 사용할 사용자 추가 (GRANT PRIVILEGES)")])]),_._v(" "),s("p",[_._v("GRANT ALL PRIVILEGES ON study_db.* TO study_user@localhost IDENTIFIED BY 'study';\nEXIT;\nmysql -u study_user -p\nUSE study_db;\nview rawmysql_02.sql hosted with ❤ by GitHub")]),_._v(" "),s("p",[_._v("1 : GRANT는 사용자에게 데이터 베이스의 사용 권한을 적용합니다.")]),_._v(" "),s("p",[_._v("ALL PRIVILEGES 는 데이터 베이스에 대한 모든 권한입니다. (디비 삭제도 가능)")]),_._v(" "),s("p",[_._v("ON study_db.* 권한 대상은 study_db 이며, study_db.* 이라하는 것은 study_db의 모든 테이블을 의미(나중에 자세히)")]),_._v(" "),s("p",[_._v("TO study_user@localhost 사용 권한을 받는 사용자는 study_user이며( 없는 유저라면 새롭게 생성) localhost는 말 그대로 로컬에서만 연결 가능(127.0.0.1)")]),_._v(" "),s("p",[_._v("IDENTIFIED BY 'study' 사용자의 비밀번호 설정")]),_._v(" "),s("p",[_._v("(locahost가 아닌 외부에서 접근하려고 한다면 접근 권한을 따로 설정해주면 가능)")]),_._v(" "),s("p",[_._v("2 : exit 현재 연결된 mysql을 닫습니다. (현재에는 root 권한으로 로그인 되어있었고 방금 사용자로 mysql에 접속하기 위함)")]),_._v(" "),s("p",[_._v("3 : mysql -u study_user -p (이렇게 입력하시면 방금 만든 study를 입력하여 사용자 로그인 합니다)")]),_._v(" "),s("p",[_._v("4 : use study_db 해당 사용자가 study_db라는 데이터 베이스를 사용하는 것입니다.  (하나의 사용자는 여러 데이터 베이스를 사용 가능합니다.)")]),_._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[_._v("테이블 생성 (CREATE TABLE)")])]),_._v(" "),s("p",[_._v("CREATE TABLE professor\n(\n_id INT PRIMARY KEY AUTO_INCREMENT,\nname VARCHAR(32) NOT NULL,\nbelong VARCHAR(12) DEFAULT 'FOO',\nphone VARCHAR(12)\n) ENGINE=INNODB;\nDESCRIBE professor;\nview rawmysql_03.sql hosted with ❤ by GitHub")]),_._v(" "),s("p",[_._v("3 : _id 란 이름의 칼럼을 추가하며, 데이터 타입은 INT, PRIMARY KEY 기본키 키로 설정, AUTO_INCREMENT 자동 인덱스 증가")]),_._v(" "),s("p",[_._v("4 : name 이란 칼럼을 추가, 데이터 타입은 VARCHAR(32) ,  NOT NULL (자료를 입력할 때 항상 값을 넣어주어야 함")]),_._v(" "),s("p",[_._v("5 : DEFAULT 는 아무런 값을 입력하지 않을 때 자동으로 입력되는 값")]),_._v(" "),s("p",[_._v("7 : ENGINE=INNODB; mysql의 데이터 저장 구조를 선택 (초급자라면 지금 안봐도 좋음)")]),_._v(" "),s("p",[_._v("8 : 테이블 구조 확인 (줄여서 DESC professor; 도 같은 기능)")]),_._v(" "),s("p",[_._v("TIP1 : 칼럼 사이에 쉼표(,)가 있으며 끝에만 없는 것을 기억!")]),_._v(" "),s("p",[_._v("auto_increment 는 테이블에 새로운 레코드가 들어올 때 사용자가 입력하지 않아도 _id 값 중 가장 큰 값에 +1 한 값을 설정해 줌으로써 중복된 값이 없도록 함")]),_._v(" "),s("p",[_._v("default : 보면 모두 NULL로 되어 있는데, default 값을 따로 설정하지 않으면 모두 NULL.")]),_._v(" "),s("p",[_._v("기본키를 설정하는 다른 방법")]),_._v(" "),s("p",[_._v("CREATE TABLE professor\n(\n_id INT AUTO_INCREMENT,\nname VARCHAR(32) NOT NULL,\nbelong VARCHAR(12) DEFAULT 'FOO',\nphone VARCHAR(12),\nPRIMARY KEY(_id)\n) ENGINE=INNODB;\nview rawmysql_04.sql hosted with ❤ by GitHub")]),_._v(" "),s("p",[_._v("데이터 타입은 크게 숫자, 문자가 있습니다. 다음의 링크를 통해 정리하시는 것이 좋습니다.")]),_._v(" "),s("p",[_._v("초보개발자 이야기님의 블로그")]),_._v(" "),s("p",[_._v("http://ra2kstar.tistory.com/82")]),_._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[_._v("데이터 삽입 (INSERT)")])]),_._v(" "),s("p",[_._v("INSERT INTO professor\n(name, belong, phone)\nVALUES('유재석', 'IDE','01112345678');")]),_._v(" "),s("p",[_._v("INSERT INTO professor\n(name, belong, phone)\nVALUES('황영조', 'MSE', '01121342443');")]),_._v(" "),s("p",[_._v("INSERT INTO professor\n(name, belong, phone)\nVALUES('케이멀', 'ESE', '01123424343');")]),_._v(" "),s("p",[_._v("INSERT INTO professor\n(_id, name, belong, phone)\nVALUES(256, '호날두', 'IME', '01134343222');")]),_._v(" "),s("p",[_._v("INSERT INTO professor\n(name, belong, phone)\nVALUES( '리오넬', 'IDE', '01123432432');\nSELECT _id, belong, phone FROM professor;\nSELECT * FROM professor;\nview rawmysql_05.sql hosted with ❤ by GitHub\n1 : INSERT INTO professor > professor에 레코드를 삽입,")]),_._v(" "),s("p",[_._v("2 : (name, belong, phone) professor가 가지는 컬럼을 명시(_id는 생략했지만 AUTO_INCREMENT가 대신 값을 넣어줌)")]),_._v(" "),s("p",[_._v("3 : VALUES('유재석', 'IDE', '01112345678') name, belong, phone 과 같은 순서로 name : '유재석', belong : 'IDE', phone : '01112345678'")]),_._v(" "),s("p",[_._v("20: 뒤 부터 해석하시면 됩니다. professor 테이블로 부터 _id, belong, phone 을 선택한다.")]),_._v(" "),s("p",[_._v("21 : *은 테이블이 가진 모든 필드 입니다.")]),_._v(" "),s("p",[_._v("호날두를 입력하는 4번째 입력을 보라, _id를 직접 입력한다. 물론 가능하다. 그리고 다음에 리오넬을 입력할 때는 _id를 생략했다. 어떻게 됐을까??")]),_._v(" "),s("p",[_._v("유재석을 입력했을 때 테이블에는 아무런 값이 없다. AUTO_INCEREMENT는 1 값부터 넣는다고 생각하면 된다. 그러면 호날두의 경우 임의로 256")]),_._v(" "),s("p",[_._v("이라는 값을 설정했다. 그러면 그 뒤에 _id값이 없이 입력되면 테이블 내 _id값 중 가장 큰 값에 + 1 한 값으로 채워지게 된다.")]),_._v(" "),s("p",[_._v("지금은 모든 테이블 내에 모든 데이터를 가져왔지만, 우리가 필요한 데이터만 얻는 것은 매우 중요한 일입니다. 지금 부터 우리가 원하는 데이터를 찾아보도록")]),_._v(" "),s("p",[_._v("하겠습니다.")]),_._v(" "),s("p",[_._v("학생 테이블을 생성하고 데이터를 추가합니다.")]),_._v(" "),s("p",[_._v("CREATE TABLE student\n(\n_id CHAR(9),\nname VARCHAR(48) NOT NULL,\nbelong VARCHAR(5),\nphone VARCHAR(11),\nstatus INT DEFAULT 0\n);\nINSERT INTO student VALUES('20090101', '루피', 'IDE', '01112345678', 1);\nINSERT INTO student VALUES('20100102', '조로', 'CSE', '01123435343', 4);\nINSERT INTO student VALUES('20110103', '상디', 'MSE', '01121342443', 1);\nINSERT INTO student VALUES('20100204', '버기', 'ESE', '01123424343', 2);\nINSERT INTO student VALUES('20110106', '프랑키', 'IME', '01134343222' , 0);\nINSERT INTO student VALUES('20080104', '나미', 'IDE', '01123432432', 6);\nINSERT INTO student VALUES('20090105', '쵸파', 'CSE', '01112342433', 8);\nINSERT INTO student VALUES('20090301', '에릭', 'ESE', '01132424244', 5);\nINSERT INTO student VALUES('20090302', '전진', 'IDE', '01112321313', 3);\nINSERT INTO student VALUES('20100505', '오공', 'CSE', '01123534644', 2);\nINSERT INTO student VALUES('20110506', '오천', 'MSE', '01121334525', 8);\nINSERT INTO student VALUES('20100507', '베지터', 'ESE', '01123423623', 0);\nINSERT INTO student VALUES('20110502', '부우', 'IME', '01134332634', 1);\nINSERT INTO student VALUES('20080501', '크리링', 'IDE', '01123436346', 2);\nINSERT INTO student VALUES('20090503', '피콜로', 'CSE', '01113634645', 3);\nINSERT INTO student VALUES('20090509', '셀', 'ESE', '01132427535', 0);\nview rawmysql_06.sql hosted with ❤ by GitHub\n위 테이블 생성문은 크게 어렵지 않을 것입니다.")]),_._v(" "),s("p",[_._v("TIP : mySQL은 데이터 타입에 상관없이 DEAFULT 가 NULL 입니다.")]),_._v(" "),s("p",[_._v("삽입할 때 삽입할 칼럼을 생략할 수 있는데, 이 때는 모든 필드를 채워야 합니다.")]),_._v(" "),s("ol",{attrs:{start:"5"}},[s("li",[_._v("데이터 선택 (SELECT)")])]),_._v(" "),s("p",[_._v("데이터를 선택할 때는 선택할 데이터의 칼럼을 선택하거나 레코드의 순서도 지정할 수 있습니다.")]),_._v(" "),s("p",[_._v("SELECT 할 때 *을 사용하면 모든 데이터를 가져올 수 있습니다. 그러나 원하는 데이터만 가져오는 것은 매우 중요합니다.")]),_._v(" "),s("p",[_._v("SELECT  에서 입력한 칼럼 순서로 출력되는 것을 확인할 수 있습니다.")]),_._v(" "),s("p",[_._v("SELECT * FROM student;\nSELECT * FROM student ORDER BY _id;\nview rawmysql_03.sql hosted with ❤ by GitHub\n2 : ORDER BY 라는 키워드가 처음 나왔습니다. 가져온 데이터를 특정 칼럼을 기준으로 정렬하는 것이죠.")]),_._v(" "),s("ol",{attrs:{start:"6"}},[s("li",[_._v("데이터 조건 선택 (WHERE)")])]),_._v(" "),s("p",[_._v("원하는 데이터를 가져오는 것은 매우 중요합니다. 다음은 기본 조건을 살펴보겠습니다.")]),_._v(" "),s("p",[_._v("belong 이 'IDE'인 데이터를 뽑아보겠습니다.")]),_._v(" "),s("p",[_._v("SELECT * FROM student WHERE belong = 'IDE';\nview rawmysql_07.sql hosted with ❤ by GitHub\nWHERE은 조건을 나타냅니다. 위 예시에서는 belong값이 IDE와 일치하는 것을 찾았습니다.")]),_._v(" "),s("p",[_._v("다음의 결과를 예상하실 수 있나요?")]),_._v(" "),s("p",[_._v("SELECT * FROM student WHERE status > 0;\nview rawmysql_08.sql hosted with ❤ by GitHub")]),_._v(" "),s("p",[_._v("이러한 조건은 AND, OR 연산도 가능합니다.")]),_._v(" "),s("p",[_._v("SELECT * FROM student WHERE status > 0 AND belong = 'IDE'\nSELECT * FROM student WHERE status > 0 OR belong = 'IDE';\nview rawmysql_09.sql hosted with ❤ by GitHub\n다음의 결과를 예상해보시겠어요?")]),_._v(" "),s("p",[_._v("그리고 이런건 어떤가요?")]),_._v(" "),s("p",[_._v("SELECT * FROM student WHERE _id > '2010';\nview rawmysql_10.sql hosted with ❤ by GitHub\n문자열도 비교 연산이 가능합니다. 그러나 숫자와는 다릅니다. 사전의 순서라고 생각하시면 편합니다.")]),_._v(" "),s("p",[_._v("(참고 , 순서 :  !\"#$%&'()*+,-./0-9:;<=>?@A-Z[]^_`a-z{|}")]),_._v(" "),s("ol",{attrs:{start:"7"}},[s("li",[_._v("와일드 카드 (LIKE, %, _ )")])]),_._v(" "),s("p",[_._v("와일드카드라는 개념아시나요? 트럼프에서 조커 처럼 어떤 카드든 될 수 있는 카드입니다.")]),_._v(" "),s("p",[_._v("'%', '_' 두 가지에 대해 알아보겠습니다.")]),_._v(" "),s("p",[_._v("먼저, '%'")]),_._v(" "),s("p",[_._v("SELECT * FROM student WHERE _id LIKE '2009%';\nview rawmysql_11.sql hosted with ❤ by GitHub\n_id 가 2009로 시작하는 모든 값을 가져옵니다.")]),_._v(" "),s("p",[_._v("그리고 , '_'")]),_._v(" "),s("p",[_._v("SELECT * FROM student WHERE NOT _id > '2010';\nSELECT * FROM student WHERE _id <= '2010';               #위와 완전 똑같은 식입니다.")]),_._v(" "),s("p",[_._v("SELECT * FROM student WHERE NOT belong = 'IDE';\nSELECT * FROM student WHERE belong <> 'IDE';            # 위와 완전 똑같은 식입니다. <> 은 != 을 의미 합니다.")]),_._v(" "),s("p",[_._v("SELECT * FROM student WHERE NOT _id LIKE '2009%';\nSELECT * FROM student WHERE _id NOT LIKE '2009%'; (권장)\nview rawmysql_12.sql hosted with ❤ by GitHub\n아래 LIKE 에 대한 NOT은 두 표현 모두 mySQL에서는 같은 결과를 보여줬습니다. 그러나 아래의 표현이 더 일반적인 표현입니다.")]),_._v(" "),s("p",[_._v("지금까지 기본적인 DB와 테이블 생성을 배웠습니다. 그리고 조건에 맞는 데이터를 SELECT 하는 방법에 대해 공부했습니다.")]),_._v(" "),s("p",[_._v("지금까지 배운 것은 간단한 디비 사용에 기초적인 내용을 다뤘습니다.")]),_._v(" "),s("p",[_._v("다음 시간에는 테이블에 새로운 칼럼을 추가 하거나, 제거 또는 변경하는 방법에 대해 알아보겠습니다.")]),_._v(" "),s("p",[_._v("출처: https://futurists.tistory.com/11 [미래학자]")]),_._v(" "),s("p",[_._v("출처: https://futurists.tistory.com/11 [미래학자]")])])}),[],!1,null,null,null);t.default=v.exports}}]);