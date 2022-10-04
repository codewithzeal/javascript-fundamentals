/*
1. Block: block is a part of program enclosed within paranthesis where only one 
instruction was supposed to be present
2. When using block. Let and const are hoisted in memory space called block scope.
*/

var a=100
let b=50// this b is in seperate space than block space
const c=90;
{
    var a=10;// this a shadows outer a
    let b=20;
    const c=30;
    console.log(a,b,c)// 10 20 30
}
console.log(a,b,c)//10 50 90

/*
This thing applies when using a function also because we 
use curly braces that forms a block
*/

/*Shadowing cases*/


//Case 1
var m=10;
{
    let m=10;//valid shadowing
    
}

//case 2
/*
let p=10;//illegal statements
{
    var p=10;// this a is in global space and outer a is in non block space
    // nd global space and non-block let cannot collide
}
*/

//case 3
let q=20
{
    let q=10;//legal shadowing
}

// case 4
var r=10;
{
    let r=10;//valid shadowing
    {
        var r=220;// illegal 
        console.log(r)// refers to outer a
    }
}

