import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../Authentication";

export default function useLogin() {
    // Définition des variables d'état pour chaque champs, etat initial = chaîne de caractère vide
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // Variable d'état qui gérera le message d'erreur à afficher
    const [message, setMessage] = useState("");
    /**
     * On fait appel à notre fonction useNavigate pour permettre la redirection
     * @link https://api.reactrouter.com/v7/functions/react_router.useNavigate.html
     */
    const navigate = useNavigate()

    // Utilisation de la fonction login contenu dans notre contexte d'authentification
    const { login } = useContext(AuthContext)
    // Handler (événement) lors de la soumission du formulaire
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Conditions à la soumission pour être connecté
        try {
            const payload = {
                email,
                password
            }
            const response = await fetch('http://localhost:3000/api/auth/login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "charset": "utf-8"
                },
                body: JSON.stringify(payload)
            })
            // si les conditions ne sont pas remplies
            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message)
                // utilisation de useNavigate dans le router pour la redirection
            } else {
                // Récupération du token, qui se trouve dans le corps de notre requêtes
                const data = await response.json()
                const token = data.token
                // On le stock dans le localStorage
                login(token)
                alert("Connexion réussie !");
                navigate('/my-account')
            }
            setMessage('')
        } catch (error) {
            setMessage(error.message)
        }
    }

    return {
        email,
        setEmail,
        password,
        setPassword,
        message,
        handleSubmit
    }
}