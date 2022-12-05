function createIncrement() {
    let count = 0;


    function increment () {
  //     console.log(count);
      count++;
    }

    let message = `Count is ${count}`;


    function log() {
  //     console.log(count);

      console.log(message);
    }

    return [increment, log];

  }


  const [increment, log] = createIncrement();

  increment(); // This function invocation indeed does increment the counter by 1
  increment();
  increment();
  log(); // But this function invocation prints 'Count is 0' because the count variable is initialised as 0 in the scope when the createIncrement() function is called.