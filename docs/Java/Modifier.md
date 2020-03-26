# 제어자(modifier)
*written by sohyeon, hyemin 💡*

<br>

## 1. 제어자란?
제어자(modifier)는 클래스, 변수 또는 메서드의 선언부에 함께 사용되어 부가적인 의미를 부여한다.  
```
접근 제어자 : public, protected, default, private
그 외 : static, final, abstract, native, transient, synchronized, volatile, strictfp
```
접근 제어자는 하나의 대상에 대해서 public과 private 등 네 가지 중 하나만 선택해서 사용할 수 있다.  

<br>

## 2. static - 클래스의, 공통적인
인스턴스변수는 하나의 클래스로부터 생성되었더라도 각기 다른 값을 유지하지만, 클래스변수(static멤버변수)는 인스턴스에 관계없이 같은 값을 갖는다.  
그 이유는 `모든 인스턴스가 공유하기 때문`이다.

`static이 사용될 수 있는 곳 - 멤버변수, 메서드, 초기화 블럭`

| 제어자 | 대상 | 의미 |  
| -------------------- | -------------------- | -------------------- |  
| static | 멤버변수 | - 모든 인스턴스에 공통적으로 사용되는 클래스변수가 된다.<br>- 클래스변수는 인스턴스를 생성하지 않고도 사용 가능하다.<br>- 클래스가 메모리에 로드될 때 생성된다. |  
| static | 메서드 | - 인스턴스를 생성하지 않고도 호출이 가능한 static 메서드가 된다.<br>- static메서드 내에서는 인스턴스 멤버들을 직접 사용할 수 없다. | 
* 인스턴스 멤버를 사용하지 않는 메서드는 static을 붙여서 static메서드로 선언할 것
* static 메서드로 하는 것이 인스턴스를 생성하지 않고도 호출이 가능해서 더 편리하고 속도도 더 빠르다.  

#### ex) 예제
```
class StaticTest {
    static int width = 200;          // 클래스 변수 (static변수)
    static int height = 120;         // 클래스 변수 (static변수)

    static {                         // 클래스 초기화 블럭
        // static변수의 복잡한 초기화 수행
    }

    static int max(int a, int b) {   // 클래스 메서드(static메서드)
        return a > b ? a : b;
    }
}
```

<br>

## 3. final - 마지막의, 변경될 수 없는
final은 `마지막의` 또는 `변경될 수 없는`의 의미를 가지고 있다.  

`final이 사용될 수 있는 곳 - 클래스, 메서드, 멤버변수, 지역변수`

| 제어자 | 대상 | 의미 |  
| -------------------- | -------------------- | -------------------- |  
| final | 클래스 | - 변경될 수 없는 클래스, 확장될 수 없는 클래스가 된다.<br>그래서 final로 지정된 클래스는 다른 클래스의 조상이 될 수 없다. |  
| final | 메서드 | - 변경될 수 없는 메서드. final로 지정된 메서드는 오버라이딩을 통해 재정의 될 수 없다. | 
| final | 멤버변수, 지역변수 | - 변수 앞에 final이 붙으면, 값을 변경할 수 없는 상수가 된다. |

#### ex) 예제
```
final class FinalTest {             // 조상이 될 수 없는 클래스
    final int MAX_SIZE = 10;        // 값을 변경할 수 없는 멤버변수(상수)

    final void getMaxSize() {       // 오버라이딩할 수 없는 메서드(변경불가)
        final int LV = MAX_SIZE;    // 값을 변경할 수 없는 지역변수(상수)
        return MAX_SIZE;
    }
}
```

### 생성자를 이용한 final멤버 변수의 초기화
final이 붙은 변수는 상수이므로 일반적으로 선언과 초기화를 동시에 하지만, `인스턴스변수의 경우 생성자에서 초기화 되도록` 할 수 있다.    

클래스 내에 `매개변수를 갖는 생성자를 선언`하여, 인스턴스를 생성할 때 final이 붙은 멤버변수를 초기화하는데 필요한 값을 생성자의 매개변수로부터 제공받는다.

#### ex) 예제
```
class Card {
    final int NUMBER;               // 상수지만 선언과 함께 초기화 하지 않고
    final String KIND;              // 생성자에서 단 한번만 초기화할 수 있다.
    static int width = 100;
    static int height = 250;

    Card(String kind, int num) {
        KIND = kind;
        NUMBER = num;
    }

    Card() {
        this("HEART", 1);
    }
}
```

<br>

## 4. abstract - 추상의, 미완성의
abstract는 `미완성`의 의미를 가지고 있다.  

`abstract가 사용될 수 있는 곳 - 클래스, 메서드`

| 제어자 | 대상 | 의미 |  
| -------------------- | -------------------- | -------------------- |  
| abstract | 클래스 | - 클래스 내에 추상 메서드가 선언되어 있음을 의미한다. |  
| abstract | 메서드 | - 선언부만 작성하고 구현부는 작성하지 않은 추상 메서드임을 알린다. |

#### ex) 예제
```
abstract class AbstractTest {  // 추상클래스(추상메서드를 포함한 클래스)
    abstract void move();      // 추상 메서드(구현부가 없는 메서드)
}
```

이 클래스 자체로는 쓸모가 없지만, `다른 클래스가 이 클래스를 상속`받아서 일부의 원하는 메서드만 오버라이딩해서 된다는 장점이 있다.

<br>

## 5. 접근 제어자(access modifier)

접근제어자는 멤버 또는 클래스에 사용되어, 해당하는 멤버 또는 클래스를 `외부에서 접근하지 못하도록 제한`하는 역할을 한다.

클래스나 멤버변수, 메서드, 생성자에 접근 제어자가 지정되어 있지 않다면, 접근 제어자가  `default`임을 뜻한다. 

```
접근 제어자가 사용될 수 있는 곳 - 클래스, 멤버변수, 메서드, 생성자
private : 같은 클래스 내에서만 접근이 가능하다.
default : 같은 패키지 내에서만 접근이 가능하다.
protected : 같은 패키지 내에서, 그리고 다른 패키지의 자손 클래스에서 접근이 가능하다.
public : 접근 제한이 전혀 없다.
```

<img src="/images/Java/resources/access_modifier.png" height="200px" align="center">

### 대상에 따라 사용할 수 있는 접근 제어자 

<img src="/images/Java/resources/access_modifier1.png" height="200px" align="center">

### 접근 제어자를 이용한 캡슐화
`캡슐화(encapsulation)` : 객체지향개념에서 데이터가 유효한 값을 유지하도록, 또는 비밀번호와 같은 데이터를 외부에서 함부로 변경하지 못하도록 외부로부터의 접근을 제한하는 것
```
접근 제어자를 사용하는 이유
- 외부로부터 데이터를 보호하기 위해서
- 외부에는 불필요한, 내부적으로만 사용되는 부분을 감추기 위해서
```

#### ex) 예제
```
public class Time {  // 메소드를 통한 접근 허용
    private int hour;
    private int minute;
    private int second;  // 접근 제어자를 private으로 하여 외부에서 직접 접근하지 못하도록 한다.

    public int getHour() { return hour; }
    public void setHour(int hour) {
        if(hour < 0 || hour > 23) return;
        this.hour = hour;  // 멤버변수의 값을 읽고 변경할 수 있는 public 메서드를 제공함으로써 간접적으로 멤버변수의 값을 다룰 수 있도록 하는 것이 바람직하다.
    }

    public int getMinute() { return minute; }
    public void setMinute(int minute) {
        if(minute < 0 || minute > 59) return;
        this.minute = minute; 
    }

    public int getSecond() { return second; }
    public void setSecond(int second) {
        if(second < 0 || second > 59) return;
        this.second = second; 
    }
}
```

### 생성자의 접근 제어자
생성자의 접근 제어자를  `private`으로 지정하면, 외부에서 생성자에 접근할 수 없으므로 인스턴스를 생성할 수 없다.  
그래도 클래스 내부에서는 인스턴스를 생성할 수 있다.  

대신 인스턴스를 생성해서 반환해주는 public메서드를 제공함으로써 외부에서 이 클래스의 인스턴스를 사용할 수 있도록 한다.  
이 메서드는 `public인 동시에 static`이어야 한다.  

#### ex) 예제
```
class Singleton {
    ...
    private static Singleton s = new Singleton(); // getInstance()에서 사용될 수 있도록 인스턴스가 미리 생성되어야 하므로 static이어야 한다.
    
    private Singleton() {
        ...
    }
    
    // 인스턴스를 생성하지 않고도 호출할 수 있어야 하므로 static 이어야 한다.
    public static Singleton getInstance() {
        return s;
    }
    ...
}
```

<br>

## 6. 제어자(modifier)의 조합
### 대상에 따라 사용할 수 있는 제어자

<img src="/images/Java/resources/access_modifier2.png" height="200px" align="center">

### 제어자를 조합해서 사용할 때 주의할 사항
```
1. 메서드에 static과 abstract를 함께 사용할 수 없다.
    - static 메서드는 몸통이 있는 메서드에만 사용할 수 있기 때문이다.
2. 클래스는 abstract와 final을 동시에 사용할 수 없다.
    - 클래스에 사용되는 final은 클래스를 확장할 수 없다는 의미이고, abstract는 상속을 통해서 완성되어야 한다는 의미이므로 서로 모순되기 때문이다.
3. abstract메서드는 접근 제어자가 private일 수 없다.
    - abstract메서드는 자손클래스에서 구현해주어야 하는데 접근 제어자가 private이면, 자손 클래스에서 접근할 수 없기 때문이다.
4. 메서드에 private과 final을 같이 사용할 필요는 없다.
    - 접근 제어자가 private인 메서드는 오버라이딩될 수 없기 때문이다.
```

<br>

## Reference & Additional Resources
<https://csw7432.tistory.com/entry/Java-%EC%A0%91%EA%B7%BC%EC%A0%9C%EC%96%B4%EC%9E%90-Access-Modifier/>
