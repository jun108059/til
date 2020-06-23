## 문자열 자르기(Substring & Split)


### 🔻SubString
String(char Array)을 부분적으로 가져옴

```java
String.substring(start) //문자열  start index부터 마지막까지 가져오기
String.substring(start,end) //문자열  start index부터 end`전` index 까지 가져오기

// example
String str = "ABCDEFG"; //대상 문자열
/*A=0 B=1 C=2 D=3 E=4 F=5 G=6의 index를 가진다.*/
		
str.substring(3); 
/*substring(시작위치) 결과값 = DEFG*/

str.substring(3, 6); 
/*substring(시작위치,끝위치) 결과값 = DEF*/
```

### 🔻Split
특정문자를 기준으로 배열 재생성

```java
// 문법
문자열배열 = 대상문자열.split("기준문자");

// example
String str = "";

for(int i = 0; i < 5; i++) {
    str += i + "#";
}
		
String[] array = str.split("#");
		
for(int i = 0; i < array.length; i++) {
    System.out.println(array[i]);
}

// 결과값 
// array[0] = 1
// array[1] = 2
// array[2] = 3
// array[3] = 4
```


## Reference

- [코딩팩토리](https://coding-factory.tistory.com/126)   
> 문자열 자르기(Substring, Split 사용법 & 예제) 정리   
