// function add (a, b) {
//     return a + b;
// }

// console.log(add(3,1));

// var toAdd = [9,5];
// console.log(add(...toAdd));

// var groupA = ['Jen', 'Zena'];
// var groupB = ['Danielle'];

// var final = [...groupB, 3, ...groupA];

// console.log(final);

var person =['Matt', 31];
var personTwo = ['Danielle', 28];

function greeting (name, age) {
    console.log("Hi " + name + ", you are " + age);
};

greeting(...person);
greeting(...personTwo);

var names = ['Andrew', 'Amanda'];
var final = [...names, 'Matt'];

final.forEach(function(name){
    console.log('Hi ' + name);
});