import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"
export default class Navbar extends Component {
    render() {
        return <>

            <nav className="navbar navbar-expand-lg p-4 text-white">
                <div className="container">
                    <Link className="navbar-brand fs-1 fw-bolder" to={'/home'}>Start Framework</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active fs-4 fw-bolder" aria-current="page" to={'/about'}>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fs-4 fw-bolder" to={'/Protofilo'}>Protofilo</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fs-4 fw-bolder"  to={'/Contact'}>Contact</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>


        </>
    }
}
