import React, { Fragment } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink
} from "react-router-dom";
import { routes } from '../helpers/routes';
export const Navbar = () => {
    return (

        <Router>
            <Fragment>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="container-fluid">

                        <NavLink to="/" className="navbar-brand">Ucron</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarColor01">
                            <ul className="navbar-nav me-auto">

                                {
                                    routes.map((route) => (
                                        <li className='nav-item' >
                                            <NavLink to={route.path} className="nav-link">{route.name}</NavLink>
                                        </li>
                                    ))
                                }
                            </ul>

                        </div>
                    </div>
                </nav>

                <Routes>

                    {
                        routes.map((route) => (
                            <Route path={route.path} element={<route.component />} />
                        ))
                    }

                </Routes>
            </Fragment>
        </Router>

    )
}
