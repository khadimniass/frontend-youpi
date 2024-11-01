import React, { useEffect, useState } from 'react';
import { getTasks } from '../../service/taskService'
import {Link} from "react-router-dom";
import { FaEllipsisV } from 'react-icons/fa'; // Importer l'icône des trois points verticaux

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeMenu, setActiveMenu] = useState(null); // Gérer quel menu est actif

    const fetchTasks = async () => {
        try {
            const data = await getTasks(); // Appelle le service pour récupérer les tâches
            console.log(data)
            setTasks(data);
        } catch (error) {
            console.error('Error fetching tasks:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);
    // Fonction pour gérer l'affichage des options
    const handleOptionsClick = (taskId) => {
        console.log("Options pour la tâche avec l'ID :", taskId);
        // Ici tu peux gérer les actions "Détails", "Modifier" et "Supprimer"
    };

    if (loading) {
        return <div className="text-center">Chargement des tâches...</div>;
    }
    const toggleMenu = (taskId) => {
        setActiveMenu(activeMenu === taskId ? null : taskId);
    };
    const handleAction = (action, taskId) => {
        console.log(`Action: ${action} pour la tâche avec l'ID :`, taskId);
        setActiveMenu(null); // Ferme le menu après une action
        // Ajoute ici la logique pour chaque action (Détails, Modifier, Supprimer)
    };
    return (
        <div className="container mx-auto mt-10">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Liste des Tâches</h2>
                <Link to="/create-task" className="px-4 py-2 text-white bg-blue-500 rounded">
                    Créer Tâche
                </Link>
            </div>
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                <tr>
                    <th className="border px-4 py-2">Titre</th>
                    <th className="border px-4 py-2">Description</th>
                    <th className="border px-4 py-2">Date d'échéance</th>
                    <th className="border px-4 py-2">Statut</th>
                    <th className="border px-4 py-2">Actions</th>
                    {/* Nouvelle colonne pour les actions */}
                </tr>
                </thead>
                <tbody>
                {tasks.length > 0 ? (
                    tasks.map((task) => (
                        <tr key={task.id}>
                            <td className="border px-4 py-2">{task.title}</td>
                            <td className="border px-4 py-2">{task.description}</td>
                            <td className="border px-4 py-2">{task.due_date}</td>
                            <td className="border px-4 py-2">{task.status}</td>
                            <td className="border px-4 py-2 text-center">
                                <button onClick={() => handleOptionsClick(task.id)} className="focus:outline-none">
                                    <FaEllipsisV className="text-gray-600 hover:text-blue-500"/>
                                </button>
                                {activeMenu === task.id && (
                                    <div className="absolute bg-white shadow-lg rounded mt-1">
                                        <button onClick={() => handleAction('details', task.id)} className="block px-4 py-2 text-left hover:bg-gray-200 w-full">Détails</button>
                                        <button onClick={() => handleAction('modifier', task.id)} className="block px-4 py-2 text-left hover:bg-gray-200 w-full">Modifier</button>
                                        <button onClick={() => handleAction('supprimer', task.id)} className="block px-4 py-2 text-left hover:bg-gray-200 w-full">Supprimer</button>
                                    </div>
                                )}
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="5" className="text-center border px-4 py-2">Aucune tâche trouvée.</td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
};

export default TaskList;
