/*
1. They are ways in which we can call a function by passing a reference to this keyword.
2. This keyword is used by function to which we pass the reference of an object
3. Call and apply differ in terms of how we pass parameters
4. Bind differs beacuse it does not call the fucntion rather binds the passed
reference object to given fucntion and return that function after binding object
5. They make possible a feature known as function borrowing
*/

var functionBorowingObject={
    val:"Some data",
    printThis:function(uname,lname)
    {
        console.log(this.val+" called by "+uname+" "+lname)
    }
}

var object2={
    val:"some data 2"
}

//We want to print val of second object for which we borrow function of object
//above

functionBorowingObject.printThis.call(object2,"naman","singh")
//In above the first parameter is reference to this keyword
// From second parameter it is additional paramter the function requires which is uname

//In using apply we pass aditional paramter as list
functionBorowingObject.printThis.apply(object2,["naman","singh"])


//Bind does not call but returns a function in which this is replaced why passed object

var resultFunction=functionBorowingObject.printThis.bind(object2,"naman")
resultFunction("singh")//we can pass any aditional required param here also

