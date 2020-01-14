# String과 StringBuffer, StringBuilder
*written by sohyeon, hyemin 💡*

<br>

## 1. String 클래스

자바에서 제공하는 문자열을 위한 클래스이다. 문자열을 저장하고 이를 다루는데 필요한 메서드를 제공한다.  

가장 큰 특징은 `변경 불가능(immutable)`한 속성을 가졌다는 것이다.  
한번 생성된 String인스턴스가 갖고 있는 문자열은 읽어 올 수만 있고, 변경할 수는 없다.

#### ex) 문자열 결합 예시 
```Java
String a = "a";
String b = "b";
String a = a+b;
```
위와 같이 문자열을 결합하는 경우, 인스턴스 내의 문자열이 바뀌는 것이 아니라  
새로운 문자열 ("ab")가 담긴 String인스턴스가 생성되는 것이다.  
따라서 문자를 결합할 때 연산 마다 새로운 인스턴스가 생성되어 메모리 공간을 차지하게 되므로 가능한 연산횟수를 줄이는 것이 좋다.  

이처럼 문자열을 다루는 작업이 많이 필요한 경우 `StringBuffer클래스`를 사용하는 것이 좋다.  

## 2. StringBuffer

`String 클래스`는 인스턴스를 생성할 때 지정된 문자열을 변경할 수 없지만 `StringBuffer 클래스`는 변경이 가능하다.  
내부적으로 문자열 편집을 위한 버퍼를 가지고 있으며, `StringBuffer 인스턴스`를 생성할 때 크기를 지정할 수 있다.  

인스턴스를 생성할 때, 적절한 길이의 char형 배열이 생성되고,  
이 배열은 문자열을 저장하고 편집하기 위한 공간으로 사용된다.  

#### ex)StringBuffer 생성자
```Java
public StringBuffer(int length){
    value = new char[length];
    shared = false;
}
public StringBuffer(){
    this(16);
}
public StringBuffer(String str){
    this(str.length()+16);
    append(str)
}
```
StringBuffer 인스턴스에 저장될 문자열의 길이를 고려하여 충분히 여유있는 크기로 지정하는 것이 좋다.  
버퍼의 크기를 지정하지 않고 인스턴스를 생성하면 16개의 문자를 저장할 수 있는 크기의 버퍼를 생성한다.  

String 클래스와 유사한 메서드를 갖고 있으며 추가적으로 문자 추가, 변경, 삭제와 같이 저장된 내용을 변경할 수 있는 메서드도 갖는다.  

## 3. StringBuilder

`StringBuffer`는 멀티쓰레드에 안전하도록 동기화 되어 있고 동기화가 성능을 저하 시킨다.  
멀티쓰레드로 작성된 프로그램이 아닌 경우, 불필요한 동기화는 성능 저하만 유발하게 된다.  

이를 해결하기 위해 `StringBuffer`에서 쓰레드의 동기화만 뺀 `StringBuilder`가 고안된 것이다.  
완전히 똑같은 기능으로 작성되어 있기 떄문에 생성자만 바꾸어 동일하게 사용할 수 있다.  

#### ex) 사용예시
```Java
// StringBuffer
StringBuffer sb = new StringBuffer();
sb.append("abc");

// StringBuilder
StringBuilder sb = new StringBuilder();
sb.append("abc");
```

## 4. 세가지에 대한 비교

### 4-1. String과 StringBuffer

**`String`은 불변성 <-> `StringBuffer`은 가변성**  
**주요한 포인트는 생성 이후 변할 수 있냐 없냐이다.**  

`String`은 new 연산을 통해 생성되면 인스턴스의 메모리 공간이 절대 변하지 않는다.  
그래서 + 연산이나 concat을 이용해서 문자열에 변화를 줘도 새로운 메모리 공간을 만들게 된다.  
이렇게 새로운 문자열이 만들어지면 기존의 문자열은 가비지 콜렉터에 의해 제거되야 하는 단점(언제 제거될지 모름)이 있다.  
따라서 문자열 연산이 많아질 때 계속해서 객체를 만드는 오버헤드가 발생하므로 성능이 떨어질 수 밖에 없는 단점이 있다.  

    대신 String 클래스의 객체는 불변하기 때문에 단순하게 읽어가는 조회연산에서는 타 클래스보다 빠르게 읽을 수 있고  
    불변하기 때문에 멀티쓰레드환경에서 동기화를 신경쓸 필요가 없기도 하다.  

결론적으로 String 클래스는 문자열 연산이 적고 조회가 많을 때 멀티쓰레드 환경에서 사용하면 효율적일 수 있겠지만,
문자열 연산이 많은 경우에는 StringBuffer사용이 더 효율적일 수 있다.

### 4-2. StringBuffer와 StringBuilder

**주요한 포인트는 `동기화 여부`이다.**

`StringBuffer`는 각 메서드별로 Synchronized Keyword가 존재하여, 멀티스레드 환경에서도 동기화를 지원하지만  
`StringBuilder`는 동기화를 보장하지 않는다.  

따라서 멀티스레드 환경이라면 값 동기화 보장을 위해 `StringBuffer`를 사용하고,  
단일스레드 환경이라면 `StringBuilder`를 사용하는 것이 좋다.  

단일 스레드환경에서 StringBuffer를 사용한다고 문제가 되는 것은 아니지만, 동기화 관련 처리로 인해 StringBuilder에 비해 성능이 좋지 않다.

<br>

## Reference & Additional Resources
* Java의 정석 - 도우출판  
* <https://12bme.tistory.com/42>
* <https://jeong-pro.tistory.com/85>
