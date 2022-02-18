import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    Image,
    Modal,
    Pressable,
    SafeAreaView,
    ScrollView,
    Text,
    View,
} from 'react-native';
import dateformat from 'dateformat';
import StarRating from 'react-native-star-rating';
import Error from '../../components/Error';
import { getMovieDetails } from '../../services/services';
import styles from './styles';
import PlayButton from '../../components/PlayButton';
import Video from '../../components/Video';
import { theme } from '../../../AppStyles';

const imgBaseURL = `https://image.tmdb.org/t/p/w500`;
const placeholderImg = require('../../assets/img/img01.jpg');

const Detail = ({ route, navigation }) => {
    const movieId = route.params.movieId;
    const [movieDetails, setMovieDetails] = useState();
    const [modalVisibe, setModalVisible] = useState(false);
    const [error, setError] = useState(false);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        getMovieDetails(movieId)
            .then(movieData => {
                setMovieDetails(movieData);
                setLoaded(true);
            })
            .catch(() => {
                setError(true);
            })
            .finally(() => {
                setLoaded(true);
            });
    }, [movieId]);
    // console.log('movieDetails :>> ', JSON.stringify(movieDetails, null, 4));

    const modalShow = () => {
        setModalVisible(!modalVisibe);
    };

    return (
        <SafeAreaView style={styles.container}>
            {loaded && !error && (
                <View>
                    <ScrollView>
                        <View style={styles.imgWrapper}>
                            <Image
                                style={styles.image}
                                resizeMode="cover"
                                source={
                                    movieDetails.poster_path
                                        ? {
                                              uri:
                                                  imgBaseURL +
                                                  movieDetails.poster_path,
                                          }
                                        : placeholderImg
                                }
                            />
                        </View>
                        <View style={styles.detailWraper}>
                            <View style={styles.playButtonWrapper}>
                                <PlayButton handlePress={modalShow} />
                            </View>
                            <Text style={styles.movieTitle}>
                                {movieDetails.title}
                            </Text>
                            {movieDetails.genres && (
                                <View style={styles.genres}>
                                    {movieDetails.genres.map(genre => {
                                        return (
                                            <Text
                                                style={styles.genre}
                                                key={genre.id}>
                                                {genre.name}
                                            </Text>
                                        );
                                    })}
                                </View>
                            )}
                            <View style={styles.rating}>
                                <StarRating
                                    maxStars={5}
                                    starSize={20}
                                    rating={movieDetails.vote_average / 2}
                                    disabled={true}
                                    fullStarColor={theme.colors.secondary}
                                />
                            </View>

                            <Text style={styles.overview}>
                                {movieDetails.overview}
                            </Text>
                            <Text style={styles.releaseDate}>
                                {'Release Date: ' +
                                    dateformat(
                                        movieDetails.release_date,
                                        'mmmm dd, yyyy',
                                    )}
                            </Text>
                        </View>
                    </ScrollView>
                    <Modal
                        supportedOrientations={['landscape', 'portrait']}
                        animationType="slide"
                        visible={modalVisibe}>
                        <View style={styles.videoModal}>
                            <Pressable onPress={() => modalShow()}>
                                <Video
                                    onClose={modalShow}
                                    navigation={navigation}
                                />
                            </Pressable>
                        </View>
                    </Modal>
                </View>
            )}
            {!loaded && <ActivityIndicator />}
            {error && <Error />}
        </SafeAreaView>
    );
};

export default Detail;
