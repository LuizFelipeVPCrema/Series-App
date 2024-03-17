import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class SeriesPage extends React.Component {
    render() {
        return(
            <View>
                <Text style={styles.teste}> Eu sou a SeriesPage</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    teste: {
        color: 'white',
    }
})

export default SeriesPage;
