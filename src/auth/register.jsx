import React, { useState } from 'react';
import { ToastContainer,toast } from 'react-toastify';
import {register} from "../service/authService";
import Navbar from "../component/unit/NavBar";
import Footer from "../component/unit/Footer";
import {useNavigate} from "react-router-dom";

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.password_confirmation) {
            toast.error("Les mots de passe ne correspondent pas !");
            return;
        }

        setLoading(true);
        try {
            //console.log(formData);return;
            await register(formData); // Votre fonction d'enregistrement ici
            toast.success("Inscription réussie !");
            setTimeout(()=>{
                navigate('/login')

            },2000);

        } catch (error) {
            toast.error("Erreur lors de l'inscription !");
            console.error('Error during registration:', error);
            console.log(error.message)
            toast.error(error.message)
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Navbar/>
            <div className="container mx-auto mt-10">
                <h2 className="text-2xl font-bold mb-4">S'inscrire</h2>
                <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
                    <input
                        type="text"
                        name="name"
                        placeholder="Nom"
                        onChange={handleChange}
                        className="mb-4 w-full p-2 border rounded"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        className="mb-4 w-full p-2 border rounded"
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Mot de passe"
                        onChange={handleChange}
                        className="mb-4 w-full p-2 border rounded"
                    />
                    <input
                        type="password"
                        name="password_confirmation"
                        placeholder="Confirmer le mot de passe"
                        onChange={handleChange}
                        className="mb-4 w-full p-2 border rounded"
                    />
                    <button
                        type="submit"
                        className={`w-full py-2 mt-4 text-white rounded ${
                            loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500'
                        }`}
                        disabled={loading}
                    >
                        {loading ? 'Connexion en cours...' : "S'inscrire"}
                    </button>

                </form>
            </div>
            <Footer/>
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} closeOnClick pauseOnHover
                            draggable/>
        </>
    );
};

export default Register;
