import React from 'react';
import { View } from 'react-native';
import Button from './Button';
import calculator, { initialState } from '../util/calculator';

const ScientificCalculator = () => {
const [state, setState] = React.useState(initialState);

const handlePress = (type, value) => {
setState((prevState) => calculator(type, value, prevState));
};

return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'].map((number) => (
            <Button key={number} title={number} onPress={() => handlePress('number', number)} />
        ))}
        <Button title="C" onPress={() => handlePress('clear')} />
        <Button title="+/-" onPress={() => handlePress('posneg')} />
        <Button title="%" onPress={() => handlePress('percentage')} />
        <Button title="/" onPress={() => handlePress('operator', '/')} />
        <Button title="*" onPress={() => handlePress('operator', '*')} />
        <Button title="-" onPress={() => handlePress('operator', '-')} />
        <Button title="+" onPress={() => handlePress('operator', '+')} />
        <Button title="=" onPress={() => handlePress('equal')} />
        </View>
    </View>
    );
};

export default ScientificCalculator;