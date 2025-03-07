import { useEffect, useRef } from "react";
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
    const toggleRef = useRef(null);
    const navRef = useRef(null);
    const bodyRef = useRef(null);
    const headerRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        const toggle = toggleRef.current;
        const nav = navRef.current;
        const bodypd = bodyRef.current;
        const headerpd = headerRef.current;

        if (toggle && nav && bodypd && headerpd) {
            const handleToggle = () => {
                nav.classList.toggle("show");
                toggle.classList.toggle("bx-x");
                bodypd.classList.toggle("body-pd");
                headerpd.classList.toggle("body-pd");
            };

            toggle.addEventListener("click", handleToggle);

            return () => {
                toggle.removeEventListener("click", handleToggle);
            };
        }
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);    

    const getNavLinkClass = (path) => {
        return location.pathname === path ? "nav_link active" : "nav_link";
    };

    return (
        <div id="body-pd" ref={bodyRef}>
            <header className="header" id="header" ref={headerRef}>
                <div className="header_toggle">
                    <i className="bx bx-menu" id="header-toggle" ref={toggleRef}></i>
                </div>
                <div className="header_img">
                    <img src="/images/avar.jpg" alt="Profile" />
                </div>
            </header>
            <div className="l-navbar" id="nav-bar" ref={navRef}>
                <nav className="nav">
                    <div>
                        <a href="#" className="nav_logo">
                            <i className="bx bx-layer nav_logo-icon"></i>
                            <span className="nav_logo-name">Rezal</span>
                        </a>
                        <div className="nav_list">
                            <Link to="/manager/home" className={getNavLinkClass("/manager/home")}>
                                <i className="fas fa-home nav_icon"></i>
                                <span className="nav_name">Home</span>
                            </Link>
                            <Link to="/manager/restaurant-list" className={getNavLinkClass("/manager/restaurant-list")}>
                                <i className="fas fa-utensils nav_icon"></i>
                                <span className="nav_name">Restaurant List</span>
                            </Link>
                            <Link to="/manager/restaurant-requests" className={getNavLinkClass("/manager/restaurant-requests")}>
                                <i className="fas fa-bell nav_icon"></i>
                                <span className="nav_name">Restaurant Requests</span>   
                            </Link>
                            <Link to="/manager/update-restaurant" className={getNavLinkClass("/manager/update-restaurant")}>
                                <i className="fas fa-pen-square nav_icon"></i>
                                <span className="nav_name">Update Restaurant Info</span>
                            </Link>
                        </div>
                    </div>
                    <a href="/" className="nav_link">
                        <i className="bx bx-log-out nav_icon"></i>
                        <span className="nav_name">Sign Out</span>
                    </a>
                </nav>
            </div>
        </div>
    );
}

export default Navigation;