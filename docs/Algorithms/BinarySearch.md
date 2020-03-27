# 이진검색
*written by sohyeon, hyemin 💡*

<br>

## 1. 이진검색이란?

요소가 오름차순 또는 내림차순으로 정렬된 배열에서 검색하는 알고리즘이다.  

아래는 n개의 요소가 오름차순으로 늘어선 배열 a에서 키를 이진 검색으로 검색하는 과정을 표현한 것이다.  
`pl`은 검색 범위의 맨 앞 인덱스, `pr`은 맨끝 인덱스, `pc`는 중앙 인덱스라고 지정한다.  

<img src="docs/Algorithms/resources/binarysearch.PNG" width="600px">

검색을 시작할 때 `pl`은 0, `pr`은 n-1, `pc`는 (n-1)/2로 초기화이다.  

이진검색을 한 단계씩 진행할 때마다 검색 범위가 (거의)반으로 좁혀진다.  
또한 검사한 요소를 하나씩 제외시키는 선형 검색과는 다르게  
이진 검색은 검색 요소가 해당 단계에서 다음에 검색할 범위의 중간 지점으로 단숨에 이동하는 특징을 갖는다.  

<img src="/images/Algorithms/resources/binarysearch2.PNG" width="600px">

위의 그림은 성공했을 때의 예시이다.  
마지막 과정처럼 a[pc]와 key를 비교하여 같으면 검색에 성공하여 과정이 끝난다.  
하지만 원하는 값을 찾지못하면 같은 방법으로 검색 범위를 좁혀가며 반복하게 된다.  

이 때, 두가지 경우에 따라 다르게 검색 범위를 좁히게 된다.  

1. a[pc]<key일때

    a[pl]~a[pc]는 key보다 작은 것이 분명하므로 검색대상에서 제외한다.  
    검색 범위는 a[pc]보다 뒤쪽의 a[pc+1]~a[pr]로 좁힌다.  
    그런 다음 pl의 값을 pc+1로 업데이트 한다.  

2. a[pc]>key일때

    a[pc]~a[pr]은 key보다 큰 것이 분명하므로 검색대상에서 제외한다.  
    검색 범위는 a[pc]보다 앞쪽 a[pl]~a[pc-1]로 좁힌다.  
    그런 다음 pr의 값을 pc-1로 업데이트 한다.  

### 이진 검색의 종료 조건

* a[pc]와 key가 일치하는 경우
* 검색 범위가 더 이상 없는 경우
  
### 예시 코드

```Java
class BinSearch{
    //요솟수가 n인 배열 a에서 key와 같은 요소를 이진 검색
    static int binSearch(int[] a, int n, int key){
        int pl = 0;
        int pr = n-1;
        do{
            int pc = (pl+pr)/2; // 중앙 인덱스 요소
            if(a[pc]==key)
                return pc;      // 검색 성공
            else if(a[pc]<key)
                pl = pc+1;      // 검색 범위를 뒤쪽 절반으로 좁힘
            else
                pr = pc-1;      // 검색 범위를 앞쪽 절반으로 좁힘
        } while (pl<=pr);
        return -1
    }

    public static void main(Stirng[] args){
        Scanner stdIn = new Scanner(System.in);

        System.out.print("요솟수: ");
        int num = stdIn.nextInt();
        int[] x = new int[num];

        System.out.println("오름차순으로 입력하세요.");

        System.out.print("x[0]: ");
        x[0] = stdIn.nextInt();

        for(int i=0; i<num; i++){
            do{
                System.out.print("x["+i+"]:");
                x[i] = stdIn.nextInt();
            } while (x[i]<x[i-1]);
        }

        System.out.print("검색할 값:");
        int ky = stdIn.nextInt();

        int idx = binSearch(x, num, ky);    // 배열 x에서 키 값이 ky인 요소를 검색

        if(idx==-1)
            System.out.println("그 값의 요소가 없습니다.");
        else
            System.out.println(ky+"은(는) x["+idx+"]에 있습니다.");
    }
}
```

위의 예시 코드에서는 자바로 직접 이진탐색을 구현해 보았다.  

하지만 Java는 배열에서 이진 검색을 하는 메서드를 표준 라이브러리로 제공한다.  
java.util.Arrays 클래스의 binarySearch 메서드이다.  
자료형에 따라 9가지 방법으로 오버로딩 되어 있다.  
[Java API 공식문서](https://docs.oracle.com/javase/8/docs/api/java/util/Arrays.html#method.summary)를 통해 메서드에 대한 설명을 확인할 수 있다.  

#### Java binarysearch 메서드의 장점

- 이진 검색 메서드를 직접 코딩할 필요가 없다.

- 모든 자료형 배열에서 검색할 수 있다.
