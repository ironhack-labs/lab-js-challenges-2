1. Challenge 1:
  - Answer: b
  - Explanation: In the function `bar()` we are able to reassigned the variable `foo` with the value `xyz`, the variable `foo` is declared in the parent scope of the function `bar()`.


2. Challenge 2:
  - Answer: c
  - Explanation: The value of the variable `a` declared in the global scope does not change. In the function `example()` we are just reassigning the value of the parameter `a`, and passing the variable `a` in the global scope as an argument.


3. Challenge 3:
  - Answer: c 
  - Explanation: The function `sayHi()` are hoisted. The function is invoked before it is declared in the script. Works with this function expression.


4. Challenge 4:
  - Answer: c
  - Explanation: We are assigned the object's reference stored in the variable `a` to `b`. We are the duplicating the reference's object but not the object itself. We have now two variables pointing to the same object.


5. Bonus - Challenge 5:
  - ~~Answer: d~~ ==> <mark style="background:green;color:white"> Correct answer: c </mark>
  - Explanation: ~~In the function `magicHat(obj)`, we are trying to reassigned a variable `obj` that does not exist in the scope of the function and in the global scope too. When evoking the function it will return a `ReferenceError`.~~
  - <mark style="background:green;color:white"> Correct explanation: </mark>: `rabbit1` is passed to the function by reference. Therefore, `obj.age = 10` directly modifies the original object shared with `rabbit1`. However, `obj = { name: "Ada", age: 20 }` creates a new object and only changes the local reference `obj`, without affecting `rabbit1`.

