# 오버로딩과 오버라이딩 (Overloading and Overriding)
*written by sohyeon, hyemin 💡*

<br>

## 오버로딩(Overloading)

**한 클래스 내에 같은 이름의 메서드를 여러개 정의하는 것**  

한 클래스 내에 이미 사용하려는 이름과 같은 이름을 가진 메서드가 있더라도  
**매개변수의 개수 또는 타입이 다르면,** 같은 이름을 사용해서 메서드를 정의할 수 있음

`오버로딩된 메서드들은 매개변수에 의해서만 구별될 수 있으므로`  
`반환 타입은 오버로딩을 구현하는데 아무런 영향을 주지 않음`  

#### 오버로딩의 조건

    1. 메서드 이름이 같아야 한다.
    2. 매개변수의 개수 또는 타입이 달라야 한다.

#### ex) 예제
```Java
public class Overloadingtest {
    // test() 호출
    void test(){
        System.out.println("매개변수 없음");
    }
    
    // test에 매개변수로 int형 2개 호출
    void test(int a, int b){
        System.out.println("매개변수 "+ a + "와 " + b);
    }
    
    // test에 매개변수 double형 1개 호출
    void test(double d){
        System.out.println("매개변수 " + d);
    }
}

public class test {
    public static void main(String[] args) {
        // Overloadingtest 객체 생성
        Overloadingtest ob = new Overloadingtest();
        
        // test() 호출
        ob.test();
       
        // test(int a, int b) 호출
        ob.test(10, 20);
       
        // test(double d) 호출
        ob.test(50);
       
        // test(double d) 호출
        ob.test(123.4);
    }
}
```
메서드의 이름은 같지만 매개변수에 따라 각기 다른 결과를 출력하게 됩니다.  

<br>

## 오버라이딩(Overriding)

**조상 클래스로부터 상속받은 메서드의 내용을 변경하는 것**

상속받은 메서드를 그대로 사용하기도 하지만 자손 클래스 자신에 맞게 변경해야하는 경우에 오버라이딩한다.

#### 오버라이딩 조건
```
자손 클래스에서 오버라이딩하는 메서드는 조상 클래스의 메서드와
1. 이름이 같아야 한다.
2. 매개변수가 같아야 한다.
3. 반환타입이 같아야 한다.

단, 조상 클래스의 메서드를 자손 클래스에서 오버라이딩할 때
1. 접근 제어자는 조상 클래스의 메서드보다 좁은 범위로 변경 할 수 없다.
2. 조상 클래스의 메서드보다 많은 수의 예외를 선언할 수 없다.
3. 인스턴스 메서드를 static메서드로 또는 그 반대로 변경할 수 없다.
```

#### ex) 예제
```
class Point {
    int x;
    int y;
    
    String getLocation() {
        return "x : " + x + ", y : " + y;
    }
}

class Point3D extends Point {
    int z;

    String getLocation() {
        return "x : " + x + ", y : " + y + ", z : " + z;
    }
}
```

<br>

## 오버로딩 vs 오버라이딩
```
오버로딩(overloading) : 기존에 없는 새로운 메서드를 정의하는 것(new)
오버라이딩(overriding) : 상속받은 메서드의 내용을 변경하는 것(change, modify)
```

<br>

## Question

<br>

## Reference & Additional Resources
