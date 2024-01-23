// Importer la fonction combineReducers de Redux
import { combineReducers } from "redux";

// Importer le reducer userReducer
import userReducer from "./userReducers";

// Utiliser combineReducers pour combiner tous vos reducers en un seul
// Ici, vous n'avez qu'un seul reducer (userReducer), mais si vous en aviez plus, vous pourriez tous les ajouter ici
// Chaque reducer est associé à une clé dans l'objet passé à combineReducers
// Cette clé sera utilisée pour accéder à la partie de l'état gérée par ce reducer
export default combineReducers({
        user: userReducer,
});
