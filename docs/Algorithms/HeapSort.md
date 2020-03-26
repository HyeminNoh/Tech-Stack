# 힙 정렬 (Heap Sort)
*written by sohyeon, hyemin 💡*

<br>

## 1. 힙(Heap)이란?

`힙(Heap)`은 여러 개의 값들 중에서 최댓값이나 최솟값을 빠르게 찾아내도록 만들어진 자료 구조이다.  
  
즉. `힙(Heap)`은 부모 노드의 키 값이 자식 노드의 키 값보다 항상 큰(작은) 완전 이진 트리를 말한다.

### 최대 힙(Max Heap)
부모 노드의 키 값이 자식 노드의 키 값보다 크거나 같은 완전 이진 트리를 말한다.  

<img src="/images/Algorithms/resources/MaxHeap.png" height="300px">

### 최소 힙(Min Heap)
부모 노드의 키 값이 자식 노드의 키 값보다 작거나 같은 완전 이진 트리를 말한다.  

<img src="/images/Algorithms/resources/MinHeap.png" height="300px">

### 힙의 요소를 배열에 저장하는 과정

<img src="/images/Algorithms/resources/MaxHeap.png" height="300px">

`  9 => 7 => 6 => 5 => 4 => 3 => 2 => 2 => 1=> 3 ` 와 같이 인덱스의 값을 1씩 늘리면서 배열의 각 요소에 힙의 요소를 대입한다.  

#### 부모와 자식의 인덱스 관계
```
1. 부모는 a[(i-1)/2]
2. 왼쪽 자식은 a[i*2+1]
3. 오른쪽 자식은 a[i*2+2]
```
<br>

## 2. 힙 정렬이란?
`힙 정렬(Heap Sort)`은 `가장 큰(작은) 값이 루트에 위치`하는 특징을 이용하는 정렬 알고리즘이다. 

힙 정렬은 `선택 정렬을 응용`한 알고리즘이며 힙에서 가장 큰(작은) 값인 루트를 꺼내고 남은 요소에서 다시 가장 큰(작은) 값을 구해야 한다.  
따라서 루트를 꺼내고 남은 요소로 만든 트리도 힙의 형태를 유지할 수 있도록 재구성해야 한다.  

<br>

## 3. 동작 방식
### 루트를 없애고 힙 상태 유지하기
```
1. 루트를 꺼낸다.
2. 마지막 요소를 루트로 이동한다.
3. 자기보다 큰 값을 가지는 자식 요소와 자리를 바꾸며 아래쪽으로 내려가는 작업을 반복한다. 이때 자식의 값이 작거나 잎에 다다르면 작업이 종료된다.
```

### 힙 정렬의 과정
<img src="/images/Algorithms/resources/heapsort_1.png" height="300px">

<img src="/images/Algorithms/resources/heapsort_2.png" height="300px">

<img src="/images/Algorithms/resources/heapsort_3.png" height="300px">

<img src="/images/Algorithms/resources/heapsort_4.png" height="300px">

<img src="/images/Algorithms/resources/heapsort_5.png" height="300px">

```
1. 힙의 루트(a[0])에 있는 가장 큰 값을 꺼내 배열 마지막 요소(a[9])와 바꾼다. 
2. 가장 큰 값을 a[9]로 옮기면 a[9]는 정렬을 마치게 된다. 앞에서 살펴본 순서대로 a[0]~a[8]의 요소를 힙으로 만든다. 그 결과 두 번째로 큰 요소인 9가 루트에 위치하게 된다. 힙의 루트 a[0]에 있는 가장 큰 값인 9를 꺼내 아직 정렬하지 않은 부분의 마지막 요소인 a[8]과 바꾼다.
3. 두 번째로 큰 값을 a[8]로 옮기면 a[8]~a[9]는 정렬을 마치게 된다. 그런 다음 a[0]~a[7]의 요소를 힙으로 만든다. 그 결과 세 번째로 큰 요소인 8이 루트에 위치하게 된다. 힙의 루트 a[0]에 있는 가장 큰 값인 8을 꺼내 아직 정렬하지 않은 부분의 마지막 요소인 a[7]과 바꾼다.
```

* 이 과정을 적용하기 전에 배열을 힙 상태로 만들어야 한다.  또한, 정렬을 마치게 된다면, 정렬하지 않은 부분의 요소를 힙으로 만들어야한다.  

<br>

## 4. 특징

### 1) 장점

- 시간 복잡도가 좋은 편이다.  
- 힙 정렬이 유용할 때는 전체 자료를 정렬하는 것이 아니라 `가장 큰(작은) 값 일부만 필요할 때`이다.  

<br>

## 5. 시간복잡도

- 힙 트리의 전체 높이가 거의 `log2(n)`(완전이진트리)이므로 하나의 요소를 힙에 삽입하거나 삭제할 때 힙을 재정비하는 시간 `log2(n)`만큼 소요된다.  
- 요소의 개수가 n개이므로 전체적으로 `O(nlog2(n))`의 시간이 걸린다. 

```
T(n) = O(nlog2(n))
```

<br>

## 6. 힙 정렬 Java 코드
#### ex) 힙 정렬 예제 
```
import java.util.Scanner;

// 힙 정렬
class HeapSort {
    // 배열 요소 a[id1]과 a[id2]의 값을 바꾼다.
    static void swap(int[] a, int id1, int id2) {
        int t = a[id1];
        a[id1] = a[id2];
        a[id2] = t;
}

    // a[left] ~ a[right]를 힙으로 만든다.
    static void downHeap(int[] a, int left, int right) {
        int temp = a[left];  // 루트
        int child;           // 큰 값을 가진 노드
        int parent;          // 노드

        for(parent = left; parent < (right+1)/2; parent = child) {
            int cl = parent * 2 + 1;  // 왼쪽 자식
            int cr = cl + 1;          // 오른쪽 자식
            child = (cr <= right && a[cr] > a[cl]) ? cr : cl; // 큰 값을 가진 노드를 자식에 대입
            if(temp >= a[child])
                break;
            a[parent] = a[child];
        }
        a[parent] = temp;
    }

    // 힙 정렬
    static void heapSort(int[] a, int n) {
        for(int i = (n-1)/2; i>=0; i--)   // a[i]~a[n-1]를 힙으로 만들기
            downHeap(a, i, n-1);

        for(int i = n-1; i>0; i--) {
            swap(a,0,i);   // 가장 큰 요소와 아직 정렬되지 않은 부분의 마지막 요소를 반환한다.
            downHeap(a, 0, i-1);   // a[0]~a[i-1]을 힙으로 만든다.
        }
    }

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        System.out.println("힙 정렬");
        System.out.println("요솟수 : ");
        int n = scan.nextInt();
        int[] x = new int[n];

        for(int i = 0; i<n; i++) {
            System.out.print("x["+i+"] : ");
            x[i] = scan.nextInt();
        }

        heapSort(x, n); // 배열 x를 힙 정렬한다. 

        System.out.println("오름차순으로 정렬했습니다.");
        for(int i = 0; i<n; i++)
            System.out.println("x["+i+"] = "+x[i]);
    }
}
```

#### downHeap 메서드
배열 a 가운데 a[left]~a[right]의 요소를 힙으로 만드는 메서드이다. a[left] 이외에는 모두 힙 상태라고 가정하고 a[left]를 아랫부분의 알맞은 위치로 옮겨 힙 상태를 만든다.  

#### heapSort 메서드
요소의 개수가 n개인 배열 a를 힙 정렬하는 메서드이다.  
```
1. downHeap 메서드를 사용하여 배열 a를 힙으로 만든다.
2. 루트에 있는 가장 큰 값을 빼내어 배열 마지막 요소와 바꾸고 배열의 나머지 부분을 다시 힙으로 만드는 과정을 반복하여 정렬을 수행한다. 
```

<br>

## Reference & Additional Resources
* Do it! 자료구조와 함께 배우는 알고리즘 입문 자바편

* C언어로 쉽게 풀어쓴 자료 구조  

* [[알고리즘] 힙 정렬(heap sort)이란](https://gmlwjd9405.github.io/2018/05/10/algorithm-heap-sort.html)



