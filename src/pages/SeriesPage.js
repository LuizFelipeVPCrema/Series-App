import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import SerieCard from '../components/SerieCard'
import { useNavigation } from '@react-navigation/native';

import series from '../../series.json'
import AddSerieCard from '../components/AddSerieCard';

const isEven = number => number % 2 === 0;

const SeriesPage = props => {
    const navigation = useNavigation();

        return(
            <View>
                <FlatList 
                    data={[...series, { isLast: true }]}
                    renderItem={({ item, index }) => (
                        item.isLast 
                            ? <AddSerieCard 
                                isFirstColumn={isEven(index)} 
                                onNavigate={() => navigation.navigate('SerieForm')}
                            />
                            : <SerieCard 
                                serie={item}
                                isFirstColumn={isEven(index)} 
                                onNavigate={() => navigation.navigate('SerieDetail', { serie: item })}
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
