# 가바지 컬렉션(Garbage Collection)
*written by sohyeon, hyemin 💡*

<br>

## 1. GC(Garbage Collection)  

### 1-1. 가비지 컬렉션 이란?
앞선 JVM설명에서 언급했듯이 GC는 `동적 할당된 메모리 영역(heap)` 중에서 더 이상 사용하지 않는 영역을 탐지하여 `자동으로 해지`하는 기법이다.

Java에서는 개발자가 프로그램 코드로 메모리를 명시적으로 해제하지 않기 때문에 `가비지 컬렉터(Garbage Collector)`가 더 이상 필요 없는 객체(쓰레기)를 찾아 지우는 작업을 한다. 

### 1-2. GC 동작 원리

GC 작업을 하는 가비지 콜렉터(Garbage Collector)는 다음의 역할을 한다.

1. 메모리 할당

2. 사용 중인 메모리 인식

3. 사용하지 않는 메모리인식

GC를 해도 더이상 사용 가능한 메모리 영역이 없는데 계속 메모리를 할당하려고 하면,  
OutOfMemoryError가 발생하여 WAS가 다운될 수도 있다. 행(Hang) 즉, 서버가 요청을 처리 못하고 있는 상태가 된다.  

JVM의 메모리는 크게 클래스 영역, 자바 스택, 힙, 네이티브 메소드 스택의 4개 영역으로 나뉘는데  
`가비지 콜렉터`에서는 `힙 메모리`를 다루게 된다.  
즉, 자바콜렉터가 인식하고 할당하는 자바 메모리 영역은 힙 영역인 것이다.  


## 2. 가비지 컬렉터(Garbage Collector)

### 2-1. 전제 조건  

가비지 컬렉터는 두 가지 전제 조건 아래에서 만들어 졌다.  

- 대부분의 객체는 금방 접근 불가능 상태(unreachable)가 된다.  
- 오래된 객체에서 젊은 객체로의 참조는 아주 적게 존재한다.  

이러한 전제조건(가설)을 'weak generational hypothesis'라 한다.  
이 가설의 장점을 최대한 살리기 위해서 HotSpot VM에서는 `Young 영역`과 `Old 영역`으로 물리적인 공간을 나누었다.  

<div style="text-align:center;border=1px;"><img src="https://t1.daumcdn.net/cfile/tistory/22296F3C58FF0CA120"/></div>

* Young 영역(Yong Generation 영역)  
새롭게 생성한 객체의 대부분이 여기에 위치한다. 대부분의 객체가 금방 접근 불가능 상태가 되기 때문에 매우 많은 객체가 Young 영역에 생성되었다가 사라진다. 이 영역에서 객체가 사라질때 Minor GC가 발생한다고 말한다.  

* Old 영역(Old Generation 영역)  
접근 불가능 상태로 되지 않아 Young 영역에서 살아남은 객체가 여기로 복사된다. 대부분 Young 영역보다 크게 할당하며, 크기가 큰 만큼 Young 영역보다 GC는 적게 발생한다. 이 영역에서 객체가 사라질 때 Major GC(혹은 Full GC)가 발생한다고 말한다.  

### 2-2. 데이터 흐름  

<div style="text-align:center;border=1px;"><img src="https://d2.naver.com/content/images/2015/06/helloworld-1329-1.png"/></div>

* Permanent Generation 영역(이하 Perm 영역, Method Area)  
객체나 억류(intern)된 문자열 정보를 저장하는 곳이며, Old 영역에서 살아남은 객체가 영원히 남아 있는 곳은 아니다.  
이 영역에서 GC가 발생할 수도 있는데, 여기서 GC가 발생해도 Major GC의 횟수에 포함된다.  

* Old 영역에 있는 객체가 Young 영역의 객체를 참조하는 경우  
Old 영역에는 512바이트의 덩어리(chunk)로 되어 있는 `카드 테이블(card table)`이 존재한다.  
카드 테이블에는 Old 영역에 있는 객체가 Young 영역의 객체를 참조할 때마다 정보가 표시된다.  
Young 영역의 GC를 실행할 때에는 Old 영역에 있는 모든 객체의 참조를 확인하지 않고,  
이 카드 테이블만 뒤져서 GC 대상인지 식별한다.  

<div style="text-align:center;border=1px;"><img src="https://d2.naver.com/content/images/2015/06/helloworld-1329-2.png"/></div>

카드 테이블은 write barrier를 사용하여 관리한다. write barrier는 Minor GC를 빠르게 할 수 있도록 하는 장치이다.  write barrirer때문에 약간의 오버헤드는 발생하지만 전반적인 GC 시간은 줄어들게 된다.  

## 3. Young 영역 구성  

Young 영역은 객체가 제일 먼저 생성되는 부분으로 3개의 영역으로 나뉜다.  

* Eden 영역  
* Survivor 영역(2개)

Survivor 영역이 2개이기 때문에 총 3개의 영역으로 나뉘는 것이다.  
각 영역의 처리 절차를 순서에 따라서 기술하면 다음과 같다.  

1. 새로 생성한 대부분의 객체는 Eden 영역에 위치한다.  

2. Eden 영역에서 GC가 한 번 발생한 후 살아남은 객체는 Survivor 영역 중 하나로 이동된다.  

3. Eden 영역에서 GC가 발생하면 이미 살아남은 객체가 존재하는 Survivor 영역으로 객체가 계속 쌓인다.  

4. 하나의 Survivor 영역이 가득 차게 되면 그 중에서 살아남은 객체를 다른 Survivor 영역으로 이동한다.  
그리고 가득 찬 Survivor 영역은 아무 데이터도 없는 상태로 된다.  

5. 이 과정을 반복하다가 계속해서 살아남아 있는 객체는 Old 영역으로 이동하게 된다.  

6. 이 절차를 확인해 보면 알겠지만 Survivor 영역 중 하나는 반드시 비어 있는 상태로 남아 있어야 한다.  
만약 두 Survivor 영역에 모두 데이터가 존재하거나, 두 영역 모두 사용량이 0이라면  
여러분의 시스템은 정상적인 상황이 아니라고 생각하면 된다.

이렇게 Minor GC를 통해서 Old 영역까지 데이터가 쌓인 것을 간단히 나타내면 다음과 같다.  

<div style="text-align:center;border=1px;"><img src="https://d2.naver.com/content/images/2015/06/helloworld-1329-3.png"/></div>

## 4. Old 영역에 대한 GC  

Old 영역은 기본적으로 데이터가 가득 차면 GC를 실행한다.  
GC 방식에 따라서 처리 절차가 달라지므로, 어떤 GC 방식이 있는지 살펴보면 이해가 쉬울 것이다.  
GC 방식은 JDK 7을 기준으로 5가지 방식이 있다.

* Serial GC
* Parallel GC
* Parallel Old GC(Parallel Compacting GC)
* Concurrent Mark & Sweep GC(이하 CMS)
* G1(Garbage First) GC

이 중에서 운영 서버에서 절대 사용하면 안 되는 방식이 Serial GC다.  
Serial GC는 데스크톱의 CPU 코어가 하나만 있을 때 사용하기 위해서 만든 방식이다.  
Serial GC를 사용하면 애플리케이션의 성능이 많이 떨어진다.  

### 4-1. Serial GC (-XX:+UseSerialGC)

Old 영역의 GC는 mark-sweep-compact이라는 알고리즘을 사용한다.  
이 알고리즘의 첫 단계는 Old 영역에 살아 있는 객체를 식별(Mark)하는 것이다.  
그 다음에는 힙(heap)의 앞 부분부터 확인하여 살아 있는 것만 남긴다(Sweep).  
마지막 단계에서는 각 객체들이 연속되게 쌓이도록 힙의 가장 앞 부분부터 채워서  
객체가 존재하는 부분과 객체가 없는 부분으로 나눈다(Compaction).

Serial GC는 적은 메모리와 CPU 코어 개수가 적을 때 적합한 방식이다.

### 4-2. Parallel GC (-XX:+UseParallelGC)

Parallel GC는 Serial GC와 기본적인 알고리즘은 같지다.  
그러나 Serial GC는 GC를 처리하는 스레드가 하나인 것에 비해, Parallel GC는 GC를 처리하는 쓰레드가 여러 개이다.  
그렇기 때문에 Serial GC보다 빠른게 객체를 처리할 수 있다.  
Parallel GC는 메모리가 충분하고 코어의 개수가 많을 때 유리하다.  
Parallel GC는 Throughput GC라고도 부른다.

<div style="text-align:center;"><img src="https://d2.naver.com/content/images/2015/06/helloworld-1329-4.png" /><p>Serial GC와 Parallel GC 비교</p></div>

### 4-3. Parallel Old GC(-XX:+UseParallelOldGC)
Parallel Old GC는 JDK 5 update 6부터 제공한 GC 방식이다.  
앞서 설명한 Parallel GC와 비교하여 Old 영역의 GC 알고리즘만 다르다.  
이 방식은 Mark-Summary-Compaction 단계를 거친다.  
Summary 단계는 앞서 GC를 수행한 영역에 대해서 별도로 살아 있는 객체를 식별한다는 점에서  
Mark-Sweep-Compaction 알고리즘의 Sweep 단계와 다르며, 약간 더 복잡한 단계를 거친다.

### 4-4. CMS GC (-XX:+UseConcMarkSweepGC)

<div style="text-align:center;"><img src="https://d2.naver.com/content/images/2015/06/helloworld-1329-5.png" /><p>Serial GC와 CMS GC 비교</p></div>

CMS GC는 지금까지 설명한 GC 방식보다 더 복잡하다.  
초기 Initial Mark 단계에서는 클래스 로더에서 가장 가까운 객체 중 살아 있는 객체만 찾는 것으로 끝낸다.  
따라서, 멈추는 시간은 매우 짧다. 그리고 Concurrent Mark 단계에서는 방금 살아있다고 확인한 객체에서 참조하고 있는 객체들을 따라가면서 확인한다. 이 단계의 특징은 다른 스레드가 실행 중인 상태에서 동시에 진행된다는 것이다.

그 다음 Remark 단계에서는 Concurrent Mark 단계에서 새로 추가되거나 참조가 끊긴 객체를 확인한다.  
마지막으로 Concurrent Sweep 단계에서는 쓰레기를 정리하는 작업을 실행한다.  
이 작업도 다른 스레드가 실행되고 있는 상황에서 진행한다.  

이러한 단계로 진행되는 GC 방식이기 때문에 stop-the-world 시간이 매우 짧다.  
모든 애플리케이션의 응답 속도가 매우 중요할 때 CMS GC를 사용하며, Low Latency GC라고도 부른다.  

그런데 CMS GC는 stop-the-world 시간이 짧다는 장점에 반해 다음과 같은 단점이 존재한다.

- 다른 GC 방식보다 메모리와 CPU를 더 많이 사용한다.
- Compaction 단계가 기본적으로 제공되지 않는다.

따라서, CMS GC를 사용할 때에는 신중히 검토한 후에 사용해야 한다.  
그리고 조각난 메모리가 많아 Compaction 작업을 실행하면 다른 GC 방식의 stop-the-world 시간보다  
stop-the-world 시간이 더 길기 때문에 Compaction 작업이 얼마나 자주, 오랫동안 수행되는지 확인해야 한다.  

### 4-5. G1 GC

<div style="text-align:center; height: 300px;"><img src="https://d2.naver.com/content/images/2015/06/helloworld-1329-6.png"/></div>
  
다음 그림에서 보다시피, G1 GC는 바둑판의 각 영역에 객체를 할당하고 GC를 실행한다.  
그러다가, 해당 영역이 꽉 차면 다른 영역에서 객체를 할당하고 GC를 실행한다.  
즉, 지금까지 설명한 Young의 세가지 영역에서 데이터가 Old 영역으로 이동하는 단계가 사라진 GC 방식이라고 이해하면 된다.  
G1 GC는 CMS GC를 대체하기 위해서 만들어 졌다. G1 GC의 가장 큰 장점은 성능이다. 지금까지 설명한 어떤 GC 방식보다도 빠르다.  

<br>

## Reference & Additional Resources
* Java의 정석 - 도우출판  
* <https://d2.naver.com/helloworld/1329>  
* <https://12bme.tistory.com/57>  
