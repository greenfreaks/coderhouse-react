import './navbar.css';
import Button from '../button/button'; //Se importa el componente BUTTON
import React from 'react';

const Navbar = () => {
    return (
        <nav>
            <div><h3>GREEN FREAKS</h3></div>
            <div className="links">
                <ul>
                    <li>
                        <Button
                            label="Facebook" //El valor de "label" es "Facebook" y este se verá reflejado en el frontend 
                            color="blue"
                            bgColor = "black"
                            handleClick ={()=> alert('Facebook')} // le pasamos una función, en la creación del botón creamos una prop llamada "handleClcik"
                        />
                    </li>

                    <li>
                        <Button
                            label="Twitter"
                            color="white"
                            bgColor = "black"
                            handleClick ={()=> console.log('Twitter')}
                        />
                    </li>

                    <li>
                        <Button
                            label="Instagram"
                            color="pink"
                            bgColor = "black"
                            mouseOver ={()=> alert('Instagram')} // Pueba de cóo usar onMouseOver
                        />  
                    </li>
                    {/* Así se crea un elemento sin usar JSX, detrás de JSX se ecuentra este tipo de codificación */}
                    <li>
                        {React.createElement(Button, {label: 'Sin JSX'})} 
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;