1. Challenge 1:
  - Answer: B
  - Explanation: the bar function reassigns the variable and then prints it, so first xyz, then the variable is printed again, but since it's already been reassigned, it's xyz again.


2. Challenge 2:
  - Answer: A
  - Explanation: same as challenge 1, even if the variable is used as a parameter, it's been reassigned before being printed a second time. // correction : I ran the code and saw that being a parameter it recreates a copy of a so the correct answer is C


3. Challenge 3:
  - Answer: C
  - Explanation: A function runs first, therefore even if we call it before being declared, it can return something.


4. Challenge 4:
  - Answer: C
  - Explanation: we made a shallow copy that reassigned only top-level elements from the object


5. Bonus - Challenge 5:
  - Answer: C
  - Explanation: since the function modify the original, the first log is bob age 10 because the age is replaced by the function, the second rabbit is ada 20 because it's declared like this in the function
