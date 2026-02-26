1. Challenge 1:
  - Answer: b
  - Explanation: Se ve dos veces en consola xyz porque no estamos creando una variable dentro de la función, sino modificandola. Al no declarar la variable dentro de la función, el código busca la variable fuera, ya que es un scope global.


2. Challenge 2:
  - Answer: c
  - Explanation: La consola pasa 10 y 1, ya que a la función example() le estamos pasando la variable a, lo que hace que se guarde dentro de la propia función, por lo tanto, al modificar "a" dentro de la función, se modifica el parámetro local, no el global.


3. Challenge 3:
  - Answer: c
  - Explanation: Se ejecuta correctamente la función sayHi con el mensaje Hi there! porque JS "manda" las funciones arriba del código al ejecutarse, por lo tanto, primero lee la función y luego la ejecuta, aunque en el código visualmente esté escrito al revés.


4. Challenge 4:
  - Answer: c
  - Explanation: Al declarar la variable a, se crea un objeto en memoria, y al decir que b = a, no se está copiando el valor, sino la referencia del objeto en memoria, es decir, ambos apuntan hacia el mismo objeto, por lo tanto, cuando escribimos b.num = 90, no estamos cambiando su valor, sino el objeto al que ambos apuntan. Esto se debe a la sintaxis b.num, ya que es una variable const, pero no estamos modificando su valor, sino la referencia.


5. Bonus - Challenge 5:
  - Answer: 
  - Explanation: Este no he sabido resolverlo, pero ejecutando el código para intentar entenderlo he podido entender el por que es la C. 
