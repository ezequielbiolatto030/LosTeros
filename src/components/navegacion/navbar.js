

import React from "react";
import { Link } from "react-router-dom";
import "../../App.css"




const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
                    
                <div className="container-fluid " >
                    <Link to="/">
                        <img src="./escudoTero.jpg" className="Logo" alt="" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>                    
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Noticias</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Post">Noticiaservidor</Link>

                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Asociate">Asociate</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;