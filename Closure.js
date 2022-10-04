/*

1. Closure: function along with its lexical scope forms closure
2. 
*/

/*example*/

function x()
{
    var a=7;
    function y()
    {
        a++;
        console.log(a);
    }
    return y;
}
//console.log(a)//cannot access
z=x()
z()//prints 8
z()//9
s=x()
s()//8
/* Thus we see in a way x encapsulated variables and methods. and via method we accessed
"a" as if it were private variable. And each z and s are seperate instances of function y
*/


/* Uses of closures

1. Modular design pattern
2. Currying
3. Functions like once.
4. Memoize.
5. Maintaining state in async world.
6. setTimeouts
7. Iterators and many more

*/
