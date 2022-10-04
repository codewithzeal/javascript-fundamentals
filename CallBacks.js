/*
Callbacks comes into picture beacuse of prescence of first calss functions

*/


function x(param1)
{
    console.log("I am x")
    param1()
}

x(function y()
{
    console.log("I am y and contents in me will be runned by x")
})


/*
Here when x wants y executes
*/

/*
Javascript ha just one main thread. That is single call stack. So if x has heavy operation
and we want to execute y just after x. So we can't wait for x to finish and y to begin
we say hey x take y and when you are done excute y. In meanwhile Ill do other work.
So we should never write a code that blocks main thread, rather use async methods.
*/

//Example of closure in even handlers
//We often use dom event handlers lets see how it works

document.getElementById("clickme").addEventListener("click",function abc(){
console.log("button clicked")
})
/*
abc is passed as parameter to eventhandler. Browser genrates this 
event and abc is called
thus here program does not wait till button is pressed rather works when needed
*/

//lets see an example of using closure along with event handle
// this is to demonstrate a better coding skills

function attachEventListener()
{
    count=0;
    document.getElementById("clickme").addEventListener("click",function abc(){
            count++
            console.log(count)
        })
}

