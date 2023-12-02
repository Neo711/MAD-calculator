import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

const Simple = () => {
    const [state, setState] = React.useState('');

    const calculator = (type: any, value: string, prevState: string) => {
        switch (type) {
            case 'number':
                return prevState + value;
            case 'operator':
                if (['+', '-', '*', '/'].includes(prevState.slice(-1))) {
                    return prevState; // Prevent consecutive operators
                }
                return prevState + ' ' + value + ' ';
            case 'clear':
                return '';
            case 'equal':
                try {
                    return eval(prevState.replace(/ /g, '')).toString();
                } catch (e) {
                    return "Error";
                }
            default:
                return prevState;
        }
    };

    const handlePress = (type: string, value: string) => {
        setState(prevState => calculator(type, value, prevState));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{state || '0'}</Text>
            <View style={styles.view}>
                {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'].map(button => (
                    <Pressable style={styles.pressable} key={button} onPress={() => handlePress(button === '=' ? 'equal' : isNaN(button) ? 'operator' : 'number', button)}>
                        <Text>{button}</Text>
                    </Pressable>
                ))}
                <Pressable style={styles.pressable} onPress={() => handlePress('clear', '')}>
                    <Text>C</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4F4F4F',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 10,
    },
    view: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text: {
        fontSize: 50,
        color: '#D9D9D9',
    },
    pressable: {
        width: 74,
        height: 74,
        borderRadius: 50,
        backgroundColor: '#D9D9D9',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
    },
});

export default Simple;
