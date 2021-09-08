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

// Addition

let add = (...numbers)=>{
    let sum = 0;
    numbers.forEach(el => sum+=parseFloat(el));
    return sum;
}

console.log(add(1,2,3,3));