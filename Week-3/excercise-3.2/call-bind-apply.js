function generateAddress(addressType) {
    if (addressType === 'full') {
        return `${this.firstName} ${this.lastName} lives in ${this.city}, ${this.state}. Coordinates are (${this.lat}, ${this.long})`;
    } else {
        return `${this.firstName} ${this.lastName} lives in ${this.city}, ${this.state}`;
    }
}


let personA = {
    'firstName': 'John',
    'lastName': 'Doe',
    'city': 'Bengaluru',
    'state': 'Karnataka',
    'lat': '33.480900',
    'long': '-112.212112'
};


let personB = {
    'firstName': 'Jane',
    'lastName': 'Doe',
    'city': 'West Bengal',
    'state': 'Kolkata',
    'lat': '40.220',
    'long': '-140.212112'
};


console.log('---------------Using Call---------------');
console.log(generateAddress.call(personA, 'full'));
console.log('---------------Using Apply---------------');
console.log(generateAddress.apply(personA, ['full']));
console.log('---------------Using Bind---------------');
borrowedFxn = generateAddress.bind(personB, 'notFull');
console.log(borrowedFxn());