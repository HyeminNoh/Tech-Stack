# 소수 구하기 (아리스토테네스의 체)
*written by sohyeon, hyemin 💡*

<br>

    * 소수란?
    
    자신과 1 이외의 정수로 나누어 떨어지지 않는 정수

## 1. 소수 구하기

1000 이하의 정수 중 소수인 값을 나열해 보자

두번째 for문에서 자신 외에 다른 정수로 나누어 떨어지는지 확인한다.

```Java
class PrimeNum{
    public static void main(Stirng[] args){
        // 1은 소수가 아니므로 2부터 시작
        for(int n=2; n<=1000; n++){
            int i;
            for(i=2; i<n; i++){
                if(n%i==0)  // 나누어 떨어지면 소수가 아님
                    break;
            }
            if(n==i)        // 마지막까지 나누어 떨어지지 않음
                System.out.println(n);
        }
    }
}
```

위의 예시는 불필요한 나눗셈 연산을 하게 되어 비효율적이다.  
소수인지 확인하려는 n보다 작은 소수들로부터 나누어 떨어지지 않는다면 소수일 것이다.  
(예를 들어 7이 소수인지 확인한다면, 7보다 작은 소수 2,3,5만으로도 확인이 가능하다.)  

### 개선 코드 1

```Java
class PrimeNum2{
    public static void main(String args[]){
        int ptr = 0;        // 찾은 소수 개수
        int prime[] = new int[500];     // 소수를 저장하는 배열

        prime[ptr++] = 2;   // 2는 소수

        for(int n=3; n<=1000; n+=2){    // 홀수만, 어차피 짝수는 2로 나누어 지기 때문에 소수가 아님
            int i;
            for(i=1; i<ptr; i++){       // 찾아둔 소수로 나누어 봄
                if(n%prime[i]==0)
                    break;
            }
            if(ptr==i)
                prime[ptr++] = n;   // 소수를 배열에 저장
        }
    }
}
```

개선된 코드도 썩 좋은 효율성을 갖지는 않는다.  
소수는 n의 제곱근 이하의 어떤 소수로도 나누어 떨어지지 않는다는 속성이 있기 떄문이다.  

### 개선된 코드 2

```Java
class PrimeNum3{
    public static void main(String[] args){
        int ptr = 0;
        int prime[] = new int[500];

        prime[ptr++]=2;
        prime[ptr++]=3;

        for(int n=5; n<=1000; n+=2){
            boolean flag = false;
            for(int i=1; prime[i]*prime[i]<=n;i++){
                if(n%prime[i]==0){
                    flag = true;
                    break;
                }
            }
            if(!flag){
                prime[ptr++]=n;
            }
        }
    }
}
```

첫번째 개선 코드보다 두번째 개선 코드의 연산 횟수가 3배 적다.

배열을 활용하며 진행한 위의 알고리즘 외에 소수를 구하는 좋은 알고리즘 이론이 있다.  

## **2. 아리스토테네스의 체 ⭐**

### 2-1. 알고리즘 순서

1. 2부터 소수를 구하고자 하는 구간의 모든 수를 나열한다.

2. 2는 소수이므로 오른쪽에 2를 쓴다.

3. 자기 자신을 제외한 2의 배수를 모두 지운다.

4. 남아있는 수 가운데 3은 소수이므로 오른쪽에 3을 쓴다.

5. 자기 자신을 제외한 3의 배수를 모두 지운다.

6. 남아있는 수 가운데 5는 소수이므로 오른쪽에 5를 쓴다.

7. 자기 자신을 제외한 5의 배수를 모두 지운다.

8. 남아있는 수 가운데 7은 소수이므로 오른쪽에 7을 쓴다.

9. 자기 자신을 제외한 7의 배수를 모두 지운다.

10. 위의 과정을 반복하면 구하는 구간의 모든 소수가 남는다.

### 2-2. 코드

즉, 2부터 N까지의 수 중에서 소수를 찾는다고 했을 때  
N의 제곱근보다 작은 소수의 배수를 모두 지우고 남는 수는 모두 소수이다.   

두번째 개선 코드와 같은 논리를 활용하지만 다른점이 있다면  
소수만 찾아내는게 아니라 소수의 배수들을 모두 지워 소수만 남기는 것이 차이이다.  

```Java
public class Eratostenes {
    public static void main(String[] args) {
        boolean[] arr = new boolean[1001];    //true 이면 해당 인덱스 소수.
        arr[0] = arr[1] = false;
        for(int i=2; i<=1000; i+=1) {
            arr[i] = true;
        }
 
        //2 부터 숫자를 키워가며 배수들을 제외(false 할당)
        for(int i=2; i*i<=1000; i+=1) {
            for(int j=i*i; j<=1000; j+=i) {
                arr[j] = false;        //2를 제외한 2의 배수 false
            }
        }
        System.out.println("Prime number list from 2 to 1000 : ");
        for(int i=0; i<=1000; i+=1) {
            if(true == arr[i]) {
                System.out.print(i + " ");
            }
        }
    }
}
```

위의 개선코드와 달리 중첩 for문도 없어 시간복잡도도 더 작고 효율적이다.  
소수와 관련된 알고리즘 문제를 해결할 때 참고하면 될 듯 하다.
