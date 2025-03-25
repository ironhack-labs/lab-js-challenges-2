1. Challenge 1: 
  - Answer: b
  - Explanation: foo está en el scope global. Dentro de bar(), se reasigna, no se redeclara. Así que modifica directamente la variable global.

2. Challenge 2:
  - Answer: c
  - Explanation: Dentro de example, el parámetro a sombrea la variable global.
Cambiar a dentro de la función no afecta a la variable externa.


3. Challenge 3:
  - Answer:  c
  - Explanation: Las declaraciones de funciones son hoisted (elevadas) completamente. Así que sayHi está definida al momento de ser invocada.


4. Challenge 4:
  - Answer: c
  - Explanation: a es constante, pero los objetos son mutables. b apunta al mismo objeto que a.


5. Bonus - Challenge 5:
  - Answer: c
  - Explanation: obj.age = 10 modifica el objeto original (rabbit1). Despúes, obj se reasigna a un nuevo objeto, pero eso no afecta a rabbit1. Y rabbit2 apunta al nuevo objeto retornado.
