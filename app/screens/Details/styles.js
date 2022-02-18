import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';

const dimensions = Dimensions.get('screen');

export default StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        // backgroundColor: 'red',
    },
    imgWrapper: {
        flex: 1,
        width: dimensions.width,
        marginHorizontal: 5,
        // marginLeft: 5,
        // marginRight: 5,
    },
    detailWraper: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 15,
        marginVertical: 15,
    },
    image: {
        height: dimensions.height / 2,
        width: '100%',
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        // marginHorizontal: 5,
    },
    movieTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingHorizontal: 10,
        marginBottom: 5,
    },
    genres: {
        flexDirection: 'row',
        alignContent: 'center',
        marginBottom: 10,
    },
    genre: { marginRight: 10, fontWeight: 'bold' },
    rating: { marginBottom: 10 },
    overview: { marginBottom: 10, textAlign: 'center', fontSize: 12 },
    releaseDate: { fontWeight: 'bold' },
    playButtonWrapper: { position: 'absolute', top: -35, right: 15 },
    videoModal: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
