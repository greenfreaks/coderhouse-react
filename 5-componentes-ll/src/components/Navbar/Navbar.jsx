import './Navbar.css';
import CardWidget from '../CardWidget/CardWidget';

const Navbar = () => {
    return (
        <nav>
            <div><h3>GREEN FREAKS</h3></div>
            <div className="links">
                <ul>
                    <li><a href="">Xbox</a></li>
                    <li><a href="">Nintendo</a></li>
                    <li><a href="">Playstation</a></li>
                    <li><CardWidget/></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;