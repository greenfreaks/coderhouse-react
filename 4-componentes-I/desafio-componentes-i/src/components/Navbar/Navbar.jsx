import './Navbar.css';
import CardWidget from '../CardWidget/CardWidget';

const Navbar = () => {
    return (
        <nav>
            <div><h3>GREEN FREAKS</h3></div>
            <div className="links">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Nosotros</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Contacto</a></li>
                    <li><CardWidget/></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;