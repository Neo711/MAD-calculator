import React from react;
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ onPress, title }) => {
    return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 1,
    height: 40,
    },
    text: {
    fontSize: 18,
    },
});

export default Button;