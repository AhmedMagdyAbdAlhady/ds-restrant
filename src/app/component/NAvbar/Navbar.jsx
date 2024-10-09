import React from 'react';
import {fontStyle,bordStyle} from './Navbar.module.css'
import Link from 'next/link';
const NavBar = ({Dsopacity}) => {
    return (
        <nav id='Home'  className={`${Dsopacity} w-100 animate__animated animate__bounce animate__delay-2s`}>
        <nav className={`navbar navbar-expand-sm  ${bordStyle} container `}>
                <div className="container-fluid row">
                    <Link className={`navbar-brand col-3 text-center m-0 p-0 ${fontStyle} animate__animated animate__backInDown`} href="#Home">We</Link>
                    <button className={`navbar-toggler col-3 ${fontStyle} `} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <i className={`fa-solid fa-list-ol`}></i>
                    </button>
                    <div className="collapse navbar-collapse col-9 p-0" id="navbarNav">
                        <ul className="navbar-nav w-100 d-flex justify-content-around">
                            <li className="nav-item ">
                                <Link className={`nav-link ${fontStyle} animate__animated animate__backInDown`}href="#Menu">Menu</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${fontStyle} animate__animated animate__backInDown`} href="#Services">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${fontStyle} animate__animated animate__backInDown`} href="#Contact">Contact</Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </nav>
    );
}

export default NavBar;