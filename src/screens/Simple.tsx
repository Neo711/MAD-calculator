import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

function Simple({ navigation }: any): JSX.Element {
  const [inputValue, setInputValue] = useState('0');

  const onPressHandler = (button: string) => {
    let temp = inputValue;
    if (temp === '0') {
      temp = '';
    }

    switch (button) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        temp += button;
        break;
      case '.':
        if (!temp.includes('.')) {
          temp += '.';
        }
        break;
      case '+':
      case '-':
      case '*':
      case '/':
        temp += ` ${button} `;
        break;
      case 'C':
        temp = '0';
        break;
      case '=':
        try {
          temp = eval(temp).toString();
        } catch (e) {
          temp = "Error";
        }
        break;
      default:
        break;
    }
    setInputValue(temp);
  }

  return (
    <View style={styles.Body}>
      <View style={styles.InputOutput}>
        <View style={styles.Screen}>
          <Text style={styles.ScreenNumericalValues}>{inputValue}</Text>
        </View>
      </View>
      <View style={styles.Buttons}>
      <View style={styles.ButtonRow}>
          {/* Navigation Buttons */}
          <Pressable style={styles.Navigation} onPress={() => navigation.navigate("Simple")}>
            <Text style={styles.NavigationText}>Simple</Text>
          </Pressable>
          <Pressable style={styles.Navigation} onPress={() => navigation.navigate("Scientific")}>
            <Text style={styles.NavigationText}>Scientific</Text>
          </Pressable>
          <Pressable style={styles.Navigation} onPress={() => navigation.navigate("Graphing")}>
            <Text style={styles.NavigationText}>Graphing</Text>
          </Pressable>
          <Pressable style={styles.Navigation} onPress={() => navigation.navigate("Converter")}>
            <Text style={styles.NavigationText}>Converter</Text>
          </Pressable>
        </View>
        <View style={styles.ButtonRow}>
          {['7', '8', '9', '*'].map(button => (
            <Pressable key={button} style={styles.Number} onPress={() => onPressHandler(button)}>
              <Text style={styles.NumberText}>{button}</Text>
            </Pressable>
          ))}
        </View>
        <View style={styles.ButtonRow}>
          {['4', '5', '6', '-'].map(button => (
            <Pressable key={button} style={styles.Number} onPress={() => onPressHandler(button)}>
              <Text style={styles.NumberText}>{button}</Text>
            </Pressable>
          ))}
        </View>
        <View style={styles.ButtonRow}>
          {['1', '2', '3', '+'].map(button => (
            <Pressable key={button} style={styles.Number} onPress={() => onPressHandler(button)}>
              <Text style={styles.NumberText}>{button}</Text>
            </Pressable>
          ))}
        </View>
        
        <View style={styles.ButtonRow}>
          <Pressable style={styles.Number} onPress={() => onPressHandler('0')}>
            <Text style={styles.NumberText}>0</Text>
          </Pressable>
          <Pressable style={styles.Number} onPress={() => onPressHandler('.')}>
            <Text style={styles.NumberText}>.</Text>
          </Pressable>
          <Pressable style={styles.Accent} onPress={() => onPressHandler('=')}>
            <Text style={styles.AccentText}>=</Text>
          </Pressable>
          <Pressable style={styles.Accent} onPress={() => onPressHandler('/')}>
            <Text style={styles.AccentText}>/</Text>
          </Pressable>
        </View>
        <View style={styles.ButtonRow}>
          {['C'].map(button => (
            <Pressable key={button} style={styles.Number} onPress={() => onPressHandler(button)}>
              <Text style={styles.NumberText}>{button}</Text>
            </Pressable>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    Body: {
      backgroundColor: '#4F4F4F',
      fontFamily: 'PTSans',
      color: Colors.black,
      height: '100%',
    },
  
    InputOutput: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
  
    Category: {
      display: 'flex',
      flexDirection: 'column',
      alignContent: 'center',
      justifyContent: 'center',
      width: '95%',
      height: 50,
      backgroundColor: '#EBAC4E',
      color: Colors.black,
      margin: 10,
      borderRadius: 8,
    },
  
    Screen: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#777777',
      border: '2px black solid',
      width: 'auto',
      height: 140,
      margin: 10,
      borderRadius: 8,
    },
  
    ScreenRow: {
      display: 'flex',
      flexDirection: 'column',
      width: '50%',
      height: '50%',
    },
  
    ScreenSelect: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#EBAC4E',
      color: Colors.black,
      height: '50%',
      borderRadius: 10,
      margin: 5,
      padding: 2,
    },
  
    ScreenNumericalValues: {
      fontSize: 60,
      textAlign: 'right',
      width: '100%',
      height: '100%',
    },
  
    Number: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#D9D9D9',
      color: Colors.black,
      padding: 5,
      textAlign: 'center',
      height: 80,
      width: 80,
      borderRadius: 80/2,
    },
  
    NumberText: {
      fontSize: 40,
      fontWeight: 'bold',
    },
  
    Accent: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#EBAC4E',
      color: Colors.black,
      padding: 5,
      textAlign: 'center',
      height: 80,
      width: 80,
      borderRadius: 80/2,
    },
  
    AccentText: {
      fontSize: 24,
      fontWeight: 'bold',
    },
  
    Navigation: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#D9D9D9',
      color: Colors.grey,
      padding: 5,
      textAlign: 'center',
      width: 80,
      height: 80,
      borderRadius: 80/2,
    },
  
    NavigationText: {
      fontSize: 14,
      fontWeight: 'bold',
    },
  
  
    Buttons: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    },
  
    ButtonRow: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: 5,
      width: '90%',
    },
  });

export default Simple;
