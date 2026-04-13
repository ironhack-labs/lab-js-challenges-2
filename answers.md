1. Challenge 1:
  - Answer: B
  - Explanation: Porque en la funcion bar, la variable let foo se modifica a "xyz", y se ejecuta un console.log de foo, por lo que ese primer console.log es "xyz", luego se llama a la funcion bar(), por lo que modifica la variable foo, y se hace otro console.log de foo, y vuelve a dar "xyz"


2. Challenge 2:
  - Answer: C
  - Explanation: En este caso a diferencia del anterior, la funcion example(a), esta llamando a "a", por lo que el cambio que se hace interno a la funcion es una copia, no modifica la variable global, al hacer console.log dentro de la funcion, este devuelve 10, el console log posterior, llama a la variable global, que no ha sido modificada, por lo que es 1


3. Challenge 3:
  - Answer: C 
  - Explanation: Da la respuesta, ya que tu puedes llamar a una funcion, y definirla despues. 


4. Challenge 4:
  - Answer: C
  - Explanation: Porque a pesar de ser const, tu puedes variar el contenido interior, ya que esta señalando a un objeto, cuando iguala b = a, las dos variables señalan al mismo objeto por lo que al modificar el num "b.num= 90" se modifican en las dos variables


5. Bonus - Challenge 5:
  - Answer: C
  - Explanation: Porque obj.age = 10 modifica el objeto original rabbit1, modificando su age, por lo que el primer console log seria bob y age 10, pero luego el rabbit 2 lo que hace es ejecutar la funcion con rabbit 1 y reasigna el parametro, obj = ada  age 20
