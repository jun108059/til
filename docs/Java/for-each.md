# Java for each문 (향상된 for문)

## 기존 for문의 문제점

보통 for문을 사용할땐 아래와 같이 사용한다.

```java
for(int i = 0; i < array.size(); i++){
	System.out.println(array.get(i));
}
```

위와 같이 for문은 `초기값 ; 조건식 ; 증감식` 을 통해서 사용한다.

보통 조건식을 array.size()를 사용함으로써, array의 크기가 바뀌더라도 알아서 적용하게끔 쓴다.

하지만, 조건식에 array.size()를 사용할 시, for문이 돌때마다 size를 호출 한다는 단점이 있다.

데이터가 적을땐 문제가 안되지만, 만약 데이터가 많다고 가정해보면 문제가 될 수도 있다.

따라서 아래와 같이 사용하기도 한다.

```java
for(int i = 0, size = array.size(); i < size; i++){
	System.out.println(array.get(i));
}
```

초기값 세팅에 size를 미리 구해서 for문이 돌때마다 array.size() 메서드의 사용을 피한 것이다.

위의 예시에선 문제가 없지만, 아래와 같은 경우에 또 문제가 생길 수 있다.

```java
for(int i=0,size = array.size(); i<size; i++){

	System.out.println(array.get(i));

	System.out.println(array.get(i));

}
```

무엇이 문제가 될 수 있을까?

답은 array.get(i)를 두번 호출 해야하는 상황에서 생길 수 있다.

단순히 원하는건 array.get(i)가 리턴해주는 String 값인데, arrayList를 쓸때없이 두번 접근 하고 있다.

이러한 문제를 해결하기 위해선 보통 아래와 같이 코딩한다.

```java
for(int i=0,size = array.size(); i<size; i++){

	String tempValue = array.get(i);

	System.out.println(tempValue);

	System.out.println(tempValue);
}
```

위의 예제에서는 String 변수 tempValue에 `array.get(i)` 값을 미리 저장시켜

array호출을 두번 하지 않고 `String Value`만을 print 하게 한다.

이렇게 함으로써 array를 한번만 접근할 수 있다.

지금까지 for문 사용법에 변천사를 쭉 보아왔는데, 이러한 것들을 foreach문 쓰면 편하다.

---

## for each문

```java
for(String tempValue : array){

	System.out.println(tempValue);

	System.out.println(tempValue);

} 
```

간단하게 이렇게 작성해주면 위에서 말했던 문제점들이 전부 해결된다.

특이한 점은 초기값 세팅에 size를 미리 구할때도 `size()` 메서드를 한번은 호출한다.

하지만 `for each`문은 `size()` 메서드를 한번도 안부른다.

(주관적인 생각은 array를 하나씩 get 하면서 끝까지 index가 끝까지 도달했을때,

끝나게끔 코딩을 한것이 아닌가 생각이든다.)

하지만 위의 예제에서 혹시 index값을 구하고 싶은경우가 있을것이다.

그런 경우는 아래와 같이 코딩하면 된다.

```java
int index = 0;

for(String tempValue : array){

	System.out.println("Index : " + index++);

	System.out.println(tempValue);

	System.out.println(tempValue);
}
```

> 💡 `foreach`문은 JDK 5.0 이상부터 지원하는 문법이다.

만약 일반 for문이랑 차이점을 모른다면 잘 안쓸 문법이다.

하지만 위에서 설명한 이유를 읽어보고 잘 이해를 했다면

충분히 써 볼 가치가 있다고 느낄 것이다.

### Reference

- https://mommoo.tistory.com/25?category=577684 [개발자로 홀로 서기]