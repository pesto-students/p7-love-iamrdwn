class Queue {
    constructor() {
        this.s1 = [];
        this.s2 = [];
    }

    enqueue(x) {
        this.s1.push(x);
    }

    dequeue() {
        if (this.s1.length === 0 && this.s2.length === 0) {
            console.error("Queue is empty");
            return null;
        }

        if (this.s2.length === 0) {
            while (this.s1.length > 0) {
                this.s2.push(this.s1.pop());
            }
        }

        return this.s2.pop();
    }
}

const q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);

console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
