# JVM(Java Virtual Machine)
*written by sohyeon, hyemin 💡*

<br>

## 1. JVM(Java Virtual Machine)
* JVM은 자바를 실행하기 위한 가상 컴퓨터(실제 컴퓨터가 아닌 소프트웨어로 구현한 것)이다.

* JVM은 JAVA와 OS 사이에서 중개자 역할을 수행하여 `JAVA가 OS에 독립적` 이며, 재사용이 가능하다.
    * 자바 응용프로그램은 OS가 아닌 JVM과 통신하고, JVM은 자바 응용프로그램으로부터 전달받은 명령을 해당 OS가 이해할 수 있도록 변환하여 전달한다.

* JVM은 `메모리 관리` 와 `Garbage Collection` 을 수행한다.

<br>

## 2. JVM의 구조
<img src="./resources/JVM.png" height="400px" align="center">

### Class Loader(클래스 로더)  
자바 컴파일러를 사용해서 `.java` 파일을 `.class(바이트코드)` 파일로 컴파일함. 이후, Class Loader를 통해 JVM에 `.class` 파일을 로드하고, 링크를 통해 배치하는 작업을 수행한다.

### Execution Engine(실행 엔진)  
`.class`파일을 실행시키는 역할. 클래스 로더가 JVM 내의 Runtime Data Area에 `.class(바이트코드)` 를 배치하고, 이를 실행 엔진에 의해 실행된다.

* **Interpreter**  
바이트 코드를 명령어 단위로 읽어서 실행하는 인터프리터. 한 줄씩 수행하기 때문에 느리다는 단점이 있다.
    
* **JIT compiler(Just - In - Time)**  
JIT 컴파일러는 인터프리터 방식의 단점을 보완하기 위해 도입했다.  
인터프리터 방식으로 실행하다가 적절한 시점에 바이트 코드 전체를 컴파일하여 `네이티브 코드`로 변경하고, 이후에는 네이티브 코드를 직접 실행하는 방식이다.  
단, JIT 컴파일러가 컴파일하는 과정은 바이트 코드를 인터프리팅하는 것보다 훨씬 오래 걸리므로, JIT 컴파일러를 사용하는 JVM은 내부적으로 해당 메서드가 얼마나 자주 수행되는지 확인하여, 일정 정도를 넘을 때에만 컴파일을 수행한다.
    
### GC(Garbage Collector)
GC는 `동적 할당된 메모리 영역(heap)` 중에서 더 이상 사용하지 않는 영역을 탐지하여 `자동으로 해지`하는 기법으로, 프로그래머가 메모리를 따로 관리하지 않아도 된다.
    
### Runtime Data Area
자바 프로그램을 수행하기 위해 OS에서 할당 받은 메모리 공간을 의미한다.

* **PC Register**  
JVM은 스택 기반의 방식으로 작동하는데, CPU에 직접 Instuction을 수행하지 않고, 스택에서 Operand(주소)를 뽑아 이를 별도의 메모리 공간(PC Register)에 저장한다.  
따라서, 현재의 어떤 명령을 실행해야할 지에 대한 부분을 기록한다.  
    
* **JVM stack**    
프로그램 실행과정에서 호출된 메서드의 파라미터, 지역 변수, 리턴 값 및 연산 값 등이 임시로 저장되는 영역이다.
    
* **Native Method stack**  
자바 프로그램이 컴파일되어 생성되는 바이트 코드가 아닌 실제 실행할 수 있는 기계어로 작성된 프로그램을 실행시키는 영역이다.    
JAVA Native Interface를 통해 바이트 코드로 전환하여 저장한다.  
    
* **Heap**  
GC의 대상이 되는 영역. 프로그램 실행 중 생성되는 인스턴스(new 연산자)는 모두 Heap 영역에 생성된다.  
즉, 인스턴스변수(instance variable)들이 생성되는 공간이다.  
    
* **Method Area**  
프로그램 실행 중 어떤 클래스가 사용되면, JVM은 해당 클래스의 클래스파일(*.class)을 읽어서 분석하여 클래스에 대한 정보(클래스 데이터)를 이곳에 저장한다.     
이 때, 그 클래스의 클래스변수(class variable)도 Method Area(메서드 영역)에 함께 생성된다.
    
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
* <https://www.holaxprogramming.com/2013/07/16/java-jvm-runtime-data-area/>
