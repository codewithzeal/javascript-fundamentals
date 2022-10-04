let counter1=0;
let counter2=0;
function getData1()
{
    
    console.log("from counter 1 "+counter1++)
}
// to demonstatre how to convert this argument accepting function to debounce function
var getData2=(name)=>{
    
    console.log("from "+name+" "+counter2++)
}

/* 
1. We want this debounce to return a function which does our work but is also debounced
This is basically a functional transform of normal function to debounce function
2. We return a function that remembers if a timerID was attached to it
3. The function we return must be able to take arguments
4. If timerId is present clear that particular callback and start a new one
5. If a time Id is not cleared then execute the desried function with the arguments
*/
var debounce1=function(fn,delay)
{
    let timerId// This timer Id becomes closure context of function being returned
    //So this timerId acts as static global variable for function being returned
    //when function access this value it sees its last value set in its parent context
    return function(...args)//return a function capable of taking n argument
    {
        let context=this//to call apply via context of this fucntion
        if(timerId)// if timer exists clear that one
        clearTimeout(timerId)
        timerId=setTimeout(()=>{fn.apply(context,args)},delay)
        
    }
}
BetterWay=debounce1(getData2,300);//This registers a function which now has a timer
//variable bound to it and will work accordingly


