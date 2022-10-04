/*Few ways to declare object*/

//Method 1
var obj1=new Object()
obj1.property1="value method1"//setting properties

//Method 2
var obj2={
    property1:"value method2"
}

//Method 3
function createObject()
{
    this.property1="value method3";
}

var obj3=new createObject()
console.log(obj1.property1,obj2.property1,obj3.property1)


//ways to set and access property for an object

obj3['property2']="value 2 from object 3" //using array assign
console.log(obj3.property2)//was assigned like above but can be accessed like this too
//console.log(obj3['property 2'])

let propertyVar="property2" //using variable
obj2[propertyVar]='value 2 from object 2'

console.log(obj2.property2)//prints value given
console.log(obj2.propertyVar)//undefined


//Object.keys(obj) return keys of object obj

var object={
    a:'val 1',
    b:'val 2',
    c:'val 3'
}

console.log(Object.keys(object))


//for in loop for objects

for(const property in object)
{
    console.log(`${property}:${object[property]}`)
}


/* 
Defining properties of an object:
    You can add a property to a previously defined object type by 
    using the prototype property. This defines a property that is 
    shared by all objects of the specified type, rather than by just 
    one instance of the object. The following code adds a color 
    property to all objects of type Car, and then assigns a value 
    to the color property of the object car1.

    Example:
*/

function Car()
{
    this.name="car-demo"
}

car1=new Car()
car2=new Car()
Car.prototype.color = null;
car1.color = 'black';
console.log(car1.color,car2.color)//prints black and null

/* 
We can add or modify existing properties to an object throug a inbuilt function
*/
const object1 = {};
Object.defineProperties(object1, {
  property1: {
    value: 42,
    writable: true
  },
  property2: {}
});
console.log(object1.property1);

//DELETING A PROPERTY

/* 
You can remove a non-inherited property by using the delete operator. 
The following code shows how to remove a property.
Example:
*/

// Creates a new object, myobj, with two properties, a and b.
const myobj = new Object();
myobj.a = 5;
myobj.b = 12;

// Removes the a property, leaving myobj with only the b property.
delete myobj.a;
console.log ('a' in myobj); // output: "false"


//GETTERS AND SETTERS
const myObj = {
    a: 7,
    get b() {
      return this.a + 1;
    },
    set c(x) {
      this.a = x / 2;
    }
  };
  
  console.log(myObj.a); // 7
  console.log(myObj.b); // 8 <-- At this point the get b() method is initiated.
  myObj.c = 50;         //   <-- At this point the set c(x) method is initiated
  console.log(myObj.a); // 25
  
/* 
    Adding getter setter after object declaration
*/

var myobj1={a:0}

Object.defineProperties(myobj1,{
    b:{get(){return this.a+1}},
    c:{set(x){this.a=x}}
})

myobj1.c=10
console.log(myobj1.a,myobj1.b)