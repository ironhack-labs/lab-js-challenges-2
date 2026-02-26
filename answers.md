1. Challenge 1: 
  - Answer: xyz and xyz
  - Explanation: when we call the function bar, i console.logs foo after having it´s value reassigned to xyz, so we first get xyz, and then the code run the final console.log at the, loggin the new value too, that is xyz.


2. Challenge 2:
  - Answer: 10 and 1
  - Explanation: since "a" inside de function is seen as a parameter and not as the actual variable let a = 1, is just a value that could be returned or console.logged like in this case, so as the function says, we console.log(a) which value is alwyas 10, and then we console.log the variable a = 1


3. Challenge 3:
  - Answer:  "Hi there!"
  - Explanation: We get that logged becauses of how hoisting works on JS, basically the code takes that function up to the beggining of the code first, so then can be called anywhere in the code


4. Challenge 4:
  - Answer: { num: 90 }
  - Explanation: when you equal b to a, the code is not only copying the values but also the reference in memory of the object a, so by having the same reference, when you change a valuo within the object it will affect both variables 


5. Bonus - Challenge 5:
  - Answer:  { name: "Bob", age: 10 } and { name: "Ada", age: 20 }
  - Explanation: First, Wwhen we assing this value to rabbit 2 const rabbit2 = magicHat(rabbit1); we´re passing the rabbit1 reference of the object to the function, then when the function does this first step obj.age = 10 this is affecting the value of rabbit1 object, then in the final step, the function just returns obj = { name: "Ada", age: 20 } and that is the value that rabbit2 takes 
