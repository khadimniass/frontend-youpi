import React, { useState } from 'react';
import Footer from "../component/unit/Footer";
import Navbar from "../component/unit/NavBar";
import {login} from "../service/authService";
import { ToastContainer, toast } from 'react-toastify';
import {useNavigate} from "react-router-dom";

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            //console.log(formData);
            await login(formData);
            toast.success('connexion réussi avec succues');
            navigate('/list-task')
        }catch (error){
            toast.error('login ou mot de pass incorect');
        } finally {
            setLoading(false)
        }
    };

    return (
        <>
            <Navbar/>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="w-full max-w-md p-6 border rounded-lg shadow-lg bg-white">
                    <h2 className="text-2xl font-bold text-center mb-6">Se connecter</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                onChange={handleChange}
                                className="form-control border border-gray-300 rounded-md p-3 focus:outline-none focus:ring focus:ring-blue-400 w-full"
                                // value="john@example.com"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                name="password"
                                placeholder="Mot de passe"
                                onChange={handleChange}
                                className="form-control border border-gray-300 rounded-md p-3 focus:outline-none focus:ring focus:ring-blue-400 w-full"
                                //value="password"
                            />
                        </div>
                        <button
                            type="submit"
                            className={`w-full py-2 mt-4 text-white rounded ${
                                loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500'
                            }`}
                            disabled={loading}
                        >
                            {loading ? 'Connexion en cours...' : "Se connecter"}
                        </button>
                    </form>
                    {loading && (
                        <div className="flex justify-center mt-4">
                            <div
                                className="loader animate-spin w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full"></div>
                        </div>
                    )}
                    {/*<p>si tu n'as pas de compte inscrit</p>*/}
                </div>
            </div>
            <Footer/>
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} closeOnClick pauseOnHover draggable />
        </>
    );
};
export default Login;
