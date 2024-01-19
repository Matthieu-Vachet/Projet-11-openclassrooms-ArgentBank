const URL_API = 'http://localhost:3001/api/v1';


// Définition de la fonction asynchrone validateLogin avec le paramètre loginData
export async function validateLogin(loginData) {
    try {

        // Envoi de la requête POST avec les données de loginData
        const response = await fetch(`${URL_API}/user/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(loginData),
        });

        // Gestion des erreurs
        if (!response.ok) {
            if (response.status === 400) {
                throw new Error("Invalid login credentials.");
            } else if (response.status === 500) {
                throw new Error("Server error, please try again later.");
            } else {
                throw new Error(`HTTP Error: ${response.status}`);
            }
        }

        // Traitement de la reponse si réponse OK
        return response;
    } catch (error) {
        // Si erreur pendant l'exécution de la requête, erreur avec message de l'erreur
        throw new Error(error.message);
    }
}


// Définition de la fonction asynchrone getUserProfile avec le paramètre token 
export async function getUserProfile(token) {
    try {
        // Envoi de la requête POST avec les données de token
        const response = await fetch(`${URL_API}/user/profile`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(),
        });
        // Retourne de la réponse
        return response;
    } catch (error) {
        // Si erreur pendant l'exécution de la requête, erreur avec message de l'erreur
        throw new Error(error.message);
    }
}


// Définition de la fonction asynchrone updateUsername avec les paramètres token et newUsername
export async function updateUsername(token, newUsername) {
    try {
        // Envoi de la requête PUT avec les données de token et newUsername
        const response = await fetch(`${URL_API}/user/profile`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({ userName: newUsername }),
        });

        // Gestion des erreurs
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        // Traitement de la reponse si requête OK
        const data = await response.json();

        // Vérification du statut dans les données
        if (data.status === 200) {
            // Si status OK, retourne les données
            return data;
        } else {
            throw new Error(data.message);
        }
    } catch (error) {
        // Si une erreur se produit pendant l'exécution de la fonction, on lance une erreur avec le message de l'erreur
        throw new Error(error.message);
    }
}