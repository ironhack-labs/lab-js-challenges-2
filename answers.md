1. Challenge 1:
  - Answer: b
  - Explanation: Because the function replaces the original value of foo with a new one, without redefining it.


2. Challenge 2:
  - Answer: c
  - Explanation: Inside the function we're only modifying the local a instead of the global one. This is because the modification applies to the value of a given in the argument.


3. Challenge 3:
  - Answer: c 
  - Explanation: Because it doesn't matter when the function is called upon.


4. Challenge 4:
  - Answer: c
  - Explanation: Because b = a refers to a position and not the value. So when the b.num = 90 is called, it changes the value at the original position.


5. Bonus - Challenge 5:
  - Answer: c
  - Explanation: Like in Challenge 2, the obj.age only changes the value of the obj argument because it's a copy of a reference. Which means the the age value in the rabbit 1 object does change. The obj = { name: "Ada", age: 20 }; reassigns the local obj a new object which doesn't affect rabbit 1. Because of the return obj we then get rabbit 2.
