import { createSlice, createAction } from '@reduxjs/toolkit'
import { validateLogin, getUserProfile } from '../../store/api'


// Déclaration de la fonction authUser avec le paramètre loginData
export const authUser = (loginData) => {
    return async (dispatch) => {
      try {
        // Appel de la fonction validateLogin pour valider les informations de connexion
        const response = await validateLogin(loginData);
  
        // Vérification de la réponse du serveur
        if (!response.ok) {
          // Si la réponse n'est pas "ok", on lance une erreur avec le message "HTTP Error: {response.status}"
          throw new Error(`HTTP Error: ${response.status}`);
        }
  
        // Extraction des données JSON de la réponse
        const data = await response.json();
  
        // Vérification de la présence d'un token dans les données
        if (data.body?.token) {
          // Si un token est présent, on dispatch l'action loginUserSuccess avec le token en paramètre
          dispatch(loginUserSuccess(data.body.token));
        } else {
          // Si aucun token n'est présent, on lance une erreur avec le message dans les données
          throw new Error(data.message);
        }
  
        // Retourne les données
        return data;
      } catch (error) {
        // Si une erreur se produit pendant l'exécution de la fonction, on lance une erreur avec le message de l'erreur
        throw new Error(error.message);
      }
    };
  };
  
  // Déclaration de l'action logout avec le type 'auth/logout'
  export const logout = createAction('auth/logout');


// Déclaration de la fonction fetchUserProfile avec le paramètre token
export const fetchUserProfile = (token) => {
  return async (dispatch) => {
    try {
      // Appel de la fonction getUserProfile pour récupérer le profil de l'utilisateur
      const response = await getUserProfile(token);

      // Extraction des données JSON de la réponse
      const data = await response.json();

      // Vérification de la présence des données dans le corps de la réponse
      if (data.body) {
        // Si des données sont présentes, on dispatch les actions updateUserName, updateFirstName et updateLastName avec les valeurs correspondantes
        dispatch(updateUserName(data.body.userName));
        dispatch(updateFirstName(data.body.firstName));
        dispatch(updateLastName(data.body.lastName));
      }
    } catch (error) {
      // En cas d'erreur, on affiche un message d'erreur dans la console avec le détail de l'erreur
      console.error("Error fetching user profile:", error);
    }
  };
};

// Déclaration des actions updateUserName, updateFirstName et updateLastName avec leurs types respectifs
export const updateUserName = createAction("auth/updateUserName");
export const updateFirstName = createAction('auth/updateFirstName');
export const updateLastName = createAction('auth/updateLastName');

// Déclaration du slice authSlice avec le nom "auth" et l'état initial
const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    status: "idle",
    userName: null,
    firstName: null,
    lastName: null,
    error: null,
  },
  // Définition des reducers pour gérer les actions
  reducers: {
    loginUserSuccess: (state, action) => {
      // Reducer pour gérer l'action loginUserSuccess
      state.token = action.payload;
      state.status = "succeeded";
      state.error = null;
    },
    logout: (state) => {
      // Reducer pour gérer l'action logout
      state.token = null;
      state.firstName = null;
      state.lastName = null;
      state.status = "idle";
      state.error = null;
    },
    updateUserName: (state, action) => {
      // Reducer pour gérer l'action updateUserName
      state.userName = action.payload;
    },
    updateFirstName: (state, action) => {
      // Reducer pour gérer l'action updateFirstName
      state.firstName = action.payload;
    },
    updateLastName: (state, action) => {
      // Reducer pour gérer l'action updateLastName
      state.lastName = action.payload;
    },
  },
});

// Sélection du token dans l'état global
export const selectToken = (state) => state.auth.token;
// Sélection du statut dans l'état global
export const selectStatus = (state) => state.auth.status;
// Sélection du nom d'utilisateur dans l'état global
export const selectUserName = (state) => state.auth.userName;
// Sélection du prénom dans l'état global
export const selectFirstName = (state) => state.auth.firstName;
// Sélection du nom de famille dans l'état global
export const selectLastName = (state) => state.auth.lastName;
// Sélection de l'erreur dans l'état global
export const selectError = (state) => state.auth.error;

// Export de l'action loginUserSuccess
export const { loginUserSuccess } = authSlice.actions;

// Export du reducer authSlice
export default authSlice.reducer;
