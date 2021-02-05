# 원하는 위치로 스크롤 이동하기

post로 전송하기 전 빈 form을 검사하기 위해

input 타입이 아닌 button Element 등에 focus를 이동시킬 일이 생겼다.

1. #id를 a 태그 링크로 사용(Anchor 사용방법)
2. focus() 이벤트를 사용하는 방법
3. scrollIntoView() 메소드를 사용하는 방법

만약 아래와 같은 input 태그가 존재하는 경우를 예로 들어보자.

```javascript
<input type="text" id="nickname" />
```

## 1.하이퍼링크에 #id를 사용

만약 입력폼이 아래와 같이 `nickname` 이라는 id 속성을 갖는다면 다음과 같은 방법으로 링크를 만들어 이동시킬 수 있다.

```javascript
<a href="#nickname">Write your nickname</span>
```

## 2.focus() 이벤트를 사용

아래 방법 역시 간단하게 `focus` 이벤트를 사용하여 현재 위치를 이동시킨다. 

이 방법은 바로 입력이 가능하다는 장점이 있지만 전체 태그 요소에 모두 적용 가능한 방법이 아니다.

하지만 대부분의 입력폼에는 적용이 가능한 방법이다.

```javascript
document.getElementById('nickname').focus();
```

## 3.scrollIntoView() 메소드를 사용하는 방법

이 방법의 장점은 대부분의 브라우저와 모든 엘리먼트 요소에 적용이 가능하다. 

해당 엘리먼트가 보이는 영역으로 스크롤이 이동한다.

```javascript
document.getElementById('nickname').scrollIntoView();
```

---

Reference
- https://webisfree.com/2017-03-30/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EC%97%AC-%ED%8A%B9%EC%A0%95-%EC%97%98%EB%A6%AC%EB%A8%BC%ED%8A%B8%EB%A1%9C-%ED%99%94%EB%A9%B4%EC%9D%84-%EC%9D%B4%EB%8F%99%EC%8B%9C%ED%82%A4%EB%8A%94-%EB%B0%A9%EB%B2%95%EC%9D%80