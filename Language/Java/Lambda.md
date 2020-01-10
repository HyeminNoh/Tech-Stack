# 람다 표현식 (Lambda Expression)

## 1. 람다식이란?  

람다식은 메서드를 하나의 식(expression)으로 표현한 것.
```  
- 객체 지향 언어보다는 함수 지향 언어에 가깝다.  
- 함수를 간략하면서도 명확한 식으로 표현할 수 있도록 해준다.  
- 메서드를 람다식으로 표현하면 메서드의 이름 및 반환 값이 없어지므로 익명 함수 라고도 한다.  
- 람다식의 형태는 매개 변수를 가진 코드 블록이지만 런타임 시에는 익명 구현 객체를 생성한다.  
```

### 1-1. 람다식 사용

```Java
(매개변수, ...) -> { 실행문 ... }
```
(매개변수, ...)는 오른쪽 중괄호 { } 블록을 실행하기 위해 필요한 값을 제공하는 역할을 한다.  
-> 기호는 매개 변수를 이용해서 중괄호 { } 바디를 실행한다는 뜻으로 해석하면 된다.  

#### ex) 사용 예시  

```Java
interface ExFunctionInterface
{
    public void method();
}

public class ExFunctionInterfaceTest
{
    public static void main(String[] args)
    {
        ExFunctionInterface test = new ExFunctionInterface() {

            public void method() {
                System.out.println("test");
            }
        };

        test.method();
    }
}

// Lambda 적용
public class ExFunctionInterfaceTest
{
    public static void main(String[] args)
    {
        ExFunctionInterface test = () -> System.out.println("test");

        test.method();
    }
}
```
* 반환 값이 있는 메서드의 경우 return 대신 expression 으로 대신할 수 있다.  
  (expression인 경우 ; 를 붙이지 않는다.)  
* 람다식에 선언된 매개변수 타입은 추론이 가능한 경우 생략 가능 (대부분 생략가능)  
* 매개 변수가 하나인 경우 ()를 생략할 수 있다.  
* {} 안 문장이 하나인 경우 생략할 수 있다.  

## 2. 람다식의 장단점

### 2-1. 람다식 장점

1. 코드를 간결하게 만들 수 있다.  

2. 코드가 간결하고 식에 개발자의 의도가 명확히 드러나므로 가독성이 향상된다.  

3. 함수를 만드는 과정없이 한번에 처리할 수 있기에 코딩하는 시간이 줄어든다.  

4. 병렬프로그래밍이 용이하다.  

### 2-2. 람다식 단점

1. 람다를 사용하면서 만드는 무명함수는 재사용이 불가능하다.  

2. 디버깅이 다소 까다롭다.  

3. 람다를 남발하면 코드가 지저분해질 수 있다. (비슷한 함수를 계속 중복생성할 가능성이 높음)  

4. 재귀로 만들경우에는 다소 부적합한면이 있다.  