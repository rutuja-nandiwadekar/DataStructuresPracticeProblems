let myMap = new Map();

//to set key value pair
myMap.set(1,"apple")
        .set(2,"orange")
        .set(3,"banana")
        .set(4,"grapes")
//to print directly
console.log(myMap)

//to print using for..of
for(let [key,value] of myMap){
    // console.log("key is",key)
    // console.log("value is",value)
    console.log(key,value)
}

//to print using forEach loop
console.log()
myMap.forEach((value, key)=>console.log(key,value))

//to get only keys 
console.log()
for(let key of myMap.keys()){
    console.log(key)
}

//to get only values 
console.log()
for(let value of myMap.values()){
    console.log(value)
}

//to check size of map
console.log()
console.log("The size of myMap is " + myMap.size)

//to check if the map having particular key
console.log()
console.log(myMap.has(4))

//to print using entries
console.log()
console.log(myMap.entries())

//to delete element at particular key
console.log()
console.log("before delete")
console.log(myMap)
console.log("After delete")
myMap.delete(2)
console.log(myMap)