import './button.css';

const Button = (props) =>{ //props se refiere a "propiedad" y se pasa como parámetro, este parámetro lo va a recibir cuando se invoca a la función Button
    console.log(props)
    return <button onMouseOver={props.mouseOver} onClick={props.handleClick} style={{color: props.color, backgroundColor: props.bgColor}}>{props.label}</button> //Indicamos que va a recirbir una propiedad llamada "label"
    //Notemos que creamos una función mediante un onClick, y como nombre de propiedad le pusimos "handleClick", además de onClick podemos usar onMouse, onChange, etc, siemrpe respetando el uso de camelCase, esto es un callBack, ya que es una fucnión que como parámetro se le manda una función y se ejecuta después de recibir esta
}
export default Button;