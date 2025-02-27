1. Challenge 1:

- Answer: b
- Explanation: foo are a global variable

2. Challenge 2:

- Answer: c
- Explanation: function change "a" because takes a argument, and overwrite "a" after. But in this case "a" inside function are a local variable. so after call function, "a" are still egal to 1

3. Challenge 3:

- Answer: c) "Hi there!"
- Explanation:function can be call before declaration

4. Challenge 4:

- Answer: c) { num: 90 }
- Explanation: "b" are not a deep copy so, if property insade "b" change, it's change the originale "a" too.

5. Bonus - Challenge 5:

- Answer:c (again)
- Explanation: inside the function, we change the property age of rabbit1 to 10. Then, obj is reassigned to a new object: { name: "Ada", age: 20 }. This reassignment breaks the reference to the original object, it only changes what obj points to locally within the function. the new object is returned.
