import React from 'react';
import { Button, Text, View, StyleSheet, Pressable } from 'react-native';



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
        <View style={ styles.container }>
            <Text style = {styles.Text}>{state}</Text>
            <View style={styles.View}>
            <Pressable style = {styles.Pressable} key="C" onPress={() => handlePress('clear', '')}><Text>C</Text>
            </Pressable>
            <Pressable style = {styles.Pressable} key="." onPress={() => handlePress('decimal', '.')} ><Text>.</Text>
            </Pressable>
            <Pressable style = {styles.Pressable} key="+/-" onPress={() => handlePress('posneg', '')} ><Text>+/-</Text>
            </Pressable>
            <Pressable style = {styles.Pressable} key="%" onPress={() => handlePress('percentage', '%')} ><Text>%</Text>
            </Pressable>
            <Pressable style = {styles.Pressable} key="=" onPress={() => handlePress('equal','')} ><Text>=</Text>
            </Pressable>
            <Pressable style = {styles.Pressable} key="/" onPress={() => handlePress('operator', '/')} ><Text>/</Text>
            </Pressable>
            <Pressable style = {styles.Pressable} key="*" onPress={() => handlePress('operator', '*')} ><Text>*</Text>
            </Pressable>
            <Pressable style = {styles.Pressable} key="-" onPress={() => handlePress('operator', '-')} ><Text>-</Text>
            </Pressable>
            <Pressable style = {styles.Pressable} key="+" onPress={() => handlePress('operator', '+')} ><Text>+</Text>
            </Pressable>
            <Pressable style = {styles.Pressable} key="PI" onPress={() => handlePress('operator', String(Math.PI))}><Text>PI</Text>
            </Pressable>
            <Pressable style = {styles.Pressable} key="e" onPress={() => handlePress('operator', String(Math.E))}><Text>e</Text>
            </Pressable>
            <Pressable style = {styles.Pressable} key="e^x" onPress={() => handlePress('operator', String(Math.exp(parseFloat(state))))} ><Text>e^x</Text>
            </Pressable>
            <Pressable style = {styles.Pressable} key="sqrt" onPress={() => handlePress('operator', String(Math.sqrt(parseFloat(state))))} ><Text>sqrt</Text>
            </Pressable>
            <Pressable style = {styles.Pressable} key="cbrt" onPress={() => handlePress('operator', String(Math.cbrt(parseFloat(state))))} ><Text>cbrt</Text>
            </Pressable>
            <Pressable style = {styles.Pressable} key="Log" onPress={() => handlePress('operator', String(Math.log(parseFloat(state))))} ><Text>Log</Text>
            </Pressable>
            <Pressable style = {styles.Pressable} key="Log10" onPress={() => handlePress('operator', String(Math.log10(parseFloat(state))))} ><Text>Log10</Text>
            </Pressable>
            <Pressable style = {styles.Pressable} key="Log2" onPress={() => handlePress('operator', String(Math.log2(parseFloat(state))))} ><Text>Log2</Text>
            </Pressable>
            <Pressable style = {styles.Pressable} key="Log10base(e)" onPress={() => handlePress('operator', String(Math.LOG10E))} ><Text>Log10base(e)</Text>
            </Pressable>
            <Pressable style = {styles.Pressable} key="Ln10" onPress={() => handlePress('operator', String(Math.LN10))} ><Text>Ln10</Text>
            </Pressable>
            <Pressable style = {styles.Pressable} key="Ln2" onPress={() => handlePress('operator', String(Math.LN2))} ><Text>Ln2</Text>
            </Pressable>
            <Pressable style = {styles.Pressable} key="2^x" onPress={() => handlePress('operator', '2^x')} ><Text>2^x</Text>
            </Pressable>
            <Pressable style = {styles.Pressable} key="x^y" onPress={() => handlePress('operator', 'x^y')} ><Text>x^y</Text>
            </Pressable>
            <Pressable style = {styles.Pressable} key="n!" onPress={() => handleFactorial()} ><Text>n!</Text>
            </Pressable>
            <Pressable style = {styles.Pressable} key="x^2" onPress={() => handleSquare()} ><Text>x^2</Text>
            </Pressable>
            <Pressable style = {styles.Pressable} key="x^3" onPress={() => handleCube()} ><Text>x^3</Text>
            </Pressable>
            {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].map((number) => (
                <Pressable style = {styles.Pressable} key={number} onPress={() => handlePress('number', number)}>
                    <Text>{number}</Text>
                </Pressable>
            ))}
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
        fontSize : 100,
    },

    View : {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 0,
        backgroundColor : '#777777',

    },

    Text : {
        fontSize : 50,
        color : '#D9D9D9',
        justifyContent: 'center',
        alignItems: 'center',
    },

    Pressable: {
        width : 74,
        height : 74,
        borderRadius : 50,
        backgroundColor : '#D9D9D9',
        justifyContent: 'center',
        alignItems: 'center',
    },
    });

export default Scientific;