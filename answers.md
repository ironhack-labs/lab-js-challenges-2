1. Challenge 1:
  - Answer: b
  - Explanation: El ambito de la variable foo es global y se puede acceder desde dentro de la función. Dentro de la función se realiza una asignación a la variable, por lo que primero muestra el valor recien asignado y posteriormente igual. Ya que referencia a la misma posición de memoria.


2. Challenge 2:
  - Answer: a
  - Explanation: Ocurre el mismo proceso que en el anterior ejercicio, la variable ha sido declarada fuera, pero dentro de la función se le vuelve asignar un valor. La variable es global. La única diferencia que la función la recibe por parámetro.


3. Challenge 3:
  - Answer: c
  - Explanation: Muestra el contenido de la función. Javascript cuando carga el archivo primero carga las funciones que contiene el documento. Es por ello que no devuelve error.


4. Challenge 4:
  - Answer: c
  - Explanation: Vale lo mismo. Ya que a B se le está asignando la misma posición de memoria donde apunta A. Cualquier cambia que se realice en ambos afectara a los dos, ya que los objetos son mutables.


5. Bonus - Challenge 5:
  - Answer: c
  - Explanation: Pasamos el primer objeto y accedemos a su clave age, ya que lo que tenemos es la posición de memoria a la que referencia el objeto, modificamos el valor del primer objeto rabbit1. Posteriormente crea un nuevo objeto, se reserva en memoria una nueva posición y lo devuelve la función con nuevos datos.
