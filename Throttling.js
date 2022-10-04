/* 
1. We have seen one mehtod of limiting API calls to server i.e Debouncing
2. Now we will see about Throttliing 
3. Throttling says that if number of API calls are made then only those will succeed who 
are t milli second time apart. But debounce days if number of API calls are made. only
those will be executed when API call is made and no other call is made till t millisecond

Lets see this with an example

Let's say a user takes 50 ms to type a character and t is 300 ms
We have an autocomplete suggester that makes API call based on keyup event

User Types: samsung galaxy note 5

Case 1: throttling
a. occurs at start that is for t
b. occurs at galaxy becuase in typing 6 characters 300ms passed
Case 2: throttling since between no two event 300ms passed so API occurs after he has
typed everything

*/


//Implementation of Throttle
counter=0
counter2=0
printFn=(name)=>{
    console.log("value of "+name+" is"+counter+" but cliked "+counter2+" times")
}

throttleImpl=function(fn,delay)
{
    let flag=true;
    return function(...args)
    {
        counter2++;
        context=this
        if(flag)
        {
            fn.apply(context,args)
            counter++
            flag=false
            //now only make this true after delay ms
            setTimeout(()=>{
                flag=true
            },delay)
        }
    }
}

Throttle=throttleImpl(printFn,300)