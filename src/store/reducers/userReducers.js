// Import des types d'actions définis dans userActions.js
import { SET_LOGIN, SET_TOKEN, SET_USER } from "../actions/userActions";

// Etat initial du reducer
const initialState = {
    dataUser: "", // Les données de l'utilisateur, initialement une chaîne vide
    token: null, // Le token d'authentification, initialement null
    isLogin: false, // L'état de connexion, initialement false
};

// Définir le reducer
const userReducer = (state = initialState, action) => {
    // Le reducer prend l'état actuel et une action, et renvoie le nouvel état
    // Si aucun état n'est fourni, l'état initial est utilisé
    switch (action.type) {
        // Si l'action est de type SET_TOKEN
        case SET_TOKEN:
            // Renvoyer un nouvel état avec le token mis à jour
            return {
                ...state, // Copier tout l'état actuel
                token: action.payload, // Mettre à jour le token avec le payload de l'action
            };
        // Si l'action est de type SET_USER
        case SET_USER:
            // Renvoyer un nouvel état avec les données de l'utilisateur mises à jour
            return {
                ...state, // Copier tout l'état actuel
                dataUser: action.payload, // Mettre à jour les données de l'utilisateur avec le payload de l'action
            };
        // Si l'action est de type SET_LOGIN
        case SET_LOGIN:
            // Renvoyer un nouvel état avec l'état de connexion mis à jour
            return {
                ...state, // Copier tout l'état actuel
                isLogin: action.payload, // Mettre à jour l'état de connexion avec le payload de l'action
            };

        // Si l'action n'est d'aucun des types ci-dessus
        default:
            // Renvoyer l'état actuel sans le modifier
            return state;
    }
};

// Exporter le reducer
export default userReducer;
