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
// Create Class
class Math_lib{

    // Addition Function
    add (...numbers){
        let result = 0;
        numbers.forEach(el => result+=parseFloat(el));
        return result;
    }
    
    // Multiplication Function
    multiply(...numbers){
        let result = 1;
        numbers.forEach(el => result*=parseFloat(el));
        return result;
    }
    
    // Division Function 
    div(...numbers){
        let result = 0;
        if(!numbers[1]){  //If arguments value is NaN, Undefined or 0  
            numbers[1]=1;
        }
        result = parseFloat(numbers[0])/parseFloat(numbers[1]);
        return result;
    }
    
    // Subtraction Function  
    sub(...numbers){
        let result=0;
        result = parseFloat(numbers[0])-parseFloat(numbers[1]);
        return result;
    }
}
