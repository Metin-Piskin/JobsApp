import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import İcon from '../İcon/İcon';

import styles from './Button.style';
const Button = ({ title,iconname, onPress, disabled = false }) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}
            disabled={disabled}>
            <View style={styles.textContainer}>
                <İcon name={iconname} color="white" />
            </View>
        </TouchableOpacity>
    );
};

export default Button;