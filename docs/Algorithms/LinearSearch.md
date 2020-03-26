# 선형검색
*written by sohyeon, hyemin 💡*

<br>

## 1. 선형검색이란?

배열에서 검색하는 방법 중 가장 기본적인 알고리즘이다.  
요소가 직선 모양으로 늘어선 배열에서의 검색은  
원하는 키 값을 갖는 요소를 만날 때까지 맨 앞부터 순서대로 요소를 검색하면 된다.  
순차적으로 요소를 방문하기 때문에 `순차검색`이라고도 한다.  

배열에서 값 2를 선형검색하는 예시

<img src="/images/Algorithms/resources/linearsearch.PNG" width="500px">

위의 그림은 검색에 성공한 경우입니다.  

만약 키 값과 같은 값을 가진 요소가 배열에 없다면 검색에 실패할 것 이다.  
이 경우에도 동일하게 배열의 요소를 맨 앞부터 순서대로 검색하고  
키 값과 같은 요소를 만나지 못한채 배열의 끝을 지나가게 된다.  

### 배열 검색의 종료 조건

* 검색할 값을 발견하지 못하고 배열의 끝을 지나간 경우
* 검색할 값과 같은 요소를 발견한 경우

### 예시 코드

```Java
class SeqSearch{
    static int seqSearch(int[] a, int n, int key){
        for(int i=0; i<n; i++)
            if(a[i]==key)
                return i;
        return -1
    }

    public static void main(String[] args){
    Scanner stdIn = new Scanner(System.in);

    System.out.print("요솟수:" );
    int num = stdIn.nextInt();
    int[] x = new int[num];

    for(int i=0; i<num; i++){
        System.out.print("x["+i+"]:");
        x[i] = stdIn.nextInt();
    }
    System.out.print("검색할 값:");
    int ky = stdIn.nextInt();
    
    int idx = seqSearch(x,num,ky);

    if(idx == -1)
        System.out.println("그 값의 요소가 없습니다.");
    else
        System.out.println(ky+"은(는) x["+idx+"]에 있습니다.");
    }
}
```

## 2. 보초법

선형 검색은 반복할 때마다 종료 조건을 모두 판단합니다.  
종료 조건을 검사하는 비용을 무시할 수 없기 때문에  
이 비용을 반으로 줄이는 방법이 `보초법`입니다.  

### 보초법 예시

<img src="/images/Algorithms/resources/sentinel.PNG" width="500px">

검색을 시작하기 전에 검색하고자 하는 키 값을 맨 끝 요소에 저장한다.  
이 저장하는 값을 `보초(sentinel)`라고 한다.  

보초 값을 활용하므로서 원래의 데이터에 존재하지 않아도 보초까지 검색하면 
배열 검색의 종료 조건 중 `검색할 값을 발견하지 못하고 배열의 끝을 지나간 경우`이 없어도 된다.  

보초는 반복문에서 종료 판단 횟수를 2회에서 1회로 줄이는 역할을 합니다.  

### 예제 코드

```Java
class SeqSearchSen{
    static int seqSearchSen(int[] a, int n, int key){
        int i=0;
        a[n]=key;   // 보초를 추가

        while(true){
            if(a[i]==key)   // 검색 성공!
                break;
            i++;
        }
        return i == n ? -1 : i; // 변수 i값이 n이면 찾은 값이 보초이므로 검색 실패임
    }

    public static void main(Stirng[] args){
        Scanner stdIn = new Scanner(System.in);

        System.out.print("요솟수:" );
        int num = stdIn.nextInt();
        int[] x = new int[num+1];

        for(int i=0; i<num; i++){
            System.out.print("x["+i+"]:");
            x[i] = stdIn.nextInt();
        }
        System.out.print("검색할 값:");
        int ky = stdIn.nextInt();
        
        int idx = seqSearchSen(x,num,ky);   // 배열 x에서 값이 ky인 요소를 검색

        if(idx == -1)
            System.out.println("그 값의 요소가 없습니다.");
        else
            System.out.println(ky+"은(는) x["+idx+"]에 있습니다.");
        }
    }
}
```
