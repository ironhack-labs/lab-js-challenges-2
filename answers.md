1. Challenge 1:
  - Answer: b "xyz" and "xyz"

  - Explanation: Foo is defined with "let" which enables the value to be modified without any restriction, and we can see that inside the function it value was changed therefore the compiler compiles the new assigned value.


2. Challenge 2:
  - Answer:c 10 and 1
  - Explanation: almost same with the first question but in this case the "a" value was changed inside the function and passed as an arguement to that function while the global a remains thesame.


3. Challenge 3:
  - Answer:c "Hi there!"
  - Explanation:In Js traditional function basically we can invoke first and then write the function but the compiler will definately check the function first meanwhile this will not work if we're to do the same with arrow function.


4. Challenge 4:
  - Answer:c { num: 90 }
  - Explanation: the object reference can't be changed therefore b is having the same reference and only changing the value of a object. if we need to copy a object to b then we may consider cloning and shadowing as an option.


5. Bonus - Challenge 5:
  - Answer:c { name: "Bob", age: 10 } and { name: "Ada", age: 20 }
  - Explanation:A bit confusing but after running the code, going back to todays lesson i'm clear with the object reference and how this works.
