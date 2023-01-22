const validPath = (n, edges, source, destination) => {
    let adjList = {};
    let visited = new Set();

    for (const [u, v] of edges){
        adjList[u] ? adjList[u].push(v) : adjList[u] = [v];
        adjList[v] ? adjList[v].push(u) : adjList[v] = [u];
    }

    const stack = [source];
    visited.add(source);

    while(stack.length){
        const current = stack.pop();
        if(current === destination) return true;
        for(let neighbour of adjList[current]) {
            if(!visited.has(neighbour)){
                stack.push(neighbour);
                visited.add(neighbour);
            }
        }
    }

    return false;
};
