let a = [1, -3, 3, 4, -10]


let curr = a[0]
let final = a[0]

for (let i = 1; i < a.length; i++) {

  curr = Math.max(a[i], curr + a[i]);
  final = Math.max(curr, final);


};

console.log(final)
