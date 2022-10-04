/* 
1. Classes are a template for creating objects. 
    They encapsulate data with code to work on that data. 
    Classes in JS are built on prototypes but 
    also have some syntax and semantics that are not shared with ES5 class-like semantics.

2.  Classes are in fact "special functions", and just as you can 
    define function expressions and function declarations, 
    the class syntax has two components: class expressions and class declarations.

3. Hoisting
    An important difference between function declarations and class declarations 
    is that while functions can be called in code that appears before they are defined, 
    classes must be defined before they can be constructed. 
    Code like the following will throw a ReferenceError:

    const p = new Rectangle(); // ReferenceError

    class Rectangle {}
4. A class expression is another way to define a class. 
    Class expressions can be named or unnamed. 
    The name given to a named class expression is local to the class's body.    
*/
let Rectangle = class {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  };
  console.log(Rectangle.name);
  // output: "Rectangle"
  
  // named
  Rectangle = class Rectangle2 {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  };
  console.log(Rectangle.name);
  // output: "Rectangle2"


/*
5. Strict Mode: The body of a class is executed in strict 
    mode, i.e., code written here is subject to stricter syntax for increased performance, 
    some otherwise silent errors will be thrown, 
    and certain keywords are reserved for future versions of ECMAScript.

6. Constructor: The constructor method is a special method for creating and 
    initializing an object created with a class. 
    There can only be one special method with the name "constructor" in a class. 
    A SyntaxError will be thrown if the class contains more than 
    one occurrence of a constructor method.

  Example: Let's see a simple example of class and it's properties and methods
*/

class Example
{
  constructor(x,y)
  {
    this.x=x
    this.y=y
  }

  displayProperties()
  {
    console.log(this.x,this.y)
  }

  get sum() //setting getters for a class
  {
    return this.x+this.y
  }

  set X(x)
  {
    this.x=x
  }

  set Y(y)
  {
    this.y=y
  }
}

const obj=new Example(1,2);
obj.displayProperties()
console.log(obj.sum)
obj.X=3
obj.Y=4
console.log(obj.sum)


/* 
7. Static method and properties
    The static keyword defines a static method or property for a class. 
    Static members (properties and methods) are called without instantiating 
    their class and cannot be called through a class instance. Static methods 
    are often used to create utility functions for an application, 
    whereas static properties are useful for caches, fixed-configuration, 
    or any other data you don't need to be replicated across instances.
*/

class Example2
{
  constructor()
  {

  }

  static var1="static variable"
  static fn1()
  {
    return "Static fn"
  }
}

const obj2=new Example2()
console.log(obj2.var1,Example2.var1,Example2.fn1())//undefined static variable Static fn

