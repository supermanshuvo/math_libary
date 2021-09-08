/* 
  # Rezaul Karim
   -------------


  ---------------
   Maths Library
  ---------------
  # Addition
  # Multiplication
  # Division
  # Subtraction
*/

// Addition Function
let add = (...numbers)=>{
    let result = 0;
    numbers.forEach(el => result+=parseFloat(el));
    return result;
};

// Out put the value of add function
console.log(add(1,2,3,3));

// Multiplication Function
let multiply = (...numbers)=>{
    let result = 1;
    numbers.forEach(el => result*=parseFloat(el));
    return result;
};

// Out put the value of Multiplication
console.log(multiply(6,2,3));

// Division Function 
let div = (...numbers)=>{
    let result = 0;
    if(!numbers[1]){
        numbers[1]=1;
        console.log(numbers[1])
    }
    result = parseFloat(numbers[0])/parseFloat(numbers[1]);
    return result;
};

// Out put the value of Division
console.log(div(4,2))

// Subtraction Function  
let sub=(...numbers)=>{
    let result=0;
    result = parseFloat(numbers[0])-parseFloat(numbers[1]);
    return result;
}

// Out put the value of Subtraction
console.log(sub(5,6));