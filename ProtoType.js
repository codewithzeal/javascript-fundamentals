/*
1. Whenever we create any javascript object. JS attaches some properties to it.
2. This prototype object is attached to anything that is created in javascipr
3. Based on type of object created this proto object has properties which can
be accessed using '.' operator
*/

/*
So lets say we create an array object
*/

arr=[1,2,3]
console.log(arr.__proto__)// we can see the properties being attached
//now in case of array this proto further has a proto object
console.log(arr.__proto__.__proto__)// This is what we call prototype chain

// We see that arr is an object of Array and obejct attached to it as
//Array.prototype
//Array.prototype further has Object.prototype

/*
1. With this we have a thing called prototypal inheritance.
*/

//Bad code practice for demo only

object1={
    name:"naman",
    city:"vns",
    getIntro:function (){
        console.log(this.name+" from "+this.city)
    }
}

object1.getIntro()// prints naman from vns

//lets create another object
object2={
    name:"hanuman",
}
//Lets make object 2 inherit object 1
object2.__proto__=object1
// now object 2 has access to methods and variables of object1

object2.getIntro()//Hanuman from vns

/*
1. The code above shows what we call as prototypal inheritance.
The method shown above causes serious performance issues and should not be used
There are other methods to do so.
2. In above example when we access any properties of object 2. It first looks into
its own properties, if it is present it uses it, or looks into properties of
object 1
*/
