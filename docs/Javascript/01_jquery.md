# jquery check박스 onclick vs onchange

간단한 check box에 이벤트를 처리할 때 jquery의 onclick, onchange 둘 중 어떤 이벤트를 선택할지, 차이는 무엇인지 알아보자.

jquery는 이미 너무 오래 사용되어진 기술이라 내가 겪는 웬만한 어려움은 스택오버플로우에 모두 있는 것 같다.

`.click` 과 `.change` 차이에 대한 글도 당연히 많이 있었다.

- [What the difference between .click and .change on a checkbox](https://stackoverflow.com/questions/11205957/jquery-difference-between-change-and-click-event-of-checkbox)
- [jQuery difference between change and click event of checkbox](https://stackoverflow.com/questions/5575338/what-the-difference-between-click-and-change-on-a-checkbox)

실제로 코드를 보면서 차이를 이해할 수 있는 예제 코드를 fiddle를 통해 친절하게 보여주고 있다.

- [.click vs .change 현재 시간 출력](http://jsfiddle.net/8RFGn/)
- [trigger로 이해하는 click, change](http://jsfiddle.net/jackwanders/MPTxk/1/)

두 번째 trigger 관련 예제를 확인해보면 차이점을 파악하기 좋다.

```javascript
$(':checkbox[name="tester"]').on({
    click: function(e) {
        $('#clickFlag').toggleClass('on');
    },
    change: function(e) {
        $('#changeFlag').toggleClass('on');
    }
});
    
$('#testlink').click(function(){
    if(!!$('#tester').prop('checked')) {
        $('#tester').prop('checked',false);
    } else {
        $('#tester').prop('checked',true);
    }
});   
$('#testlink2').click(function(){
    $('#tester').change();
});   
$('#testlink3').click(function(){
    $('#tester').trigger('click');
});
```

가장 먼저 예제에 있는 `check box`를 클릭하면 2개의 박스 색이 변경된다.

`prop('check', true|false)`를 실행한 결과는 `check box`의 선택 여부만 변경되고 아래 박스 색은 변경되지 않는 것도 확인할 수 있다.

이후 change와 click에 대한 trigger를 각각 실행하면 차이점을 확인할 수 있다.

## change 이벤트

change 이벤트가 발생하면 왼쪽 박스의 색만 변경된다. 하지만 **`check box`는 선택되지 않는다.** 또한, 오른쪽 박스도 변경되지 않는다.

## click 이벤트

click 이벤트가 발생하면 두 박스 모두 색이 변경되며, `check box`도 선택되는 것을 확인할 수 있다.