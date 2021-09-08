/* 
  # Rezaul Karim
   -------------


  ---------------
   Maths Library
  ---------------
  # Addition
  # Subtraction
  # Multiplication
  # Division
*/

// Addition Function
let add = (...numbers)=>{
    let sum = 0;
    numbers.forEach(el => sum+=parseFloat(el));
    return sum;
};

// Out put the value of add function
console.log(add(1,2,3,3));

// Multiplication Function
let multiply = (...numbers)=>{
    let multiplication = 1;
    numbers.forEach(el => multiplication*=parseFloat(el));
    return multiplication;
};

// Out put the value of Multiplication
console.log(multiply(6,2,3));