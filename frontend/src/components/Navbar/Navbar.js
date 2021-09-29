import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-light " style={{ height: '6vh', backgroundColor: 'transparent' }} >
            <div className="container">
                <Link className="navbar-brand text-primary fw-bolder fs-5 fst-italic" to="/">Turz</Link>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item mx-2">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link active" aria-current="page" to="/">All Products</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link active" aria-current="page" to="/">Cart</Link>
                        </li>
                    </ul>

                    {/* <form className="ms-auto d-flex justify-content-center">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/"><i className="fas fa-search fs-6 mx-2 fst-italic"></i></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/"><i className="fas fa-shopping-cart fs-6 mx-2 fst-italic"></i></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/"><i className="far fa-user fs-6 mx-2 fst-italic"></i></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;