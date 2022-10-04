/*
Let us first look at the architecture of javascript
1. The call stack is inside js engine.
2. js engine is inside browser
3. Now by default not many functionalities are present within call stack
such as timers, even handlers, local-storage. 
4. Thus when we want to use those funtions we make use of webAPIs.
5. We pass a callback function to those APIs. These callbacks functions are executed
when those APIs finish their work
6. There is event loop which monitors callback queue and call stack.
7. When call stack is empty event loop pushes a registered call back fucntion into
call stack for execution.
*/

/*
1. Now there is one more queue present that the event loop monitors.
2. That is called microtask queue.
3. This queue has priority over call back queue.
4. callbacks which result cause of promises and mutation observer are placed in micro
task queue
5. 
*/


console.log("start")
//here the callback funtion uses callback queue
setTimeout(function abc(){
console.log("time out fucntion")
},1000)
//This callback xyz gets placed in microtask queue.
fetch("url").then(function xyz(){
console.log("I get placed in microtask queue")
})

/*
1. Starvation. There is a possibility that, when a microtask callback finishes
it generates another microtask callback that gets placed in microtask queue.
So if this chain continues, microtask queue is always filled and 
callback queue never gets a chance. this blocking of callback queue is called
starvation.
*/