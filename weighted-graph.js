class Node {
    constructor(id, weight) {
        this.id = id
        this.weight = weight
    }
}

export default class Graph {
    constructor(mapInfo) {
        this.map = {}

        mapInfo.forEach(([from, to, weight]) => {
            const toNode = new Node(to, weight)
            const fromRoutes = this.map[from] || [];
            fromRoutes.push(toNode)
            this.map[from] = fromRoutes
            // undirected
            const inverse = new Node(from, weight)
            const inverseRoute = this.map[to] || [];
            inverseRoute.push(inverse)
            this.map[to] = inverseRoute
        })
    }
    getMap() {
        return this.map
    }
    getNodes() {
        return Object.keys(this.map)
    }
    print() {
        console.log(this.map)
    }
    dfs(start) {
        // start is instanceof Node {id, weight}
        const stack = []
        const visited = {};
        const route = [];

        stack.push(start);

        while(stack.length > 0) {
            const current = stack.pop()
            if (!visited[current.id]) {
                visited[current.id] = true
                route.push(current.id)
            }

            this.map[current.id].forEach(toNode => {
                if (!visited[toNode.id]) {
                    stack.push(toNode)
                }
            })
        }
        console.log('dfs: ', route)
        return route
    }
    dfsRecursion(start) {
        const visited = {}
        const route = []

        Object.keys(this.map).forEach( k => {
            visited[k] = false
        })

        this.dfsRecursionHelper(start, visited, route)

        console.log('dfs recursive', route)
        return route
    }
    dfsRecursionHelper(node, visited, route) {
        visited[node.id] = true
        route.push(node.id)

        if (!Object.values(visited).includes(false)) {
            return route
        }

        const nexts = this.map[node.id]
        nexts.forEach(toNode => {
            if (!visited[toNode.id]) {
                return this.dfsRecursionHelper(toNode, visited, route)
            }
        })
    }
    bfs(start) {
        const queue = []
        const visited = {}
        const route = []

        visited[start.id] = true
        queue.push(start)

        while (queue.length > 0) {
            const current = queue.shift()
            route.push(current.id)

            this.map[current.id].forEach(neighbor => {
                if (!visited[neighbor.id]) {
                    visited[neighbor.id] = true
                    queue.push(neighbor)
                }
            })
        }

        console.log('bfs: ', route)
        return route
    }
}

const graph = new Graph([
    ['A', 'B', 3],
    ['A', 'C', 2],
    ['B', 'D', 2],
    ['C', 'D', 1],
    ['C', 'E', 4],
    ['D', 'E', 2],
])

graph.print()
graph.dfs({id: 'A'})
graph.dfsRecursion({id: 'A'})
graph.bfs({id: 'A'})
