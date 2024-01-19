import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authUser, loginUserSuccess, logout, fetchUserProfile } from "../../store/slice/authSlice";
import "./style.scss";

export default function Form() {

    // Initialisation d'état pour les données de connexion et les erreurs
    const [loginData, setLoginData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    // Initialisation de la fonction dispatch pour le transfert des actions Redux
    const dispatch = useDispatch();
    // Initialisation de la fonction navigate pour rediriger l'utilisateur
    const navigate = useNavigate();

    useEffect(() => {
        // Récupération du token depuis le localStorage
        const token = localStorage.getItem("userToken");
        // Si token
        if (token) {
            // Dispatch de la fonction loginUserSuccess avec le token
            dispatch(loginUserSuccess(token));
            // Dispatch de la fonction fetchUserProfile avec le token
            dispatch(fetchUserProfile(token))
                .then(response => {
                    // Si la requête est OK
                    if (response.ok) {
                        // Récupération des données JSON
                        response.json().then(data => {
                            // Si les données sont valides
                            if (data.body) {
                                // Redirection vers la page userLogin
                                navigate("/userLogin");
                            } else {
                                // Lancement d'une erreur si le token est invalide
                                throw new Error("Invalid token");
                            }
                        });
                    } else {
                        // Lancement d'une erreur si la requête n'est pas OK
                        throw new Error("Profile fetch failed");
                    }
                })
                .catch(() => {
                    // Suppression du token du localStorage
                    localStorage.removeItem("userToken");
                    // Dispatch de la fonction logout
                    dispatch(logout());
                });
        }
    }, [dispatch, navigate]);

    // Fonction de la soumission du formulaire
    const handleSubmit = async (e) => {
        // Empeche le comportement par défaut du navigateur
        e.preventDefault();
        // Reinitialisation de l'état d'erreur
        setError("");

        // Extraction des valeurs email et password de l'état loginData
        const { email, password } = loginData;

        try {
            // Appel de l'action authUser avec les valeurs email et password
            const responseData = await dispatch(authUser({ email, password }));
            console.log(responseData);

            // Vérification du statut de la réponse
            if (responseData.status === 200) {
                // Vérification de l'éxistance du token dans la réponse
                if (responseData?.body?.token) {
                    // Stockage du token dans le localStorage
                    localStorage.setItem("userToken", responseData.body.token);
                    // Dispatch de la fonction loginUserSuccess avec le token
                    dispatch(loginUserSuccess(responseData.body.token));
                    // Dispatch de la fonction fetchUserProfile avec le token
                    dispatch(fetchUserProfile(responseData.body.token));
                    // Redirection vers la page userLogin
                    navigate("/userLogin");
                } else {
                    // Définition du message d'erreur en cas d'email ou de mot de passe invalide
                    setError("Invalid email or password");
                }
            } else {
                if (responseData.status === 400) {
                    const errorData = await responseData.json();
                    // Définition du message d'erreur en cas de code de statut 400
                    setError(errorData.message);
                } else if (responseData.status === 500) {
                    const errorData = await responseData.json();
                    // Définition du message d'erreur en cas de code de statut 500
                    setError(errorData.message);
                } else {
                    // Définition du message d'erreur en cas d'erreur HTTP
                    setError("HTTP Error: " + responseData.status);
                }
            }
        } catch (error) {
            // Définition du message d'erreur en cas d'erreur lors de l'authentification
            setError(error.message);
        }
    };


    return (
        <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={loginData.email} autoComplete="current-email"
                    onChange={(e) => setLoginData({ ...loginData, email: e.target.value })} required />
            </div>
            <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={loginData.password} autoComplete="current-password"
                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} required />
            </div>
            <div className="input-remember">
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
            </div>
            <button type="submit" className="sign-in-button">Sign in</button>
            {error && <p className="error-message">{error}</p>}
        </form>
    );
}
