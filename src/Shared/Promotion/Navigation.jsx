import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

function Navigation() {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        window.scrollTo(0, 0); 
    }, [location]); 

    return (
        <nav>
            <div className="logo">
                Rezal
            </div>
            <input type="checkbox" id="click" />
            <label htmlFor="click" className="menu-btn">
                <i className="fas fa-bars"></i>
            </label>
            <ul>
                <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                <li><NavLink to="/pricing" activeClassName="active">Pricing</NavLink></li>
                <li><NavLink to="/features" activeClassName="active">Features</NavLink></li>
                <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navigation;
