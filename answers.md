1. Challenge 1:
  - Answer: b
  - Explanation: Because first, it will excecute the function which will modify the external foo and show the inner foo "xyz" then, the last console.log will show the external foo that has been modified to "xyz"


2. Challenge 2:
  - Answer: c
  - Explanation: Because the function shows the inner "a" = 10. Then the external console.log shows the external "a" = 1


3. Challenge 3:
  - Answer: c
  - Explanation: Because even if the function is called before the function itself, it "reads it" and excecutes it


4. Challenge 4:
  - Answer: c
  - Explanation: Because it is a shallow modification, this means, b is a reference of a.


5. Bonus - Challenge 5:
  - Answer: c
  - Explanation: First, rabbit1 is declared and has name:Bob and age:30. Then, the function is called. "obj.age = 10" modifies the rabbit1's age. Also, rabbit2 is declared with the function's second line "obj = {name:Ada and age:20}". This doesn't modify again rabbit1 because it is a new variable.

