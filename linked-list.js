class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }
    insert(data) {
        const newNode = new Node(data)

        if (this.head === null) {
            this.head = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
    }
    insertAfter(newData, afterTarget) {
        const newNode = new Node(newData)

        if (this.head === null) {
            this.head = newNode
        } else {
            let i = this.head
            while(i !== null) {
                if (i.data === afterTarget) {
                    newNode.next = i.next
                    i.next = newNode
                    return
                }
                i = i.next
            }
            return "ERR_NO_TARGET"
        }
    }
    append(data) {
        const newNode = new Node(data)

        if (this.head === null) {
            this.head = newNode
        } else {
            let i = this.head
            while(i.next !== null) {
                i = i.next
            }
            i.next = newNode
        }
    }
    print() {
        let i = this.head
        let result = ""

        while (i !== null) {
            result += `${i.data} `
            i = i.next
        }
        console.log(result)
    }
}

const list = new LinkedList()

list.append(6)
list.insert(7)
list.insert(1)
list.append(4)
list.insertAfter(8,7)
list.print()