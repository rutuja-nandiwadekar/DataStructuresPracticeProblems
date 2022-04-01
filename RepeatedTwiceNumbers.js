function repeatedNumber() {
    let arrayOfRepeatedNumber = [];
    for (let i = 1; i <= 100; i++) {
       if (i % 11 == 0) {
           arrayOfRepeatedNumber.push(i);
       }
    }
    console.log("Repeated numbers are :" +arrayOfRepeatedNumber);
}
repeatedNumber();