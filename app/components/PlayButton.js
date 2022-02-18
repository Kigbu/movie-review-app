import React, { PureComponent } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { theme } from '../../AppStyles';

class PlayButton extends PureComponent {
    render() {
        const { handlePress } = this.props;
        return (
            <>
                <Pressable onPress={() => handlePress()} style={styles.button}>
                    <Icon
                        name={'caret-forward-outline'}
                        size={25}
                        color={theme.colors.primary}
                    />
                </Pressable>
            </>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
        width: 40,
        height: 40,
        // padding: 5,
        backgroundColor: theme.colors.secondary,
    },
});

export default PlayButton;
