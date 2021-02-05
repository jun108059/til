# jquery를 이용한 radio, checkbox 선택 확인

`radio`나 `checkbox`의 선택 여부를 확인할 수 있는 jquery 문법이다.

## is("checked");

$("input:radio[name='NAME']").is(":checked");
$("input:radio[id='ID']").is(':checked");


$("input:checkbox[name='NAME']").is(":checked");
$("input:checkbox[id='ID']").is(':checked");

> 값은 `true` or `false`

## prop과 attr 활용

$("input:checkbox[id='ID']").prop("checked", true); /* by ID */ 
$("input:checkbox[name='NAME']").prop("checked", false); /* by NAME */ 
 

$("input:radio[name='NAME']:radio[value='VALUE']").attr("checked",true); 
$("input:radio[name='NAME']").removeAttr("checked"); 


## 테스트 코드

```javascript
$(function(){ 
    $("#check_all").click(function(){ 
        var chk = $(this).is(":checked");//.attr('checked'); 
        if(chk) $(".select_subject input").prop('checked', true); 
        else $(".select_subject input").prop('checked', false); 
    }); 
}); 
```

```javascript
jQuery( function(){
    $( "input[name=checkall]:checkbox").click( function (){
    if ($("input[name=checkall]:checkbox" ).is( ":checked")){
        
        $( "input[name=chk]:checkbox" ).attr( "checked", "checked" );
    } else {
        $( "input[name=chk]:checkbox" ).removeAttr( "checked");
    }
    } )
});
```

 
```javascript
var  v = '' ;
var  c = 0;
for ( var i = 0; i < $("input[name=chk]:checkbox" ).length; i++) {
    if ($( "input[name=chk]:checkbox")[i].checked == true ) {
    if (c > 0) v = v + "|" ;
    v = v + $( "input[name=chk]:checkbox" )[i].value;
    c++;
    }
} 
```

---

Reference
- https://hermeslog.tistory.com/327
- 