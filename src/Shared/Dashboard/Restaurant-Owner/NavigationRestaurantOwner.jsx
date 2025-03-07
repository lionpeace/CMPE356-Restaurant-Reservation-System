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
                    <img src="/images/customer.jpg" alt="Profile" />
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
                            <Link to="/restaurant-owner/home" className={getNavLinkClass("/restaurant-owner/home")}>
                                <i className="fas fa-home nav_icon"></i>
                                <span className="nav_name">Home</span>
                            </Link>
                            <Link to="/restaurant-owner/update-restaurant" className={getNavLinkClass("/restaurant-owner/update-restaurant")}>
                                <i className="fas fa-pen-square nav_icon"></i>
                                <span className="nav_name">Update Restaurant</span>
                            </Link>
                            <Link to="/restaurant-owner/table-info" className={getNavLinkClass("/restaurant-owner/table-info")}>
                                <i className="fas fa-chair nav_icon"></i>
                                <span className="nav_name">Table Information</span>
                            </Link> 
                            <Link to="/restaurant-owner/create-sessions" className={getNavLinkClass("/restaurant-owner/create-sessions")}>
                                <i className="fas fa-clock nav_icon"></i>
                                <span className="nav_name">Create Sessions</span>
                            </Link>
                            <Link to="/restaurant-owner/reservation-requests" className={getNavLinkClass("/restaurant-owner/reservation-requests")}>
                                <i className="fas fa-list nav_icon"></i>
                                <span className="nav_name">Reservation Requests</span>
                            </Link>
                            <Link to="/restaurant-owner/reservations/calendar-view" className={getNavLinkClass("/restaurant-owner/reservations/calendar-view")}>
                                <i className="fas fa-calendar nav_icon"></i>
                                <span className="nav_name">Calendar View</span>   
                            </Link>
                            <Link to="/restaurant-owner/reservations/list-view" className={getNavLinkClass("/restaurant-owner/reservations/list-view")}>
                                <i className="fas fa-list-alt nav_icon"></i>
                                <span className="nav_name">List View</span>   
                            </Link>
                            <Link to="/reserve" target="_blank" className={getNavLinkClass("/reserve")}>
                                <i className="fas fa-book-open nav_icon"></i>
                                <span className="nav_name">Manual Reservation</span>   
                            </Link>
                            <Link to="/restaurant-owner/your-plan" className={getNavLinkClass("/restaurant-owner/your-plan")}>
                                <i className="far fa-star nav_icon"></i>
                                <span className="nav_name">Your Plan</span>   
                            </Link>
                            <Link to="/restaurant-owner/update-personel-info" className={getNavLinkClass("/restaurant-owner/update-personel-info")}>
                                <i className="fas fa-user-circle nav_icon"></i>
                                <span className="nav_name">Update Personel Info</span>   
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