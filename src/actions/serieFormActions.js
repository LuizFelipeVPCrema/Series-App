import { auth, database } from "../firebase/firebaseApp";
import { push, ref } from "firebase/database";

export const SET_FIELD = 'SET_FIELD';

export const setField = (field, value) => {
    return {
        type: SET_FIELD,
        field,
        value
    }
}

export const SERIE_SAVED_SUCCESS = 'SERIE_SAVED_SUCCESS';
const serieSavedSuccess = () => ({
    type: SERIE_SAVED_SUCCESS
})

export const saveSerie = serie => {
    const user = auth.currentUser;

    return async dispach => {
        if (user) {
            const seriesRef = ref(database, `/users/${user.uid}/series`);
            return await push(seriesRef, serie) 
              .then(() => {
                console.log('Série salva com sucesso!');
                dispach(serieSavedSuccess())
              })
              .catch(error => {
                console.error('Erro ao salvar série:', error);
              });
          } else {
            console.error('Nenhum usuário logado.');
        }
    }
  };