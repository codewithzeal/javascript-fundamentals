/*
Parameters are essentially passed to functions by value — so if the code within the 
body of a function  assigns a completely new value to a parameter that was passed to the 
function, the change is not reflected globally or in the code which called that function.

When you pass an object as a parameter, if the function changes the object's properties, 
that change is visible outside the function, as shown in the following example:
 */

function myFunc(theObject) {
  theObject.make = 'Toyota';
}

const mycar = {
  make: 'Honda',
  model: 'Accord',
  year: 1998,
};

// x gets the value "Honda"
const x = mycar.make;

// the make property is changed by the function
myFunc(mycar);
// y gets the value "Toyota"
const y = mycar.make;

/*   
  When you pass an array as a parameter, if the function changes any of the array's 
  values,  that change is visible outside the function, 
  as shown in the following example: */

function myFunc1(theArr) {
  theArr[0] = 30;
}

const arr = [45];

console.log(arr[0]); // 45
myFunc1(arr);
console.log(arr[0]); // 30


/* 
Arrow functions: Arrow functions do not have this,super,arguments of their own. 
For those thing it refers to it's parents lexical environment.
*/

var obj = {
  name: "naman",
  foo: () => {
    console.log(this.name)//prints undefined
  }
}

var obj1 = {
  name: "naman",
  foo: function () {
    console.log(this.name)//prints name
  }
}

obj.foo()
obj1.foo()



/*
Let's see an example where arrow functions remebers reference to this of parents lexical
environment
Scenario: create a function and within it create a setTimeout.
In this timeout if we pass anonymous function then "this" inside this anonymous
fucntion points to global object inc ase of browser. In case of arrow function
it points to this of outer function
*/

var obj3 = {
  name: "naman",
  foo: function () {
    setTimeout(() => {
      console.log("from arrow " + this.name)//naman
    }, 1000)
    setTimeout(function () {
      console.log("from anonymous " + this.name)//undefine
    }, 1000)
  }
}

obj3.foo()


//Arguments object
/*
1. The arguments of a function are maintained in an array-like object. 
Within a function, you can address the arguments passed to it as follows:
2. where i is the ordinal number of the argument, starting at 0. 
So, the first argument passed to a function would be arguments[0]. 
The total number of arguments is indicated by arguments.length.
3. Using the arguments object, you can call a function with more 
arguments than it is formally declared to accept. This is often useful if you 
don't know in advance how many arguments will be passed to the function. 
You can use arguments.length to determine the number of 
arguments actually passed to the function, and then access 
each argument using the arguments object.

For example, 
consider a function that concatenates several strings. 
The only formal argument for the function is a string that 
specifies the characters that separate the items to concatenate. 
The function is defined as follows:
*/


function myConcat(separator) {
  let result = ''; // initialize list
  // iterate through arguments
  for (let i = 1; i < arguments.length; i++) {
    result += arguments[i] + separator;
  }
  return result;
}

console.log(myConcat(', ', 'red', 'orange', 'blue'))
