class Fibonacci {
    constructor() {
      this.prev = 0;
      this.curr = 0;
    }

    [Symbol.iterator]() {
      return this;
    }

    next() {
      const nextValue = this.prev + this.curr;
      this.prev = this.curr;
      this.curr = nextValue;
      return { value: nextValue, done: false };
    }
  }

  const fib = new Fibonacci();
  console.log(fib.next().value);  // 1
  console.log(fib.next().value);  // 2
  console.log(fib.next().value);  // 3
  console.log(fib.next().value);  // 5
  console.log(fib.next().value);  // 8
