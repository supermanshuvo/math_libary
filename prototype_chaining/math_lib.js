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
function Math_lib(){
    let math = Object.create(Math_lib.prototype);
    return math;
}
Math_lib.prototype={
    result : 0,
    add(...numbers){
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

}
// console.log(Math_lib.prototype);
const math = Math_lib();
math.add(5, 10).multiply(6).subtract(10, 30, 8).divide(2);
console.log(math.result);