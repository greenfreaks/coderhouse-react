// A diferenca de los botones donde sólo creamos componente de presentación, esta vez usaremos componentes con lógica

import { useState } from "react"; //Esta es una función de REACT que me permitirá hacer uso del ESTADO, el cual es un lugar en memoria donde puedo guardar un dato y va a persistir a lo largo de la ejecución de una función, sin el estado ninguna función que creemos va a servir, ya que una vez que se ejecuta una función, todas sus variables se van a la basura, esto es un HOOK
const Counter = () => {

    //Este será un componente con lógica, aquí crearemos todas las variables que esta fucnión va a necesitar, las variables y funciones las crearemos antes del << return >>

    console.log(useState()) /* Ya que useState es una función, la podemos imprimir sin ningún problema, en este caso me retor una un array de 2 elementos, el 1ero me indica le valor que yo estoy guardando (es le valor que necesito usar) , y el segundo elemento es una función que me permite cambiar el valor, esta segunda función me permite escuchar el 1er  valor cuando esto cambia
    */

    const state = useState(0) //EL primer parámetro es el valor inicial
    /*
        * Yo puedo tener todos los state que quiera, cada uno va a tener una fucnión relacionada que me permita cambiar el valor a cada uno 
    */

    //Se crea función para decrementar
    const decrement = () => {
        state[1](state[0] - 1) // Aquí decimos que vamos a usar el parámetro de la posición 1 del useState, después de ello entre paréntesis ponemos la función que necestamos hacer, en este caso queremos restar un valor al valor inicial del useState, que en este caso su valor inical es 0
    }

    //Se crea función para incrementar
    const increment = () => {
        state[1](state[0] + 1)
    }
    return (
        //En la creación de componentes podemos crear bloques enteros de HTML, en este caso un div, dentro de este div se encuentran todas las etiquetas HTML que interactuarán con la función Counter
        <div>
            <h1>Counter Sin destructurar</h1>
            <h1>{state[0]}</h1> {/* Indicamos que vamos a usar el parámetro de la posición 0 de la constante state (recordemos que state está almacenando a useState, la cual es un arreglo) */}
            <button onClick={decrement}>-</button> {/* Esto diciendo que al hacer click voy a ejecutar la fucnión "decrement" */} 
            <button onClick={increment}>+</button>
        </div>
    )
}

export default Counter;