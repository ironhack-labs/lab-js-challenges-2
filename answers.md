1. Challenge 1:
  - Answer: xyz and xyz
  - Explanation: foo gets assigned the value of "xyz" in the function. The function is then once called, and later we print with console log the value of foo(global) again, which is still xyz.


2. Challenge 2:
  - Answer: 10 and 1
  - Explanation: The function takes as an argument a, which is locally set to 10 in the function. Console log will print 10 inside the function, and 1 outside of it due to scope.


3. Challenge 3:
  - Answer: "Hi there!"
  - Explanation: function is executed, which console logs hi there.


4. Challenge 4:
  - Answer: { num: 90 }
  - Explanation: const b holds references (not pointer no ?) to the object a,so they hold the same values. we set the property num of the b object to 90 and console log the object a, which also changes 
    the property num of the a object, because they are both referencing the same object.


5. Bonus - Challenge 5:
  - Answer: { name: "Bob", age: 30 } and { name: "Ada", age: 20 }
  - Explanation: first object just prints out as declared, second one gets set initial values, and then modified line by line, hence this gets printed out. 
