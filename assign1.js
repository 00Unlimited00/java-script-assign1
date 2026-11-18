///1
let x = "123";
y = +x + 7;
console.log(y);

///2
function invalid(value) {
    if (!value) {
        return "invalid";
    }
    return value;
}
console.log(invalid(1));
///3
for (let i = 0; i <= 10; i++) {
    if (i % 2 != 0) {
        console.log(i);

    }

}
///4
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);
///5
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let mergeArray = [...arr1, ...arr2];
console.log(mergeArray);
///6
function dayNsme(number) {
    switch (number) {
        case 1:
            return "sunday";

        case 2:
            return "monday";

        case 3:
            return "tuesday";
        case 4:
            return "wednesday";
        case 5:
            return "thursday";
        case 6:
            return "friday";
        case 7:
            return "satueday";
    }

}
console.log(dayNsme(2));
///7
let map1 = ["a", "ab", "abc"];
let map2 = map1.map(num => num.length);
console.log(map2);
///8
function dev(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log("Divisible by both");

    }
}
dev(15);
///9
function squares(num) {

    console.log(num ** 2);

}
squares(5);
///10\
let person = { name: "john", age: "25" };
function extPerson(person) {
    let { name, age } = person;
    return `${name} is ${age} years old`;

}
console.log(extPerson(person));
///11
function sum(...numbers) {
    let total = 0;
    for (let x of numbers) {
        total += x;
    }
    return total;
}
console.log(sum(1, 2, 3, 4, 5));
///12
///13
function large(arr) {
    let large1 = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > large1) {
            large1 = arr[i];
        }
    }
    return large1;
}
let largeArr=[1,2,3,4,5,6,7];
console.log(large(largeArr));
///14
function objKeys(obj){
    return Object.keys(obj);
}
let ali={
    name: "ali",
    age:15,
}
console.log(objKeys(ali));
///15
///b
///1
///The for...of loop statment , can wait. can't break and continue
///forEach array method (callback) , can't wait, can break and continue
///2
///Function declarations are fully hoisted, so we can call them before their declaration
///The Temporal Dead Zone is the period between entering a scope and initializing a let or const variable.
///3
/// == compare between the value not the type (number, string)
///===compare between value and the type 
