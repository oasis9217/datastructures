const getLeftChildIndex = i => 2*i + 1
const getRightChildIndex = i => 2*i + 2
const getParentIndex = i => Math.floor((i-1)/2)

class Heap {
    constructor() {
        this.heap = []
    }
    enqueue(data, print) {
        this.heap.push(data)
        this.bubbleUp(print)
    }
    bubbleUp(print) {
        let dataIndex = this.heap.length - 1
        let data = this.heap[dataIndex]

        while(dataIndex > 0) {
            let parentIndex = getParentIndex(dataIndex)
            let parent = this.heap[parentIndex]

            if (data >= parent) {
                break;
            }
            this.heap[parentIndex] = data
            this.heap[dataIndex] = parent
            dataIndex = parentIndex
            data = this.heap[dataIndex]
        }
    }
    dequeue() {
        const min = this.heap[0]
        const last = this.heap.pop()

        if (this.heap.length > 0) {
            this.heap[0] = last
            this.sinkDown()
        }
        return min
    }
    sinkDown() {
        const length = this.heap.length
        let index = 0
        let swapIndex = null
        let data, rightChild, leftChild = null

        while (true) {
            data = this.heap[index]
            const leftChildIndex = getLeftChildIndex(index)
            const rightChildIndex = getRightChildIndex(index)

            if (leftChildIndex < length) {
                leftChild = this.heap[leftChildIndex]
                if (leftChild < data) {
                    swapIndex = leftChildIndex
                }
            }

            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex]
                if
                (
                    (!swapIndex && rightChild < data) ||
                    (swapIndex && rightChild < leftChild )
                ) {
                    swapIndex = rightChildIndex
                }
            }

            if (!swapIndex) {
                break;
            } else {
                this.heap[index] = this.heap[swapIndex]
                this.heap[swapIndex] = data
                index = swapIndex
                swapIndex = null
            }
        }
    }
    print() {
        let values = ""
        let indices = ""
        for (let i = 0; i < this.heap.length; i++) {
            values += `${this.heap[i]} `.padEnd(3, " ")
            indices += `${i} `.padEnd(3, " ")
        }
        console.log(values)
        console.log(indices)
    }
}

const heap = new Heap()
heap.enqueue(3)
heap.enqueue(6)
heap.enqueue(9)
heap.enqueue(7)
heap.enqueue(12)
heap.enqueue(10)
heap.print()
heap.enqueue(4)
heap.print()