import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity
} from 'react-native';

const AddSerieCard = ({ serie, isFirstColumn, onNavigate }) => (
    <TouchableOpacity 
        onPress={() => onNavigate(serie)}
        style={[
            styles.container,
            isFirstColumn ? styles.firstColumn : styles.lastColumn
        ]}>
        <View style={styles.card}>
            
            <Image 
                source={require('../resources/add-circle-line.png')}
                style={styles.imgCard}
            />
            <Text style={styles.labelCard}> Adicionar Nova </Text>
        </View>
    </TouchableOpacity>

);

const styles = StyleSheet.create({
    container:{
        width: '50%',
        height: Dimensions.get('window').width / 2,
        padding: 5,
    },
    card: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'white',
    },
    firstColumn: {
        paddingLeft: 10
    },
    lastColumn: {
        paddingRight: 10
    },
    imgCard: {
        aspectRatio: 1,
        resizeMode: 'cover',
        width: '75%',
        height: '75%',
        alignSelf: 'center'
    },
    labelCard: {
        color: 'white',
        alignSelf: 'center'
    }
})

export default AddSerieCard;