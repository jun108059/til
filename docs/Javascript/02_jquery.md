# jquery select의 Readonly 구현

BackEnd 개발을 주로 하지만 백오피스 구현에서 Admin 페이지를 구현할 일이 가끔 생긴다.

이슈는 항상 있지만 이렇게 오래된 jquery가 왜 아직도 input type 중 text만 `readonly` 처리를 할 수 있는지 의문이 들어 일단 급한대로 Readonly 처럼 동작하도록 select box를 구현했다.

## select box의 `disabled` 문제점

처음엔 수정하면 안되는 select box를 disabled 설정으로 처리해서 Post로 값을 넘기려고 했으나, disabled 처리하면 컨트롤러로 값이 넘어가지 않는다.

사용하지 않는다고 당연한 결과이지만 그렇다면 왜 `readonly` 설정이 되지 않는 것이 이상했다. 지금도 이상하다.

## 해결할 수 있는 방법

1. hidden으로 복사한 값을 넘기기
2. onFocus, onChange 활용한 value 처리
3. form 넘기기 직전 disable 속성 제거
4. option을 disable 하는 방법

마음에 드는 2가지 방법을 소개하려고 한다.

### onFocus, onChange 활용한 value 처리

```javascript
<select name='food' id='food' readonly
    style='background-color:#ababab'
    onFocus='this.initialSelect = this.selectedIndex;'
    onChange='this.selectedIndex = this.initialSelect;'>
    <option value=''> ALL </option>
    <option value='mandoo' selected>mandoo</option>
    <option value='hamburger'>hamburger</option>
</select>
```

selected 옵션의 `mandoo`가 출력되고 다른 선택 옵션은 클릭해도 변경되지 않는다.

### option을 disable 하는 방법

```javascript
<select>
    <option disabled="disabled" value="volvo">Volvo</option>
    <option disabled="disabled" value="saab">Saab</option>
    <option disabled="disabled" value="mercedes">Mercedes</option>
    <option disabled="disabled" value="audi">Audi</option> 
</select>

// jquery 이용

$("#mySelectID option").not(":selected").attr("disabled", "disabled");

// to remove readonly, enable them again:
$("#mySelectID option").not(":selected").attr("disabled", "")
```

---

Reference
- http://stackoverflow.com/questions/8311278/disable-readonly-select-tag-in-html
- https://beans9.tistory.com/171
- https://stepcoding.tistory.com/29