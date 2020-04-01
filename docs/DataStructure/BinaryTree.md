# 이진트리 (BinaryTree)
*written by sohyeon, hyemin 💡*

<br>

## 1. 이진 트리 (BinaryTree)
  
모든 노드가 2개의 서브 트리를 가지고 있는 트리를 `이진트리(Binary Tree)`라고 한다.  
  
이진 트리는 노드가 왼쪽 자식과 오른쪽 자식을 가지며, 각 노드의 자식은 2명 이하만 유지해야 한다.
  
<img src="./resources/binarytree.jpg" height="300px">
  
예를 들어 노드 B의 왼쪽 자식은 D, 오른쪽 자식은 E이다.  
    
이때 왼쪽 자식을 다시 루트로 하는 서브 트리를 `왼쪽 서브 트리(left subtree)`, 오른쪽 자식을 다시 루트로 하는 서브 트리를 `오른쪽 서브 트리(right subtree)`라고 한다.  
  
삼각형으로 묶여서 있는 부분이 B의 오른쪽 서브트리이다.  

<br>

## 2. 이진 트리(BinaryTree)와 일반 트리의 차이점
  
* 이진 트리의 모든 노드는 차수가 2이하이다. 즉, 자식 노드의 개수가 2이하이다.  
  
* 일반 트리와는 달리 이진 트리는 노드를 하나도 갖지 않을 수도 있다.  
  
* 일반 트리와는 달리 이진 트리는 서브 트리 간에 순서가 존재한다. 따라서 왼쪽 서브 트리와 오른쪽 서브 트리를 구별한다. 

<br>

## 3. 이진 트리의 성질
  
* `n개의 노드`를 가진 이진 트리는 `n-1개의 간선`을 가진다.
  
이진 트리에서의 노드는 루트를 제외하면 정확하게 하나의 부모 노드를 가지며, 부모와 자식 간에는 정확하게 하나의 간선만이 존재한다.  
  
#### ex) 예제
  
<img src="./resources/full_binarytree.jpg" height="200px">
  
`노드의 개수 : 7, 간선의 개수 : 6`
    
    
* `높이가 h`인 이진 트리의 경우, `최소 h개의 노드`를 가지며, `최대 (2^h)-1개의 노드`를 가진다.

#### ex) 예제

<img src="./resources/min_binarytree.jpg" height="200px" display="inline-block">

<img src="./resources/full_binarytree.jpg" height="200px" display="inline-block">

`최소 노드 개수 : 3, 최대 노드 개수 : 1 + 2 + 4 = 7`
  
  
* `n개의 노드`를 가지는 이진 트리의 높이는`최대 n`이거나 `최소 log2(n+1)의 올림`이 된다.
  
#### ex) 예제

<img src="./resources/min_binarytree.jpg" height="200px" display="inline-block">

<img src="./resources/3-node_binarytree.jpg" height="150px" display="inline-block">

`최대 높이 : 3, 최소 높이 : 2`

<br>

## 4. 이진 트리의 분류

### 포화 이진 트리(full binary tree)
트리의 각 레벨에 노드가 꽉 차 있는 이진 트리를 의미한다.

<img src="./resources/full_binarytree.jpg" height="200px">

### 완전 이진 트리(complete binary tree)

높이가 k일 때 레벨 1부터 k-1까지는 노드가 모두 채워져 있고 마지막 레벨 k에서는 왼쪽부터 오른쪽으로 노드가 순서대로 채워져 있는 이진 트리이다.  
  
마지막 레벨에서는 노드가 꽉 차 있지 않아도 되지만 중간에 빈 곳이 있어서는 안된다. 

<img src="./resources/complete_binarytree.jpg" height="250px">

<br>

## Reference & Additional Resources
* Do it! 자료구조와 함께 배우는 알고리즘 입문 자바편
  
* C언어로 쉽게 풀어쓴 자료구조
