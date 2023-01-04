import { useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import ProductCard from "./components/ProductCard/ProductCard";
import ProductCardDestructurado from "./components/ProductCardDestructurado/ProductCardDestructurado";
import Counter from "./components/Counter/Counter";
import SimpleCounter from "./components/SimpleCounter/SimpleCounter";

import './App.css'

import bloodyRoar from './assets/img/bloodyRoar.jpg'
import fallout from './assets/img/fallout.jpg'
import gears from './assets/img/gears.jpg'
import halo from './assets/img/halo.jpg'
import skate from './assets/img/skate.jpg'

function App() {
  const [show, setShow  ] = useState(true) // Destructuramos useState y le pasamos el valor TRUE

  //Creamos una función que después podremos agregar como atriburo a un componente
  const handleOnAdd = (quantity) =>{
    console.log('Cantidad de items agregados', quantity)
  }
  return (
    <div className="App">
      <Navbar/>
      <section className="title">
        <h1>Hellow Freaks</h1>
        <ProductCardDestructurado img={skate} alt="skate" name="Skate" price="12.00" description="sfbjdrbvdbvkhdvbudbvlkdbkvhbdflhvbdfhvbdhfvbldfvbdhfvbludfvbldufyvbd"/>
      </section>
      <button onClick={()=>setShow(!show)}>show / hide</button> {/* Se crea un botón y se la da la función de que cada que se le da clic cambie el estado del setShow al estado contrario al que actualmente está */}
      {/* { show ? <Counter/> : null} si show es true, muestra el contador, y si no,no muestra nada */}
      <SimpleCounter show={show} stock={20} initial = {1} onAdd ={handleOnAdd}/>
    </div>
  );
}

export default App;
