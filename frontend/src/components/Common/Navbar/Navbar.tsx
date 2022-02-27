import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);

    const changeBackground = ():any => {
      if (window.scrollY >= 66) {
        setNavbar(true)
      } else {
        setNavbar(false)
      }
    }
    
    useEffect(() => {
      changeBackground()
      // adding the event when scroll change background
      window.addEventListener("scroll", changeBackground)
    })
  
    return (
        <nav 
            className="navbar navbar-expand-lg fixed-top fw-bolder" 
            style={{  backgroundColor: `${navbar ? '#fafafa': 'transparent' }` }} 
        >
            
            <div className="container">
                <Link className="navbar-brand text-primary fw-bolder fst-italic" to="/">Turz</Link>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i className="navbar-toggler-icon fas fa-align-justify"></i>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item mx-2">
                            <Link className="nav-link active text-black" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link active text-black" aria-current="page" to="/">All Products</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link active text-black" aria-current="page" to="/cart">Cart</Link>
                        </li>
                    </ul>

                    {/* <form className="ms-auto d-flex justify-content-center">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active text-black" to="/"><i className="fas fa-search fs-6 mx-2 fst-italic"></i></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-black" to="/"><i className="fas fa-shopping-cart fs-6 mx-2 fst-italic"></i></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-black" to="/"><i className="far fa-user fs-6 mx-2 fst-italic"></i></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;