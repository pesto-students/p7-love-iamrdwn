function buySell(arr) {

    let left = 0; //buy
    let right = 1; //sell
    let maxProfit = 0;


    while (left < arr.length) {

      if (arr[left] < arr[right]) {

        let profit = arr[right] - arr[left]
        maxProfit = Math.max(profit, maxProfit);
      } else {

        left = right
      }

      right++


    }

    return maxProfit;

  }


  let prices = [7, 1, 5, 3, 6, 4]

  console.log(buySell(prices));