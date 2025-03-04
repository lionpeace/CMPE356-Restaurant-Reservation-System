import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header-container">
            <div className="logo">
                <h1>rezTable</h1>
            </div>
            <nav>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/pricing">Pricing</Link></li>
                    <li><Link to="/features">Features</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                <div className="auth-links">
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Sign Up</Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;