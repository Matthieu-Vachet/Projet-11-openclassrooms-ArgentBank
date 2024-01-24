// Définition de l'URL de base de l'API
const URL_API = "http://localhost:3001/api/v1";

// Fonction asynchrone pour l'authentification de l'utilisateur
export async function fetchLogin(props) {
    // Envoi d'une requête POST à l'endpoint /user/login de l'API
    // Les données de l'utilisateur (email et mot de passe) sont envoyées dans le corps de la requête
    const response = await fetch(`${URL_API}/user/login`, {
        method: "POST",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: props.email,
            password: props.password,
        }),
    });
    // La réponse de l'API est convertie en JSON et renvoyée par la fonction
    return await response.json();
}

// Fonction asynchrone pour récupérer les informations de profil de l'utilisateur
export async function userProfile(token) {
    // Envoi d'une requête POST à l'endpoint /user/profile de l'API
    // Le token d'authentification de l'utilisateur est envoyé dans l'en-tête Authorization de la requête
    const response = await fetch(`${URL_API}/user/profile`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
        },
    });
    // La réponse de l'API est convertie en JSON et renvoyée par la fonction
    return await response.json();
}

// Fonction asynchrone pour mettre à jour le nom d'utilisateur
export async function userEditProfile(token, username) {
    // Envoi d'une requête PUT à l'endpoint /user/profile de l'API
    // Le nouveau nom d'utilisateur est envoyé dans le corps de la requête
    // Le token d'authentification de l'utilisateur est envoyé dans l'en-tête Authorization de la requête
    const response = await fetch(`${URL_API}/user/profile`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            userName: username,
        }),
    });
    // La réponse de l'API est convertie en JSON et renvoyée par la fonction
    return await response.json();
}
