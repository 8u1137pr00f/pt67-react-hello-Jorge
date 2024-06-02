import React from "react";
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm">
            <div className="container-fluid">
                <a className="navbar-brand text-light" href="#"><strong>Start Booststrap</strong></a>
                <div className="navbar-nav">
                    <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
                    <a className="nav-link text-secondary">About</a>
                    <a className="nav-link text-secondary">Services</a>
                    <a className="nav-link text-secondary">Contact</a>
                </div>
            </div>
        </nav>
    )
}
export default Navbar