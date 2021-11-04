# 함수형 인터페이스와 람다

## 1. 함수형 인터페이스와 람다 표현식 소개

---

> **함수형 인터페이스**란 **추상 메소드가 하나**만 선언된 **인터페이스**이다.

### 1-1. 함수형 VS. 객체지향

Java 개발자에게 익숙한 객체지향 프로그래밍과의 차이를 비교하자면, 값을 취급하는 단위가 어디까지 인지 나눌 수 있다.

Java 는 값(상태)과 행위를 다루기 위한 기본 단위를 **객체**로 정의하고, 이 객체를 **클래스**라는 형태로 구현한다.

함수형 프로그래밍은 **행위(로직)를 값**으로 취급한다. 입력에 의해서만 출력이 결정되는 순수 함수를 기본 단위로 정의한다.

```
객체지향 → 기능 구현을 위해 필요한 객체를 먼저 설계
함수형 → 기능 단위로 함수를 만들어서 조합
```

### 1-2. 왜 필요할까?

> **`Side-effect` 를 제거할 수 있다.**

- 연관관계나 연계성 보다는 기능을 하는 함수를 이용해 Side-effect가 없도록 선언형으로 개발한다.
- 순수 함수의 조합으로 이루어지기 때문에 결과 값도 변하지 않 는다.
- 예를 들어, 멀티쓰레드 공유자원의 경우 변경이 아닌 복사를 통한 함수 로직 실행으로 결과 값을 얻어 동시성 Side-effect 이슈가 없다.

> **구조적으로 유연하고 간결해진다.**

- 코드 재사용 단위가 클래스였던 것이 함수 단위로 가능하여 유연한 개발이 가능하다.
- 복잡한 연계를 줄일 수 있어 구조적으로 간결해진다.

### 1-3. 코드를 살펴보자.

> 추상 메소드 하나만 정의하면 된다.


@FunctionalInterface 어노테이션은 컴파일 시 체크해주기 때문에 명시해주면 명확하다.

```java
@FunctionalInterface
public interface RunSomething {
    void doIt();
}
```

Java8 이전에는 이 함수형 인터페이스의 구현체를 만들어서 쓰기 위해 **익명 내부 클래스**(anonymous inner class)로 정의해서 사용했다.

```java
public class Foo {

    public static void main(String[] args) {
        RunSomething runSomething = new RunSomething() {
            @Override
            public void doIt() {
                System.out.println("Hello");
            }
        };
    }
}
```

람다 표현식을 사용하면 더 간결하게 표현할 수 있다.

```java
public class Foo {

    public static void main(String[] args) {
        RunSomething runSomething = () -> System.out.println("Hello");
    }
}
```

메소드 구현 코드 라인이 많아지면 다음과 같이 쓸 수 있다.

```java
public class Foo {

    public static void main(String[] args) {
        RunSomething runSomething = () -> {
            System.out.println("Hello");
            System.out.println("YoungJun");
        };
    }
}
```

> Java에서는 이 **함수를 일급 객체로 사용**할 수 있다.

- `() -> System.out.println("Hello")` 이 행위(함수)의 결과를 변수로 할당할 수 있다.
- 위 함수 자체를 리턴 할 수도 있다.
- 함수가 함수를 파라미터로 받거나, 함수가 함수를 리턴할 수 있다. → 이를 고차함수라고 함.

> **순수 함수**란 **동일 입력, 동일 출력**이 원칙이다.


```java
@FunctionalInterface
public interface PureFunction {
    int doIt(int number);
}
```

구현해서 사용하면 다음과 같다.

```java
PureFunction pureFunction = (number) -> number + 10;

System.out.println(pureFunction.doIt(1));
System.out.println(pureFunction.doIt(1));
System.out.println(pureFunction.doIt(1));
```

동일 입력, 동일 출력이 보장되어야 `Side-effect`가 없는 함수형 프로그래밍이다.

> **값이 변경될 여지가 있는 경우**

- 함수 외부 상태 값에 의존하는 경우
- 함수 외부에 있는 값을 변경하는 경우

입력으로 참조값(변수)이 오는 경우 Side-effect가 발생할 수 있다.

동일 입력-동일 출력을 지향하되, Java 특성 때문에 순수 함수가 보장되지 않을 수 있다.
진짜 함수형 프로그래밍을 구현하려면 **순수 함수, 불변성을 잘 고려**하자.

## 2. 자바에서 제공하는 함수형 인터페이스

> java.lang.function 패키지에 있다.

- MD Table

|         종류        	|  인자  	|   반환  	|                       예시                       	| 설명                                                	|
|:-------------------:	|:------:	|:-------:	|:------------------------------------:	|-----------------------------------------------------	|
| Runnable            	|        	|         	|                                      	| 기본적인 형태의 인터페이스, 인자와 반환값 모두 없음 	|
| Function<T, R>      	|   <T>  	|   <R>   	| R apply(T t)                         	| 함수 조합 용 메소드(andThen, compose)               	|
| BiFunction<T, U, R> 	| <T, U> 	|   <R>   	| R apply(T t, U u)                    	| 두 개의 값(T, U)를 받아서 R 타입을 리턴             	|
| Consumer<T>         	|   <T>  	|         	| void Accept(T t)                     	| T 타입을 받아서 아무값도 리턴하지 않는 함수         	|
| Supplier<T>         	|        	|   <T>   	| T get()                              	| 항상 같은 값을 반환                                 	|
| Predicate<T>        	|   <T>  	| Boolean 	| boolean test(T t)                    	| 함수 조합 용 메소드(And, Or, Negate)                	|
| UnaryOperator<T>    	|   <T>  	|   <T>   	| Function<T, R> 의 특수한 형태        	| 입력값 하나를 받아서 동일한 타입을 리턴             	|
| BinaryOperator<T>   	| <T, T> 	|   <T>   	| BiFunction<T, U, R> 의 특수한 형태    | 동일한 타입의 입렵값 두개를 받아 리턴               	|
| BiConsumer<T, U>    	| <T, U> 	|         	| void Accept(T t, U u)                 | 인자 2개를 받고 리턴하지 않는 함수                  	|
| BiPredicate<T, U>   	| <T, U> 	| Boolean 	| boolean test(T t, U u)                | 인자 2개를 받고 Boolean 타입 반환                   	|
| Comparator<T>       	| <T, T> 	|   int   	| int compare(T t, U u)	                | 객체간의 값을 비교하기 위한 compare 기능            	|


[기본 제공 함수형 인터페이스](https://www.notion.so/21b721a929854238858d32a5d1214a67)

- 제네릭 타입으로 객체형을 명시한다.
- 인자는 최대 2개로 설계했다.
    - 이것은 함수를 어떻게 설계하는 것이 좋은지에 대한 가이드라고 볼 수 있음
    - 함수는 한가지의 일만 해야 되며 인자가 2개를 넘어가는 순간 하나 이상의 일을 하고 있을 가능성이 높으므로 다른 부수효과를 일으키지 않도록 어느정도 설계를 강제하는 것
    - 하지만 로직에 어쩔 수 없이 (그런 경우는 거의 없지만) 하나의 함수에서 처리하는게 더 효율적이라면 별도의 DTO 를 정의하고 여기에 값을 담아 인자로 전달하는 방법을 사용
- 자세한 구현은 [java.lang.function](https://docs.oracle.com/javase/8/docs/api/java/util/function/package-summary.html) 에서 확인하면 될 것 같다.

4가지 API 함수형 인터페이스 적절하게 사용

- Function<T, R> : 작업으로 타입 변환할 때
- Consumer<T> : 작업은 하되 딱히 리턴되는 것이 없을 때
- Predicate<T> : 작업하면서 true, false 작업이 필요할 때
- Supplier<T> : 작업을 지연시켜야할 때 혹은 특정 시점에만 작업될 수 있도록 할 때

## 3. 람다 표현식

> **[(인자 리스트) → {바디}](https://docs.oracle.com/javase/tutorial/java/javaOO/lambdaexpressions.html)**

- 내부적으로는 익명 클래스 구현과 같다고 한다.

### 3-1. 인자 리스트

- 인자 없을 때 : ()
- 인자 한 개일 때 : (one) / one
- 인자 두 개이상 일 때 : (onw, two ~)
- 인자 타입 생략 가능 -> 컴파일러가 추론(infer)

### 3-2. 바디

- 화살표 오른쪽에 함수 본문 정의
- 여러 줄인 경우 { } 사용
- 한 줄인 경우 { }, return 생략 가능

### 3-3. 변수 캡처 (Variable Capture)

- Local variable capture
    - final, effective final인 경우에만 참조 가능 → 아닌 경우 concurrency 문제 발생 가능
- effective final (JAVA 8 지원)

    ```java
    (final) int baseNumber = 10;    // final이 없지만 이 변수는 어디서도 변경하지 않는다.
    ```

    - `사실상` final인 변수
    - final 사용하지 않은 변수를 익명 클래스 구현체 또는 람다에서 참조할 수 있다.
- 람다는 익명 클래스 구현체와 달리 `Shadowing` 않는다. [참조](https://docs.oracle.com/javase/tutorial/java/javaOO/nested.html#shadowing)
    - 익명 클래스는 새로운 Scope를 만들지만 람다는 람다를 감싸고 있는 Scope와 같다.

### 3-4. Shadowing

[옳은 예]

```java
public class ShadowTest {

    public int x = 0;

    class FirstLevel {

        public int x = 1;

        void methodInFirstLevel(int x) {
            System.out.println("x = " + x);
            System.out.println("this.x = " + this.x);
            System.out.println("ShadowTest.this.x = " + ShadowTest.this.x);
        }
    }

    public static void main(String... args) {
        ShadowTest st = new ShadowTest();
        ShadowTest.FirstLevel fl = st.new FirstLevel();
        fl.methodInFirstLevel(23);
    }
}

// ---------------------- Output -------------------------------------------
    x = 23
    this.x = 1
    ShadowTest.this.x = 0
```

[틀린 예]

```java
public class Foo {

    public static void main(String[] args) {
        Foo foo = new Foo();
        foo.run();
    }

    private void run() {
        int baseNumber = 10;

        // Lambda Error : run()과 같은 scope 공유
        IntConsumer printInt = (baseNumber) -> {
            System.out.println(i + baseNumber)
        }

        // Lambda 내부 Sout부분 오류발생 : 람다는 effective final, final만 사용 가능
        baseNumber++;
    }
}
```

**[제약사항]**

> 람다식을 쓴다면 최소한 인터페이스 타입 객체가 생성될 때 타입파라미터가 있어야함
>
- 아무런 정보없이 람다식을 사용하면 타입추론이 어려워서 컴파일 단계에서 에러남
- 함수형 인터페이스의 메서드가 제네릭 메서드인 경우
    - 호출할 때 어떤 타입인지 알 수 있는 경우 (추론 불가)

```java
@FunctionalInterface
public interface InvalidFuncInterface {
    <T> String print(T value);
}

class InvalidFuncInterfaceUse{
    public static void main(String[] args) {

        /* 호출할 때 value가 비로소 어떤 타입인지 알 수 있음 : 추론 불가 */
        //getPrint(1, s -> s.toString());
    }

    public static <T> void getPrint(T value, InvaildFuncInterface invalidFuncInterfaceUse){
        System.out.println(invalidFuncInterfaceUse.print(value));
    }
}

```

## 4. **메소드 레퍼런스**

> 람다가 하는 일이 기존 메소드 또는 생성자를 호출하는 거라면, 메소드 레퍼런스를 사용해서
매우 간결하게 표현할 수 있다.
>

```java
// UnaryOperator<String> hi = s -> "hi"+s;
UnaryOperator<String> hi = Greeting::hi;

Greeting greeting = new Greeting();
UnaryOperator<String> hello = greeting::hello;
System.out.println(hello.apply("youngjun"));

// Constructor은 Class를 반환
// Greeting()
Supplier<Greeting> newGreeting = Greeting::new;
Greeting greeting1 = newGreeting.get(); // 이래야지 인스턴스가 생성 된 것.

// Greeting(String str)
Function<String, Greeting> youngjunGreeting = Greeting::new;
Greeting youngjun = youngjunGreeting.apply("youngjun");
System.out.println(doho.getName());

String[] names = {"youngjun","saram","in"};
//Arrays.sort(names, (o1, o2) -> 0);
Arrays.sort(names, String::compareToIgnoreCase);
System.out.println(Arrays.toString(names));`
```

**Consumer 예시**

- 어떤 객체를 입력받아 void를 리턴

```java
Consumer<String> func = text -> System.out.println(text);
func.accept("Hello");
// 실행 결과
// Hello
```

위의 람다식은 다음과 같이 `System.out::println`라는 메소드 레퍼런스로 표현할 수 있다.

```java
Consumer<String> func = System.out::println;
func.accept("Hello");
```

> String 인자 1개를 받아 void를 출력시키는 함수라는 **의미가 생략**되어있다.

- `ClassName::MethodName` 형식
- **괄호( )는 생략**한다.

메소드 레퍼런스는 리턴과 인자가 생략되기 때문에 메소드의 스펙을 알고있어야한다.

## Reference

- [백기선 인프런 강의 : 더 자바, Java8](https://www.inflearn.com/course/the-java-java8/dashboard)