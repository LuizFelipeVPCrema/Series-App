import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

import FormRow from '../components/FormRow'


const SerieFormPage = props => {
        return(
            <View>
                <FormRow> 
                    <TextInput 
                        style={styles.input}
                        placeholderTextColor={"gray"} 
                        placeholder='Título'
                        value=''
                        onChangeText={value => console.log(value)}
                    />
                </FormRow>
            </View>
        );

}


const styles = StyleSheet.create({
    marginTop: {
        marginTop: 5
    },
    marginBottom: {
        marginBottom: 5
    },
    input: {
        color: 'white',
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 5,    
    }
})

export default SerieFormPage;
