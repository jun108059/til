# length & length() & size()

작업을 하다보면 언제 어디서 length 와 length() 그리고 size() 를 쓰는지 까먹는다.

적어두면 기억하지 않을까 싶어서 정리했다.

## length

- arrays(int[], double[], String[])  
- length는 배열의 길이를 알고자 할때 사용된다.

## length()

- String related Object(String, StringBuilder etc)  
- length()는 문자열의 길이를 알고자 할때 사용된다.

## size()

- Collection Object(ArrayList, Set etc)  
- size()는 컬렉션프레임워크 타입의 길이를 알고자 할때 사용된다.

### Test Code

```java
public class lengthSizeTest{

    public static void main(String[] args){

        int[] lengthTest1 = new int[7];
        System.out.println( lengthTest2.length );  // 7

        String lengthTest2 = "lengthSizeTest";
        System.out.println( lengthTest1.length() );  // 14

        ArrayList<Object> sizeTest = new ArrayList<Object>();
        System.out.println( sizeTest .size() );  // 0

    }
}
```
