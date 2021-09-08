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
}

// Out put the value of add function
console.log(add(1,2,3,3));