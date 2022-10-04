/*
Functions which take another functions as input or return them is known as 
higher order function
*/
/*
Lets see how prescenece of higher order fucntion gives us feature of 
code reusability
Scenario: We are given an array of radius and for each one them we need to calculate
the area and the circumference of circle
*/

radiusArr=[1,2,3,4]

var calculateArea=(radius_array)=>{
    let ans=[]
    for(let i=0;i<radius_array.length;i++)
    ans.push(Math.PI*radius_array[i]*radius_array[i]);
    return ans;
}

var circCum=(radius_array)=>{
    let ans=[]// this is line repeated same as above
    for(let i=0;i<radius_array.length;i++)//same as above
    ans.push(2*Math.PI*radius_array[i]);//only different
    return ans;//same as above
}

console.log(calculateArea(radiusArr),circCum(radiusArr))

/*
We see lot of code being repeated so let's see a better way to do it.
*/

//Calculation class to which we pass logic. Logic is only thing that changes

var Calculate=(radius_array,logic)=>{
    let ans=[]// this is line repeated same as above
    for(let i=0;i<radius_array.length;i++)//same as above
    ans.push(logic(radius_array[i]));//only different
    return ans;//same as above
}

var areaLogic=(radius)=>{
    return Math.PI*radius*radius;
}

var circumLogic=(radius)=>{
    return 2*Math.PI*radius
}


console.log(Calculate(radiusArr,areaLogic),Calculate(radiusArr,circumLogic))// same answer
//as unstructred code