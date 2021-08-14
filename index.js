function varTest() {
    var x = 1;
    if(true) {
        var x = 2;
     console.log(x);
    }
}
varTest();

function es6Test() {
    let y = 1;
    if(true) {
        let y = 2;
        console.log(y);
    }
    
    console.log(y);
}
es6Test();

// function

function add(a,b) {
    return a + b;
}
 c = add(2,4);

 console.log(c);

//  function expression

var mul = function(a,b) {
    return a * b;
}
c = mul(3,4);

console.log(c);

// ES6arrow function

const add1 = (x,y) => {
    return x + y;
}
z = add1(5,6);
console.log(z);

// one line statement

const sub = (a,b) => a - b;
c = sub(6,3);

console.log(c);

// default parameters values

function demo(x, y, z) {
    if(x === undefined){
        x = 0;
    }
    if(y === undefined){
        y = 0;
    }
    if(z === undefined){
        z = 0;
    }
    return x + y + z;
}
var res = add(20, 10)
console.log(res);

// Srting concatination

var firstName = 'sameena';
var lastnName = 'khanum';

var message = firstName + lastnName

console.log(message);

// Template literals

var msg = `${firstName} ${lastnName}`
console.log(msg); 

// Arrays

const array = [1, 3, 5 , 7];
const array2 = [];
for(let i=0; i <= array.length -1; i++) {
    array2.push(array[i]*2);
}

console.log(array2);

// Array helper method

const mul1 = array.map(function(e){
    console.log(e);
})
const mul2 = array.map((item) => {
    return item*2
})
console.log(array);
console.log(mul2);