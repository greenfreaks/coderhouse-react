import Navbar from "./components/Navbar/Navbar";
import ProductCard from "./components/ProductCard/ProductCard";

import './App.css'

import bloodyRoar from './assets/img/bloodyRoar.jpg'
import fallout from './assets/img/fallout.jpg'
import gears from './assets/img/gears.jpg'
import halo from './assets/img/halo.jpg'
import skate from './assets/img/skate.jpg'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <section className="items">
        <ProductCard
          img = {bloodyRoar}
          alt = "Bloody Roar"
          name = "Bloody Roar"
          price = "150.00"
          description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin est velit, fringilla sit amet nulla rhoncus, consequat mattis odio. Donec in enim eros. Sed porttitor erat eu mauris dapibus ullamcorper. "
        />
        <ProductCard
          img = {fallout}
          alt = "Fallout New Vegas"
          name = "Fallout New Vegas"
          price = "320.00"
          description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin est velit, fringilla sit amet nulla rhoncus, consequat mattis odio. Donec in enim eros. Sed porttitor erat eu mauris dapibus ullamcorper. "
        />
        <ProductCard
          img = {gears}
          alt = "Gears Of War"
          name = "Gears Of War"
          price = "150.00"
          description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin est velit, fringilla sit amet nulla rhoncus, consequat mattis odio. Donec in enim eros. Sed porttitor erat eu mauris dapibus ullamcorper. "
        />
        <ProductCard
          img = {halo}
          alt = "Halo"
          name = "Halo"
          price = "500.00"
          description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin est velit, fringilla sit amet nulla rhoncus, consequat mattis odio. Donec in enim eros. Sed porttitor erat eu mauris dapibus ullamcorper. "
        />
        <ProductCard
          img = {skate}
          alt = "Skate"
          name = "Skate"
          price = "30.00"
          description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin est velit, fringilla sit amet nulla rhoncus, consequat mattis odio. Donec in enim eros. Sed porttitor erat eu mauris dapibus ullamcorper. "
        />
      </section>
    </div>
  );
}

export default App;
