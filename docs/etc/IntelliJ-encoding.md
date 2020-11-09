# IntelliJ 인코딩 설정

> (IntelliJ UTF-8 설정, IntelliJ 한글 설정)

초기 인텔리 제이에서 개발하다가 자주 겪는 문제가 한글 깨짐 현상이다.

이와 같은 문제를 겪지 않기 위해 보통 프로젝트 초기에 인코딩 설정을 먼저 적용한 후 개발하는 습관을 들이면 좋을 것 같다. 오늘은 이 인코딩 설정에 대한 내용을 포스팅 하려 한다.

## 1. Intellij VM 설정

> IntelliJ 가상머신 Encoding 설정)

1-1. Intellij 실행 시 사용할 가상 머신의 인코딩 설정을 지정해 둔다
    - 본인의 IntelliJ 설치 폴더 경로로 이동 한다.
    (ex, C:\work\ideaIU-2019.3.3.win\bin)
    - bin 디렉터리 하위 .vmoptions 파일을 메모장 등의 에디터로 실행 한다.

1-2. idea64.exe.vmoptions 파일 수정
    - 맨 아랫줄에 -Dfile.encoding=UTF-8 를 추가해준 후 저장한다. 이후 IntelliJ를 다시 실행하도록 한다.

## 2.Intellij Editor File Encoding 설정

- File > Settings 클릭 (Ctrl + Alt + S)
- Editor > File Encodings > Global, Project Encoding, Properties Files 설정을 UTF-8로 변경
- Properties Files 설정은 자바의 .properties 파일에 대한 인코딩 설정이다.
[Transparent native-toascii conversion ] 체크 설정은 Property 파일의 유니코드값으로 표현되어 있는 한글들을 원본으로 보여줄지에 대한 여부 설정이다.
즉, properties 파일 유니코드 한글로 변환하여 보는 방법 이라고 보면 되겠다.

## 3. Tomcat Encoding 설정

- Run > Edit Configurations 클릭
- VM options에 다음 옵션을 추가하여 준다.
  - **"-Dfile.encoding=UTF-8"**

#### Reference

- https://goddaehee.tistory.com/248