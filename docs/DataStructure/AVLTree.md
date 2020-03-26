# AVL트리 (AVL Tree)
*written by sohyeon, hyemin 💡*

<br>

## 1. AVL트리란?

`AVL트리`는 쉽게 말해 `균형잡인 이진탐색트리`이다.  
서브트리의 높이를 적절하게 제어해 전체 트리가 어느 한쪽으로 늘어지지 않도록 한 이진탐색트리의 일종이다.  
트리의 높이가 h일 때 이진탐색트리의 계산복잡성은 O(h)이기 때문에  
균형된 트리를 만들어 h를 줄이고자 하는 발상에서 비롯됐습니다.

<img src="./resources/Tree/avltree.PNG" width="300px">

루트 노드의 좌측 서브노드와 우측 서브노드의 높이 차이가 1보다 크지 않은 형태이다.  

### 1-1. 균형계수(BF, Balance Factor)

<img src="./resources/Tree/avl_add.PNG" width="600px">

    BalanceFactor = height(left subtree) - height(right subtree)

왼쪽 서브트리의 높이에서 오른쪽 서브트리의 높이를 뺀 것이다.  
두 서브트리의 높이가 같거나 잎새노드라면 BF는 0이다(empty tree의 BF는 -1로 정의).  
BF는 정수 범위 [-1, + 1]인데 노드 삽입 이후에 그래프의 균형 계수가 -1보다 작거나 +1보다 클 수 있다.    
이 경우 회전을 통해 균형을 맞춰줄 수 있다.  

## 2. 회전 (Rotation)

삽입으로 인행 불균형해진 그래프의 균형을 맞춘다.  

### 2-1. Single Rotation

single rotation은 rotation을 한 차례 수행해 BF가 0인 균형잡힌 그래프를 얻을 수 있는 경우를 가리킨다.  
Single Rotation은 회전 방향에 따라 두가지로 나뉘어진다.  

<img src="./resources/Tree/avl_sr2.png" width="600px" style="margin: 10px;">

* Single Left Rotation
* Single Right Rotation

#### 실행 기준

삽입 연산의 single rotation은 다음 두 가지 경우에 실시된다.   

<img src="./resources/Tree/before_srr.PNG" width="400px">

`X`: BF의 절대값이 2 이상이면서 새 노드와 가장 가까운 조상 노드  
`Y`: 자식노드, BF 절대값이 1 이하인 노드

- Y가 X의 왼쪽 자식노드, Y의 왼쪽 서브트리에 새 노드가 삽입된 상태
  : Y를 기준으로 right rotation
- Y가 X의 오른쪽 자식노드, Y의 오른쪽 서브트리에 새 노드가 삽입된 상태
  : Y를 기준으로 left rotation

#### Single Right Rotation 예시

<img src="./resources/Tree/avl_srr.PNG" width="600px">

위의 예시를 보면 'BF가 2 이상, 2 이하일 때 rotation을 실시한다'는 조건에 부합한다.  
X의 왼쪽 자식노드인 Y를 기준으로 single rotation을 실시한다.  
Y를 새로운 루트노드로 만들고 T1만 h+1이고 나머지는 모두 h인 점을 감안하면   
rotation 실시 후의 X, Y의 BF는 각각 0, 0이 되어 균형 트리를 이룬다.  

### 2-2. Double Rotation

rotation 한 차례만으로 원하는 삽입 결과를 내지 못하는 케이스가 존재한다.  
이 경우 두번의 rotation을 수행해 균형을 맞춘다.  

single rotation과 마찬가지로 방향에 따라 두가지로 나뉜다.  

* Double Left Rotation
* Double Right Rotation

#### 실행기준

삽입 연산의 double rotation은 다음 두 가지 경우에 실시된다.   

<img src="./resources/Tree/before_drr.PNG" width="400px">

`X`: BF의 절대값이 2 이상이면서 새 노드와 가장 가까운 조상 노드  
`Y`: X의 자식노드이면서 BF 절대값이 1이하  

- Y가 X의 왼쪽 자식노드, Y의 오른쪽 서브트리에 새 노드가 삽입된 경우
- Y가 X의 오른쪽 자식노드, Y의 왼쪽 서브트리에 새 노드가 삽입된 경우

위의 그림 예시는 X, Y, Z의 BF가 각각 2, -1, 1이 된다.  
따라서 X를 루트노드로 하는 서브트리가 균형을 맞춰야될 대상이 된다.  

#### Double Right Lotation 예시 

<img src="./resources/Tree/avl_drr.PNG" width="600px">

* 첫번째 : Z를 중심으로 left rotation 수행 (T1를 잡아 당겨 내리는 과정)  
* 두번째 : Z를 중심으로 right rotation 수행 (T4를 잡아 당겨 내리는 과정)  

위 과정을 수행하고 나면 BF가 각각 -1, 0, 0이 되어서 균형을 이루게 된다.  

## 3. 예제 프로그램

```Java

 ```