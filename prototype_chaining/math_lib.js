/* 
  # Rezaul Karim
   -------------
   
  ---------------
   Maths Library
  ---------------
  # Addition
  # Multiplication
  # Subtraction
  # Division
*/
function Math_lib(){}
Math_lib.prototype.result = 0;
Math_lib.prototype.add = function(...numbers){
    for(let i=0;i<arguments.length;i++){
        this.result+=numbers[i];
    }
    return this;
}
Math_lib.prototype.multiply = function(...numbers){
    for(let i=0;i<arguments.length;i++){
        this.result*=numbers[i];
    }
    return this;
}
Math_lib.prototype.subtract = function(...numbers){
    for(let i=0;i<arguments.length;i++){
        this.result-=numbers[i];
    }
    return this;
}
Math_lib.prototype.divide = function(...numbers){
    for(let i=0;i<arguments.length;i++){
        this.result/=numbers[i];
    }
    return this;
}
// console.log(Math_lib);
const math = new Math_lib();
math.add(5, 10).multiply(6).subtract(10, 30, 8).divide(2);
console.log(math.result);
