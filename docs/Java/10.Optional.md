# Optional

## 1. Optional 소개

> **비어있을 수도 있고, 어떠한 값 하나만 담고 있을수도 있는 인스턴스의 타입**   
> `Optional이 객체를 감싸는 구조`

### 1-1. 등장배경 : 참조형 멤버변수 와 NPE

> **1️⃣ null 관련 문제를 해결하기 위해**

1. 런타임에 NPE(NullPointerException)라는 예외를 발생시킬 수 있다.
2. NPE 방어를 위해서 들어간 null 체크 로직 때문에 코드 가독성과 유지 보수성이 떨어진다.

```java
/* OnlineClass.java */
...
  public Progress progress;

	public Progress getProgress() {
    return progress;
  }

	public void setProgress(Progress progress) {
  	this.progress = progress;
  }
...

/* OptionalTestApp.java */
// 이슈상황 → 참조형 멤버 변수 사용 시 초기화 되지 않아 null 값을 참조 할 수 있다.
OnlineClass spring_boot = new OnlineClass(1, "spring boot", true);
// NullPointExecption 발생
Duration studyDuration = spring_boot.getProgress().getStudyDuration(); 
System.out.println(studyDuration);
```

> 2️⃣ **자바8 이전 해결방법**

```java
// 방법1. 사전에 null을 체크 → 에러에 대한 스택트레이스를 뽑는 것 또한 리소스 낭비
public Progress getProgress() {
    if (progress == null) {
				throw new IllegalStateException();
    }
  	return progress;
}

// 방법2. 클라이언트 코드에서 null을 확인 → 이는 클라이언트에서 놓친다면 에러가 발생할 수 있음.
Progress progress = spring_boot.getProgress();
if (progress != null) {
	  System.out.println(progress.getStudyDuration());
}
```

이렇게 if문으로 null을 체크하게 되면 get method가 사용되는 만큼 null 체크를 해줘야하는 문제가 있다. 비즈니스 로직보다 null 체크 코드가 길어지는 마법이 발생한다.

> **3️⃣ 자바8 : 고통스러운 null 처리를 Optional에 위임**

1. 스칼라나 하스켈과 같은 함수형 언어들은 전혀 다른 방법으로 null 문제을 해결
2. 자바가 `존재하지 않는 값`을 표현하기 위해서 null을 사용했다면, 이 함수형 언어들은 `존재할지 안 할지 모르는 값`을 표현할 수 있는 별개의 타입을 가지고 있다.
3. 이 컨셉을 모티브로 Optional 클래스 도입

> **4️⃣ Optional 장점**

1. NPE를 유발할 수 있는 null을 직접 다루지 않아도 된다.
2. 수고롭게 null 체크를 직접 하지 않아도 된다.
3. 명시적으로 해당 변수가 null일 수도 있다는 가능성을 표현할 수 있다. (따라서 불필요한 방어 로직을 줄일 수 있다!)

### 1-2. Optional 주의 사항

> 1️⃣ **Optional은 return type 에만 사용하는 것이 좋다.**
>

```java
/* OnlineClass.java */
...
  // getter 의 return tpye 을 Optional로 명시
  public Optional<Progress> getProgress() {
  	return Optional.ofNullable(progress);
	}
...
```

1. 메소드 `Parameter`로 Optional을 정의해두면 NPE 발생 가능성 있음.

    ```java
    // Parameter에 Optional 정의
    public void setProgress(Optional<Progress> progress) {
      	progress.ifPresent(p -> this.progress = p);
    }
    
    // 호출 시 null.ifPresent(...) → NPE 발생
    {객체}.setProgress(null);
    ```

   null 체크를 해주면 NPE 발생을 막을 수 있지만, Optional을 사용하는 의미가 없어진다.

2. `Map의 Key`에 Optional을 사용하면 안된다.
    - Map 인터페이스는 Key가 Null일 수 없다.
3. `인스턴스 필드`에 Optional은 지양하자.
    - 사용할 수 있지만, 도메인 클래스 설계 문제이다.
    - 필드가 있을 수 도, 없을 수 도 있다는 의미
    - `해결 방안` : 상위/하위 클래스로 분리 or Delegation 사용 권장

> 2️⃣ **Null 허용 여부에 따라 `ofNuallable`을 고려해보자.**
>
1. `ofNullable` : null을 받는 것을 허용한다.
2. `of`  : null을 받으면 NPE 발생

NPE를 발생시키지 않으면서 null을 받을 수 있는 경우에 사용하자.

> 3️⃣ **`primitiveType`의 Optional을 적절히 사용**
>

```java
Optional.of(10); // 내부에서 boxing, unBoxing이 이루어진다. → 성능 저하

OptionalInt.of(10); // 각 primitive Type에 맞는 클래스를 제공
```

> **4️⃣ Optional return 메소드에서 `null을 return 하지 말자`**

```java
// 지향해야할 코드 → NPE 발생 가능
public Optional<Progress> getProgress() {
  	return null;
}

// 좋은 코드
public Optional<Progress> getProgress() {
  	return Optional.empty();
}
```

> **5️⃣ `Collection, Map, Stream Array, Optional` 은 Optional로 감싸지 말 것**

- 컨테이너 성격의 인스턴스들은 이미 비어있다는 것을 표현할 수 있다.
- 그러므로 Optional로 감싸면 두 번 감싸게 됨. → 의미가 없다!

## 2. Optional API

### 2-1. Optional 만들기

> 1️⃣ 선언하기

제네릭을 제공하기 때문에, 변수를 선언할 때 명기한 타입 파라미터에 따라서 감쌀 수 있는 객체의 타입이 결정된다.

```java
Optional<Order> maybeOrder; // Order 타입의 객체를 감쌀 수 있는 Optional 타입의 변수
Optional<Member> optMember; // Member 타입의 객체를 감쌀 수 있는 Optional 타입의 변수
Optional<Address> address; // Address 타입의 객체를 감쌀 수 있는 Optional 타입의 변수
```

변수명은 그냥 클래스 이름을 사용하기도 하지만 `maybe`나 `opt`와 같은 접두어를 붙여서 Optional 타입의 변수라는 것을 좀 더 명확히 나타내기도 한다.

> 2️⃣ 객체 생성하기
>
1. **Optional.empty()**
    - null을 담고 있는, 한 마디로 비어있는 Optional 객체를 얻어온다.
    - 이 비어있는 객체는 Optional 내부적으로 미리 생성해놓은 싱글턴 인스턴스이다.

        ```java
        Optional<Member> maybeMember = Optional.empty();
        ```

2. **Optional.of()**
    - null이 아닌 객체를 담고 있는 Optional 객체를 생성
    - null이 넘어올 경우, NPE를 던지기 때문에 **주의해서 사용하자!**

        ```java
        Optional<Member> maybeMember = Optional.of(aMember);
        ```

3. **Optional.ofNullable()**
    - null인지 아닌지 확신할 수 없는 객체를 담고 있는 Optional 객체를 생성
    - `Optional.empty()`와 `Optional.ofNullable(value)`를 합쳐놓은 메소드로 이해하면 편하다.
    - null이 넘어올 경우, NPE를 던지지 않고 `Optional.empty()`와 동일하게 비어 있는 Optional 객체를 얻어온다.
    - 해당 객체가 null인지 아닌지 자신이 없는 상황에서는 이 메소드를 사용하자.

    ```java
    Optional<Member> maybeMember = Optional.ofNullable(aMember);
    Optional<Member> maybeNotMember = Optional.ofNullable(null);
    ```


### 2-2. Optional 값 여부 확인

1. **isPresent()**
2. **isEmpty()** `Java11부터 제공`

### 2-3. Optional 값 가져오기

> 아래 메소드들은 모두 Optional이 담고 있는 객체가 존재할 경우 **동일하게 해당 값을 반환**
하지만, Optional이 비어있는 경우(null을 담고 있는 경우), 다르게 작동
>
1. **get()**
    - null일 경우 NoSuchElementException 발생
    - `가급적 사용을 하지 않는 것을 권장.`
2. **orElse(T other)**
    - null일 경우 넘어온 인자(T) 를 반환
    - `T는 인스턴스 타입`
3. **orElseGet(Supplier<? extends X>)**
    - null일 경우 넘어온 함수형 인자를 통해 생성된 객체를 반환
    - `orElse(T other)`의 게으른 버전
    - 비어있는 경우에만 함수가 호출되기 때문에 `orElse(T other)` 대비 성능상 이점을 기대할 수 있음.
4. **orElseThrow(Supplier<? extends X> exceptionSupplier)**
    - null일 경우 넘어온 함수형 인자를 통해 생성된 예외를 던진다.
    - `default : NoSuchElementException`
5. **ifPresent(Consumer)**
    - 값이 있는 경우 값을 가지고 Consumer 함수 동작

    ```java
    // 1. get()
    OnlineClass onlineClass = optional.get(); // NoSuchElementException 발생
    
    // 2. isPresent() + get() = 먼저 확인후 꺼낸다  번거롭다
    if (optional.isPresent()) {
    	OnlineClass onlineClass = optional.get();
    	System.out.println(onlineClass.getTitle());
    }
    
    // 3. ifPresent(Consumer) = 값이 있는 경우만 함수가 동작한다!
    optional.ifPresent(oc -> System.out.println(oc.getTitle()));
    ```


### 2-4. Optional 필터/변환

1. **Optional map(Function)**
2. **Optional filter(Predicate)**
3. **Optional flatMap(Function) :** Optional 안의 인스턴스가 Optional인 경우 사용

> **1️⃣ map을 활용해보자.**

주문을 한 회원이 살고 있는 도시를 반환하는 메소드다. (기본값은 Seoul 이다.)

```java
// AS-WAS
public String getCityOfMemberFromOrder(Order order) {
	if (order == null) {
		return "Seoul";
	}
	Member member = order.getMember();
	if (member == null) {
		return "Seoul";
	}
	Address address = member.getAddress();
	if (address == null) {
		return "Seoul";
	}
	String city = address.getCity();
	if (city == null) {
		return "Seoul";
	}
	return city;
}
```

사방에서 return 해줘야 하여 가독성이 떨어지고, 유지보수가 좋지 않은 코드가 있다.

```java
// TO-BE
public String getCityOfMemberFromOrder(Order order) {
	return Optional.ofNullable(order)
			.map(Order::getMember)
			.map(Member::getAddress)
			.map(Address::getCity)
			.orElse("Seoul");
}
```

전통적인 NPE 방어 패턴에 비해 훨씬 간결하고 명확해진다!

우선 기존에 존재하던 조건문들이 모두 사라지고 Optional의 수려한(fluent) API에 의해서 단순한 메소드 체이닝으로 모두 대체된다.

> **2️⃣ map : 메소드 체이닝 설명**
>
1. `ofNullable()` 정적 팩토리 메소드를 호출하여 Order 객체를 Optional로 감싼다.
    - 혹시 Order 객체가 null인 경우를 대비하여 `of()` 대신에 `ofNullable()`을 사용하는 것.
2. 3번의 `map()` 메소드의 연쇄 호출을 통해서 Optional 객체를 3번 변환한다.
    - 매 번 다른 메소드 레퍼런스를 인자로 넘겨서 Optional에 담긴 객체의 타입을 바꿔준다.
    - `Optional<Order>` -> `Optional<Member>` -> `Optional<Address>` -> `Optional<String>`
3. 마무리 작업으로 `orElse()` 메소드를 호출하여 이 전 과정을 통해 얻은 Optional이 비어있을 경우, 디폴트로 사용할 도시 이름을 세팅해주면 된다.

> **3️⃣ fileter를 사용해보자.**
>

Java8 이 전에 NPE 방지를 위해서 다음과 같이 null 체크로 시작하는 if 조건문 패턴을 많이 사용해왔다.

```java
if (obj != null && obj.do() ...)
```

예를 들어, 주어진 시간(분) 내에 생성된 주문을 한 경우에만 해당 회원 정보를 구하는 메소드를 위 패턴으로 작성해보면 다음과 같다.

```java
public Member getMemberIfOrderWithin(Order order, int min) {
	if (order != null && order.getDate().getTime() > System.currentTimeMillis() - min * 1000) {
		return order.getMember();
	}
}
```

1. if 조건문 내에 **null 체크와 비지니스 로직이 혼재**되어 있어서 가독성이 떨어진다.
2. 게다가 null을 리턴할 수 있기 때문에 메소드 호출부에 NPE 위험을 전파하고 있다.

**filter를 적용해보자.**

```java
public Optional<Member> getMemberIfOrderWithin(Order order, int min) {
	return Optional.ofNullable(order)
			.filter(o -> o.getDate().getTime() > System.currentTimeMillis() - min * 1000)
			.map(Order::getMember);
}
```

1. if 조건문 없이 메소드 연쇄 호출만으로도 좀 더 읽기 편한 코드를 작성할 수 있다.
2. 뿐만 아니라, 메소드의 리턴 타입을 Optional로 사용함으로써 호출자에게 해당 메소드가 null을 담고 있는 Optional을 반환할 수도 있다는 것을 명시적으로 알려준다.

## Reference

- [백기선 인프런 강의 : 더 자바, Java8](https://www.inflearn.com/course/the-java-java8/dashboard)
- [DaleSeo : 자바8 Optional](https://www.daleseo.com/java8-optional-after/)
- [Oracle Docs : Optional](https://docs.oracle.com/javase/8/docs/api/java/util/Optional.html)
- [Homoefficio : Java Optional 바르게 쓰기](https://homoefficio.github.io/2019/10/03/Java-Optional-%EB%B0%94%EB%A5%B4%EA%B2%8C-%EC%93%B0%EA%B8%B0/)
- [JDM's Blog : 자바 옵셔녈](https://jdm.kr/blog/234)
