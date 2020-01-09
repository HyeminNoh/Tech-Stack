# 지네릭스 (Generics)
*written by sohyeon, hyemin 💡*

<br>

## 1. 지네릭이란?

`지네릭`은 다양한 타입의 객체들을 다루는 메서드나 컬렉션 클래스에 컴파일 시의 타입체크를 해주는 기능이다.  
객체의 타입을 컴파일 시에 체크하기 때문에 잘못된 타입이 사용될 수 있는 문제를 컴파일 과정에서 제거할 수 있다.  

### 1-1. 지네릭의 장점  

* 타입 안정성을 제공  
* 타입체크와 형변환을 생략할 수 있으므로 코드가 간결해 짐  

비지네릭 코드는 불필요하게 타입 변환을 하기 때문에 프로그램 성능에 악영향을 미친다.  

#### ex) 예제  

```Java
List list = new ArrayList();

list.add("hello");

String str = (String) list.get(0); // 타입 변환이 필요



List<String> list2 = new ArrayList<>();

list2.add("hello");

String str2 = list.get(0); // 불필요
```

## 2. 제네릭 클래스 선언  

#### ex) Box<T> 클래스  

```Java
/* Box<T>클래스 선언 */

// 지네릭 타입 T를 선언
class Box<T> { // class Box {
  // Object item;
  T item;

  void setItem(T item) { // void setItem(Object item) {
    this.item = item;
  }

  T getItem() { // Object getItem() {
    return item;
  }
}

/* Box<T>클래스 사용 */ 

Box<String> b = new Box<String>(); // T 대신 실제 타입 지정

b.setItem(new Object()); // ERROR: String타입 이외의 타입은 지정불가
b.setItem("ABC"); // OK: String타입만 가능

// String item = (String)b.getItem(); 
String item = b.getItem(); // 형변환 필요없음

/* 호환성 */

Box b2 = new Box(); // OK: T는 Object로 간주된다.
b2.setItem("ABC"); // WARN: unchecked or unsafe operation.
b2.setItem(new Object()); // WARN: unchecked or unsafe operation.
```

* T: 타입 변수(type variable)  
  T가 아닌 다른 것도 사용가능하다. (ex. ArrayList<E>, Map<K,V>)  
  상황에 맞게 의미 있는 문자를 선택해서 사용하는 것이 좋다. (T:type, E:element, K:key, V:value, ...)  
  기호만 다를 뿐 '임의의 참조형 타입'을 의미한다.  

#### ex) Box<String>클래스  

* Box<T>클래스: 어떤 타입이든 한가지 타입을 정해서 넣을 수 있다.  

* Box<String>클래스: String타입만 담을 수 있다.  

```Java
class Box<String> { // 지네릭 타입을 String으로 지정
  String item;
  void setItem(String item) {
    this.item = item;
  }
  String getItem() {
    return item;
  }
}
```
### 2-1. 지네릭스의 제한

* 모든 객체에 동일하게 동작해야 하는 static멤버에는 타입변수 T를 사용할 수 없다.  
    * T는 인스턴스변수로 간주되기 때문이다. static에는 인스턴스변수를 참조할 수 없다.  
* 지네릭 타입의 배열을 (선언은 가능하지만) 생성하는 것은 불가능하다.  
    * new연산자, instacneof연산자는 컴파일 시점에 타입T가 뭔지 정확하게 알아야 하기 때문에 T를 피연산자로 사용할 수 없다.  

    참고: 지네릭 배열을 꼭 생성해야 할 경우 방법  
    new연산자 대신 'Reflection API'의 newInstance()와 같이 동적으로 객체를 생성하는 메서드로 배열 생성  
    Object배열을 생성해서 복사한 다음에 T[]로 형변환  

## 3. 지네릭 클래스의 객체 생성과 사용

#### ex) Box<T> 지네릭 클래스 정의

```Java
class Box<T> {
  ArrayList<T> list = new ArrayList<T>();

  void add(T item) { list.add(item); }
  T get(int i) { return list.get(i); }
  ArrayList<T> getList() { return list; }
  int size() { return list.size(); }
  public String toString() { return list.toString(); }
}
```

#### ex) Box<T> 객체 

```Java
Box<Apple> appleBox = new Box<Apple>(); // OK
// ERROR: 참조변수와 생성자에 대입된 타입이 일치해야 한다.
Box<Apple> appleBox = new Box<Grape>(); 

// 타입 상속관계: Apple이 Fruit의 자손일 경우
// ERROR: 상속관계여도 일치된 타입이여야 한다.
Box<Fruit> appleBox = new Box<Apple>(); 

// 지네릭 클래스 상속관계: FruitBox<T>가 Box<T>의 자손인 경우
Box<Apple> appleBox = new FruitBox<Apple>(); // OK: 다형성

// 추정가능한 타입 생략 가능 (JDK1.7부터)
Box<Apple> appleBox = new Box<Apple>(); // OK
Box<Apple> appleBox = new Box<>(); // JDK1.7부터 OK
```

#### ex) Box<T>.add() 사용

```Java
// 생성시 대입된 타입과 다른 타입의 객체 추가 불가
Box<Apple> appleBox = new Box<Apple>();
appleBox.add(new Apple()); // OK
appleBox.add(new Grape()); // ERROR

// 타입 상속관계: Apple이 Fruit의 자손
Box<Fruit> fruitBox = new Box<Fruit>();
fruitBox.add(new Fruit()); // OK
fruitBox.add(new Apple()); // ERROR: Fruit만 가능
```

## 4. 제한된 지네릭 클래스

타입 문자로 사용할 타입을 명시하면 한 종류의 타입만 지정할 수 있도록 제한할 수 있지만,   
그래도 모든 종류의 타입을 지정할 수 있다는 것에는 변함이 없다.  

지네릭 타입에 `extends`를 사용하면, 특정 타입의 자손들만 대입할 수 있게 제한할 수 있다.  

#### ex) 예제
```Java
class FruitBox<T extends Fruit>{    // Fruit의 자손만 타입으로 지정 가능
    ArrayList<T> list = new ArrayList<T>();
}
FruitBox<Apple> appleBox = new FruitBox<Apple>();  //OK. Apple은 Fruit의 자손
FruitBox<Toy> toyBox = new FruitBox<Toy>();  //에러. Toy는 Fruit의 자손이 아님
```
> 클래스가 아니라 인터페이스를 구현해야 한다는 제약이 필요하다면, `extends`를 사용한다.  
> `implements`를 사용하지 않는 다는 점을 주의하자.  

## 5. 와일드 카드

### 5-1. 와일드 카드 도입 이유

**`static` 메서드에는 타입 매개변수 T를 매개변수에 사용할 수 없다.**  

#### ex) static 메서드 예시
```Java
class Juicer {
  static Juice makeJuice(FruitBox<Fruit> box) {
    String tmp = "";
    for(Fruit f: box.getList()) tmp += f + " ";
    return new Juice(tmp);
  }
}

FruitBox<Fruit> fruitBox = new FruitBox<Fruit>();
FruitBox<Apple> appleBox = new FruitBox<Apple>();

Juicer.makeJuice(fruitBox); // OK
Juicer.makeJuice(appleBox); // ERROR: FruitBox<Apple> -> FruitBox<Fruit> 형변환 안됨
```
지네릭스를 사용하지 않거나, 특정 타입을 지정해서 써야 한다.  
하지만, **특정타입을 지정하면 여러가지 타입을 받을 수가 없다.**  

이로인해 지네릭 타입이 다른 오버로딩을 하게 되는데,  
지네릭 타입이 다른 것만으로는 오버로딩이 성립되지 않으며 메서드 중복 정의로 오류가 발생한다.  

#### ex) 지네릭 타입이 다른 오버로딩 예시
```Java
// 컴파일 에러 발생
class Juicer {
  static Juice makeJuice(FruitBox<Fruit> box) {
    String tmp = "";
    for(Fruit f: box.getList()) tmp += f + " ";
    return new Juice(tmp);
  }

  static Juice makeJuice(FruitBox<Apple> box) {
    String tmp = "";
    for(Fruit f: box.getList()) tmp += f + " ";
    return new Juice(tmp);
  }
}
```
이런 문제를 해결하기 위해 고안된 것이 `와일드 카드`이다.  

### 5-2. 와일드 카드 사용  

### 와일드카드 기호: `?`  

* 와일드카드는 어떠한 타입도 될 수 있다.  
  ?는 Object와 다름없으므로 extends, super로 상한과 하한을 제한 할 수 있다.  

* <? extends T>: 와일드카드의 상한 제한 (T와 그 자손들만 가능)  
* <? super T>: 와일드카드의 하한 제한 (T와 그 조상들만 가능)  
* <?>: 제한없음 (모든 타입 가능), <? extends Object>와 동일  

* 지네릭 클래스와 달리 와일드 카드에는 &을 사용할 수 없다.
  (즉, <? extends T & E>와 같이 쓸수없음)

#### ex) 사용 예시
```Java
class Juicer {
  static Juice makeJuice(FruitBox<? extends Fruit> box) {
    String tmp = "";
    for(Fruit f: box.getList()) tmp += f + " ";
    return new Juice(tmp);
  }
}
```

* <? extends Object>: 모든타입이 가능  

## 6. 지네릭 메서드

`지네릭 메서드`는 메서드의 선언부에 지네릭 타입이 선언된 메서드이다.

#### ex) 지네릭 메서드 예시

```Java
// Collections.sort()
static <T> void sort(List<T> list, Comparator<? super T> c)
```
* 지네릭 클래스의 타입매개변수 T와 지네릭 메서드의 타입매개변수 T는 서로 같은문자를 쓰더라도 별개의 것  
* 지네릭 메서드는 지네릭 클래스가 아닌 클래스에도 정의 가능  
* static 멤버에는 타입 매개변수를 사용할 수 없지만, static 메서드에는 가능  
* 메서드에 선언된 타입은 지역변수와 같은 느낌  
  (메서드 내에서만 사용되므로 static이건 아니건 상관없음)  

## 7. 지네릭 타입의 형변환

#### - 지네릭타입 <-> 원시타입: OK  
#### - 지네릭타입 <-> 지네릭타입: ERROR  
#### - 와일드카드 지네릭타입 <-> 지네릭타입: OK  
#### - 와일드카드 지네릭 타입 <-> 와일드카드 지네릭타입: OK  


