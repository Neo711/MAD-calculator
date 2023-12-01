import React from 'react';
import { Button, Text, View } from 'react-native';



const Scientific = () => {
    const [state, setState] = React.useState('Enter Number');

    const calculator = (type:any, value:any, prevState:any) => {
        if (prevState === 'Enter Number') {
            return `${value}`;
        }
        switch (type) {
            case 'number':
                if (prevState === '') {
                    return `${value}`;
                }
                return `${prevState}${value}`;

            case 'decimal':
                if (prevState.indexOf('.') !== -1)
                {
                    return prevState;
                }
            case 'operator':
                return `${prevState} ${value} `;
            case 'clear':
                return 'Enter Number';
            case 'posneg':
                return `${parseFloat(prevState) * -1}`;
            case 'percentage':
                return `${parseFloat(prevState) * 0.01}`;
            case 'equal':
                const expression = prevState.split(' ');
                const left = parseFloat(expression[0]);
                const operator = expression[1];
                const right = parseFloat(expression[2]);

                switch (operator) {
                    case '+':
                        return `${left + right}`;
                    case '-':
                        return `${left - right}`;
                    case '*':
                        return `${left * right}`;
                    case '/':
                        return `${left / right}`;
                    case 'pow':
                        return `${Math.pow(left, right)}`;
                    case 'sqrt':
                        return `${Math.sqrt(left)}`;
                    case 'cbrt':
                        return `${Math.cbrt(left)}`;
                    case 'log':
                        return `${Math.log(left)}`;
                    case 'log10':
                        return `${Math.log10(left)}`;
                    case 'log2':
                        return `${Math.log2(left)}`;
                    case '2^x':
                        return `${Math.pow(2, left)}`;
                    case 'e^x':
                        return `${Math.exp(left)}`;
                    case 'x^y':
                        return `${Math.pow(left, right)}`;
                    default:
                        return prevState;
                }
            default:
                return prevState;
        }
    };

    const handlePress = (type:any, value:any) => {
        setState((prevState) => calculator(type, value, prevState));
    };

    const handleSquare = () => {
        setState((prevState)=> {
            const number = parseFloat(prevState);
            const result = number * number;
            return `${result}`;
        });
    };

    const handleCube = () => {
        setState((prevState)=> {
            const number = parseFloat(prevState);
            const result = number * number * number;
            return `${result}`;
        });
    }

    const handleFactorial = () => {
        setState((prevState)=> {
            const number = parseFloat(prevState);
            let result = 1;
            for (let i = 1; i <= number; i++) {
                result *= i;
            }
            return `${result}`;
        });
    };
    

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style = {{fontSize: 30}}>{state}</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].map((number) => (
                <Button key={number} title={number} onPress={() => handlePress('number', number)} />
            ))}
            <Button title="C" onPress={() => handlePress('clear', '')} />
            <Button title="." onPress={() => handlePress('decimal', '.')} />
            <Button title="+/-" onPress={() => handlePress('posneg', '')} />
            <Button title="%" onPress={() => handlePress('percentage', '%')} />
            <Button title="/" onPress={() => handlePress('operator', '/')} />
            <Button title="*" onPress={() => handlePress('operator', '*')} />
            <Button title="-" onPress={() => handlePress('operator', '-')} />
            <Button title="+" onPress={() => handlePress('operator', '+')} />
            <Button title="PI" onPress={() => handlePress('operator', String(Math.PI))}/>
            <Button title="e" onPress={() => handlePress('operator', String(Math.E))}/>
            <Button title="e^x" onPress={() => handlePress('operator', String(Math.exp(parseFloat(state))))} />
            <Button title="sqrt" onPress={() => handlePress('operator', String(Math.sqrt(parseFloat(state))))} />
            <Button title="cbrt" onPress={() => handlePress('operator', String(Math.cbrt(parseFloat(state))))} />
            <Button title="Log" onPress={() => handlePress('operator', String(Math.log(parseFloat(state))))} />
            <Button title="Log10" onPress={() => handlePress('operator', String(Math.log10(parseFloat(state))))} />
            <Button title="Log2" onPress={() => handlePress('operator', String(Math.log2(parseFloat(state))))} />
            <Button title="Log10base(e)" onPress={() => handlePress('operator', String(Math.LOG10E))} />
            <Button title="Ln10" onPress={() => handlePress('operator', String(Math.LN10))} />
            <Button title="Ln2" onPress={() => handlePress('operator', String(Math.LN2))} />
            <Button title="2^x" onPress={() => handlePress('operator', '2^x')} />
            <Button title="x^y" onPress={() => handlePress('operator', 'x^y')} />
            <Button title="n!" onPress={() => handleFactorial()} />
            <Button title="x^2" onPress={() => handleSquare()} />
            <Button title="x^3" onPress={() => handleCube()} />
            <Button title="=" onPress={() => handlePress('equal','')} />
            </View>
        </View>
    );
};

export default Scientific;