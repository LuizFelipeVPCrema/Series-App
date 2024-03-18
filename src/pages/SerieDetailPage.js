import React from "react";
import { ScrollView, StyleSheet, Image } from 'react-native'
import Line from "../components/Line";
import LongLine from "../components/LongLine";


const SerieDetailPage = ({ serie }) => {
    return(
        <ScrollView>
            <Image 
                source={{ uri: serie.img }}
                style={styles.image}
            />
            <Line label="Título" content={serie.title} />
            <Line label="Genero" content={serie.gender} />
            <Line label="Nota" content={serie.rate} />
            <LongLine label="Descrição" content={serie.description} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {

    },
    image: {
        aspectRatio: 1,
    }
});


export default SerieDetailPage;