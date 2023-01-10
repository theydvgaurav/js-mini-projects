/* 
impure function

let x = 4;

function addNum(y) {
  console.log(x + y);
}

addNum(2); 
*/

/* 
pure function - functions that give same output on some 
particular input 
*/

function addNum(a, b) {
  return a + b;
}

console.log(addNum(2, 3));

/* 
Side Effects - Side effects are anything that is outside of
 the scope of a normal pure function. Example - Logging something
 on console.
 */

const Student1 = {
  name: "Gaurav Yadav",
  age: 22,
};

/*

// Mutable Code

const Student2 = Student1;
console.log(Student1, Student2);

Student2.name = "Deepak Kumar";
console.log(Student1, Student2);

Output:

{ name: 'Gaurav Yadav', age: 22 } { name: 'Gaurav Yadav', age: 22 }
{ name: 'Deepak Kumar', age: 22 } { name: 'Deepak Kumar', age: 22 }

Because the object Student2 and Student1 has same reference, so when 
I try to change the property of one of the Objects, the property of 
that reference changes, and hence we see this output.
 
*/

// Immutable Code

// Student2 = Object.assign({}, Student1);
Student2 = { ...Student1 };

Student2.name = "Deepak Kumar";
console.log(Student1, Student2);

/*
Output:

{ name: 'Gaurav Yadav', age: 22 } { name: 'Deepak Kumar', age: 22 }
 
*/
