// Aquí será la misma lógica del componente counter, pero en esta ocasión vamos a destructurar el useState (podemos hacer esto ya que es un arreglo y podemos nombrar cada elemento del arreglo)

import { useState, useEffect } from "react"; //Importamos useState y useEffect
const Counter = () => {
    console.log(useState())
    // const state = useState(0)
    const [count, setCount] = useState(0)

    //Ejecutamos useEffect, recordemos que si lo estamos importando, es obligatorio usarlo
    useEffect(() =>{
        console.log('Function callback useEffect') // Se le define una funcipon que tiene que ejecutar después de algo, pero a este punto aún no tenemos el control, para eso debemos de indicar cuándo se tiene que ejecutar

        return () => { console.log('El componente va a desmontarse')} // Antes de que se desmonte el componente y deje de existir, yo tengo que realizar algo, eso se induca en el RETURN de la función de callback, y de esta forma borramos de la memoria los elementos que ya no se usan

    }, []) // Si le paso como segundo parámetro este array vacío, el useEffect se ejecutará únicamente después del montaje, no otra vez

    useEffect(() =>{
        console.log('Se actualizó el estado count')
    }, [count]) // Se le está diciendo que se ejecute cuando escuche el cambio del contador (variable count), en otras palabras, decimos que este useEffect depende de que se ejecute la variable count 

    //Se crea función para decrementar
    const decrement = () => {
        setCount(count - 1)
    }

    //Se crea función para incrementar
    const increment = () => {
        setCount(count + 1)
    }
    console.log('Va a renderizar') // Este console se va a ejecutar cada que la fucnión cambie de estado (o se vuelva a ejecutar) porque REACT calcula, guarda en memoria la neva versión y reconstruye realizando los cambios necesarios.
    /* Si yo no quiero que una acción se ejecute cada que se hace un cambio de estado, ahí es donde entra USE EFFECTS, para tener control sobre esto */

    return (
        //En la creación de componentes podemos crear bloques enteros de HTML, en este caso un div, dentro de este div se encuentran todas las etiquetas HTML que interactuarán con la función Counter
        <div>
            <h1>Counter destructurado</h1>
            <h1>{count}</h1> {/* Se usa el primer parámetro del useState() al cual nombramos "count"*/}
            <button onClick={decrement}>-</button> {/* Esto diciendo que al hacer click voy a ejecutar la fucnión "decrement" */} 
            <button onClick={increment}>+</button>
        </div>
    )
}

export default Counter;