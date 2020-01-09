
![img](kubernetes/img/markdown.png) 
# 마크다운(MarkDown) 문법 

마크다운 문법에 대해 공부하다보니 내가 정리하는게 나을 것 같아 정리한다.
<br><br>
## 목차
- [제목(Header)](#제목(header))  
- [강조(Emphasis)](#강조(emphasis))  
- [목록(List)](#목록(list))
- [링크(Links)](#링크(links))  
- [각주(Footnotes)](#각주(footnotes))  
- [접기](#접기)  
- [이스케이프(Backslash Escapes)](#이스케이프(backslash-escapes))  
- [이미지(Images)](#이미지(images))  
- [코드(Code) 강조](#코드(code)-강조)  
- [표(Table)](#표(table))  
- [인용문(BlockQuote)](#인용문(blockquote))  
- [수평선(Horizontal Rule)](#수평선(horizontal-rule))  
- [줄바꿈(Line Breaks)](#줄바꿈(line-breaks))  

<br><br>
## 제목(Header)

`<h1>`부터 `<h6>`까지 제목을 표현할 수 있다.

```markdown
# 제목 1
## 제목 2
### 제목 3
#### 제목 4
##### 제목 5
###### 제목 6
````
<br><br>

## 강조(Emphasis)

```python
이테릭체: _언더바(underscore)_ or *별표(asterisks)*
두껍게: __언더바(underscore)__ or **별표(asterisks)**
취소선: ~물결(tilde)~
```
<br><br>

## 목록(List)

```markdown
1. 순서가 필요한 목록
1. 순서가 필요한 목록
  - 순서가 필요하지 않은 목록(서브) 
  - 순서가 필요하지 않은 목록(서브) 
1. 순서가 필요한 목록
  1. 순서가 필요한 목록(서브)
  1. 순서가 필요한 목록(서브)
1. 순서가 필요한 목록

- 순서가 필요하지 않은 목록에 사용 가능한 기호
  - 대쉬(hyphen)
  * 별표(asterisks)
  + 더하기(plus sign)
```

1. 순서가 필요한 목록
1. 순서가 필요한 목록
  - 순서가 필요하지 않은 목록(서브) 
  - 순서가 필요하지 않은 목록(서브) 
1. 순서가 필요한 목록
  1. 순서가 필요한 목록(서브)
  1. 순서가 필요한 목록(서브)
1. 순서가 필요한 목록

- 순서가 필요하지 않은 목록에 사용 가능한 기호
  - 대쉬(hyphen)
  * 별표(asterisks)
  + 더하기(plus sign)

<br><br>

## 링크(Links)
```markdown
[GOOGLE](https://google.com)
[NAVER](https://naver.com "링크 설명(title)을 작성하세요.")
[상대적 참조](../users/login)
[Dribbble][Dribbble link]
[GitHub][1]

문서 안에서 [참조 링크]를 그대로 사용할 수도 있습니다.

다음과 같이 문서 내 일반 URL이나 꺾쇠 괄호(`< >`, Angle Brackets)안의 URL은 자동으로 링크를 사용합니다.
구글 홈페이지: https://google.com
네이버 홈페이지: <https://naver.com>

[Dribbble link]: https://dribbble.com
[1]: https://github.com
[참조 링크]: https://naver.com "네이버로 이동합니다!"

```

[GOOGLE](https://google.com)  
[NAVER](https://naver.com "링크 설명(title)을 작성하세요.")  
[상대적 참조](../users/login)  
[Dribbble][Dribbble link]  
[GitHub][1]  

구글 홈페이지: https://google.com  
네이버 홈페이지: <https://naver.com>  

[Dribbble link]: https://dribbble.com  
[1]: https://github.com  
[참조 링크]: https://naver.com "네이버로 이동합니다!"

### 문서 내부 링크(목차)

대괄호로 묶은 후 괄호 안에 "#이동할-헤드-제목"을 써주면
제목이 있는 곳으로 이동하게 된다.

```markdown
목차
[1.개발을 하고 싶어요](#개발을-하고-싶어요)
[2.코딩을 잘하고 싶어요](#coding을-잘하고-싶어요)

## 개발을 하고 싶어요
## Coding을 잘하고 싶어요
```

> **주의할 점**  
> 1. 띄어쓰기는 - 로 연결해준다.   
> 2. 영어는 모두 소문자로 작성한다.  

<br><br>

## 각주(Footnotes)

> Github에서는 footnote를 지원해주지 않음 :sob:  
> Tistory 올릴 때 참고

```markdown
각주입니다[^id]
[^id]: 각주에 대한 설명.
```
<br><br>

## 접기

```markdown
<details><summary>CLICK ME</summary>
안녕-난-영준이야
</details>	
```

<details><summary>CLICK ME</summary>
안녕-난-영준이야
</details>	

<br><br>

## 이스케이프(Backslash Escapes)
마크다운으로 글을 작성하다 보면 * 문자나 _ 문자 등을 사용하고 싶은 경우가 있다. 그럴 때는 \ 문자로 회피할 수 있다.
```
강조는 \* 문자 혹은 \_ 문자를 사용한다.
```

강조는 \* 문자 혹은 \_ 문자를 사용한다.

<br><br>

## 이미지(Images)

```markdown
![Alt text](파일경로)
![Alt text](파일경로 "title")
```

### 이미지에 링크
마크다운 이미지 코드를 링크 코드로 묶어 준다.

```markdown
[![Vue](kubernetes/img/til.JPG)](https://github.com/jun108059/til)
```

[![Vue](kubernetes/img/til.JPG)](https://github.com/jun108059/til)

<br><br>

## 코드(Code) 강조


### 인라인(inline) 코드 강조
```markdown
`background`혹은 `background-image` 속성으로 요소에 배경 이미지를 삽입할 수 있습니다.
```
`background`혹은 `background-image` 속성으로 요소에 배경 이미지를 삽입할 수 있습니다.


### 블록(block) 코드 강조
`를 3번 이상 입력하고 코드 종류도 적는다.  
> 꿀팁   
> 내부에 \`을 사용하고 싶으면 `~~~`과 혼용하여 사용하면 좋다

~~~markdown
```Language
code
```
~~~
#### html
```html
<a href="https://www.google.co.kr/" target="_blank">GOOGLE</a>
```

#### css
```css
.list > li {
  position: absolute;
  top: 40px;
}
```

#### javascript
```javascript
function func() {
  var a = 'AAA';
  return a;
}
```

<br><br>

## 표(Table)

헤더 셀을 구분할 때 3개 이상의 -(hyphen/dash) 기호가 필요  
헤더 셀을 구분하면서 :(Colons) 기호로 셀(열/칸) 안에 내용을 정렬할 수 있다.  
가장 좌측과 가장 우측에 있는 |(vertical bar) 기호는 생략 가능

```markdown
| 값 | 의미 | 기본값 |
|---|:---:|---:|
| `static` | 유형(기준) 없음 / 배치 불가능 | `static` |
| `relative` | 요소 자신을 기준으로 배치 |  |
| `absolute` | 위치 상 부모(조상)요소를 기준으로 배치 |  |
| `fixed` | 브라우저 창을 기준으로 배치 |  |

값 | 의미 | 기본값
---|:---:|---:
`static` | 유형(기준) 없음 / 배치 불가능 | `static`
`relative` | 요소 **자신**을 기준으로 배치 |
`absolute` | 위치 상 **_부모_(조상)요소**를 기준으로 배치 |
`fixed` | **브라우저 창**을 기준으로 배치 |
```

값 | 의미 | 기본값
---|:---:|---:
`static` | 유형(기준) 없음 / 배치 불가능 | `static`
`relative` | 요소 **자신**을 기준으로 배치 |
`absolute` | 위치 상 **_부모_(조상)요소**를 기준으로 배치 |
`fixed` | **브라우저 창**을 기준으로 배치 |

<br><br>

## 인용문(BlockQuote)

```markdown
인용문(blockQuote)

> 남의 말이나 글에서 직접 또는 간접으로 따온 문장.
> _(네이버 국어 사전)_

BREAK!

> 인용문을 작성하세요!
>> 중첩된 인용문(nested blockquote)을 만들 수 있습니다.
>>> 중중첩된 인용문 1
>>> 중중첩된 인용문 2
>>> 중중첩된 인용문 3
```

인용문(blockQuote)

> 남의 말이나 글에서 직접 또는 간접으로 따온 문장.
> _(네이버 국어 사전)_  

BREAK!

> 인용문을 작성하세요!  
>> 중첩된 인용문(nested blockquote)을 만들 수 있습니다.  
>>> 중중첩된 인용문 1  
>>> 중중첩된 인용문 2  
>>> 중중첩된 인용문 3

<br><br>

## 수평선(Horizontal Rule)
각 기호를 3개 이상 입력하세요.
```markdown
---
(Hyphens)

***
(Asterisks)

___
(Underscores)
```


---
(Hyphens)

***
(Asterisks)

___
(Underscores)

<br><br>

## 줄바꿈(Line Breaks)

```markdown
동해물과 백두산이 마르고 닳도록  
하느님이 보우하사 우리나라 만세   <!--띄어쓰기 2번-->
무궁화 삼천리 화려 강산<br>
대한 사람 대한으로 길이 보전하세
```
동해물과 백두산이 마르고 닳도록  
하느님이 보우하사 우리나라 만세   
무궁화 삼천리 화려 강산<br>
대한 사람 대한으로 길이 보전하세

