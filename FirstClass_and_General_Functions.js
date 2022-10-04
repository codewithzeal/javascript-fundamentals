/*
1. First class function means it can be used as a value
*/

//Function statement
function a()
{

}
//function expression
var z=function b()
{

}

//annonymous function
// function ()
// {

// } only used when using as value

//Named function expression
y= function c()
{
    c()
}
c()//illegal
y()//legal