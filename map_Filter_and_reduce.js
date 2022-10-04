//Map
/*
Map: It maps each array value to a logic
Scenario: lets take array of radius an calculate area for each of it
*/
var arrRadius=[1,2,3,4]
var areaLogic=(radius)=>{
    return radius*Math.PI*radius;
}
var mapResult=arrRadius.map(areaLogic)
console.log(mapResult)


//Filter 
/* 
Filter: Used to filter out values from a container based on a passed boolean logic function
Scenario: Filter out even values from an array
*/

var MixedAraay=[1,3,2,6,5,4,9,11,12,14]

var PickEvenLogic=(n)=>{
    return n%2===0
}

var FilterResult=MixedAraay.filter(PickEvenLogic)
console.log(FilterResult)

//Reduce
/*
Reduce: used when we want single value out of multiple values of a container
based on some operation
Scenario: find sum of an array
*/

var addArray=[1,2,3,4,5,6]
var addLogic=(acc,curr)=>{
acc=acc+curr
return acc
}
var Reduceresult=addArray.reduce(addLogic,0)
console.log(Reduceresult)
/*
Here acc acts as acumalator of result and curr acts as current value being processed
and 0 is passed as initial value of accumlator
*/