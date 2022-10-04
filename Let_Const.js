/*
1. They are hosted but could be in temporal dead zone for the time being
2. They are stored in a seperate memory space and are not attached to window object
3. We cannot access that space before initialization
4. So the space between declaration and initialization is temporal dead zone.
5. We can't access those in that zone.
6. We cannot redeclare a let variable
*/

//console.log(a) gives error. That cannot accessa before intialization.
console.log(b)//undefined
let a=10;
var b=10;