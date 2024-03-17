import React, { useState } from "react";
import {  View, Text, TextInput, StyleSheet, Button, ActivityIndicator, Alert} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";

import firebaseApp from "../firebase/firebaseApp";

import  FormRow  from "../components/FormRow";
import { tryLogin } from "../actions";



const LoginPage = (props) => {
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigation = useNavigation();
    
    const onChangeHandler = (key, value) => {
        if(key === 'mail') {
            setMail(value);
        }else if(key === 'password') {
            setPassword(value);
        }
    };
    
    const tryLogin = () => {
        setIsLoading(true);
        setMessage('');

        props.tryLogin({ email: mail, password }, firebaseApp)
            .then(() => {
                setMessage('Sucesso!');
                setIsLoading(false);
                navigation.replace('Series');
            })
            .catch(error => {
                setIsLoading(false);
                setMessage(getMenssageByErrorCode(error.code));
            })
    
    }
    

    const getMenssageByErrorCode = (errorCode) => {
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


    const renderMessage = () => {
        if(!message) return null;

        return(
            <View>
                <Text style={{color: 'white'}}>{ message }</Text>
            </View>
        )
    }

    return(
        <View style={styles.container}>
            <FormRow first>
                <TextInput 
                    placeholder="user@email.com" 
                    style={styles.input} 
                    placeholderTextColor={"gray"}
                    value={mail}
                    onChangeText={value => onChangeHandler( 'mail', value )}
                />
            </FormRow>    
            <FormRow last>
                <TextInput 
                    placeholder="********" 
                    style={styles.input} 
                    placeholderTextColor={"gray"} 
                    secureTextEntry
                    value={password}
                    onChangeText={value => onChangeHandler( 'password', value )}
                />
            </FormRow>
            {
                isLoading 
                    ? <ActivityIndicator/> 
                    : <Button title="Entrar" onPress={() => tryLogin()} /> 
            }
            {renderMessage() }

                
        </View>
    );


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



export default connect(null, { tryLogin })(LoginPage) ;