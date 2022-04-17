import PriorityQueue from "./priority-queue.js"
import Graph from "./weighted-graph.js"

function dijkstra(graph, start, finish) {
    const queue = new PriorityQueue()
    const visited = {}
    const route = []
    const distances = {}
    const previous = {}

    const map = graph.getMap()
    const nodeIDs = graph.getNodes()

    // Initialize
    nodeIDs.forEach(id => {
        visited[id] = false
        previous[id] = null

        if (id === start) {
            distances[id] = 0
            queue.enqueue(id, 0)
        } else {
            distances[id] = Infinity
            queue.enqueue(id, Infinity)
        }
    })

    //
    while (!queue.isEmpty()) {
        /**
         * min = dequeue.
         * if min === finish, done
         *
         * for min's neighbors do
         *  check distance to neighbor, update if needed
         *  enqueue neighbor
         */
        const smallest = queue.dequeue()
        visited[smallest.data] = true

        if (smallest.data === finish) {
            // make route
            let i = finish
            while(i !== null) {
                route.unshift(i)
                i = previous[i]
            }
            break;
        }
        const neighbors = map[smallest.data]
        neighbors.forEach(neighbor => {
            if (visited[neighbor.id]) {
                return
            }
            const newDistanceCandidate = distances[smallest.data] + neighbor.weight

            if (distances[neighbor.id] > newDistanceCandidate ) {
                // update
                distances[neighbor.id] = newDistanceCandidate
                previous[neighbor.id] = smallest.data
                queue.enqueue(neighbor.id, newDistanceCandidate)
            }
        })
    }

    console.log(`shortest distance to each node from ${start}:`, distances)
    console.log(`shortest path from ${start} to ${finish}: ${route.join("->")}, distance: ${distances[finish]}`)
    return route
}

const graph = new Graph([
    ['A', 'B', 3],
    ['A', 'C', 2],
    ['B', 'D', 2],
    ['C', 'D', 1],
    ['C', 'E', 4],
    ['D', 'E', 2],
])

dijkstra(graph, 'A', 'E')