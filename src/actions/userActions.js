import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { Alert } from 'react-native';


export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
const userLoginSuccess = user =>({
    type: USER_LOGIN_SUCCESS,
    user
});

export const USER_LOGOUT = 'USER_LOGOUT';
const userLogout = () => ({
    type: USER_LOGOUT,

});


export const tryLogin = ({ email, password }, app) => dispatch => {
    const auth = getAuth(app);
    
    return signInWithEmailAndPassword(auth, email, password)
    .then(user => {
        const action = userLoginSuccess(user);
        dispatch(action);
        return user;
    })
    .catch((error) => {
        return new Promise((resolve, reject) => {
            if(error.code === 'auth/user-not-found' || 'auth/invalid-credential') {
                Alert.alert(
                    'Usuário não encontrado!',
                    'Deseja criar um cadastro com as informações inseridas?',
                    [{
                        text: 'Não',
                        onPress: () => resolve(),
                        style: 'cancel' // IOS
                    }, {
                        text: 'Sim',
                        onPress: () => {
                            createUserWithEmailAndPassword(auth, email, password)
                                .then(user => resolve(user))
                                .catch(reject)
                            }
                    }],
                    { cancelable: false }
                )
            }    
            return Promise.reject(error);            
        })
    })
}














