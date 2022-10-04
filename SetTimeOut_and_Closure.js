/* 
Let us see an example 
*/

function x()
{
    var i=1;
    for(;i<6;i++)
    {
        setTimeout(()=>{
            console.log(i)
        },i*1000);
    }
    console.log("See what happens")
}

x()

/* this prints
6
6
6
6
6
This is because setTimeout was registered in call stack and when for loop finished
there were 5 setTimeout  registered. The console.log happend
Finnaly when gec finished. setTimeout starts executing.
Now setTimeout was passed an arrow function which console logs i.
now this reference is in global space.
When for loops finished last value of i was 6. 
So setTimeout started from there
*/

/*
The solution to this is using let variable. For let variable each for loop
registers a setTime, each having their own block scopr for i
*/