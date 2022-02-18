import React, { PureComponent } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Card from './Card';
import PropTypes from 'prop-types';

const propTypes = {
    title: PropTypes.string,
    content: PropTypes.array,
    navigation: PropTypes.object,
};

class List extends PureComponent {
    render() {
        const { title, content, navigation } = this.props;
        return (
            <View styles={styles.listContainer}>
                <View>
                    <Text style={styles.titleText}>{title}</Text>
                </View>
                <View>
                    <FlatList
                        data={content}
                        renderItem={({ item }) => (
                            <Card navigation={navigation} item={item} />
                        )}
                        horizontal={true}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    titleText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    listContainer: {
        marginTop: 0,
    },
});

List.propTypes = propTypes;

export default List;
