1. Challenge 1:
  - Answer: b) "xyz" and "xyz"
  - Explanation: El output será "xyz" y "xyz" porque dentro de bar() se cambia la variable global foo a "xyz" y ese cambio se mantiene fuera.


2. Challenge 2:
  - Answer: c) 10 and 1
  - Explanation: El output será 10 y 1 porque el a de la función es otra variable (parámetro) y no cambia el a de fuera.


3. Challenge 3:
  - Answer: c) "Hi there!"<>
  - Explanation: El output será "Hi there!" porque sayHi es una función declarada y se puede llamar antes de escribirla.


4. Challenge 4:
  - Answer: c) { num: 90 }
  - Explanation: El output será { num: 90 } porque a y b apuntan al mismo objeto, y al cambiar b.num también cambia a.num.


5. Bonus - Challenge 5:
  - Answer: rabbit1: { name: "Bob", age: 10 }
            rabbit2: { name: "Ada", age: 20 }
  - Explanation: El output será ese porque obj.age = 10 cambia rabbit1, pero luego obj = {...} crea un objeto nuevo y ese es el que se guarda en rabbit2.
