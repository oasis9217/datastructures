class Queue {
    constructor() {
        this.queue = []
    }
    enqueue(item) {
        this.queue.push(item)
        return this.queue
    }
    dequeue() {
        this.queue.shift()
        return this.queue
    }
    isEmpty() {
        return this.queue.length === 0
    }
    empty() {
        this.queue = []
        return
    }
    size() {
        return this.queue.length
    }
}