function findArrayElements() {
    let arrayOfRandomNumber = [];
    for (let i = 0; i < 10; i++) {
        randomNumber = Math.floor(Math.random() * 899 + 100);
        arrayOfRandomNumber.push(randomNumber);
    }
    arrayOfRandomNumber.sort();
    console.log("10 Random numbers in sorted order are :" +arrayOfRandomNumber);
    console.log("Second largest element is : " +arrayOfRandomNumber[8]);
    console.log("Second smallest element is : " +arrayOfRandomNumber[1]);
}
findArrayElements();