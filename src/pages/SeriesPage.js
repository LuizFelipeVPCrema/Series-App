import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import SerieCard from '../components/SerieCard'

import series from '../../series.json'

const isEven = number => number % 2 === 0;

const SeriesPage = props => {
        return(
            <View>
                <FlatList 
                    data={series}
                    renderItem={({ item, index }) => (
                        <SerieCard 
                            serie={item}
                            isFirstColumn={isEven(index)} 
                        />
                    )}
                    keyExtractor={ item => item.id }
                    numColumns={2}
                    ListHeaderComponent={props => (<View style={styles.marginTop} />)}
                    ListFooterComponent={props => (<View style={styles.marginBottom} />)}
                />
            </View>
        );

}


const styles = StyleSheet.create({
    marginTop: {
        marginTop: 5
    },
    marginBottom: {
        marginBottom: 5
    }
})

export default SeriesPage;
