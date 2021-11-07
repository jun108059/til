# Date와 Time

## 1. Date와 Time 소개

> 날짜와 시간을 표현하기 위해 Java에서 사용해왔다.

### 1-1. Java8에 새로운 날짜와 시간 API가 등장한 이유

```java
Date date = new Date();
        Calendar calendar = new GregorianCalendar();
        SimpleDateFormat dateFormat = new SimpleDateFormat();
```

Java 8 이전 사용되는 날짜와 시간 API는 `Date`와 `Calendar`, `GregorianCalendar`등이 있음.

이렇게 기존에 존재하던 API들은 문제점이 있었는데 하나씩 살펴보자.

1. **클래스 이름이 명확하지가 않다.**

   - 날짜 클래스중 `Date` 는 `시간`과 `TimeStamp` 모두 표현할 수 있다. (사실상 `TimeStamp`)
   - 시간 값이 `에폭임` 이라 하여 세계 표준시(UTC)로 1970년 1월 1일 00시 00분 00초를 기준으로 현재까지 흐른 모든 시간을 초(sec)단위로 표현 **(사람이 알아보기 어려움)**
2. **Mutable 하여 thread safe하지 않다.**

   ```java
   public static void main(String[] args) throws InterruptedException {
       Date date = new Date();
       long time = date.getTime();
       System.out.println("date = " + date);
       Thread.sleep(1000 * 3);
       Date after3Seconds = new Date();
       System.out.println("after3Seconds = " + after3Seconds);

       after3Seconds.setTime(time);
       System.out.println("after3Seconds = " + after3Seconds);
   }

   /*
   [실행 결과]
   date = Thu Oct 28 20:22:24 KST 2021
   after3Seconds = Thu Oct 28 20:22:27 KST 2021
   after3Seconds = Thu Oct 28 20:22:24 KST 2021
   */
   ```

   - 최초 코드 실행시 시간을 출력 후 3초 후에 다시 Date 인스턴스를 생성해 출력했다.
   - 그 다음 `setTime(time)`으로 최초 생성한 `date`를 새로 생성한 `after3Seconds`에 set 해 준뒤 출력하니 최초에 생성했을 당시의 시간이 출력된다.
   - 이는 Date 클래스가 **`mutable`** 하다는 것을 의미
   - **`thread unsafe`** : Date 인스턴스의 값을 각각 다른 Thread에서 접근해서 변경이 가능하면 기존에 사용하던 Thread에서 변경 되어 잘못된 Date 정보를 가져와서 버그가 발생할 위험이 있다는 뜻.
3. **버그 발생할 여지가 많다.**

   - Thread unsafe 할 뿐 아니라 사용법 자체에서도 사용법에 대해 오해할 수 있어 버그가 발생할 여지가 있다.

   ```java
   Calendar birthDay = new GregorianCalendar(1988, 6, 10);
   ```

   - 생일이 1988년 6월 10일임을 표현하고 싶지만, GregorianCalendar에서 month는 0부터시작하기 때문에 6을 넣으면 7월이라는 의미가 된다.
   - 혼동하지 않기 위해서 상수 값을 쓰곤 했다. `(ex: Calendar.JUNE)`
4. 그래서 Java 8 이전에는 [Joda-Time](https://www.joda.org/joda-time/) 을 사용했다.

### 1-2. Java 날짜 및 시간 API가 가져야할 디자인 철학

1. **Clear**

   - API 메소드는 명확해야한다.
   - 예를들어 클래스명이 `Date`지만 날짜 뿐 아니라 시간(`Time`)까지 다루게되면 명확하지 않다.
   - 더하여 시간(`Time`)역시 사람에게 익숙한 일반 시간이 아닌 에폭타임인 것은 `Clear`하지 않다.
2. **Fluent**

   - 메소드가 null을 반환하는 경우가 없기 때문에 메소드 체이닝이 가능하기에 코드가 유려해진다.
3. **Immutable**

   - 기존 날짜 인스턴스의 내용이 변하지 않으며 변경메소드 호출시 값이 변경되는게 아니라 새로운 날짜 인스턴스를 생성해 반환해야한다.

   ```java
   LocalDate today = LocalDate.of(2021, Month.OCTOBER, 28);
   LocalDate nextMonth = today.plusMonths(1);
   ```
4. **Extensible**

   - 확장 가능해야 한다.
   - 달력에는 윤달, 음력, 양력, 불교달력 등 다양한 종류의 달력의 확장이 가능해야 한다.

### 1-3. 주요 API 특징*

1. 기계용 시간(machine time)과 인류용 시간(human time)으로 나눌 수 있다.
2. 기계용 시간은 `EPOCK`(1970년 1월 1일 0시 0분 0초)부터 현재까지의 타임스탬프를 표시한다.
3. 인류용 시간은 우리가 흔히 사용하는 년, 월, 일, 시, 분, 초 등을 말한다.
4. 타임스탬프는 Instant를 사용한다.
5. 특정 날짜(`LocalDate`), 시간(`LocalTime`), 일시(`LocalDateTime`)를 사용할 수 있다.
6. 기간을 표현할 때는 Duration(시간 기반)과 Period(날짜 기반)를 사용할 수 있다.
7. `DateTimeFormatter`를 사용해 일시를 특정한 문자열로 포매팅 할 수 있다.

## 2. Date와 Time API

> 기계적인 시간과 인류용 시간을 사용&표현하는 방법

### 2-1. 기계적인 시간

1. `Instant.now()`: 현재 UTC(GMT)를 반환
2. `Universal Time Coordinated == Greenwich Mean Time`

```java
public static void main(String[] args) throws InterruptedException {
    Instant instant = Instant.now();//기준시 UTC (GMT)
    System.out.println("instant = " + instant);

    ZoneId zone = ZoneId.systemDefault();
    System.out.println("zone = " + zone);
    ZonedDateTime zonedDateTime = instant.atZone(zone);
    System.out.println("zonedDateTime = " + zonedDateTime);
}

/*
instant = 2021-10-28T11:59:22.897293900Z
zone = Asia/Seoul
zonedDateTime = 2021-10-28T20:59:22.897293900+09:00[Asia/Seoul]
*/
```

1. **`ZoneId.systemDefault();`**
   - 현재 시스템상의 zone 정보를 반환합니다. (ex: Asia/Seoul)
2. **`instant.atZone(zone);`**
   - UTC 기준이아닌 zone 의 위치 기반의 시간을 반환합니다.

### 2-2. 인류용 시간

1. `LocalDate`와 `LocalDateTime`이 있다.
   - `LocalDate`: 년/월/일 까지 표현할 때 사용
   - `LocalDateTime`: 년/월/일/시/분/초 까지 표현할 때 사용

```java
public static void main(String[] args) {
		LocalDateTime now = LocalDateTime.now();
    System.out.println("now = " + now);
    LocalDateTime birthDay = LocalDateTime.of(1988, Month.JUNE, 10, 0, 0, 0);
    ZonedDateTime nowInUTC = ZonedDateTime.now(ZoneId.of("UTC"));
    System.out.println("nowInUTC = " + nowInUTC);
    ZonedDateTime birthDayByUTC = ZonedDateTime.of(1988, Month.JUNE.getValue(),10,0,0,0,0, ZoneId.of("UTC"));
    System.out.println("birthDayByUTC = " + birthDayByUTC);
}
```

1. **`LocalDateTime.now()`**
   - 현재 시스템 Zone에 해당하는(로컬) 일시를 반환
2. **`LocalDateTime.of(1988, Month.JUNE, 10, 0, 0, 0);`**
   - 로컬의 특정 일시를 반환
3. **`ZonedDateTime.now(ZoneId.of("UTC"));`**
   - 특정 Zone의 현재 시간을 반환합니다.
4. **`ZonedDateTime.of(1988, Month.JUNE.getValue(),10,0,0,0,0, ZoneId.of("UTC"));`**
   - 특정 Zone의 특정 일시를 반환합니다.

### 2-3. 기간을 표현하는 방법

1. `Period`
   - 날짜 기간 단위를 표현할 때 사용
2. `Duration`
   - 시간 단위 기간을 표현할 때 사용

```java
public static void main(String[] args) {
    LocalDate today = LocalDate.now();
    LocalDate birthDay = LocalDate.of(2020, Month.JUNE, 10);

    Period period = Period.between(birthDay, today);
    System.out.println(period.getMonths()+"개월 "+period.getDays()+"일");

    Period until = today.until(birthDay);
    System.out.println("until.get(ChronoUnit.DAYS) = " + until.get(ChronoUnit.DAYS));

    Instant now = Instant.now();
    Instant plus = now.plus(10, ChronoUnit.SECONDS);
    Duration duration = Duration.between(now, plus);
    System.out.println(duration.getSeconds());
}
```

1. **`Period.between(birthDay, today)`**
   - 올해 생일날짜와 오늘과 비교하여 Period타입의 인스턴스로 반환
2. **`Period until = today.until(birthDay)`**
   - `LocalDate` 객체의 until 메소드를 통해 전달한 인자값과 인스턴스의 기간을 계산한 Period 타입의 인스턴스를 반환
3. **`Duration.between(now, plus)`**
   - 현재시간과 10초 뒤의 시간을 인스턴스로 만든 뒤 비교하여 Duration 타입의 인스턴스로 반환

### 2-4. 파싱 또는 포매팅

1. `LocalDateTime`을 가지고 문자열을 `LocalDateTime`으로 혹은 반대로 변환해주는 방법.
2. `LocalDateTime.parse(String, DateTimeFormatter);`
3. 기본 정의 포맷팅 상수정보와  [패턴정보 참조](https://docs.oracle.com/javase/8/docs/api/java/time/format/DateTimeFormatter.html#pre)

```java
public static void main(String[] args) {
    LocalDateTime now = LocalDateTime.now();
    DateTimeFormatter MMddyyyy = DateTimeFormatter.ofPattern("MM/dd/yyyy");
    System.out.println(now.format(DateTimeFormatter.BASIC_ISO_DATE));
    System.out.println(now.format(MMddyyyy));

    LocalDate birthDay = LocalDate.parse("06/10/1988", MMddyyyy);
    System.out.println(birthDay);
}
```

1. **`DateTimeFormatter.ofPattern("MM/dd/yyyy")`**
   - `DateTimeFormatter`를 이용해 각종 형식으로 `LocalDateTime`을 포맷팅 해줄 수 있습니다. `ofPattern("MM/dd/yyy")`는 사용자 정의 패턴으로 포맷팅을 하겠다는 의미입니다.
2. **`now.format(DateTimeFormatter.BASIC_ISO_DATE)`**
   - 시간을 `DateTimeFormatter`가 지원하는 `BASIC_ISO_DATE`형태로 포맷팅
3. **`now.format(MMddyyyy)`**
   - 위에서 `ofPattern`으로 지정한 패턴으로 시간을 포매팅
4. **`LocalDate.parse("06/10/1988", MMddyyyy)`**
   - 문자열을 `ofPattern`에서 선언한 패턴 방식으로 파싱하여 `LocalDate` 타입의 인스턴스를 생성해 반환

### 2-5. 레거시 API 지원

> 예전에 구현 및 사용하던 날짜와 시간(Date) API와 현재 추가된 LocalDate, LocalDateTime, Instant는 서로 호환 된다!

```java
public static void main(String[] args) {
    Date date = new Date();
    Instant instant = date.toInstant();
    Date newDate = Date.from(instant);

    GregorianCalendar gregorianCalendar = new GregorianCalendar();
    LocalDateTime dateTime = gregorianCalendar.toInstant()
            .atZone(ZoneId.systemDefault())
            .toLocalDateTime();
    ZonedDateTime zonedDateTime = ZonedDateTime.from(dateTime);

    GregorianCalendar from = GregorianCalendar.from(zonedDateTime);

    ZoneId zoneId = TimeZone.getTimeZone("PST").toZoneId();
    TimeZone timeZone = TimeZone.getTimeZone(zoneId);
}
```

1. GregorianCalendar와 Date 타입의 인스턴스를 Instant나 ZonedDateTime으로 변환
2. java.util.TimeZone에서 java.time.ZoneId로 상호 변환 가능

## Reference

- [백기선 인프런 강의 : 더 자바, Java8](https://www.inflearn.com/course/the-java-java8/dashboard)
