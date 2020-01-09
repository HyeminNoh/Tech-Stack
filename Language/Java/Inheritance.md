# 상속(inheritance)
*written by sohyeon, hyemin 💡*

<br>

## 1.상속의 정의와 장점
상속이란, 기존의 클래스를 재사용하여 새로운 클래스를 작성하는 것이다.  
상속을 통해서 클래스를 작성하면 보다 적은 양의 코드로 새로운 클래스를 작성할 수 있고 코드를 공통적으로 관리할 수 있기 때문에 코드의 추가 및 변경이 매우 용이하다.  

* 조상 클래스 : 상속해주는 클래스 ( 부모(parent)클래스, 상위(super)클래스, 기반(base)클래스 )
* 자손 클래스 : 상속 받는 클래스 ( 자식(child)클래스, 하위(sub)클래스, 파생된(derived)클래스 )

<img src="./resources/inheritance.png" height="400px" align="center">

```
* 생성자와 초기화 블럭은 상속되지 않는다. 멤버만 상속된다.
* 자손 클래스의 멤버 개수는 조상 클래스보다 항상 같거나 많다.
```

<img src="./resources/inheritance1.png" height="400px" align="center">

```
* 클래스 Child와 Child2가 모두 Parent클래스를 상속받고 있다.
* Parent클래스의 자손인 Child클래스와 Child2클래스는 조상의 멤버를 상속받기 때문에, Parent클래스에 새로운 멤버를 추가해주는 것은 Child클래스와 Child2클래스에 새로운 멤버를 추가해주는 것과 같은 효과다.
* 자손 클래스의 인스턴스를 생성하면 조상 클래스의 멤버도 함께 생성되기 때문에 따로 조상 클래스의 인스턴스를 생성하지 않고도 조상 클래스의 멤버들을 사용할 수 있다.
```

<br>

## 2. 클래스간의 관계 - 포함관계
상속이외에도 클래스를 재사용하는 방법으로는 클래스 간에 `포함(Composite)`관계를 맺어주는 것이다.  
클래스 간의 포함관계를 맺어 주는 것은 한 클래스의 멤버변수로 다른 클래스 타입의 참조변수를 선언하는 것을 뜻한다.  

```
class Circle {
    int x;  // 원점의 x좌표
    int y;  // 원점의 y좌표
    int r;  // 반지름(radius)
}

class Point {
    int x;  // 원점의 x좌표
    int y;  // 원점의 y좌표
}
```
Point클래스를 재사용해서 Circle클래스를 작성한다.

```
class Circle {
    Point c = new Point(); // 원점
    int r;
}
```
단위별로 여러 개의 클래스를 작성한 다음, 이 단위 클래스들을 포함관계(멤버변수)로 재사용하면 보다 간결하고 손쉽게 클래스를 작성할 수 있다.

<br>

## 3. 클래스간의 관계 결정하기
클래스를 작성하는데 있어서 상속관계를 맺어 줄 것인지 포함관계를 맺어 줄 것인지 결정하는 것은 때때로 혼돈스러울 수 있다.
```
상속관계 : '~은 ~이다.(is-a)'
포함관계 : '~은 ~을 가지고 있다.(has-a)'
```

<br>

## 4. 단일 상속(single inheritance)

<br>

## 5. Object 클래스 - 모든 클래스의 조상

<br>

## Question

<br>

## Reference & Additional Resources

