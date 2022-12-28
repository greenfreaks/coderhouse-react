import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar'; //Importamos la función que contiene el navbar
import Counter from './components/counter/counter';
import CounterDestructuration from './components/counterDestructurado/counterDestructurado';

function App() {
  return (

    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Counter/>
        <CounterDestructuration/>
      </header>
    </div>
  );
}

export default App;
