# 너비 우선 탐색(Breadth First Search : BFS)
*written by sohyeon, hyemin 💡*

<br>

## 1. 너비 우선 탐색(BFS)이란?
`너비 우선 탐색(Breadth First Search)`은 시작 노드로부터 가까운 노드를 먼저 방문하고 멀리 떨어져 있는 노드를 나중에 방문하는 순회 방법이다.  
  
예를 들어, a 노드에서 시작한다고 했을 때, BFS는 a 노드의 이웃 노드를 모두 방문한 다음에 이웃의 이웃들을 방문한다.  

<br>

## 2. 너비 우선 탐색(BFS)의 특징
  
* BFS는 DFS와 달리 재귀적으로 동작하지 않는다.

* BFS는 방문한 노드를 차례로 저장한 후 꺼낼 수 있는 큐(queue)를 사용한다.

<br>

## 3. 너비 우선 탐색(BFS)의 과정
```
1. 먼저 시작 노드인 0을 방문한 다음, 큐에 삽입한다.
2. 노드 0의 인접 노드인 {1,2,4}를 차례대로 방문한 다음, 큐에 삽입한다.
3. 큐에 삽입된 {1,2,4} 순으로 큐에서 삭제하면서 인접한 노드에 방문 가능한지 확인한다. 
4. {1}의 인접한 노드 {0,2}는 이미 방문했으므로 큐에서 삭제한다.
5. {2}의 인접한 노드 {1,0,3,4}에서 방문하지 않는 {3}을 방문한 후 큐에서 삭제한다.
6. 앞의 순서와 마찬가지로 모든 노드를 방문하고, 탐색을 종료한다.
```

<img src="/images/Algorithms/resources/BFS_1.png" height="400px">
<img src="/images/Algorithms/resources/BFS_2.png" height="410px">

<br>

## 4. 너비 우선 탐색(BFS)의 구현
구현 방법으로는 자료 구조 `큐(queue)를 이용하는 것`이다.

#### ex) BFS를 구현한 의사코드(pseudocode)
```
void search(Node root) {
    Queue queue = new Queue();
    root.marked = true; 
    queue.enqueue(root); // 루트 노드를 큐의 끝에 추가한다.

    // 큐가 비어 있을 때까지 계속한다.
    while (!queue.isEmpty()) {
        Node r = queue.dequeue(); // 큐의 앞에서 삭제한다.
        visit(r); // 큐에서 삭제한 노드를 방문한다. 
        
        // 큐에서 삭제한 노드와 인접한 노드들을 모두 차례로 방문한다.
        foreach (Node n in r.adjacent) {
            if (n.marked == false) {
                n.marked = true; 
                queue.enqueue(n); // 큐의 끝에 추가한다.
            }
        }
    }
}
```

#### BFS 구현
```
import java.io.*; 
import java.util.*; 

// 인접 리스트를 이용한 방향성 있는 그래프 클래스
class Graph { 
    private int V; // 노드의 개수
    private LinkedList<Integer> adj[]; // 인접 리스트

    // Constructor(생성자)
    Graph(int v) { 
        V = v; 
        adj = new LinkedList[v]; 
        for (int i=0; i<v; ++i) 
            adj[i] = new LinkedList(); 
    } 

    // 노드를 연결한다. (v->w)
    void addEdge(int v,int w) { 
        adj[v].add(w); 
    } 

    // s를 시작 노드로 BFS를 탐색한다.
    void BFS(int s) { 
        // 노드의 방문 여부를 판단한다.  
        boolean visited[] = new boolean[V]; 

        // BFS 구현을 위한 큐(queue)를 생성한다.
        LinkedList<Integer> queue = new LinkedList<Integer>(); 

        // 현재 노드를 방문한 것으로 표시하고 큐에 삽입(add)한다.
        visited[s]=true; 
        queue.add(s); 

        // 큐가 비어 있을 때까지 반복한다.
        while (queue.size() != 0) { 
            // 큐에서 방문한 노드를 삭제(poll)하고 값을 출력한다.
            s = queue.poll(); 
            System.out.print(s+" "); 

            // 방문한 노드와 인접한 모든 노드를 가져온다.
            Iterator<Integer> i = adj[s].listIterator(); 
            while (i.hasNext()) { 
                int n = i.next(); 
                
                // 방문하지 않은 노드가 있다면 방문한 것으로 표시하고 큐에 삽입(add)한다.
                if (!visited[n]) { 
                    visited[n] = true; 
                    queue.add(n); 
                } 
            } 
        } 
    } 

    // 2를 시작 노드로 하여 BFS를 탐색한다.
    public static void main(String args[]) { 
        Graph g = new Graph(4); 

        g.addEdge(0, 1); 
        g.addEdge(0, 2); 
        g.addEdge(1, 2); 
        g.addEdge(2, 0); 
        g.addEdge(2, 3); 
        g.addEdge(3, 3); 
    
        g.BFS(2); 
    } 
} 
```

<br>

## Reference & Additional Resources
* 코딩인터뷰 완전 분석  
  
* C언어로 쉽게 풀어쓴 자료 구조  

* [https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/](https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/)
