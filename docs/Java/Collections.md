# 컬렉션(Java Collections Framework)

[![img](https://madplay.github.io/img/post/2018-04-16-java-collection-synchronize-1.jpg)](https://madplay.github.io/img/post/2018-04-16-java-collection-synchronize-1.jpg)

## Map

- 검색할 수 있는 인터페이스
- 순서가 없다.
- 많은 양의 데이터에서 원하는 특정 데이터에 접근(검색)할 때 사용한다.
- 데이터를 삽입할 때 Key와 Value의 형태로 삽입되며, Key를 이용해서 Value를 얻을 수 있다.
- 동일한 데이터를 Key값으로 사용할 수 없다. (단, key값이 다르고 value값이 동일한 것은 가능)

- **HashMap과 HashTable의 공통점과 차이점**
  - 공통점 : 키(Key)와 값(Value)으로 데이터를 관리하며 키를 이용하여 데이터를 추출할 수 있다.
  - 차이점 :  일반적으로 **동기화**(Synchronization)가 필요 없다면 HashMap을, 동기화 보장이 필요하다면 Hashtable을 사용하면된다. HashMap과 Hashtable은 <u>동기화를 보장하느냐 하지 않느냐는 측면 이외에는 차이가 거의 없다</u>.
    - 속도적인 측면에서도 구형이라 할 수 있는 Hashtable은 동기화 처리라는 비용때문에 HashMap에 비해 더 느리다고 한다.
    - 한 자바 관련 서적에 의하면 Vector의 상위호환(?)개념인 ArrayList의 사용을 권장하듯 새로운 버전인 HashMap을 활용하고 동기화가 필요한 시점에서는 Java 5부터 제공하는 ConcurrentHashMap을 사용하는 것이 더 좋은 방법이라 표현한다.



## Collection

- List
  - 순서가 있는 Collection
  - 데이터를 중복해서 포함할 수 있다.
  - 순차적으로 대량의 데이터를 억세스하거나 입력할때 사용한다.
  - **Vector와 ArrayList의 차이점**
    - **Vector는 동기화가 이미 되어 있는 클래스**고 **ArrayList는 동기화처리가 안된 클래스**이다.
    - **Vector는 한 번에 하나의 쓰레드만 접근 가능**하며, **ArrayList는 동시에 여러 쓰레드가 접근 가능**하다. (ArrayList에서 여러 쓰레드가 동시에 엑세스 해야하는 경우 개발자가 명시적으로 동기화코드를 추가하면 된다.)
    - 멀티쓰레드 상황이 아닌 환경에선 ***ArrayList가 더 빠르다***.
- Set
  - 집합적인 개념의 Collection
  - 순서의 의미가 없다.
  - 데이터를 중복해서 포함할 수 없다.
  - 순차적인 접근을 위해 Iterator를 사용한다.



## Collections Framework 선택 과정

1. Map과 Collection 인터페이스 중 선택 1-1. Collection 선택 시 사용 목적에 따라 List와 Set중 선택

2. 사용 목적에 따라 Map, List, Set 각각의 하위 구현체를 선택 

   2-1. Map: HashMap, LinkedHashMap, HashTable, TreeMap

   2-2. List: LinkedList, ArrayList

   2-3. Set: TreeSet, HashSet



## Reference & Additional Resources

* https://github.com/WeareSoft
* https://madplay.github.io/post/java-collection-synchronize
* https://odol87.tistory.com/3 