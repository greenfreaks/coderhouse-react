import { useState, useEffect } from "react";
const SimpleCounter = ({show, stock, initial, onAdd}) => {
    console.log(useState())
    const [count, setCount] = useState(1)
    useEffect(() =>{
        console.log('Function callback useEffect')

        return () => { console.log('El componente va a desmontarse')} 
    }, [show])

    //Se crea función para decrementar
    const decrement = () => {
        if(count > initial){
            setCount(count - 1)
        }else{
            alert('Debes de comprar al menos 1 producto')
        }
    }

    //Se crea función para incrementar
    const increment = () => {
        if(count < stock){
            setCount(count + 1)
        }else{
            alert(`Sólo contamos con ${stock} productos de este tipo, no puedes comprar más del límite`)
        }
    }
    console.log('Va a renderizar')

    return (
        <div>
            <h1>Counter destructurado</h1>
            <h1>{count}</h1> {/* Se usa el primer parámetro del useState() al cual nombramos "count"*/}
            <button onClick={decrement}>-</button> {/* Esto diciendo que al hacer click voy a ejecutar la fucnión "decrement" */} 
            <button onClick={increment}>+</button>
            <button onClick={()=>onAdd(count)}>Agregar al carrito</button> {/* OnAdd se pasa como callback al atributo onClick
                * el parámetro count que le estamos pasando como valor, está nombrado como "quantity" en la creación de la función "handleOnAdd"
            */}
        </div>
    )
}

export default SimpleCounter;