## Java ArrayList 예제
코딩테스트에서 ArrayList가 자주 사용되어서 정리해보려고 한다.

아래 예제는 [java2s](http://www.java2s.com/) 의 예제에서 가져왔고, 주석으로 설명을 추가했다.


### ArrayList add, remove

```java
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
     ArrayList<String> al = new ArrayList<String>();
     
     // 초기 사이즈는 0  
     System.out.println("선언 직후 사이즈 : " + al.size()); 

  
     al.add("A");
     al.add("B");
     al.add("C");
     al.add("D");
     al.add("F");
     al.add(1, "Sniper");
     
     // 추가 후 사이즈 = 6
     System.out.println("문자열 추가 후 사이즈 : " + al.size());        
     /*
      * ArrayList는 add 함수의 파라미터로 (인덱스 번호, 값)을 전달하면 
      * 인덱스 번호에 "값"이 삽입되고 그 뒤 인덱스가 하나씩 밀린다.
      * 출력해서 확인해보면
      */
     
     System.out.println(al.toString());
     
     /*
      * 초기 사이즈 : 0
      * 문자열 추가 후 사이즈 : 6
      * [A, Sniper, B, C, D, F]
      * 
      *  1번 인덱스에 "Sniper"가 추가되고, 기존에 있던 값이 뒤로 밀린 것을 확인할 수 있다.
      *  지금과 같은 연산은 모든 인덱스를 하나씩 밀어내는 연산으로 비효율적이다.
      *  따라서 삽입이 빈번한 형태에선 ArrayList가 좋지 않음
      *  remove도 마찬가지로 특정 인덱스를 삭제 한만큼 그 빈 공간을 채우기
      *  위해 뒤에 있던 데이터들이 앞으로 당겨진다.
      */
  
      al.remove(3); //3번째 인덱스 삭제.D삭제
      System.out.println("al.remove(3) 실행 후 : " + al.toString());
      // al.remove(3) 실행 후 : [A, Sniper, B, D, F]
     
    }

} 
```

### Reference

http://www.java2s.com/
