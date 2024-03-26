import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { setField } from '../actions';

import FormRow from '../components/FormRow'


const SerieFormPage = ({ serieForm, setField }) => {
        return(
            <View>
                <FormRow> 
                    <TextInput 
                        style={styles.input}
                        placeholderTextColor={"gray"} 
                        placeholder='Título'
                        value={serieForm.title}
                        onChangeText={value => setField('title', value)}
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

function mapStateToProps(state) {
    return {
        serieForm: state.serieForm
    }
}

const mapDispachToProps = {
    setField
}



export default connect(mapStateToProps, mapDispachToProps)(SerieFormPage);
