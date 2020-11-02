# [IntelliJ] 자주 사용하는 단축키 (Eclipse, VS Code 비교)

![img](../.vuepress/public/images/img-etc/IntelliJlogo.png)  

IntelliJ를 사용하면서 자주 사용하는 단축키를 정리하고 있다.

MacOS 단축키도 추가할 예정이다.

---

## 이동

Ctrl + N : 클래스 이름으로 클래스 이동하기

Ctrl + Shift + N : 파일 이름으로 파일 이동하기

Alt + 좌우 방향키 : 열려있는 탭이동

F12 : 이전의 도구 창으로 이동하기

Esc : 에디터 창으로 이동하기

Shift + Esc : 이전의 도구창 숨기기

Ctrl + G : Goto 라인

Alt + 위 아래 방향키 : 메소드 단위로 이동하기

F2 , Shift + F2 : 다음 / 이전 에러로 이동하기

F4 : 해당 클래스, 메소등 등의 소스를 열기

Ctrl + [, ] : 코드 블럭의 처음, 끝으로 이동하기

Alt + F1 : Select In

Ctrl + B or Ctrl + Click : 정의 된 곳으로 이동하기

Ctrl + Alt + B : Go to implementation(s)

Ctrl + Shift + I : Open quick definition lookup

Ctrl + Shift + B : 타입의 정의로 이동, String 을 반환하는 메소드면 String Class로 이동하기

Ctrl + Alt + 좌,우 방향키 : 이전 포커스로 이동

---

## 편집

Ctrl + Space : 자동완성기능 (기본)

Ctrl + P : 함수호출시 인수 정보 확인 (within method call arguments)

Ctrl + Q : 코드에 대한 문서창 팝업

Shift + F1 : 코드에 대한 문서 인터넷 브라우저로 팝업

Alt + Insert : 코드 생성 메뉴 표시 (Getters, Setters, Constructors,hashCode/equals, toString)

Ctrl + O : 메서드 오버라이드 구현

Ctrl + I : 인터페이스 메서드 구현

Ctrl + Alt + T : 다음으로 코드 감싸기… (if..else, try..catch, for,synchronized, etc.)

Ctrl + / : 줄 단위 주석 토글

Ctrl + Shift + / : 블럭 단위 주석 토글

Ctrl + W : 가장 안쪽의 단위(괄호)부터 선택(점점 확장)

Ctrl + Alt + O : import 문 최적화

Ctrl + Alt + I : 줄단위 재정렬

Tab / Shift + Tab : 들여쓰기/내어쓰기

Ctrl + D : 선택된 블럭을 복제

Ctrl + Y : 캐럿을 있는 곳의 라인 삭제

Shift + Enter : 커서가 어디에 있건 다음 라인을 생성하고 첫줄로 이동

Ctrl + Alt + O : import 자동 정리

Window키 + ctrl + '.' : 코드 블록 접기

---

## 실행

Shift + F10 : Run

Shift + F9 : Debug

---

## IntelliJ vs VSCode vs Eclipse 비교

[출처 : OKdevTV](https://okdevtv.com/)


<table style="border-collapse: collapse; width: 100%; height: 1001px;" border="1" data-ke-style="style15"><tbody><tr style="height: 20px;"><td style="width: 32.2092%; height: 20px; text-align: center;"><b>기 능</b></td><td style="width: 14.186%; height: 20px; text-align: center;"><b>IntelliJ</b></td><td style="width: 14.1862%; height: 20px; text-align: center;"><b>VSCode</b></td><td style="width: 12.7907%; height: 20px; text-align: center;"><b>Eclipse</b></td></tr><tr style="height: 20px;"><td style="width: 32.2092%; height: 20px;">자동 완성, 인텔리센스</td><td style="width: 14.186%; height: 20px;">Ctrl + Space</td><td style="width: 14.1862%; height: 20px;">&nbsp;</td><td style="width: 12.7907%; height: 20px;"><span style="color: #333333;">Ctrl + Space</span></td></tr><tr style="height: 40px;"><td style="width: 32.2092%; height: 40px;">SmartType code completion</td><td style="width: 14.186%; height: 40px;">Ctrl + Shift + Space</td><td style="width: 14.1862%; height: 40px;">&nbsp;</td><td style="width: 12.7907%; height: 40px;">-</td></tr><tr style="height: 19px;"><td style="width: 32.2092%; height: 19px;">Reformat, Code Tidy</td><td style="width: 14.186%; height: 19px;">Ctrl + Alt + L</td><td style="width: 14.1862%; height: 19px;">Ctrl + Shift + F</td><td style="width: 12.7907%; height: 19px;">Ctrl + Shift + F</td></tr><tr style="height: 20px;"><td style="width: 32.2092%; height: 20px;">Quick Fix</td><td style="width: 14.186%; height: 20px;">Alt + Enter</td><td style="width: 14.1862%; height: 20px;">&nbsp;</td><td style="width: 12.7907%; height: 20px;"><span style="color: #333333;">Ctrl + 1</span></td></tr><tr style="height: 40px;"><td style="width: 32.2092%; height: 40px;">Navigate | Declaration (Open Declaration)</td><td style="width: 14.186%; height: 40px;">Ctrl + B</td><td style="width: 14.1862%; height: 40px;">&nbsp;</td><td style="width: 12.7907%; height: 40px;"><span style="color: #333333;">F3</span></td></tr><tr style="height: 40px;"><td style="width: 32.2092%; height: 40px;">Go to file(Open Resource)</td><td style="width: 14.186%; height: 40px;">Ctrl + Shift + N</td><td style="width: 14.1862%; height: 40px;">Ctrl + P</td><td style="width: 12.7907%; height: 40px;">Ctrl + Shift + R</td></tr><tr style="height: 40px;"><td style="width: 32.2092%; height: 40px;">Find in Path (Search Project)</td><td style="width: 14.186%; height: 40px;">Ctrl + Shift + F</td><td style="width: 14.1862%; height: 40px;">&nbsp;</td><td style="width: 12.7907%; height: 40px;"><span style="color: #333333;">Ctrl + H</span></td></tr><tr style="height: 20px;"><td style="width: 32.2092%; height: 20px;">Rename</td><td style="width: 14.186%; height: 20px;">Shift + F6</td><td style="width: 14.1862%; height: 20px;">F2</td><td style="width: 12.7907%; height: 20px;">Ctrl + Alt + R</td></tr><tr style="height: 20px;"><td style="width: 32.2092%; height: 20px;">Extract Variable</td><td style="width: 14.186%; height: 20px;">Ctrl + Alt + V</td><td style="width: 14.1862%; height: 20px;">&nbsp;</td><td style="width: 12.7907%; height: 20px;">&nbsp;</td></tr><tr style="height: 20px;"><td style="width: 32.2092%; height: 20px;">Extract Method</td><td style="width: 14.186%; height: 20px;">Ctrl + Alt + M</td><td style="width: 14.1862%; height: 20px;">&nbsp;</td><td style="width: 12.7907%; height: 20px;">&nbsp;</td></tr><tr style="height: 20px;"><td style="width: 32.2092%; height: 20px;">Quick Documentation</td><td style="width: 14.186%; height: 20px;">Ctrl + Q</td><td style="width: 14.1862%; height: 20px;">&nbsp;</td><td style="width: 12.7907%; height: 20px;"><span style="color: #333333;">F2</span></td></tr><tr style="height: 60px;"><td style="width: 32.2092%; height: 60px;">검색(형 기반의 전역 검색)<br>Go to class</td><td style="width: 14.186%; height: 60px;">Ctrl + N</td><td style="width: 14.1862%; height: 60px;">&nbsp;</td><td style="width: 12.7907%; height: 60px;"><span style="color: #333333;">Ctrl + Shift + T</span></td></tr><tr style="height: 20px;"><td style="width: 32.2092%; height: 20px;">Go to symbol</td><td style="width: 14.186%; height: 20px;">Ctrl + Alt + Shift + N</td><td style="width: 14.1862%; height: 20px;">&nbsp;</td><td style="width: 12.7907%; height: 20px;">-</td></tr><tr style="height: 40px;"><td style="width: 32.2092%; height: 40px;">이전 작업 위치(이거 짱짱맨)</td><td style="width: 14.186%; height: 40px;">Ctrl + Alt + ←</td><td style="width: 14.1862%; height: 40px;">&nbsp;</td><td style="width: 12.7907%; height: 40px;"><span style="color: #333333;">Alt + ←</span></td></tr><tr style="height: 20px;"><td style="width: 32.2092%; height: 20px;">다음 작업 위치(반대)</td><td style="width: 14.186%; height: 20px;">Ctrl + Alt + →</td><td style="width: 14.1862%; height: 20px;">Alt + →</td><td style="width: 12.7907%; height: 20px;">Shift + Ctrl + -</td></tr><tr style="height: 60px;"><td style="width: 32.2092%; height: 60px;">코드 한 줄 혹은 선택 영역을 한 줄 위로 이동</td><td style="width: 14.186%; height: 60px;">Ctrl + Shift + ↑</td><td style="width: 14.1862%; height: 60px;">Alt + ↑</td><td style="width: 12.7907%; height: 60px;">Alt + ↑</td></tr><tr style="height: 60px;"><td style="width: 32.2092%; height: 60px;">코드 한 줄 혹은 선택 영역을 한 줄 아래로 이동</td><td style="width: 14.186%; height: 60px;">Ctrl + Shift + ↓</td><td style="width: 14.1862%; height: 60px;">Alt + ↓</td><td style="width: 12.7907%; height: 60px;">Alt + ↓</td></tr><tr style="height: 40px;"><td style="width: 32.2092%; height: 40px;">코드 한 줄 혹은 선택 영역 복사</td><td style="width: 14.186%; height: 40px;">Ctrl + D</td><td style="width: 14.1862%; height: 40px;">Ctrl + C</td><td style="width: 12.7907%; height: 40px;">Ctrl + D</td></tr><tr style="height: 80px;"><td style="width: 32.2092%; height: 80px;">도구(메뉴나 다이얼로그 항목 등) 찾기<br>Search Action (Quick Access)</td><td style="width: 14.186%; height: 80px;">Ctrl + Shift + A</td><td style="width: 14.1862%; height: 80px;">Ctrl + Shift + P</td><td style="width: 12.7907%; height: 80px;">Ctrl + 3</td></tr><tr style="height: 40px;"><td style="width: 32.2092%; height: 40px;">Search everywhere (Quick Search Plugin)</td><td style="width: 14.186%; height: 40px;">Double Shift</td><td style="width: 14.1862%; height: 40px;">&nbsp;</td><td style="width: 12.7907%; height: 40px;"><span style="color: #333333;">Ctrl + Shift + L</span></td></tr><tr style="height: 40px;"><td style="width: 32.2092%; height: 40px;">View Hierarchy (Show Hierarchy)</td><td style="width: 14.186%; height: 40px;">Ctrl + H</td><td style="width: 14.1862%; height: 40px;">&nbsp;</td><td style="width: 12.7907%; height: 40px;"><span style="color: #333333;">Ctrl + T</span></td></tr><tr style="height: 40px;"><td style="width: 32.2092%; height: 40px;">Find Usages (Find References)</td><td style="width: 14.186%; height: 40px;">Alt + F7</td><td style="width: 14.1862%; height: 40px;">&nbsp;</td><td style="width: 12.7907%; height: 40px;"><span style="color: #333333;">Ctrl + Shift + G</span></td></tr><tr style="height: 20px;"><td style="width: 32.2092%; height: 20px;">Find</td><td style="width: 14.186%; height: 20px;">Ctrl + F</td><td style="width: 14.1862%; height: 20px;">Ctrl + F</td><td style="width: 12.7907%; height: 20px;">Ctrl + F</td></tr><tr style="height: 20px;"><td style="width: 32.2092%; height: 20px;">Find next</td><td style="width: 14.186%; height: 20px;">F3</td><td style="width: 14.1862%; height: 20px;">&nbsp;</td><td style="width: 12.7907%; height: 20px;"><span style="color: #333333;">Ctrl + K</span></td></tr><tr style="height: 20px;"><td style="width: 32.2092%; height: 20px;">Find previous</td><td style="width: 14.186%; height: 20px;">Shift + F3</td><td style="width: 14.1862%; height: 20px;">&nbsp;</td><td style="width: 12.7907%; height: 20px;"><span style="color: #333333;">Ctrl + Shift + K</span></td></tr><tr style="height: 20px;"><td style="width: 32.2092%; height: 20px;">Replace</td><td style="width: 14.186%; height: 20px;">Ctrl + R</td><td style="width: 14.1862%; height: 20px;">&nbsp;</td><td style="width: 12.7907%; height: 20px;"><span style="color: #333333;">Ctrl + F</span></td></tr><tr style="height: 20px;"><td style="width: 32.2092%; height: 20px;">Find in path (Search)</td><td style="width: 14.186%; height: 20px;">Ctrl + Shift + F</td><td style="width: 14.1862%; height: 20px;">&nbsp;</td><td style="width: 12.7907%; height: 20px;"><span style="color: #333333;">Ctrl + H</span></td></tr><tr style="height: 20px;"><td style="width: 32.2092%; height: 20px;">출력 창</td><td style="width: 14.186%; height: 20px;">&nbsp;</td><td style="width: 14.1862%; height: 20px;"><span style="color: #333333;">Ctrl + `</span></td><td style="width: 12.7907%; height: 20px;">&nbsp;</td></tr><tr style="height: 20px;"><td style="width: 32.2092%; height: 20px;">주석 처리</td><td style="width: 14.186%; height: 20px;">Ctrl + /</td><td style="width: 14.1862%; height: 20px;">Ctrl + /</td><td style="width: 12.7907%; height: 20px;">Ctrl + /</td></tr><tr style="height: 20px;"><td style="width: 32.2092%; height: 20px;">주석 제거</td><td style="width: 14.186%; height: 20px;">Ctrl + /</td><td style="width: 14.1862%; height: 20px;">Ctrl + /</td><td style="width: 12.7907%; height: 20px;">Ctrl + /</td></tr><tr style="height: 22px;"><td style="width: 32.2092%; height: 22px;">코드 아웃라인(네임스페이스, 클래스, 메서드 등) 토글</td><td style="width: 14.186%; height: 22px;">&nbsp;</td><td style="width: 14.1862%; height: 22px;">&nbsp;</td><td style="width: 12.7907%; height: 22px;"><span style="color: #333333;">Ctrl + M, M</span></td></tr></tbody></table>

---

### Reference

- [IntelliJ IDEA ReferenceCard pdf](https://www.jetbrains.com/idea/docs/IntelliJIDEA_ReferenceCard.pdf)
- [IntelliJ on Youtube](https://www.youtube.com/channel/UC4ogdcPcIAOOMJktgBMhQnQ)
- [Visual Studio 단축키](https://www.facebook.com/gyuwon.yi/posts/939785252731365)
- [IntelliJ 단축키](https://developside.tistory.com/86)
- [OKdev](https://okdevtv.com/mib/intellij/shortcuts)
- [ifuwanna 블로그](https://ifuwanna.tistory.com/241)