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