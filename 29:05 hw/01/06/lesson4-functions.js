//js was created as a functional not objective programming

//functions allow us to organize the code - write it in a block and reuse

// function fName() {
//   //some code name anyway no key words
//   //name a function in camel case
//   //smallleBigletBiglet
//   //name them in a detailed way - start from verb and then what it does - the same applies to variables -
// //   //name it to be understood
// //   //BE CAREFUL WITH NAMING
// // }

// // function sayHello(name, text) {
// //   console.log(`Hello ${name}`);
// //   console.log(`You provided this ${text}`);
// // }
// // sayHello("Denys", "Test test");
// // //in this way we can change data any - therefore put params in function
// // sayHello("D", "Test");
// //example with using a lot of dataset

// // function add(a,b) {
// //   return a + b; //to return to external world
// // }
// // const sum = add(4, 5, 6);
// // console.log(sum); //it was returned in console
// // //console.log(sum * sum);

// //to return sum of several- return infinite no

// function add(...a) {
//   let sum = 0;
//   for (let num of a) {
//     //letnum of a array a
//     sum += num;
//   }
//   return sum;
// }

// // const sum = add(8, 9, 6, 7);
// // console.log(sum);
// //function () anonympus func

// function sayHello(name, callback) {
//   console.log(`Hello, ${name}`);
//   callback(); //call the func
// }
// sayHello("test name", add(1, 2, 3));
// //callback lets to work with асфнхронність - зроби першу потім за нею зроби колбек аргум - мб інша фкнк

//стрілочні функції

// const sayHello = (name) => {
//   console.log("hello" + name + " !");
// };
// sayHello("test");
// //hellotest !

// const add = (num1, num2) => {
//   console.log(num1 + num2);
// };
// add(22, 1);

//this context in which we are in

// const obj = {
//   name: "Object",
//   showthis: function () {
//     console.log(this);
//   },
// };
// obj.showthis();//it will show the whole obj

// const obj1 = {
//   name: "o",
//   showName: () => {
//     console.log(this.name);
//   },
// };
//it will show undefined arrow context is only in global context no local context

//correct

// const obj1 = {
//   name: "o",
//   showName: () => {
//     console.log(obj1.name);
//   },
// };

// //diff arrow func normal one?

//check the age

//1
function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}
const checkTheAge = checkAge(9);
console.log(checkTheAge);

//2
function ToSquare(num) {
  if (typeof num == "number") {
    return num * num;
  } else {
    return "not a number";
  }
}
const ToSq = ToSquare(6);
console.log(ToSq);

//3

function returnMax(a, b, c) {
  if (
    (a > b && a > c) ||
    (a === b && b > c) ||
    (a === b && b === c) ||
    (a === c && c > b)
  ) {
    return a;
  } else {
    if (b > a && b > c) {
      return b;
    } else {
      return c;
    }
  }
}

const maxNum = returnMax(2, 2, 2);
console.log(maxNum);

//3 2 ver
function maxOfThree(a, b, c) {
  return Math.max(a, b, c);
}
