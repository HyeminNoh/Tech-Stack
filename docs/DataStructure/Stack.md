# 스택 (Stack)
*written by sohyeon, hyemin 💡*

<br>

## 1. 스택이란?

`스택`은 데이터를 일시적으로 저장하기 위한 자료구조이다.  
입출력 순서는 가장 나중에 넣은 데이터를 가장 먼저 꺼내는 `후입선출`의 순서를 따른다.  

<img src="./resources/Stack/stack.PNG" width="400px">

    자바 프로그램에서 메서드를 호출하고 실행할 때 프로그램 내부에서 스택을 사용한다.  

## 2. 스택 만들기

int형 자료를 저장하는 스택을 만드는 예시이다.  

### 2-1. 스택 본체

스택 본체의 배열이다.
인덱스가 0인 요소가 스택의 `bottom`이다.  
가장 먼저 `push`된 데이터를 저장하는 곳은 `stk[0]`이다.  

```Java
class IntStack{
    int max;    // 스택 용량
    int ptr;    // 스택 포인터
    int[] stk;  // 스택의 본체
}
```

<img src="./resources/Stack/stack_ex.PNG" width="500px">

* max : 스택의 용량, 스택에 쌓을 수 있는 최대 데이터 수를 나타내는 필드

* ptr : 스택에 쌓여 있는 데이터 수를 나타내는 필드, 스택 포인터

### 2-2. 생성자

```Java
public class IntStack{
    private int max;
    private int ptr;
    private int[] stk;

    // 실행 시 예외: 스택이 비어 있음
    public class EmptyIntStackException extends RuntimeException{
        public EmptyIntStackException(){}
    }
    // 실행 시 예외: 스택이 가득 참
    public class OverflowIntStackException extends RuntimeException{
        public OverflowIntStackException(){}
    }

    // 생성자
    public IntStack(int capacity){
        ptr = 0;
        max = capacity;
        try{
            stk = new int[max];
        }catch(OutOfMemoryError e){
            max = 0;
        }
    }
}
```

생성 시 스택은 비어 있으므로 스택 포인터 ptr값을 0으로 한다.  
매개변수 capacity로 전달받은 값을 스택 용량을 나타내는 max에 복사하고  
요솟수가 max인 배열 stk의 본체를 생성한다.  

### 2-3. 메서드

### 1) push

스택이 가득차서 푸시할 수 없는 경우 예외 `OverflowIntStackException`을 throw한다.  
전달받은 데이터를 넣을 수 있으면 `stk[ptr]`에 저장하고, 스택 포인터를 증가 시켜준다.  
메서드의 반환값은 push한 값이다.  

```Java
public int push(int x) throws OverflowIntStackException{
    if(ptr>=max)
        throw enw OverflowIntStackException();
    return stk[ptr++] = x;
}
```

### 2) pop

스택의 꼭대기 값을 제거하고 그 값을 반환한다.  
스택이 비어 있을 경우 예외 `EmptyIntStackException`을 throw한다.  

```Java
public int pop() throws EmptyIntStackException{
    if(ptr<=0)
        throw new EmptyIntStackException();
    return stk[--ptr];
}
```

### 3) peek

스택의 꼭대기에 있는 값을 보는 메서드이다.  
스택이 비어 있을 경우 예외 `EmptyIntStackException`을 throw한다.  
데이터의 입력과 출입이 없으므로 스택 포인터는 변화하지 않는다.  

```Java
public int peek() throws EmptyIntStackException{
    if(ptr<=0)
        throw enw EmptyIntStackException();
    return stk[ptr - 1];
}
```

### 4) indexOf

스택 본체의 배열 stk에 x와 같은 값의 데이터가 포함되어 있는지,  
포함되어 있다면 배열의 어디에 들어 있는지를 조사하는 메서드이다.  

꼭대기 쪽에서 바닥 쪽으로 선형 검색을 수행한다.  
검색에 성공하면 찾아낸 요소의 인덱스를 반환, 실패하면 -1을 반환한다.  

```Java
public int indexOf(int x){
    for(int i=ptr-1; i>=0; i--){
        if(stk[i] == x)
            return i
    }
    return -1
}
```

### 5) dump

스택에 쌓여 있는 모든 데이터를 바닥에서 꼭대기 순으로 표시하는 메서드

```Java
public void dump(){
    if(ptr<=0)
        System.out.println("스택이 비어 있습니다.");
    else{
        for(int i=0; i<ptr; i++)
            System.out.println(skt[i]+" ");
        System.out.println();
    }
}
```

### 6) 그 외

* clear : 스택의 모든 데이터를 삭제하는 메서드

* capacity : 용량을 확인하는 메서드

* size : 현재 스택에 쌓여있는 데이터 수를 반환하는 메서드

* isEmpty : 스택이 비어 있는지 검사하는 메서드

* isFull : 스택이 가득 찼는지 검사하는 메서드

```Java
public void clear(){
    ptr=0;
}

public int capacity(){
    return max;
}

public int size(){
    return ptr;
}

public boolean isEmpty(){
    return ptr<=0;
}

public boolean isFull(){
    return ptr >= max;
}
```

