# 쓰레드(Thread)
*written by sohyeon, hyemin 💡*

<br>

## 1. 프로세스와 쓰레드
프로세스(process)란 `실행 중인 프로그램(program)`이다.  
프로그램을 실행하면 OS로부터 실행에 필요한 자원(메모리)을 할당받아 프로세스가 된다.  
  
쓰레드는 프로세스의 자원을 이용해서 `실제로 작업을 수행하는 것`을 말한다.  
모든 프로세스는 최소한 하나 이상의 쓰레드가 존재한다. 
  
쓰레드가 작업을 수행하는데 개별적인 메모리 공간(호출스택)을 필요로 하기 때문에 프로세스의 메모리 한계에 따라 생성할 수 있는 쓰레드의 수가 결정된다.
  
### 멀티태스킹과 멀티쓰레딩
`멀티태스킹(multi-tasking)` : 여러 개의 프로세스가 동시에 실행될 수 있다.  
`멀티쓰레딩(multi-threading)` : 하나의 프로세스 내에서 여러 쓰레드가 동시에 작업을 수행하는 것이다.  
  
CPU의 코어가 한 번에 단 하나의 작업만 수행할 수 있으므로, 실제로 동시에 처리해야하는 쓰레드의 수는 코어의 개수와 일치한다.  

하지만, 처리해야하는 쓰레드의 수는 언제나 코어의 개수보다 훨씬 많기 때문에 각 코어가 아주 짧은 시간 동안 여러 작읍을 번갈아 가며 수행함으로써 여러 작업들이 모두 동시에 수행되는 것처럼 보이게 한다.  
  
  ### 멀티쓰레딩의 장단점
  ```
멀티쓰레딩의 장점
    - CPU의 사용률을 향상시킨다.
    - 자원을 보다 효율적으로 사용할 수 있다.
    - 사용자에 대한 응답성이 향상된다.
    - 작업이 분리되어 코드가 간결해진다.
    
멀티쓰레딩의 단점
    - 여러 쓰레드가 같은 프로세스 내에서 자원을 공유하면서 작업을 하기 때문에 동기화(synchronization), 교착상태(deadlock) 등을 고려해서 프로그래밍해야한다. 
```
  
여러 사용자에게 서비스를 해주는 서버 프로그램의 경우 멀티쓰레드로 작성하는 것은 필수적이어서 하나의 서버 프로세스가 여러 개의 쓰레드를 생성해서 `쓰레드와 사용자 요청이 일대일로 처리`되도록 프로그래밍해야 한다.  

<br>

## 2. 쓰레드의 구현과 실행
쓰레드를 구현하는 방법은   `Thread클래스를 상속받는 방법`과 `Runnable인터페이스를 구현하는 방법`이 있다.  
  
Thread 클래스를 상속받으면 다른 클래스를 상속 받을 수 없기 때문에, Runnable인터페이스를 구현하는 방법이 일반적이다.  

### (1) Thread클래스를 상속
```
class MyThread extends Thread {
    public void run() { /* 작업 내용 */ }  // Thread클래스의 run()을 오버라이딩
}
```

### (2) Runnable 인터페이스를 구현
```
class MyThread implements Runnable {
    public void run() { /* 작업 내용 */ }  // Runnable 인터페이스의 run()을 구현
                                         // 재사용성(reusability)이 높고 코드의 일관성(consistency)을 유지할 수 있음
}
```

#### ex) 예제 
```
class ThreadEx1 {
    public static void main(String args[]) {
        ThreadEx1_1 t1 = new ThreadEx1_1();  // Thread의 자손 클래스의 인스턴스를 생성 

        Runnable r = new ThreadEx1_2();  // Runnable을 구현한 클래스의 인스턴스를 생성한 다음, 이 인스턴스를 Thread클래스의 생성자의 매개변수로 제공해야 한다. 
        Thread t2 = new Thread(r);  // 생성자 Thread(Runnable target)

        t1.start();
        t2.start();
    }
}

class ThreadEx1_1 extends Thread {
    public void run() {
        for(int i=0; i<5; i++) {
            System.out.println(getName());  // 조상인 Thread의 getName()을 호출    
        }
    }  
}

class ThreadEx1_2 implements Runnable {
    public void run() {
        for(int i=0; i<5; i++) {
            // Thread.currentThread() - 현재 실행중인 Thread를 반환한다.
            System.out.println(Thread.currentThread().getName());
        }
    }
}
```
  
* Thread 클래스를 상속받으면, 자손 클래스에서 조상인 Thread 클래스의 메서드를 직접 호출할 수 있지만, Runnable을 구현하면 `Thread 클래스의 static 메서드인 currentThread( )를 호출`하여 쓰레드에 대한 참조를 얻어 와야만 호출이 가능하다.

### 쓰레드의 실행 - start( )
쓰레드를 생성하고 start( )를 호출해야만 쓰레드가 생성된다.  
  
사실은 start( )가 호출되었다고 해서 바로 실행되는 것이 아니라, 일단 실행대기 상태에 있다가 자신의 차례가 되어야 실행된다.  
실행 대기중인 쓰레드가 하나도 없으면 곧바로 실행상태가 된다.  
  
하나의 쓰레드에 대해 start( )가 한 번만 호출될 수있다. 한 번 실행이 종료된 쓰레드는 다시 실행할 수 없다.
  
<br>

## 3. start( )와 run( )

## 4. 싱글쓰레드와 멀티쓰레드

## 5. 쓰레드의 우선순위

## 6. 쓰레드 그룹(thread group)

## 7. 데몬 쓰레드(daemon thread)

## 8. 쓰레드의 실행제어

## 9. 쓰레드의 동기화

<br>

## Reference & Additional Resources

