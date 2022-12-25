function vowelCount(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let map = new Map();
  for (letter of str) {
      letterCount = 0;
      if (vowels.includes(letter)) {
          //see if letter already exists, if yes then increment, if no then create
          if (map.has(letter)) {
              let letterCount = map.get(letter);
              letterCount++;
              map.set(letter, letterCount);
          } else {
              letterCount++;
              map.set(letter, letterCount);
          }
      }
  }
  return map;
}
console.log(vowelCount('aaaaaaeeiioo'));