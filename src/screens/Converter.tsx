import React, {useState, useEffect} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import Dropdown from '../components/Dropdown';


function Converter(): JSX.Element {
  // Dark Mode Settings
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  // State variable
  const [conversionCategory, setConversionCategory] = useState('');
  const [itemList, setItemList] = useState([{label: '', value: '', key: ''}]);
  const [measurement1, setMeasurement1] = useState('');
  const [measurement2, setMeasurement2] = useState('');
  const [inputValue, setInputValue] = useState('0');
  const [outputValue, setOutputValue] = useState('0');

  // UseEffect
  useEffect(() => {
    if (conversionCategory === '0') {
      setItemList(areaItems);
    } else if (conversionCategory === '1') {
      setItemList(lengthItems);
    } else if (conversionCategory === '2') {
      setItemList(temperatureItems);
    } else if (conversionCategory === '3') {
      setItemList(volumeItems);
    } else if (conversionCategory === '4') {
      setItemList(massItems);
    } else if (conversionCategory === '5') {
      setItemList(dataItems);
    } else if (conversionCategory === '6') {
      setItemList(speedItems);
    } else if (conversionCategory === '7') {
      setItemList(timeItems);
    }
  }, [conversionCategory])

  const conversionCategoryItems = [
    { label: 'Area', value: '0', key: 'Area' },
    { label: 'Length', value: '1', key: 'Length' },
    { label: 'Temperature', value: '2', key: 'Temperature' },
    { label: 'Volume', value: '3', key: 'Volume' },
    { label: 'Mass', value: '4', key: 'Mass' },
    { label: 'Data', value: '5', key: 'Data' },
    { label: 'Speed', value: '6', key: 'Speed' },
    { label: 'Time', value: '7', key: 'Time' },
  ]
  const areaItems = [
    { label: 'Square Kilometer', value: '0', key: 'Square Kilometer' },
    { label: 'Square Meter', value: '1', key: 'Square Meter' },
    { label: 'Square Mile', value: '2',  key: 'Square Mile' },
    { label: 'Square Yard', value: '3', key: 'Square Yard' },
    { label: 'Square Foot', value: '4', key: 'Square Foot' },
    { label: 'Square Inch', value: '5', key: 'Square Inch'},
    { label: 'Hectare', value: '6', key: 'Hectare' },
    { label: 'Acre', value: '7', key: 'Acre' },
  ]
  const lengthItems = [
    { label: 'Kilometer', value: '0', key: 'Kilometer' },
    { label: 'Meter', value: '1', key: 'Meter' },
    { label: 'Centimeter', value: '2', key: 'Centimeter' },
    { label: 'Millimeter', value: '3', key: 'Millimeter' },
    { label: 'Micrometer', value: '4', key: 'Micrometer' },
    { label: 'Nanometer', value: '5', key: 'Nanometer' },
    { label: 'Mile', value: '6', key: 'Mile' },
    { label: 'Yard', value: '7', key: 'Yard' },
    { label: 'Foot', value: '8', key: 'Foot' },
    { label: 'Inch', value: '9', key: 'Inch' },
    { label: 'Nautical Mile', value: '10', key: 'Nautical Mile' },
  ]
  const temperatureItems = [
    { label: 'Celsius', value: '0', key: 'Celsius' },
    { label: 'Fahrenheit', value: '1', key: 'Fahrenheit' },
    { label: 'Kelvin', value: '2', key: 'Kelvin' },
  ]
  const volumeItems = [
    { label: 'Cubic Kilometer', value: '0', key: 'Cubic Kilometer' },
    { label: 'Cubic Meter', value: '1', key: 'Cubic Meter' },
    { label: 'Cubic Centimeter', value: '2', key: 'Cubic Centimeter' },
    { label: 'Liter', value: '3', key: 'Liter' },
    { label: 'Milliliter', value: '4', key: 'Milliliter' },
    { label: 'US Gallon', value: '5', key: 'US Gallon' },
    { label: 'US Quart', value: '6', key: 'US Quart' },
    { label: 'US Pint', value: '7', key: 'US Pint' },
    { label: 'US Cup', value: '8', key: 'US Cup' },
    { label: 'US Fluid Ounce', value: '9', key: 'US Fluid Ounce' },
    { label: 'US Tablespoon', value: '10', key: 'US Tablespoon' },
    { label: 'US Teaspoon', value: '11', key: 'US Teaspoon' },
    { label: 'Cubic Mile', value: '12', key: 'Cubic Mile' },
    { label: 'Cubic Yard', value: '13', key: 'Cubic Yard' },
    { label: 'Cubic Foot', value: '14', key: 'Cubic Foot' },
    { label: 'Cubic Inch', value: '15', key: 'Cubic Inch' },
  ]
  const massItems = [
    { label: 'Metric Ton', value: '0', key: 'Metric Ton' },
    { label: 'Kilogram', value: '1', key: 'Kilogram' },
    { label: 'Gram', value: '2', key: 'Gram' },
    { label: 'Milligram', value: '3', key: 'Milligram' },
    { label: 'Mcg', value: '4', key: 'Mcg' },
    { label: 'Long Ton', value: '5', key: 'Long Ton' },
    { label: 'Short Ton', value: '6', key: 'Short Ton' },
    { label: 'Stone', value: '7', key: 'Stone' },
    { label: 'Pound', value: '8', key: 'Pound' },
    { label: 'Ounce', value: '9', key: 'Ounce' },
  ]
  const dataItems = [
    { label: 'Bit', value: '0', key: 'Bit' },
    { label: 'Byte', value: '1', key: 'Byte' },
    { label: 'Kilobit', value: '2', key: 'Kilobit' },
    { label: 'Kilobyte', value: '3', key: 'Kilobyte' },
    { label: 'Megabit', value: '4', key: 'Megabit' },
    { label: 'Megabyte', value: '5', key: 'Megabyte' },
    { label: 'Gigabit', value: '6', key: 'Gigabit' },
    { label: 'Gigabyte', value: '7', key: 'Gigabyte' },
    { label: 'Terabit', value: '8', key: 'Terabit' },
    { label: 'Terabyte', value: '9', key: 'Terabyte' },
    { label: 'Petabit', value: '10', key: 'Petabit' },
    { label: 'Petabyte', value: '11', key: 'Petabyte' },
    { label: 'Exabit', value: '12', key: 'Exabit' },
    { label: 'Exabyte', value: '13', key: 'Exabyte' },
    { label: 'Zettabit', value: '14', key: 'Zettabit' },
    { label: 'Zettabyte', value: '15', key: 'Zettabyte' },
    { label: 'Yottabit', value: '16', key: 'Yottabit' },
    { label: 'Yottabyte', value: '17', key: 'Yottabyte' },
  ]
  const speedItems = [
    { label: 'Meter/Second', value: '0', key: 'Meter/Second' },
    { label: 'Kilometer/Hour', value: '1', key: 'Kilometer/Hour' },
    { label: 'Mile/Hour', value: '2', key: 'Mile/Hour' },
    { label: 'Knot', value: '3', key: 'Knot' },
  ]
  const timeItems = [
    { label: 'Nanosecond', value: '0', key: 'Nanosecond' },
    { label: 'Microsecond', value: '1', key: 'Microsecond' },
    { label: 'Millisecond', value: '2', key: 'Millisecond' },
    { label: 'Second', value: '3', key: 'Second' },
    { label: 'Minute', value: '4', key: 'Minute' },
    { label: 'Hour', value: '5', key: 'Hour' },
    { label: 'Day', value: '6', key: 'Day' },
    { label: 'Week', value: '7', key: 'Week' },
    { label: 'Month', value: '8', key: 'Month' },
    { label: 'Year', value: '9', key: 'Year' },
    { label: 'Decade', value: '10', key: 'Decade' },
    { label: 'Century', value: '11', key: 'Century' },
  ]


  const onPressHandler = (button: string) => {
    let temp = inputValue;
    if (temp === '0') {
      temp = '';
    }

    switch (button) {
      case 'Simple':
        // Navigate to Simple Calculator
        break;
      case 'Scientific':
        // Navigate to Scientific Calculator
        break;
      case 'Graphing':
        // Navigate to Graphing Calculator
        break;
      case 'Converter':
        // Navigate to Converter
        break;
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
        temp = String(temp) + button;
        break;
      case '.':
        if (String(temp).indexOf('.') !== -1) {
          break;
        } else {
          temp = String(temp) + button;
          break;
        }
      case '+/-':
        temp = String(Number(temp) * -1);
        break;
      case 'C':
        setInputValue('0.00');
        setOutputValue('0.00');
        break;
      case 'DEL':
        temp = String(temp).slice(0, -1);
        break;
      case 'Undo':
        // Undo last action
        break;
      case '=':
        // Calculate
        break;
      default:
        break;
    }
    setInputValue(temp);
  }

  const calculate = () => {
    switch (conversionCategory) {
      case '0':
        // Area
        // Convert to square meter and then to desired unit
        break;
      case '1':
        // Length
        // Convert to meter and then to desired unit
        break;
      case '2':
        // Temperature
        // Convert to Celsius and then to desired unit
        break;
      case '3':
        // Volume
        // Convert to liter and then to desired unit
        break;
      case '4':
        // Mass
        // Convert to kilogram and then to desired unit
        break;
      case '5':
        // Data
        // Convert to bit and then to desired unit
        break;
      case '6':
        // Speed
        // Convert to meter/second and then to desired unit
        break;
      case '7':
        // Time
        // Convert to second and then to desired unit
        break;
      default:
        break;
    }
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
        <View style={{ backgroundColor: isDarkMode ? Colors.black : Colors.white }}>
          <View>
              <Dropdown items={conversionCategoryItems} onChange={setConversionCategory} />
              <Dropdown items={itemList} onChange={setMeasurement1} />
              <Text>{ inputValue }</Text>
              <Dropdown items={itemList} onChange={setMeasurement2} />
              <Text>{ outputValue }</Text>
          </View>
          <View>
            <View>
                <Button title="Simple" color="#841584" onPress={() => onPressHandler('Simple')}/>                      
                <Button title="Scientific" color="#841584" onPress={() => onPressHandler('Scientific')}/>
                <Button title="Graphing" color="#841584" onPress={() => onPressHandler('Graphing')}/>
                <Button title="Converter" color="#841584" onPress={() => onPressHandler('Converter')}/>
            </View>
            <View>
                <Button title="7" color="#841584" onPress={() => onPressHandler('7')}/>
                <Button title="8" color="#841584" onPress={() => onPressHandler('8')}/>
                <Button title="9" color="#841584" onPress={() => onPressHandler('9')}/>
                <Button title="Undo" color="#841584" onPress={() => onPressHandler('Undo')}/>
            </View>
            <View>
                <Button title="4" color="#841584" onPress={() => onPressHandler('4')}/>
                <Button title="5" color="#841584" onPress={() => onPressHandler('5')}/>
                <Button title="6" color="#841584" onPress={() => onPressHandler('6')}/>
                <Button title="DEL" color="#841584" onPress={() => onPressHandler('DEL')}/>
            </View>
            <View>
                <Button title="1" color="#841584" onPress={() => onPressHandler('1')}/>
                <Button title="2" color="#841584" onPress={() => onPressHandler('2')}/>
                <Button title="3" color="#841584" onPress={() => onPressHandler('3')}/>
                <Button title="C" color="#841584" onPress={() => onPressHandler('C')}/>
            </View>
            <View>
                <Button title="+/-" color="#841584" onPress={() => onPressHandler('+/-')}/>
                <Button title="0 " color="#841584" onPress={() => onPressHandler('0')}/>
                <Button title="." color="#841584" onPress={() => onPressHandler('.')}/>
                <Button title="=" color="#841584" onPress={() => onPressHandler('=')}/>
            </View>                
          </View>        
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});

export default Converter;