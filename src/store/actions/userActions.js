// Définition des types d'actions.
// Ces constantes permettent d'éviter les erreurs de frappe en réutilisant les mêmes valeurs dans les actions et les reducers.
export const SET_TOKEN = "SET_TOKEN";
export const SET_USER = "SET_USER";
export const SET_LOGIN = "SET_LOGIN";

// Action pour définir l'état de connexion.
// Cette action prend un booléen isLogin et renvoie une fonction qui, lorsqu'elle est appelée, dispatch une action de type SET_LOGIN avec le payload isLogin.
export const setLogin = (isLogin) => ({
    type: SET_LOGIN,
    payload: isLogin,
});

// Action pour définir le token d'authentification.
// Cette action prend un token et renvoie une fonction qui, lorsqu'elle est appelée, dispatch une action de type SET_TOKEN avec le payload token.
export const setToken = (token) => ({
    type: SET_TOKEN,
    payload: token,
});

// Action pour définir l'utilisateur.
// Cette action prend un objet user et renvoie une fonction qui, lorsqu'elle est appelée, dispatch une action de type SET_USER avec le payload user.
export const setUser = (user) => ({
    type: SET_USER,
    payload: user,
});
