/*
This is a concept of functional programming where we tranform a function call
of the form fn(a,b,c) to fn(a)(b)(c)
*/

/*
There are two ways of doing it:
1. Closures
2. bind method
*/

//Lets perform curry with a function having two arguments

function sum1(a,b)
{
    return a+b;
}

function curry1(fn)
{
    return function(a)//curry first argument
    {
        return function(b)
        {
            //inside here we have both a and b and defination of sum
            //so we call sum using a and b
            return fn(a,b);
        }
    }
}

var curriedSum=curry1(sum1)//transforming sum to curry-like

console.log(curriedSum(1)(2))

// We can also get fucntions just by passing one argument
//Lets say we pass only one argument, say '20' now we have with ourseleves a function
// which takes one argument and returns value adding 20 to it

addToMe20=curriedSum(20);
console.log(addToMe20.toString())// to see the defination of function returned
console.log(addToMe20(1))


//Apart from closures we can achieve this via binding also

function sum2(a,b)
{
    return a+b;
}

var curry2=sum2.bind(this,10)
console.log(curry2(2))// here we pass 2 which is added to 10 and returned


/*
Lets see a generalized form of curryTransformed which does not depend upon 
how many arguments or how the arguments are passed
*/


function curry3(fn)
{
    return function curried(...args)
    {
        //here args acts as parameters which are passed
        //Now if passed parameters are enough to call fn we do and return value
        if(args.length>=fn.length)
        {
            return fn.apply(this,args)
        }
        else
        {
            //we return function defination for remaning arguments
            //i.e if 3 is required and one is passed
            //We return function defination where first parameter is fixed
            //and remaining two is required
            return function(...args2)
            {
                return curried.apply(this,[...args2,...args])
            }
        }
    }
}


function sum3(a,b,c)
{
    return a+b+c;
}

let sumCurry=curry3(sum3)

console.log(sumCurry(1,2,3))
console.log(sumCurry(1)(2).toString())
console.log(sumCurry(1)(2)(3))
console.log(sumCurry(1,2)(3))