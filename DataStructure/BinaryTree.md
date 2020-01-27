# 이진탐색트리 (BinaryTree)
*written by sohyeon, hyemin 💡*

<br>

## 1. 이진탐색트리 (BinaryTree)

<img src="./resources/Tree/binarytree_basic.PNG" width="300px">

`이진트리`가 다음 조건을 만족할 때 `이진탐색트리`라고 한다.  

1. 어떤 노드 N을 기준으로 왼쪽 서브 트리 노드의 모든 키 값은 노드 N의 키 값보다 작아야 한다.  
2. 오른쪽 서브 트리 노드의 키 값은 노드N의 키 값보다 커야 한다.
3. 같은 키 값을 갖는 노드는 없다.

각 노드에 값이 존재할 때, 노드의 왼쪽 서브트리에는 그 노드의 값보다 작은 값들을 지닌 노드들로 이루어져있다.  
노드의 오른쪽 서브트리에는 그 노드의 값과 같거나 큰 값들을 지닌 노드들로 이루어져있다.  
좌우 하위트리는 각각이 다시 이진탐색트리이다.  

#### 이진탐색트리 예시

<img src="./resources/Tree/binarytree_ex.PNG" width="500px">

이진탐색트리를 중위 순회하면  

```
1 -> 4 -> 5 -> 6 -> 7 -> 9 -> 11 -> 12 -> 13 -> 14 -> 15 -> 18
```

오름차순으로 노드를 얻을 수 있으며, 구조가 단순하다.  
이진검색과 비슷한 방식으로 검색이 가능하며 노드의 삽입이 쉽다는 특징이 있다.  

### 1-1. 최솟값과 최댓값

이진탐색트리의 특성에 의해  
* 최솟값  
    왼쪽 자식 노드가 없을 때까지 왼쪽 자식노드를 탐색 했을 때 나오는 키 값이다.  

* 최댓값  
    오른쪽 자식 노드가 없을 때까지 오른쪽 자식노드를 탐색 했을 때 나오는 키 값이다.  

### 1-2. Successor와 Predecessor

<img src="./resources/Tree/successor_and_predecessor.PNG" width="600px">

* Successor  
    임의의 루트노드 x가 존재할 때 x보다 큰 값으로 이루어진 서브트리의 값 중 가장 작은 키 값을 의미한다.

* Predecessor  
    임의의 루트노드 x가 존재할 때 x보다 작은 값으로 이루어진 서브트리의 값 중 가장 큰 키 값을 의미한다.

## 2. 이진탐색트리 만들기

### 2-1. 노드 클래스 Node<K,V>

이진탐색트리의 개별 노드를 나타내는 것, 4개의 필드로 구성 된다.  

* key : 키 값
* data : 데이터
* left : 왼쪽 자식 노드에 대한 참조(왼쪽 포인터)
* right : 오른쪽 자식 노드에 대한 참조(오른쪽 포인터)

#### 예제 코드

```Java
class Node<K,V>{
    K key;
    V data;
    Node<K, V> left;
    Node<K, V> right;

    // 생성자
    Node(K key, V data, Node<K,V> left, Node<K,V> right){
        this.key = key;
        this.data = data;
        this.left = left;
        this.right = right;
    }

    // 키 값을 반환
    K getKey(){
        return key;
    }
    
    // 데이터를 반환
    V getValue(){
        return data;
    }

    // 데이터를 출력
    void print(){
        System.out.println(data);
    }
}

private Node<K,V> root;
private Comparator<? Super K> comparator = null;    // 비교자
```

### 2-2. 이진탐색트리 클래스 BinTree<K,V>

2개의 필드로 구성된다.  

* root : 루트에 대한 참조를 보존, 유지하는 필드
* comparator : 키 값의 대소 관계를 비교하는 비교자

#### 예제 코드

```Java
// 생성자
public BinTree(){
    root = null;    // 노드가 하나도 없는 이진탐색트리를 생성
}

//생성자
public BinTree(Comparator<? super K> c){
    this();
    comparator = c;
}
```

`BinTree()`생성자로 생성한 이진탐색트리에서는 노드 키 값의 대소관계를 판단할 때 자연 순서에 따라 수행된다.  
따라서 키를 나타내는 K의 형이 Comparable 인터페이스를 구현하고 있는 Integer클래스나 String클래스등에 알맞다.  
다른 생성자 `BinTree(Comparator<? super K>c)`와 달리 비교자를 설정하지 않으므로 필드 comparator의 값은 널이 된다.  

`BinTree(Comparator<? super K> c)`생성자는 인수로 비교자를 전달받는 생성자이다.  
이 생성자로 생성한 이진탐색트리는 노드의 대소 관계를 판단할 때 전달받은 비교자에 의해 수행된다.

* this()에 의해 인수를 전달받지 않는 생성자 BinTree()를 호출.
  root가 null인 이진검색트리를 생성한다.
  
* 필드 comparator에 전달받은 c를 설정한다.

### 2-3. comp메서드: 두 키 값을 비교

2개의 키 값을 비교하는 메서드이다. 검색, 삽입, 삭제의 각 메서드에서 호출하는 비공개 메서드이다.  

#### 예제 코드

```Java
private int comp(K key1, K key2){
    return (comparator == null) ? ((Comparable<K>)key1).compareTo(key2) : comparator.compare(key1, key2);
}
```

* key1 > key2면 양수
* key1 < key2면 음수
* key1 == key2면 0

이진 검색트리에 비교자 comparator가 설정되어 있는지에 따라 2개의 키값을 비교하는 방법이 다르다.  

#### 비교자 comparator가 null인 경우

```Java
((Comparable<K>)key1).compareTo(key2)
```

key1을 Comparable<K> 인터페이스형으로 형변환하고 compareTo메서드를 호출하여 key2와 비교

#### 비교자 comparator가 null이 아닌 경우

```Java
comparator.compare(key1, key2)
```

설정된 비교자 comparator의 compare메서드를 호출하여 두 키값 key1, key2를 비교

### 2-4. search 메서드: 키 값으로 검색

<img src="./resources/Tree/binarytree_search.PNG" width="600px">

이진탐색트리에서 원하는 값을 찾으려면  
루트부터 시작해 현재 선택한 노드의 키 값과 비교하면서 왼쪽, 오른쪽으로 검색을 진행한다.  

1. 루트부터 선택하여 검색을 진행한다. 여기서 선택하는 노드를 p라고 한다.
2. p가 Null이면 검색에 실패한다.
3. 검색하는 값 key와 선택한 노드 p의 키 값을 비교하여
    * 값이 같으면 검색에 성공(검색 종류)한다.
    * key가 작으면 선택한 노드에 왼쪽 자식 노드를 대입한다(왼쪽으로 검색 진행).
    * key가 크면 선택한 노드에 오른쪽 자식 노드를 대입한다(오른쪽으로 검색 진행).
4. 2번 과정으로 되돌아간다.

#### 예제 코드

```Java
public V search(K key){
    Node<K,V> p = root;

    while(true){
        if(p==null)
            return null;
        int cond = comp(key, p.getKey());
        if(cond==0)
            return p.getValue();    // 검색 성공
        else if(cond<0)
            p = p.left;
        else
            p = p.right;
    }
}
```

키 값이 key인 노드를 검색하고 검색에 성공하면 그 노드의 데이터에 대한 참조를 반환한다.

### 2-5. add 메서드: 노드를 삽입

<img src="./resources/Tree/binarytree_add.PNG" width="600px">

이진탐색트리의 조건을 유지하도록 노드를 삽입한다.  
삽입할 노드의 키와 같은 값을 가지는 노드가 있다면 노드를 삽입해서는 안된다.  

1. 루트를 선택한다. 여기서 선택하는 노드를 node로 한다.
2. 삽입할 키 key와 선택노드 node의 키 값을 비교한다. 값이 같다면 삽입에 실패한다(종료).
    * 값이 같지 않은 경우 key값이 삽입할 값보다 작으면,  
      왼쪽 자식 노드가 없는 경우에는 노드를 삽입(종료)  
      왼쪽 자식 노드가 있는 경우에는 선택한 노드를 왼쪽 자식 노드로 옮긴다.  
    * key값이 삽입할 값보다 크면,  
      오른쪽 자식 노드가 없는 경우에는 노드를 삽입(종료)  
      오른쪽 자식 노드가 있는 경우에는 선택한 노드를 오른쪽 자식 노드로 옮긴다.  
3. 2로 되돌아 간다.

#### 예제 코드

```Java
private void addNode(Node<K,V> node, K key, V data){
    int cond = comp(key, node.getKey());
    if(cond == 0)
        return;
    else if(cond<0){
        if(node.left == null)
            node.left = new Node<K,V>(key, data, null, null);
        else
            addNode(node.left, key, data);
    } else{
        if(node.right == null)
            node.right = new Node<K,V>(key, data, null, null);
        else
            addNode(node.right, key, data);
    }
}

public void add(K key, V data){
    if(root == null)
        root = new Node<K,V>(kdy, data, null, null);
    else
        addNode(root, key, data);
}
```

### 2-6. remove 메서드: 노드를 삭제

노드를 삭제할 때는 세가지 서로 다른 상황에 알맞은 처리를 해야한다.  

### 1) 자식 노드가 없는 노드를 삭제하는 경우

* 삭제할 노드가 부모 노드의 왼쪽 자식이면 부모의 왼쪽 포인터를 null로 한다.
* 삭제할 노드가 부모 노드의 오른쪽 자식이면 부모의 오른쪽 포인터를 null로 한다.

### 2) 자식 노드가 1개인 경우

* 삭제 대상 노드가 부모 노드의 왼쪽 자식이면 부모의 왼쪽 포인터가 삭제 대상 노드의 자식을 가리키도록 한다.
* 삭제 대상 노드가 부모 노드의 오른쪽 자식이면 부모의 오른쪽 포인터가 삭제 대상 노드의 자식을 가리키도록 한다.

### 3) 자식 노드가 2개인 경우

1. 삭제할 노드의 왼쪽 서브 트리에서 키 값이 가장 큰 노드를 검색한다.  
    (Predecessor, 자식노드가 하나이거나 하나도 존재하지 않는 특징이 있다.)

2. 검색한 노드를 삭제 위치로 옮긴다.

3. 옮긴 노드를 삭제한다.
    * 옮긴 노드에 자식이 없으면,
      자식 노드가 없는 노드의 삭제 순서에 따라 노드를 삭제
    * 옮긴 노드에 자식이 있으면,
      자식 노드가 1개 있는 노드의 삭제 순서에 따라 노드를 삭제

#### 예제 코드

```Java
public boolean remov(K key){
    Node<K,V> p = root;
    Node<K,V> parent = null;
    boolean isLeftChild = true;

    // 삭제할 키 검색
    while(true){
        if(p == null)
            return false;
        int cond = comp(key, p.getKey());   // key와 노드p의 키 값을 비교
        if(cond == 0)   // 같으면 검색 성공
            break;
        else{
            parent = p;
            if(cond < 0){ // key쪽이 작으면 왼쪽 자식으로 내려가고 왼쪽서브트리에서 검색
                ifLeftChild = true;
                p = p.left;
            }
            else{   // key쪽이 크면 오른쪽 자식으로 내려가고 오른쪽 서브트리에서 검색
                isLeftChild = false;
                p = p.right;
            }
        }
    }

    /* 
    자식노드가 없는 경우, 자식노드가 1개인 경우의 과정 수행
    삭제 노드에 왼쪽 자식이 없으면 왼쪽 포인터가 null,
    오른쪽 자식이 없으면 오른쪽 포인터가 null이 되는 방법 이용
    */
    if(p.left == null){ // p에 왼쪽 자식이 없음
        if(p == root)
            root = p.right;
        else if(isLeftChild)
            parent.left = p.right;
        else
            parent.right = p.right;
    }
    else if(p.right == null){   // p에 오른쪽 자식이 없음
        if(p == root)
            root = p.left;
        else if(isLeftChild)
            parent.left = p.left;
        else
            parent.right = p.left;
    }

    // 자식 노드가 2개인 노드를 삭제하는 경우 수행 
    else{
        parent = p;
        Node<K,V> left = p.left;    // 서브 트리 가운데 가장 큰 노드
        isLeftChild = true;
        while(left.right != null){  // 가장 큰 노드 left를 검색
            parent = left;
            left = left.right;
            isLeftChild = false;
        }
        p.key = left.key;   // left의 키 값을 p로 옮김
        p.data = left.data; // left의 데이터를 p로 옮김
        if(isLeftChild)
            parent.left = left.left;    // left를 삭제
        else
            parent.right = left.left;   // left를 삭제
    }
    return true;
}
```