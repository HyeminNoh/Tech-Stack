# JVM(Java Virtual Machine)
*written by sohyeon, hyemin 💡*

<br>

## JVM(Java Virtual Machine)
* JVM은 자바를 실행하기 위한 가상 컴퓨터(실제 컴퓨터가 아닌 소프트웨어로 구현한 것)

* JVM은 JAVA와 OS 사이에서 중개자 역할을 수행하여 `JAVA가 OS에 독립적` 이며, 재사용 가능
    * 자바 응용프로그램은 OS가 아닌 JVM과 통신하고, JVM은 자바 응용프로그램으로부터 전달받은 명령을 해당 OS가 이해할 수 있도록 변환하여 전달

* JVM은 `메모리 관리` 와 `Garbage Collection` 을 수행

<br>

## JVM의 구조
<img src="./resources/JVM.png" height="400px" align="center">

### Class Loader(클래스 로더)  
자바 컴파일러를 사용해서 `.java` 파일을 `.class(바이트코드)` 파일로 컴파일함. 이후, Class Loader를 통해 JVM에 `.class` 파일을 로드하고, 링크를 통해 배치하는 작업을 수행함  

### Execution Engine(실행 엔진)  
`.class`파일을 실행시키는 역할. 클래스 로더가 JVM 내의 Runtime Data Area에 `.class(바이트코드)` 를 배치하고, 이를 실행 엔진에 의해 실행됨   

* Interpreter   
바이트 코드를 명령어 단위로 읽어서 실행하는 인터프리터. 한 줄씩 수행하기 때문에 느리다는 단점이 있음
    
* JIT compiler(Just - In - Time)  
JIT 컴파일러는 인터프리터 방식의 단점을 보완하기 위해 도입  
인터프리터 방식으로 실행하다가 적절한 시점에 바이트 코드 전체를 컴파일하여 `네이티브 코드`로 변경하고, 이후에는 네이티브 코드를 직접 실행하는 방식  
단, JIT 컴파일러가 컴파일하는 과정은 바이트 코드를 인터프리팅하는 것보다 훨씬 오래 걸리므로, JIT 컴파일러를 사용하는 JVM은 내부적으로 해당 메서드가 얼마나 자주 수행되는지 확인하여, 일정 정도를 넘을 때에만 컴파일을 수행
    
### GC(Garbage Collector)
GC는 `동적 할당된 메모리 영역(heap)` 중에서 더 이상 사용하지 않는 영역을 탐지하여 `자동으로 해지`하는 기법으로, 프로그래머가 메모리를 따로 관리하지 않아도 됨
    
### Runtime Data Area
자바 프로그램을 수행하기 위해 OS에서 할당 받은 메모리 공간을 의미

* PC Register  
현재 어떤 명령을 실행해야하는 지에 대한 기록을 담당하며, 현재 수행 중인 JVM 명령의 주소를 갖음
    
* JVM stack  
호출된 메서드의 파라미터, 지역 변수, 리턴 값 및 연산 값 등을 임시로 저장하는 영역
    
* Native Method stack  
실제 실행할 수 있는 기계어로 작성된 프로그램을 실행시키는 영역  
JAVA Native Interface를 통해 바이트 코드로 전환하여 저장
    
* Heap  
GC의 대상이 되는 영역. 객체를 동적으로 생성(new 연산자)하게 되면 인스턴스가 Heap 영역의 메모리에 할당  
단, 레퍼런스 변수의 경우, Heap 영역에 인스턴스가 저장되는 것이 아닌 포인터가 저장
    
* Method Area  
    
<br>

## Question
* JVM의 특징을 설명하시오.
* JVM의 구조를 설명하시오.
* 자바 프로그램의 실행 과정을 설명하시오.
* GC에 대해 설명하시오.

<br>

## Reference & Additional Resources
* <https://asfirstalways.tistory.com/158/>
* <https://minwan1.github.io/2018/06/06/2018-06-06-Java,JVM/>
