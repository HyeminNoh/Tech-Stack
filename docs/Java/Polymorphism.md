# 다형성(polymorphism)
*written by sohyeon, hyemin 💡*

<br>

## 1. 다형성이란
객체지향개념에서 다형성이란 `여러 가지 형태를 가질 수 있는 능력`을 의미한다.  

자바에서 조상클래스 타입의 참조변수로 자손클래스의 인스턴스를 참조할 수 있도록 하였다.  

```
CaptionTV c = new CaptionTV();
TV t = new CaptionTV();
```
CaptionTV 인스턴스 2개를 생성하고, 참조변수 c와 t가 생성된 인스턴스를 하나씩 참조하도록 한다.  

실제 인스턴스가 CaptionTV 타입이라 할지라도, 참조변수 t로는 CaptionTV 인스턴스의 모든 멤버를 사용할 수 없다.  
  
<img src="/images/Java/resources/polymorphism.jpeg" height="200px" align="center">
  
`둘 다 같은 타입의 인스턴스지만 참조변수의 타입에 따라 사용할 수 있는 멤버의 개수가 달라진다.`

##### 이처럼 조상타입의 참조변수로 자손타입의 인스턴스를 참조할 수 있지만, 자손타입의 참조변수로 조상타입의 인스턴스를 참조할 수 없다. 

<br>

## 2. 참조변수의 형변환
기본형 변수와 같이 참조변수도 형변환이 가능하다. 단, `서로 상속관계에 있는 클래스`사이에서만 가능하다. 

```
자손타입 -> 조상타입(Up-casting) : 형변환 생략가능.   // 자손타입의 참조변수를 조상타입의 참조변수로 변환하는 것
자손타입 <- 조상타입(Down-casting) : 형변환 생략불가  // 조상타입의 참조변수를 자손타입의 참조변수로 변환하는 것
```
* 형변환은 `참조변수의 타입을 변환`하는 것이지 `인스턴스를 변환`하는 것은 아니기 때문에 `참조변수의 형변환은 인스턴스에 아무런 영향을 미치지 않는다.`   

* 단지 참조변수의 형변환을 통해서, 참조하고 있는 인스턴스에서 사용할 수 있는 멤버의 범위(개수)를 조절하는 것이다.  

#### ex) 예제
```
class CastingTest1 {
    public static void main(String args[]) {
        Car car = null;                    // Car타입의 참조변수 car를 선언하고 null로 초기화한다.
        FireEngine fe = new FireEngine();  // FireEngine 인스턴스를 생성하고 FireEngine 타입의 참조변수가 참조하도록 한다.
        FireEngine fe2 = null;

        fe.water();
        car = fe;                          // car = (Car)fe;에서 형변환이 생략된 형태다. fe가 참조하고 있는 인스턴스의 주소가 car에 저장된다. 
        fe2 = (FireEngine)car;             // 자손타입 <- 조상타입, car에는 FireEngine인스턴스의 주소가 저장되어 있으므로 fe2에도 FireEngine인스턴스의 주소가 저장된다. car와는 달리, fe2는 FireEngine타입이므로 FireEngine인스턴스의 모든 멤버들을 사용할 수 있다.
        fe2.water();
    }
}

class Car {
    String color;
    int door;

    void drive() {
        System.out.println("drive, Brrrr~");    
    }
    void stop() {
        System.out.println("stop!!!");
    }
}

class FireEngine extends Car {
    void water() {
        System.out.println("water!!!");
    }
}
```

#### 실행결과
```
water!!!
water!!!
```

#### ex) 예제
```
class CastingTest2 {
    public static void main(String args[]) {
        Car car = new Car();
        Car car2 = null;
        FireEngine fe = null;
    
        car.drive();
        fe = (FireEngine) car;  // 컴파일은 가능하지만 실행 시 에러가 발생한다.
        fe.drive();
        car2 = fe;
        car2.drive();
    }
}
```

#### 실행결과
```
drive, Brrrr~
java.lang.ClassCastException: Car
at CastingTest2.main(CastingTest2.java:8)
```

```
서로 상속관계에 있는 타입간의 형변환은 양방향으로 자유롭게 수행될 수 있으나, 참조변수가 가리키는 인스턴스의 자손타입으로 형변환은 허용되지 않는다.
그래서 참조변수가 가리키는 인스턴스의 타입이 무엇인지 확인하는 것이 중요하다.
```

## Question

<br>

## Reference & Additional Resources

