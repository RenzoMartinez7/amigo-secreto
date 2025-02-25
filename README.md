# Challenge Amigo Secreto
## Introducción
Este reto propuesto en el programa One Next Education (ONE) con Alura LATAM consiste en mejorar la lógica de programación de sus alumnos. Se propone el uso de `functions` y `arrays` para una mejor modularidad y manejo de datos.
## Descripción del reto
 El reto consiste en agregar funcionalidad al Front brindado, y estas son:
 - Crear un arreglo para almacenar los nombres.
 - Implementar una función para agregar amigos.
 - Implementar una función para actualizar la lista de amigos.
 - Implementar una función para sortear los amigos.

Estas funcionalidades tienen el propósito de que el usuario pueda agregar los nombres de sus amigos a una lista, una vez teniendo listo, podrá sortearlos para así obtener el nombre ganador.
### Restricciones del reto
Las restricciones son importantes para evitar un mal uso del programa, y para este solo se necesitarán alertas en los siguientes casos:
 - Si en la caja de texto no contiene valor (vacío) no se podrá agregar elementos a la lista.
 - Si no hay datos en la lista de amigos no se podrá realizar el sorteo.
 
 ## Solución del Reto
Antes de comenzar con la codificación, primero se tuvo que identificar los elementos del DOM que requieren tener la funcionalidad. Entre ellos se hallaron elementos de los tipos: `ul`, `input` y `button`, cada uno tiene su respectivo identificador (`id`).
### 1. Inicializar un arreglo
El uso de arreglos es fundamental para este tipo de casos, porque almacena datos y también tiene funciones propias para su manejo. Por ende, se inicializó un array vacío.
![image](https://github.com/user-attachments/assets/fa9835f2-dff7-4a2d-8d15-0848cf345b77)

### 2. Función `agregarAmigo()`
Esta función obtiene el elemento input del DOM para así tener acceso al valor que contiene.
![image](https://github.com/user-attachments/assets/285e7c9a-8804-4dec-a240-b98635d840b7)
Se agrega una condicional `if` para orientar al usuario a que agregue al menos un valor en el input, en caso haya valor, se ingresa al siguiente bloque `if` anidado, donde si existe valor se añadirá ese mismo al arreglo con el método `push()`. Asimismo, se limpia el `input` modificando su valor con `""`, luego se llama a la función `mostrarAmigos()` para actualizar la lista con datos actuales. Finalmente, se actualiza a vacío el contenido del elemento `lista` con id `resultado` para como propuesta a nuevo sorteo.
![image](https://github.com/user-attachments/assets/006f2192-dbd5-424f-a1d8-539f7b6bc444)

### 3. Función `mostrarAmigos()`
En primera instancia se obtiene el elemento `ul` con id `listaAmigos` para agregar elementos hija (`li`). Para ello se usó la estructura de control repetitiva `forEach` para recorrer el arreglo `listaAmigos`y de esa manera añadir `li` a la lista `listaAmigos` a base del contenido del arreglo.
![image](https://github.com/user-attachments/assets/e9fc66a9-5fbd-4bf5-8ca5-90e22fa70b9c)

#### 3.1 ¿Por qué `textContent` y no `innerHTML`?  
En JavaScript, existen múltiples formas de modificar el contenido de un elemento del DOM. Dos de las propiedades más utilizadas son `textContent` e `innerHTML`, pero es importante comprender sus diferencias y cuándo es más seguro y eficiente usar cada uno.
|Método|Descripción|Ventajas|Desventajas|
|--|--|--|--|
| innerHTML |Permite obtener o establecer el contenido HTML de un elemento, interpretando las etiquetas HTML que contiene.|- Permite insertar HTML dinámico.  - Útil cuando se necesita agregar elementos con formato.|- Riesgo de ataques XSS si se usa con datos no confiables.  - Menor rendimiento debido al procesamiento del HTML.
|textContent|Obtiene o establece el texto dentro de un elemento sin procesarlo como HTML.|- Mayor seguridad al evitar la ejecución de scripts maliciosos (prevención de XSS).  - Mejor rendimiento porque no analiza ni interpreta el HTML.|- No permite la inserción de contenido HTML.   
Según la documentación de MDN Web Docs, es preferible utilizar `textContent` en el lugar de `innerHTML` para evitar posibles vulnerabilidades de seguridad y mejorar el rendimiento de la aplicación. Como solo se necesitaba agregar texto sin procesar dentro de los elementos de la lista, `textContent` ha sido la opción más segura y eficiente.
#### 3.2 `forEach` envés de `for`
El bucle `for` es el más utilizado pero ***¿es el más eficiente para este caso?*** 
Según el blog midu.dev, el `forEach` es un método que se utiliza para hacer iteraciones sobre los elementos de un arreglo y ejecutar una función determinada en cada uno de ellos. Muy aparte de ello, es más legible y más rápido que `for` en casos específicos (como este), porque no requiere de un contador y comprobar condiciones para hacer el recorrido del arreglo. 
Por tal razón, se decidió por el método `forEach()`  porque hace que el código sea más claro, fácil de mantener y lo libra de posibles errores derivados del manejo manual de índices, dado que su impacto en el rendimiento es mínimo para la solución del reto, su ventaja en legibilidad y seguridad lo convirtió en la mejor elección.
### 4. Función `sortearAmigo()`
En esta función se evalúa primero si el arreglo tiene un tamaño igual a cero (lo que vendría a ser sin datos) para que restrinja el sorteo. En caso su tamaño sea diferente de cero (o tenga datos) se selecciona aleatoriamente un amigo de la lista utilizando `Math.random()` y `Math.floor()` para obtener un índice válido dentro del arreglo. Luego, el nombre del amigo sorteado se muestra en la `ul` `"resultado"`, actualizando su contenido con `textContent`. Finalmente, se llama a la función `vaciarListaAmigos()`, que borra la lista de amigos después de realizar el sorteo.
![image](https://github.com/user-attachments/assets/c92c4f39-39ac-4e71-84b1-1db29813f325)

### 5. Función `vaciarListaAmigos()`
Esta función cumple con el propósito de actualizar el arreglo a uno sin elementos. Finalmente, llama a la función `mostrarAmigos()` para actualizar la lista del DOM.
![image](https://github.com/user-attachments/assets/3dbf4a54-23f6-4180-9676-d9c9762b8360)

## Conclusiones

 - El uso de arreglos facilita el manejo de los datos.
 - Las estructuras condicionales como el `if` permitieron el manejo de posibles conflictos en el código.
 - El uso de `textContent` sobre `innerHTML` asegura mejor rendimiento y seguridad del código.
 - Se puede usar `forEach` como alternativa al `for` para recorrer arreglos.
 - Las funciones de `Math` como `random()` y `floor()` permiten obtener un índice válido dentro del arreglo para el sorteo.
