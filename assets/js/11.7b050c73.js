(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{265:function(t,e,n){t.exports=n.p+"assets/img/DFS_1.82142d2e.png"},266:function(t,e,n){t.exports=n.p+"assets/img/DFS_2.b0dffa4a.png"},307:function(t,e,n){"use strict";n.r(e);var a=n(19),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"깊이-우선-탐색-depth-first-search-bfs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#깊이-우선-탐색-depth-first-search-bfs"}},[t._v("#")]),t._v(" 깊이 우선 탐색(Depth First Search : BFS)")]),t._v(" "),a("p",[a("em",[t._v("written by sohyeon, hyemin 💡")])]),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"_1-깊이-우선-탐색-dfs-이란"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-깊이-우선-탐색-dfs-이란"}},[t._v("#")]),t._v(" 1. 깊이 우선 탐색(DFS)이란?")]),t._v(" "),a("p",[a("code",[t._v("깊이 우선 탐색(Depth First Search)")]),t._v("은 루트 노드(혹은 다른 임의의 노드)에서 시작해서 다음 분기(branch)로 넘어가기 전에 해당 분기를 완벽하게 탐색하는 방법이다.")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("미로를 탐색할 때 한 방향으로 갈 수 있을 때까지 계속 가다가 더 이상 갈 수 없게 되면 다시 가까운 갈림길로 돌아와서 이곳으로부터 다른 방향으로 다시 탐색을 진행하는 방법과 유사하다.")])]),t._v(" "),a("li",[a("p",[t._v("그래프에서 모든 노드를 방문하고자 할 때 더 선호되는 편이다.")])])]),t._v(" "),a("h2",{attrs:{id:"_2-깊이-우선-탐색-dfs-의-특징"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-깊이-우선-탐색-dfs-의-특징"}},[t._v("#")]),t._v(" 2. 깊이 우선 탐색(DFS)의 특징")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("전위 순회를 포함한 다른 형태의 트리 순회는 모두 깊이 우선 탐색(DFS)의 한  종류이다.")])]),t._v(" "),a("li",[a("p",[t._v("그래프 탐색의 경우 "),a("code",[t._v("어떤 노드를 방문했었는지 여부를 반드시 검사")]),t._v("해야 한다는 것이다.")]),t._v(" "),a("ul",[a("li",[t._v("검사하지 않을 경우 무한루프에 빠질 위험이 있다.")])])]),t._v(" "),a("li",[a("p",[t._v("깊이 우선 탐색은 자기 자신을 다시 호출하는 "),a("code",[t._v("순환 알고리즘")]),t._v("의 형태를 가지고 있다.")])])]),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"_3-깊이-우선-탐색-dfs-의-과정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-깊이-우선-탐색-dfs-의-과정"}},[t._v("#")]),t._v(" 3. 깊이 우선 탐색(DFS)의 과정")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("1. 그래프의 시작 노드에서 출발하여 먼저 시작 노드 v를 방문하고 방문하였다고 표시한다.\n2. v에 인접한 노드들 중에서 아직 방문하지 않은 노드 u를 선택한다.\n3. 만약 그러한 노드가 없다면 탐색은 종료한다.\n4. 만약 아직 방문하지 않은 노드 u가 있다면 u를 시작 노드로 하여 깊이 우선 탐색을 다시 시작한다.\n5. 이 탐색이 끝나게 되면 다시 v에 인접한 노드들 중에서 아직 방문이 안 된 노드를 찾는다.\n6. 없을 경우 종료하고, 있다면 다시 그 노드를 시작 노드로 하여 깊이 우선 탐색을 다시 시작한다. \n")])])]),a("img",{attrs:{src:n(265),height:"350px"}}),t._v(" "),a("img",{attrs:{src:n(266),height:"350px"}}),t._v(" "),a("ul",[a("li",[a("p",[t._v("0번 노드를 시작 노드로 선택하고 이미 방문한 노드는 주황색으로 표시하였다.")])]),t._v(" "),a("li",[a("p",[t._v("점선 화살표는 이미 방문한 노드로의 방문을 시도하다가 실패한 간선을 의미하고, 실선 화살표는 실제로 방문하는 간선을 의미한다.")])])]),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"_4-깊이-우선-탐색-dfs-의-구현"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-깊이-우선-탐색-dfs-의-구현"}},[t._v("#")]),t._v(" 4. 깊이 우선 탐색(DFS)의 구현")]),t._v(" "),a("p",[t._v("구현 방법에는 "),a("code",[t._v("순환 호출을 이용하는 것")]),t._v("과 "),a("code",[t._v("명시적인 스택을 사용하는 것(방문한 노드들을 스택에 저장하였다가 다시 꺼내어 작업하는 것)")]),t._v("이다.")]),t._v(" "),a("h4",{attrs:{id:"ex-순환-호출을-이용한-dfs를-구현한-의사코드-pseudocode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ex-순환-호출을-이용한-dfs를-구현한-의사코드-pseudocode"}},[t._v("#")]),t._v(" ex) 순환 호출을 이용한 DFS를 구현한 의사코드(pseudocode)")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("void search(Node root) {\n    if (root == null) return;    \n    // root 노드를 방문한다.\n    visit(root);\n    root.visited = true; \n    // root 노드와 인접한 정점을 모두 방문한다.\n    for each (Node n in root.adjacent) {\n        // 방문하지 않은 노드가 있다면 root 노드와 인접한 정점 정점을 시작 정점으로 DFS를 시작\n        if (n.visited == false) {\n            search(n); \n        }\n    }\n}\nhttps://gmlwjd9405.github.io/2018/08/14/algorithm-dfs.html\n")])])]),a("h4",{attrs:{id:"ex-순환-호출을-이용한-dfs-구현"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ex-순환-호출을-이용한-dfs-구현"}},[t._v("#")]),t._v(" ex) 순환 호출을 이용한 DFS 구현")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('import java.io.*; \nimport java.util.*; \n\n// 인접 리스트를 이용한 방향성 있는 그래프 클래스 \nclass Graph { \n    private int V; // 노드의 개수\n    private LinkedList<Integer> adj[]; // 인접 리스트\n\n    // Constructor(생성자)\n    Graph(int v) { \n        V = v; \n        adj = new LinkedList[v]; \n        for (int i=0; i<v; ++i) \n            adj[i] = new LinkedList(); \n    } \n\n    // 노드를 연결한다. (v->w)\n    void addEdge(int v, int w) { \n        adj[v].add(w); // Add w to v\'s list. \n    } \n\n    // DFS에 의해 사용되는 함수\n    void DFSUtil(int v,boolean visited[]) { \n        // 현재 노드를 방문한 것으로 표시하고 값 출력한다.\n        visited[v] = true; \n        System.out.print(v+" "); \n\n        // 방문한 노드와 인접한 모든 노드를 가져온다.\n        Iterator<Integer> i = adj[v].listIterator(); \n        while (i.hasNext()) { \n            int n = i.next(); \n            \n            // 방문하지 않은 노드면 해당 노드를 시작 노드로 하고 DFSUtil을 호출한다.\n            if (!visited[n]) \n                DFSUtil(n, visited); \n            } \n    } \n\n    // 주어진 노드를 시작 노드로 DFS를 탐색한다.\n    void DFS(int v) { \n        // 노드의 방문 여부를 판단한다.\n        boolean visited[] = new boolean[V]; \n\n        // v를 시작 노드로 하여 DFSUtil을 순환 호출한다.\n        DFSUtil(v, visited); \n    } \n\n\n    // 2를 시작 노드로 하여 DFS를 탐색한다.\n    public static void main(String args[]) { \n        Graph g = new Graph(4); \n\n        g.addEdge(0, 1); \n        g.addEdge(0, 2); \n        g.addEdge(1, 2); \n        g.addEdge(2, 0); \n        g.addEdge(2, 3); \n        g.addEdge(3, 3); \n        \n        g.DFS(2); \n    } \n} \n\n')])])]),a("br"),t._v(" "),a("h2",{attrs:{id:"reference-additional-resources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reference-additional-resources"}},[t._v("#")]),t._v(" Reference & Additional Resources")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("코딩인터뷰 완전 분석")])]),t._v(" "),a("li",[a("p",[t._v("C언어로 쉽게 풀어쓴 자료 구조")])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/"),a("OutboundLink")],1)])])])])}),[],!1,null,null,null);e.default=s.exports}}]);