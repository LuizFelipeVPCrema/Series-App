import React, { useState } from 'react';
import { View,
    Text,
    TextInput,
    StyleSheet,
    Button,
    ScrollView,
    KeyboardAvoidingView,
    ActivityIndicator
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { connect } from 'react-redux';
import { useNavigation } from "@react-navigation/native";

import { setField, saveSerie } from '../actions';

import FormRow from '../components/FormRow'


const SerieFormPage = ({ serieForm, setField, saveSerie }) => {

    const [isLoading, setIsLoading] = useState(false);
    const navigation = useNavigation();

    return(
        <KeyboardAvoidingView
            behavior='padding' 
            enabled
            keyboardVerticalOffset={150}
        >
            <ScrollView>
                <FormRow> 
                    <TextInput 
                        style={styles.input}
                        placeholderTextColor={"gray"} 
                        placeholder='Título'
                        value={serieForm.title}
                        onChangeText={value => setField('title', value)}
                    />
                </FormRow>
                <FormRow> 
                    <TextInput 
                        style={styles.input}
                        placeholderTextColor={"gray"} 
                        placeholder='URL da imagem'
                        value={serieForm.img}
                        onChangeText={value => setField('img', value)}
                    />
                </FormRow>
                <FormRow>
                    <Picker
                        selectedValue={serieForm.gender}
                        style={styles.picker}
                        onValueChange={ itemValue => setField('gender', itemValue )}
                    >

                        <Picker.Item label="Policial" value="police" />
                        <Picker.Item label="Comédia" value="comedy" />
                        <Picker.Item label="Terror" value="horror" />
                    </Picker>
                </FormRow>
                <FormRow>
                    <View style={[styles.sliderLabel, styles.sameRow]}>
                        <Text style={styles.sliderLabel}>Nota: </Text>
                        <Text style={styles.sliderLabel}>{serieForm.rate}</Text>
                    </View>
                    <Slider 
                        onValueChange={value => setField('rate', value)}
                        value={serieForm.rate}
                        maximumValue={5}
                        step={0.5}
                    />
                </FormRow>
                <FormRow> 
                    <TextInput 
                        style={styles.input}
                        placeholderTextColor={"gray"} 
                        placeholder='Descrição'
                        value={serieForm.description}
                        onChangeText={value => setField('description', value)}
                        numberOfLines={5}
                        multiline={true}
                    />
                </FormRow>
               { 
                isLoading 
                    ? <ActivityIndicator />
                    :<Button 
                    title='Salvar'
                    onPress={async () => {
                        setIsLoading(true);
                        await saveSerie(serieForm);
                        setIsLoading(false);
                        navigation.goBack();
                    }}
                />}
            </ScrollView>
        </KeyboardAvoidingView>
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
    },
    picker : {
        color: 'gray',
    },
    sliderLabel: {
        color: 'gray'
    },
    sameRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 5
    }
    
})

function mapStateToProps(state) {
    return {
        serieForm: state.serieForm
    }
}

const mapDispachToProps = {
    setField,
    saveSerie
}

export default connect(mapStateToProps, mapDispachToProps)(SerieFormPage);
