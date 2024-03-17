import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";


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
        // console.log(action);
    })




    // .catch((error) => {
    //     if(error.code === 'auth/user-not-found' || 'auth/invalid-credential') {
    //         Alert.alert(
    //             'Usuário não encontrado!',
    //             'Deseja criar um cadastro com as informações inseridas?',
    //             [{
    //                 text: 'Não',
    //                 onPress: () => {},
    //                 style: 'cancel' // IOS
    //             }, {
    //                 text: 'Sim',
    //                 onPress: () => {
    //                     createUserWithEmailAndPassword(auth, mail, password)
    //                         .then(loginUserSucess)
    //                         .catch(loginUserFailed)
    //                     }
    //             }],
    //             { cancelable: false }
    //         )
    //         return;
    //     }    
    //    loginUserFailed(error);
            
    // })
    // .then(() => this.setState({ isLoading: false }));
}














