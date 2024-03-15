import React from "react";
import {  View, Text, TextInput, StyleSheet, Button, ActivityIndicator, Alert} from "react-native";


import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";


import  FormRow  from "../components/FormRow";


export default class LoginPage extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            mail: '',
            password: '',
            isLoading: false,
            errorMessage: '',
        }
    }
    
    componentDidMount() {
        const firebaseConfig = {
            apiKey: "AIzaSyAvEA29s5R93JPI4xCw_Qpz96aDjQYY2w8",
            authDomain: "series-app-ba19a.firebaseapp.com",
            projectId: "series-app-ba19a",
            storageBucket: "series-app-ba19a.appspot.com",
            messagingSenderId: "939050441167",
            appId: "1:939050441167:web:5f1b5eefe0e9e40b999aba",
            measurementId: "G-97QZVB1PET"
        };

        
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        return app
    }
    
    onChangeHandler(key, value) {
        this.setState({ [key]: value });
    }
    
    tryLogin(app) {

        this.setState({ isLoading: true, message: ''});
        const { mail, password } = this.state;

        const auth = getAuth(app);

        const loginUserSucess = user => {
            this.setState({ message : "Sucesso!" });
        }

        const loginUserFailed = error => {
            this.setState({ message: this.getMenssageByErrorCode(error.code) });
        }

        signInWithEmailAndPassword(auth, mail, password)
        .then(loginUserSucess)
        .catch((error) => {
            if(error.code === 'auth/user-not-found' || 'auth/invalid-credential') {
                Alert.alert(
                    'Usuário não encontrado!',
                    'Deseja criar um cadastro com as informações inseridas?',
                    [{
                        text: 'Não',
                        onPress: () => {},
                        style: 'cancel' // IOS
                    }, {
                        text: 'Sim',
                        onPress: () => {
                            createUserWithEmailAndPassword(auth, mail, password)
                                .then(loginUserSucess)
                                .catch(loginUserFailed)
                            }
                    }],
                    { cancelable: false }
                )
                return;
            }    
           loginUserFailed(error);
                
        })
        .then(() => this.setState({ isLoading: false }));
    }

    getMenssageByErrorCode(errorCode) {
        switch (errorCode) {
            case 'auth/wrong-password':
                return 'Senha incorreta';
            case 'auth/user-not-found':
                return 'Usuário não encontrado';
            case 'auth/invalid-email':
                return 'E-mail inválido'
            case 'auth/missing-password':
                return 'Senha faltando'
            case 'auth/invalid-credential':
                return 'E-mail/Senha inválidas'
            case 'auth/weak-password':
                return 'Senha fraca'
            case 'auth/email-already-in-use':
                return 'E-mail já em uso'
            default:
                return `Error desconhecido: ${errorCode}`;
        }
    }


    renderMessage() {
        const { message } = this.state;
        if(!message)
            return null;

        return(
            <View>
                <Text style={{color: 'white'}}>{ message }</Text>
            </View>
        )
    }


render(){
    
            return(
                <View style={styles.container}>
                    <FormRow first>
                        <TextInput 
                            placeholder="user@email.com" 
                            style={styles.input} 
                            placeholderTextColor={"gray"}
                            value={this.state.mail}
                            onChangeText={value => this.onChangeHandler( 'mail', value )}
                        />
                    </FormRow>    
                    <FormRow last>
                        <TextInput 
                            placeholder="********" 
                            style={styles.input} 
                            placeholderTextColor={"gray"} 
                            secureTextEntry
                            value={this.state.password}
                            onChangeText={value => this.onChangeHandler( 'password', value )}
                        />
                    </FormRow>
                    {
                        this.state.isLoading 
                        ? <ActivityIndicator/> 
                        : <Button title="Entrar" onPress={() => this.tryLogin()} /> 
                    }
                    { this.renderMessage() }

                       
                </View>
            );
    }

}


const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
        paddingRight: 10,
    },
    input: {
        color: 'white',
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 5,
    }
});
