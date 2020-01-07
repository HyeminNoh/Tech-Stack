# 오버로딩과 오버라이딩 (Overloading and Overriding)

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

## 오버라이딩(Overriding)

