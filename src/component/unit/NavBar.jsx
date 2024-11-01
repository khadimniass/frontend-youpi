// src/components/Navbar.js
import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import {AuthContext} from "../../provider/authProvider";

const Navbar = () => {
    //const { isAuthenticated, logout } = useContext(AuthContext); // Utiliser le contexte

    return (
        <nav className="bg-blue-500 p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-white text-xl font-bold">Youpi</Link>
                <div className="space-x-4">
                    <Link to="/" className="text-white hover:text-blue-200">Accueil</Link>
                    <Link to="/register" className="text-white hover:text-blue-200">S'inscrire</Link>
                    <Link to="/login" className="text-white hover:text-blue-200">Se connecter</Link>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
