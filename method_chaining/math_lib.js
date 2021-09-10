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
/* // Create Class
class Math_lib{

    // Addition Function
    add (...numbers){
        let result = 0;
        numbers.forEach(el => result+=parseFloat(el));
        console.log(result.toFixed(2));
        return this;
    }
    
    // Multiplication Function
    multiply(...numbers){
        let result = 1;
        numbers.forEach(el => result*=parseFloat(el));
        console.log(result.toFixed(2));
        return this;
    }
    
    // Division Function 
    div(...numbers){
        let result = 0;
        if(!numbers[1]){  //If arguments value is NaN, Undefined or 0  
            numbers[1]=1;
        }
        result = parseFloat(numbers[0])/parseFloat(numbers[1]);
        console.log(result.toFixed(2));
        return this;
    }
    
    // Subtraction Function  
    sub(...numbers){
        let result=0;
        result = parseFloat(numbers[0])-parseFloat(numbers[1]);
        console.log(result.toFixed(2));
        return this;
    }
}
let m = new Math_lib();
console.log(m.add(12,26).div(6,2).multiply(2,3).sub(2,3)); */


let Obj = {
    result: 0,
    add:function(...numbers){
        for(let i=0;i<arguments.length;i++){
            this.result+=numbers[i];
        }
        return this;
    },
    multiply:function(...numbers){
        for(let i=0;i<arguments.length;i++){
            this.result*=numbers[i];
        }
        return this;
    },
    subtract:function(...numbers){
        for(let i=0;i<arguments.length;i++){
            this.result*=numbers[i];
        }
        return this;
    },
    divide:function(...numbers){
        for(let i=0;i<arguments.length;i++){
            this.result/=numbers[i];
        }
        return this;
    }

};
Obj.add(5, 10).multiply(6).subtract(10, 30, 8).divide(2);
console.log(Obj.result);