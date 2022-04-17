class QueueItem {
    constructor(data, priority) {
        this.data = data
        this.priority = priority
    }
}

class PriorityQueue {
    constructor() {
        this.queue = []
    }
    enqueue(data, priority) {
        const newItem = new QueueItem(data, priority)

        for (let i = 0; i < this.queue.length; i++) {
            if( this.queue[i].priority > newItem.priority) {
                this.queue.splice(i, 0, newItem)
                return
            }
        }
        this.queue.push(newItem)
        return this.queue
    }
    dequeue() {
        this.queue.shift()
        return this.queue
    }
    front() {
        return this.queue[0]
    }
    isEmpty() {
        return this.queue.length === 0
    }
    print() {
        let result = ""
        for (let i = 0; i < this.queue.length ; i++) {
            result += `${this.queue[i].data} `
        }
        console.log(result)
    }
}



let priorityQueue = new PriorityQueue();

// testing isEmpty and front on an empty queue
// return true
console.log(priorityQueue.isEmpty());

// returns "No elements in Queue"
console.log(priorityQueue.front());

// adding elements to the queue
priorityQueue.enqueue("Sumit", 2);
priorityQueue.enqueue("Gourav", 1);
priorityQueue.enqueue("Piyush", 1);
priorityQueue.enqueue("Sunny", 2);
priorityQueue.enqueue("Sheru", 3);

// prints [Gourav Piyush Sumit Sunny Sheru]
console.log(priorityQueue.print());

// prints Gourav
console.log(priorityQueue.front().data);

// removes Gouurav
// priorityQueue contains
// [Piyush Sumit Sunny Sheru]
console.log(priorityQueue.dequeue());

// Adding another element to the queue
priorityQueue.enqueue("Sunil", 2);

// prints [Piyush Sumit Sunny Sunil Sheru]
console.log(priorityQueue.print());
