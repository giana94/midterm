import { Link } from 'react-router-dom';
import '../NavBar.css';


const Navbar = () => {

    return (
        <div className="navbar-container" >
            <nav>
                <ul className="navbar-list">
                    <li className="navbar-item">
                        <Link to="/" className="navbar-link">Home</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/products" className="navbar-link">Products</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
