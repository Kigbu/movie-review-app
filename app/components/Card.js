import React, { PureComponent } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const imgBaseURL = `https://image.tmdb.org/t/p/w500`;
const placeholderImg = require('../assets/img/img01.jpg');

const propTypes = {
    item: PropTypes.object,
    navigation: PropTypes.object,
};

class Card extends PureComponent {
    render() {
        const { item, navigation } = this.props;
        return (
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate('Movie Details', { movieId: item.id })
                }
                style={styles.container}>
                <Image
                    style={styles.cardImage}
                    resizeMode="cover"
                    source={
                        item.poster_path
                            ? { uri: imgBaseURL + item.poster_path }
                            : placeholderImg
                    }
                />
                {!item.poster_path && (
                    <Text style={styles.movieTitle}>{item.title}</Text>
                )}
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 5,
        position: 'relative',
        height: 120,
        marginBottom: 5,
        // backgroundColor: 'red',
    },
    cardImage: {
        height: 120,
        width: 80,
        borderRadius: 14,
    },
    movieTitle: {
        position: 'absolute',
        top: 5,
        width: 70,
        textAlign: 'center',
        alignSelf: 'center',
        fontSize: 10,
        fontWeight: 'bold',
    },
});

Card.propTypes = propTypes;

export default Card;
