1. Challenge 1:
  - Answer: a
  - Explanation: la variable foo está definida con Let en el scope global por eso cuando es llamada fuera de la función mantiene su valor original Dentro de la función bar se cambia el valor de foo y cuando llamamos a bar aparece su nuevo valor.


2. Challenge 2:
  - Answer: c
  - Explanation: el primer console.log example(a) nos da el valor de la a que está dentro del scope de la función example. 
  El segundo console.log(a) obtiene el valor de a que está en el scope general.

3. Challenge 3:  //preguntar a Carlos
  - Answer: b  pero si le pasamos el code pen da la respuesta c
  - Explanation: la razón es por el hoisted
There’s a slight difference between var and let when it comes to hoisting: variables declared with let are hoisted to the top as well, but they are not initialized. So using var we would get the value of undefined, but using let we get a Reference Error.

4. Challenge 4:
  - Answer: c
  - Explanation: shadowing


5. Bonus - Challenge 5:
  - Answer:
  - Explanation:
