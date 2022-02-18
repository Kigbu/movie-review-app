import React, { PureComponent } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import { theme } from '../../AppStyles';

const propTypes = {
    main: PropTypes.bool,
};
const defaultProps = {
    main: false,
};

class Header extends PureComponent {
    render() {
        const { navigation, main, route, options } = this.props;
        // console.log('route :>> ', JSON.stringify(route, null, 4));
        // console.log('options :>> ', JSON.stringify(options, null, 4));
        return (
            <View style={styles.container}>
                {main ? (
                    <View style={styles.mainHeaderContent}>
                        <Image
                            style={styles.logo}
                            source={require('../assets/img/logo.png')}
                        />
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('Search');
                            }}>
                            <Icon
                                name={'search-outline'}
                                size={25}
                                color={theme.colors.secondary}
                            />
                        </TouchableOpacity>
                    </View>
                ) : (
                    <View View style={styles.headerContent}>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.goBack();
                            }}>
                            <Icon
                                name={'arrow-back-outline'}
                                size={25}
                                color={theme.colors.secondary}
                            />
                        </TouchableOpacity>
                        <Text style={styles.titleText}>{route.name}</Text>
                    </View>
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.primary,
        height: 45,
        justifyContent: 'center',
        // position: 'absolute',
        // top: 50,
    },
    mainHeaderContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 12,
    },
    headerContent: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginHorizontal: 12,
    },
    logo: {
        height: 25,
        width: 25,
        borderRadius: 25,
        backgroundColor: theme.colors.black,
        marginVertical: 0,
    },
    titleText: { color: theme.colors.white, marginLeft: 10 },
});

Header.propTypes = propTypes;

export default Header;
