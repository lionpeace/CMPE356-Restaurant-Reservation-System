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
                    <img src="/images/aslan.jpg" alt="Profile" />
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
                            <Link to="/admin/home" className={getNavLinkClass("/admin/home")}>
                                <i className="fas fa-home nav_icon"></i>
                                <span className="nav_name">Home</span>
                            </Link>
                            <Link to="/admin/customer-list" className={getNavLinkClass("/admin/customer-list")}>
                                <i className="fas fa-user-friends nav_icon"></i>
                                <span className="nav_name">Customer List</span>
                            </Link>
                            <Link to="/admin/managers/add-manager" className={getNavLinkClass("/admin/managers/add-manager")}>
                                <i className="fas fa-user-plus nav_icon"></i>
                                <span className="nav_name">Add Manager</span>   
                            </Link>
                            <Link to="/admin/managers/manager-list" className={getNavLinkClass("/admin/managers/manager-list")}>
                                <i className="fas fa-user-tie nav_icon"></i>
                                <span className="nav_name">Manager List</span>
                            </Link>
                            <Link to="/admin/edit-prices" className={getNavLinkClass("/admin/edit-prices")}>
                                <i className="fas fa-money-bill nav_icon"></i>
                                <span className="nav_name">Edit Prices</span>
                            </Link>
                            <Link to="/admin/restaurants/restaurant-list" className={getNavLinkClass("/admin/restaurants/restaurant-list")}>
                                <i className="fas fa-utensils nav_icon"></i>
                                <span className="nav_name">Restaurant List</span>
                            </Link>
                            <Link to="/admin/restaurants/restaurant-analysis" className={getNavLinkClass("/admin/restaurants/restaurant-analysis")}>
                                <i className="far fa-chart-bar nav_icon"></i>
                                <span className="nav_name">Restaurant Analysis</span>
                            </Link>
                            <Link to="/admin/cuisines/cuisine-list" className={getNavLinkClass("/admin/cuisines/cuisine-list")}>
                                <i className="fas fa-utensil-spoon nav_icon"></i>
                                <span className="nav_name">Cuisine List</span>
                            </Link>
                            <Link to="/admin/reservations/reservation-analysis" className={getNavLinkClass("/admin/reservations/reservation-analysis")}>
                                <i className="fas fa-chart-area nav_icon"></i>
                                <span className="nav_name">Reservation Analysis</span>
                            </Link>
                            <Link to="/admin/locations/location-list" className={getNavLinkClass("/admin/locations/location-list")}>
                                <i className="fas fa-map-pin nav_icon"></i>
                                <span className="nav_name">Location List</span>
                            </Link>
                            <Link to="/admin/revenue" className={getNavLinkClass("/admin/revenue")}>
                                <i className="fas fa-dollar-sign nav_icon"></i>
                                <span className="nav_name">Revenue</span>
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