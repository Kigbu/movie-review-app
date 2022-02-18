import React, { useState } from 'react';
import {
    FlatList,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Card from '../../components/Card';
import Error from '../../components/Error';
import { searchMovieTv } from '../../services/services';

const Search = ({ navigation }) => {
    const [searchData, setSeaechData] = useState();
    const [searchText, setSearchText] = useState('');
    const [error, setError] = useState(false);
    const handleSubmit = query => {
        Promise.all([searchMovieTv(query, 'movie'), searchMovieTv(query, 'tv')])
            .then(([movieData, tvData]) => {
                const data = [...movieData, ...tvData];
                setSeaechData(data);
                // console.log('movieData :>> ', JSON.stringify(movieData, null, 4));
            })
            .catch(() => {
                setError(true);
            });
    };

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.form}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Search Movie/TV series"
                        onChangeText={setSearchText}
                        value={searchText}
                    />
                </View>
                <View style={styles.searchBtn}>
                    <TouchableOpacity
                        onPress={() => {
                            handleSubmit(searchText);
                        }}>
                        <Icon
                            name={'search-outline'}
                            size={30}
                            color={'black'}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.searchItems}>
                {searchData && searchData.length > 0 && (
                    <FlatList
                        numColumns={4}
                        data={searchData}
                        renderItem={({ item }) => (
                            <Card navigation={navigation} item={item} />
                        )}
                        keyExtractor={item => item.id}
                    />
                )}
                {searchData && searchData.length == 0 && (
                    <View style={styles.empty}>
                        <Text>No result matching you search</Text>
                        <Text>Try another keyword</Text>
                    </View>
                )}
                {!searchData && (
                    <View style={styles.empty}>
                        <Text>Type Something to search</Text>
                    </View>
                )}

                {error && <Error />}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { flexDirection: 'row', alignItems: 'center', padding: 15 },
    form: { flexBasis: 'auto', flexGrow: 1, paddingRight: 5 },
    textInput: {
        height: 50,
        borderRadius: 15,
        borderWidth: 0.5,
        padding: 5,
    },
    searchBtn: {
        right: 0,
    },
    searchItems: {
        alignItems: 'center',
        padding: 5,
    },
});

export default Search;
