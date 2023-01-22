class Graph {
    constructor(v) {
      this.v = v;
      this.adjList = new Array(v);
      for (let i = 0; i < v; i++) {
        this.adjList[i] = [];
      }
    }
    addEdge(u, v) {
      this.adjList[u].push(v);
    }

    printAllPaths(s, d) {
      const isVisited = new Array(this.v);
      for (let i = 0; i < this.v; i++) {
        isVisited[i] = false;
      }
      const pathList = [];
      pathList.push(s);
      this._printAllPathsUtil(s, d, isVisited, pathList);
    }
    _printAllPathsUtil(u, d, isVisited, localPathList) {
      if (u === d) {
        console.log(localPathList);
        return;
      }
      isVisited[u] = true;
      for (let i = 0; i < this.adjList[u].length; i++) {
        if (!isVisited[this.adjList[u][i]]) {
          localPathList.push(this.adjList[u][i]);
          this._printAllPathsUtil(this.adjList[u][i], d, isVisited, localPathList);
          localPathList.pop();
        }
      }
      isVisited[u] = false;
    }
  }
  const g = new Graph(4);
  g.addEdge(0, 1);
  g.addEdge(0, 2);
  g.addEdge(0, 3);
  g.addEdge(2, 0);
  g.addEdge(2, 1);
  g.addEdge(1, 3);
  const s = 2;
  const d = 3;
  console.log("Following are all different paths from " + s + " to " + d);
  g.printAllPaths(s, d);
