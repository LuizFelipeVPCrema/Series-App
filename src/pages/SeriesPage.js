import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import SerieCard from '../components/SerieCard'
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import { watchSeries } from '../actions';

import AddSerieCard from '../components/AddSerieCard';

const isEven = number => number % 2 === 0;

const SeriesPage = ({ series, watchSeries }) => {

    const navigation = useNavigation();

    useEffect(() => {
        watchSeries();
    }, []); 

        return(
            <View>
                <FlatList 
                    data={[...series, {isLast: true}]}
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


const mapStateToProps = state => {
    const { series } = state;

    const keys = Object.keys(series);
    const seriesWithKeys = keys.map(id => {
        return { ...series[id], id }
    })

    console.log('series trasformadas', seriesWithKeys)
    return { series: seriesWithKeys }
}

const mapDispatchToProps = dispatch => ({
    watchSeries: () => dispatch(watchSeries())
})

export default connect(mapStateToProps, mapDispatchToProps)(SeriesPage);
 