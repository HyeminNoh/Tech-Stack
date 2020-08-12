# 팩토리 메서드 패턴(Factory Method Pattern)
*written by sohyeon, hyemin 💡*
  
<br>
  
## 1. 팩토리 메서드 패턴(Factory Method Pattern)
  
팩토리 메서드 패턴(Factory Method Pattern)`객체 지향 디자인 패턴`이다.  
**Factory method**는 **부모(상위) 클래스에 알려지지 않은 구체 클래스를 생성**하는 패턴이며.  
자식(하위) 클래스가 어떤 객체를 생성할지를 결정하도록 하는 패턴이기도 하다.  
부모(상위) 클래스 코드에 구체 클래스 이름을 감추기 위한 방법으로도 사용한다.  

쉽게 말해, 객체 생성 로직은 Factory라는 클래스로 분리한 후  
객체 인스턴스화를 부모 클래스가 아닌 subclass에 위임하는 패턴이다.  

### 1-1. UML Diagram

<img src="https://miro.medium.com/max/644/1*3KK37laxpxRSRVelQioIqQ.png" height="250px"/>

* Creator
    - abstract factory method를 정의
    - factory method를 호출해 "Product"를 생성

* Concrete Creator
    - factory method를 구현, concrete product instance 중 하나를 반환
    
* Product
    - factory method에 의해 생성되는 product의 base class 혹은 interface

* Concrete Product의 역할
    - Product interface or class 구현
    
## 2. 구현 예시

    <시나리오>
    여러 모양의 도형이 존재할 때 각 도형 객체를 반환 후 도형을 그립니다.

#### Concrete Product
 
```Java
// Shape.java
public interface Shape {
    void draw();
}

// Circle.java
public class Circle implements Shape {
    @Override
    public void draw(){
        System.out.println("Circle draw");
    }
}

// Rectangle.java
public class Rectangle implements Shape {
    @Override
    public void draw(){
        System.out.println("Rectangle draw");
    }
}

// Square.java
public class Square implements Shape {
    @Override
    public void draw(){
        System.out.println("Square draw");
    }
}
```

#### Concrete Creator

```Java
// ShapeFactory.java
public class ShapeFctory {
    // Factory Method -> Product 생성 후 반환
    public Shape getShape(String shapeType) {
        if(shapeType == null) {
            return null;
        }
        if(shapeType.equalsIgnoreCase("CIRCLE")) {
            return new Circle();
        } else if(shapeType.equalsIgnoreCase("RECTANGLE")) {
            return new Rectangle();
        } else if(shapeType.equalsIgnoreCase("SQUARE")) {
            return new Square();
        }
        return null;
    }
}
```

#### Creator

```Java
public class FactoryPatternEx {
    public static void main(String[] args) {
        // 팩토리 클래스 객체 생성
        ShapeFactory shapeFactory = new ShapeFactory();
        
        // 원형 인스턴스를 생성
        Shape circle = shapeFactory.getShape("CIRCLE");
        circle.draw();

        // 삼각형 인스턴스를 생성
        shape rectangle = shapeFactory.getShape("RECTANGLE");
        rectangle.draw();

        // 사각형 인스턴스를 생성
        shape square = shapeFactory.getShape("SQUARE");
        square.draw();
    }
}
```

## 3. 결론

* Factory method pattern은 기존 코드를 수정하지 않고, 클래스를 추가하는 방식으로 새로운 객체 생성을 처리할 수 있다.  
* 새로운 Product가 추가될 때마다 class를 추가하게 되므로, 점점 클래스가 많아진다.  

-> 경우에 맞는 사용이 디자인 패턴의 효율을 극대화 할 수 있는 듯 하다.  

<br>

### Reference & Additional Resources
* [Wiki](https://ko.wikipedia.org/wiki/%ED%8C%A9%ED%86%A0%EB%A6%AC_%EB%A9%94%EC%84%9C%EB%93%9C_%ED%8C%A8%ED%84%B4)
  
* [[Design Pattern] Factory method pattern](https://medium.com/@eyegochild/design-pattern-factory-method-pattern-dc72f35e1076)

* [Java  디자인패턴 - 팩토리 메소드 패턴](https://niceman.tistory.com/143)