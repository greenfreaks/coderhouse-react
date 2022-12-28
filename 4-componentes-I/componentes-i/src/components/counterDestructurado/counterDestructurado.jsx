// Aquí será la misma lógica del componente counter, pero en esta ocasión vamos a destructurar el useState (podemos hacer esto ya que es un arreglo y podemos nombrar cada elemento del arreglo)

import { useState } from "react";
const CounterDestructuration = () => {
    console.log(useState())
    // const state = useState(0)
    const [count, setCount] = useState(0)


    //Se crea función para decrementar
    const decrement = () => {
        setCount(count - 1)
    }

    //Se crea función para incrementar
    const increment = () => {
        setCount(count + 1)
    }
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

export default CounterDestructuration;