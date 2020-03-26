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
* Car클래스와 SportsCar클래스는 `SportsCar는 Car이다.` (상속관계)
* Card클래스와 Deck클래스는 `Deck은 Card를 가지고 있다.` (포함관계)

#### ex) 포함관계 예제
```
class DeckTest {
    public static void main(String args[]) {
        Deck d = new Deck();     // 카드 한 벌을 만든다.
        Card c = d.pick(0);      // 섞기 전에 제일 위의 카드를 뽑는다. cardArr[0]에 저장된 Card객체의 주소가 참조변수 c에 저장
        System.out.println(c);   // System.out.println(c.toString());과 같다.
        
        d.shuffle();             // 카드를 섞는다.
        c = d.pick(0);           // 섞은 후에 제일 위의 카드를 뽑는다.
        System.out.println(c); 
    }
}

class Deck {
    final int CARD_NUM = 52;     // 카드의 개수
    Card cardArr[] = new Card[CARD_NUM];  // Card객체 배열을 포함
    
    Deck() {  // Deck의 카드를 초기화한다.
        int i = 0;
        
        for(int k=Card.KIND_MAX; k>0; k--)      
            for(int n=0; n<Card.NUM_MAX; n++)
                cardArr[i++] = new Card(k, n+1);   
    }
    
    Card pick(int index) {       // 지정된 위치에 있는 카드 하나를 꺼내서 반환
        return cardArr[index];
    }
    
    Card pick() {                // Deck에서 카드 하나를 선택한다.
        int index = (int)(Math.random() * CARD_NUM);
        return pick(intdex);
    }
    
    void shuffle() {             // 카드의 순서를 섞는다.
        for(int i=0; i < cardArr.length; i++) {
            int r = (int)(Math.random() * CARD_NUM);
    
            Card temp = cardArr[i];
            cardArr[i] = cardArr[r];
            cardArr[r] = temp;
        }
    }
}

class Card {
    static final int KIND_MAX = 4;  // 카드 무늬의 수
    static final int NUM_MAX = 13;  // 무늬별 카드 수

    static final int SPACE = 4;
    static final int DIAMOND = 3;
    static final int HEART = 2;
    static final int CLOVER = 1;
    int kind;
    int number;
    
    Card() {
        this(SPACE, 1);
    }
    
    Card(int kind, int number) {
        this.kind = kind;
        this.number = number;
    }
    
    public String toString() {  // toString()은 인스턴스의 정보를 문자열로 반환할 목적으로 정의된 것
        String[] kinds = {"", "CLOVER", "HEART", "DIAMOND", "SPACE"};
        String numbers = "0123456789XJQK";
        
        return "kind : " + kinds[this.kind] + ", number : " + numbers.charAt(this.number);
    }
}
```
* toString( )은 모든 클래스의 조상인 Object클래스에 정의된 것으로, 어떤 종류의 객체에 대해서도 toString( ) 호출하는 것이 가능하다.
<br>

## 4. 단일 상속(single inheritance)
* `자바`에서는 `단일상속`만을 허용한다. 
다중상속을 허용하면 여러 클래스로부터 상속받을 수 있기 때문에 복합적인 기능을 가진 클래스를 쉽게 작성할 수 있다는 장점이 있지만, 서로 다른 클래스로부터 상속받은 멤버간의 이름이 같은 경우 구별할 수 있는 방법이 없다는 단점을 가지고 있다.  

<br>

## 5. Object 클래스 - 모든 클래스의 조상
`Object클래스`는 모든 클래스 상속계층도의 최상위에 있는 조상클래스  
다른 클래스로부터 상속을 받는다고 하더라도 상속계층도를 따라 조상클래스, 조상클래스의 조상클래스를 찾아 올라가다 보면 결국 마지막 최상위 조상은 Object클래스일 것이다.  

<br>

## Question

<br>

## Reference & Additional Resources

