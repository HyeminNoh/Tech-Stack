# MVC 패턴
*written by sohyeon, hyemin 💡*
  
<br>
  
## 1. MVC 패턴이란?

**MVC**란, **M**odel **V**iew **C**ontroller의 약자로 애플리케이션을 세가지 역할로 구분한 개발 방법론입니다.  

간략하게 역할을 구분하자면 아래와 같습니다.  

<kbd><img src="https://s3.ap-northeast-2.amazonaws.com/opentutorials-user-file/module/327/1262.png"/></kbd>


- **M**odel: 애플리케이션의 데이터, 자료
- **V**iew: 사용자에게 보여지는 부분
- **C**ontroller: Model과 View사이를 이어주는 역할

이렇게 각자의 역할을 분리함으로서 유지 보수를 용이하게 하고 프로그램의 확장성과 유연성을 높일 수 있습니다.   

### 1-1. Web에 적용된 MVC 예시

1. 사용자가 웹사이트에 접속한다. (Uses)
2. `Controller`는 사용자가 요청한 웹페이지를 서비스 하기 위해서 모델을 호출한다. (Manipulates)
3. `Model`은 데이터베이스나 파일과 같은 데이터 소스를 제어한 후에 그 결과를 리턴한다.
4. `Controller`는 `Model`이 리턴한 결과를 View에 반영한다. (Updates)
5. 데이터가 반영된 `VIew`는 사용자에게 보여진다. (Sees)

## 2. 구성

### 2-1. Model

`Model`은 프로그램에 사용되는 데이터를 의미하며  
데이터베이스, 상수, 문자열과 같은 변수들, 비전 프로그램이라면 카메라 정보와 같은 것들이 해당됩니다.  

`Model`에는 `View`나 `Controller`의 정보가 전혀 없고 정보만 반환하거나 설정합니다.  

### 2-2. View

`VIew`는 사용자에게 보여지는 UI적 요소들을 의미합니다.  
사용자가 제어하고 데이터를 확인할 수 있는 영역입니다. 

`VIew`에서는 별도의 데이터를 보관하지 않고 입력받고 출력해주는 모든 데이터는 `Model`을 활용하게 됩니다.

### 2-3. Controller

`Controller`는 `Model`과 `View`를 이어주는 다리 역할을 수행합니다.  
사용자가 `View`에서 어떤 행동을 했을 때 그 내부적인 처리는 `Controller`에서 관리하게 됩니다.  

## 3. 장단점

### 3-1. 장점

- 애플리케이션 확장성 증가
- 애플리케이션 유연성 증가
- 각자의 목적에 맞는 분리된 코드를 통해 중복 최소화

### 3-2. 단점

- `View`와 `Model`의 의존성으로 인해 구조가 복잡해질 수 있다.

    Model은 다수의 View를 가질 수 있고 반대로 Controller를 통해 한 View에 연결되는 Model도 여러개가 될 수  있다.  
    이런 관계는 View와 Model의 의존성을 높이게 된다. 좋은 설계로 의존성을 줄일 수는 있겠지만  
    Controller에 다수의 Model과 View가 연결되는 복잡한 상황이 유발 되는 상황을 피하기는 쉽지않다.
    
    결국, MVC 규모가 비대해지고 복잡해지며 새 기능을 추가할 때마다 의존성을 일일이 해결해야 하는 상황이 오게 된다.  
    이런 형태의 MVC를 MassiveViewController라고 부른다. MVC의 한계를 표현하는 용어이기도 하다.
    
## 4. 결론

물론 MVC가 갖는 명료한 장점도 있지만,  
Controller가 View와 강한 의존성을 가짐으로서 발생하는 한계점을 인지하고  
적절한 상황에 MVC를 적용할 수 있어야 한다.  
또한 MVC로 부터 파생된 다른 패턴들을 활용하는 방안도 고민해 보아야 한다.  

## Reference & Additional Resources

* [MVC 디자인 패턴](https://www.opentutorials.org/course/697/3828)
* [MVC 패턴](https://velog.io/@ljinsk3/Concept-MVC-Pattern)
* [[Design Pattern] MVC(Model-View-Controller) 패턴 이야기 #1](https://luckygg.tistory.com/182)
