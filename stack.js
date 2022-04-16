class Stack {
    constructor() {
        this.stack = []
    }
    push(item) {
        this.stack.push(item)
        return this.stack
    }
    pop() {
        return this.stack.pop()
    }
    isEmpty() {
        return this.stack.length === 0
    }
    empty() {
        this.stack = []
        return true
    }
    size() {
        return this.stack.length
    }
}