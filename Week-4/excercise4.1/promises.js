function generateRandomNumber() {

    let rand = Math.floor(Math.random() * 100);

    console.log(rand);
    return rand;

}


let prms = new Promise(function (resolve, reject) {


    if (generateRandomNumber() % 5 === 0) {

        resolve('Divisible by 5')
    }
    else {
        reject(new Error('Not Divisible'))
    }
});



prms.then(result => console.log(result)).catch(error => console.log(error))
