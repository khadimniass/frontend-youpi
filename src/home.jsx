// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "./component/unit/NavBar";
import Footer from "./component/unit/Footer";
//import logo from '../assets/youpi-logo.png'; // Assure-toi d'avoir un logo dans ce chemin

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Navbar */}
            <Navbar/>
            {/* Contenu principal */}
            <main className="flex-grow flex items-center justify-center">
                <h2 className="text-4xl font-bold">Bienvenue sur Youpi!</h2>
            </main>

            {/* Footer (facultatif) */}
            <Footer/>
        </div>
    );
};

export default Home;
