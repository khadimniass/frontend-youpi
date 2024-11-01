import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const CreateTask = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        due_date: '',
        status: 'pending', // Valeur par défaut
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Remplace l'URL par l'URL de ton API pour créer une tâche
            const response = await axios.post('http://localhost:8000/api/tasks', formData, {
                withCredentials: true, // Si tu utilises des cookies
            });
            toast.success("Tâche créée avec succès !");
            // Réinitialiser le formulaire après une soumission réussie
            setFormData({ title: '', description: '', due_date: '', status: 'pending' });
        } catch (error) {
            toast.error("Erreur lors de la création de la tâche !");
            console.error('Error creating task:', error);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="p-8 bg-white rounded shadow-md w-96">
                <h2 className="text-2xl font-bold text-center mb-6">Créer une Tâche</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="title"
                        placeholder="Titre"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded"
                        required
                    />
                    <textarea
                        name="description"
                        placeholder="Description"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded"
                        required
                    />
                    <input
                        type="date"
                        name="due_date"
                        value={formData.due_date}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded"
                    />
                    <select
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded"
                    >
                        <option value="pending">En attente</option>
                        <option value="completed">Complétée</option>
                        <option value="in-progress">En cours</option>
                    </select>
                    <button
                        type="submit"
                        className="w-full py-2 mt-4 text-white bg-blue-500 rounded"
                    >
                        Créer Tâche
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateTask;
