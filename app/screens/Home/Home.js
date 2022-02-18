import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    Dimensions,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    View,
} from 'react-native';
import {
    getPopularMovies,
    getUpcomingMovies,
    getPopularTvSeries,
    getTrendingMovies,
    getFamliyMovies,
    getDocumentaries,
} from '../../services/services';
import { SliderBox } from 'react-native-image-slider-box';
import List from '../../components/List';
import Error from '../../components/Error';

const imgBaseURL = `https://image.tmdb.org/t/p/w500`;
const dimensions = Dimensions.get('screen');
const Home = ({ navigation }) => {
    const [moviesImages, setMoviesImages] = useState();
    const [popularMovies, setPopularMovies] = useState();
    const [trendingMovies, setTrendingMovies] = useState();
    const [familyMovies, setFamilyMovies] = useState();
    const [documentaryMovies, setDocumentaryMovies] = useState();
    const [popularTv, setPopularTv] = useState();
    const [error, setError] = useState(false);
    const [loaded, setLoaded] = useState(false);

    const getMovieData = () => {
        return Promise.all([
            getUpcomingMovies(),
            getPopularMovies(),
            getPopularTvSeries(),
            getTrendingMovies(),
            getFamliyMovies(),
            getDocumentaries(),
        ]);
    };

    useEffect(() => {
        getMovieData()
            .then(
                ([
                    upcomingMovies,
                    popularMoviesData,
                    popularTvSeriesData,
                    trendingMoviesData,
                    familyMoviesData,
                    documentaryMoviesData,
                ]) => {
                    const moviesImagesArray = [];
                    upcomingMovies.forEach(movie => {
                        moviesImagesArray.push(imgBaseURL + movie.poster_path);
                    });
                    setMoviesImages(moviesImagesArray);

                    setPopularMovies(popularMoviesData);

                    setPopularTv(popularTvSeriesData);

                    setTrendingMovies(trendingMoviesData);

                    setFamilyMovies(familyMoviesData);

                    setDocumentaryMovies(documentaryMoviesData);

                    setLoaded(true);
                },
            )
            .catch(() => {
                setError(true);
            })
            .finally(() => {
                setLoaded(true);
            });
    }, []);
    // console.log('popularMovies :>> ', JSON.stringify(popularMovies, null, 2));
    return (
        <SafeAreaView style={styles.wrapperContainer}>
            {loaded && !error && (
                <ScrollView>
                    {moviesImages && (
                        <View
                            style={
                                (styles.sliderContainer,
                                { height: dimensions.height / 1.8 })
                            }>
                            <SliderBox
                                images={moviesImages}
                                sliderBoxHeight="100%"
                                resizeMode="cover"
                                parentWidth={dimensions.width / 1}
                                dotStyle={{ height: 0 }}
                                autoplay={true}
                                circleLoop={true}
                                ImageComponentStyle={styles.sliderbox}
                            />
                        </View>
                    )}
                    {trendingMovies && (
                        <View style={styles.carousel}>
                            <List
                                navigation={navigation}
                                title="Trending Movies"
                                content={trendingMovies}
                            />
                        </View>
                    )}
                    {popularMovies && (
                        <View style={styles.carousel}>
                            <List
                                navigation={navigation}
                                title="Popular Movies"
                                content={popularMovies}
                            />
                        </View>
                    )}
                    {popularTv && (
                        <View style={styles.carousel}>
                            <List
                                navigation={navigation}
                                title="Popular TV Series"
                                content={popularTv}
                            />
                        </View>
                    )}
                    {familyMovies && (
                        <View style={styles.carousel}>
                            <List
                                navigation={navigation}
                                title="Family Movies"
                                content={familyMovies}
                            />
                        </View>
                    )}
                    {documentaryMovies && (
                        <View style={styles.carousel}>
                            <List
                                navigation={navigation}
                                title="Documentaries"
                                content={documentaryMovies}
                            />
                        </View>
                    )}
                </ScrollView>
            )}
            {!loaded && <ActivityIndicator />}
            {error && <Error />}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    wrapperContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    sliderContainer: {
        flex: 0,
        paddingHorizontal: 10,
        alignItems: 'center',
    },
    sliderbox: {
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        width: '95%',
        marginLeft: 5,
        alignItems: 'center',
    },
    carousel: {
        flex: 1,
        top: 5,
        marginBottom: 15,
        paddingHorizontal: 10,
    },
});

export default Home;
