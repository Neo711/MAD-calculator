import React, {useState, useEffect} from 'react';
import {
  Button,
  Pressable,
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


function Converter({ navigation }: any): JSX.Element {
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
        temp = '0';
        setOutputValue('0');
        break;
      case 'DEL':
        temp = String(temp).slice(0, -1);
        break;
      case 'Undo':
        // Undo last action
        // TODO - Implement undo
        break;
      case '=':
        calculate();
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
        var temp = Number(inputValue);
        // Convert to square meter
        switch (measurement1) {
          case '0':
            // Square Kilometer
            temp = temp * 1000000;
            break;
          case '1':
            // Square Meter
            temp = temp * 1;
            break;
          case '2':
            // Square Mile
            temp = temp * 2590000;
            break;
          case '3':
            // Square Yard
            temp = temp * 0.83612736;
            break;
          case '4':
            // Square Foot
            temp = temp * 0.09290304;
            break;
          case '5':
            // Square Inch
            temp = temp * 0.00064516;
            break;
          case '6':
            // Hectare
            temp = temp * 10000;
            break;
          case '7':
            // Acre
            temp = temp * 4046.8564224;
            break;
          default:
            break;
        }
        // Convert to desired unit
        switch (measurement2) {
          case '0':
            // Square Kilometer
            temp = temp / 1000000;
            break;
          case '1':
            // Square Meter
            temp = temp / 1;
            break;
          case '2':
            // Square Mile
            temp = temp / 2590000;
            break;
          case '3':
            // Square Yard
            temp = temp / 0.83612736;
            break;
          case '4':
            // Square Foot
            temp = temp / 0.09290304;
            break;
          case '5':
            // Square Inch
            temp = temp / 0.00064516;
            break;
          case '6':
            // Hectare
            temp = temp / 10000;
            break;
          case '7':
            // Acre
            temp = temp / 4046.8564224;
            break;
          default:
            break;
        }
        temp = Number(temp.toFixed(6));
        if (temp.toString().length > 12) {
          setOutputValue('Unavailable');
        } else {
        setOutputValue(String(temp));
        }
        break;
      case '1':
        // Length
        var temp = Number(inputValue);
        // Convert to meter 
        switch (measurement1) {
          case '0':
            // Kilometer
            temp = temp * 1000;
            break;
          case '1':
            // Meter
            temp = temp * 1;
            break;
          case '2':
            // Centimeter
            temp = temp * 0.01;
            break;
          case '3':
            // Millimeter
            temp = temp * 0.001;
            break;
          case '4':
            // Micrometer
            temp = temp * 0.000001;
            break;
          case '5':
            // Nanometer
            temp = temp * 0.000000001;
            break;
          case '6':
            // Mile
            temp = temp * 1609.344;
            break;
          case '7':
            // Yard
            temp = temp * 0.9144;
            break;
          case '8':
            // Foot
            temp = temp * 0.3048;
            break;
          case '9':
            // Inch
            temp = temp * 0.0254;
            break;
          case '10':
            // Nautical Mile
            temp = temp * 1852;
            break;
          default:
            break;
        }
        // Convert to desired unit
        switch (measurement2) {
          case '0':
            // Kilometer
            temp = temp / 1000;
            break;
          case '1':
            // Meter
            temp = temp / 1;
            break;
          case '2':
            // Centimeter
            temp = temp / 0.01;
            break;
          case '3':
            // Millimeter
            temp = temp / 0.001;
            break;
          case '4':
            // Micrometer
            temp = temp / 0.000001;
            break;
          case '5':
            // Nanometer
            temp = temp / 0.000000001;
            break;
          case '6':
            // Mile
            temp = temp / 1609.344;
            break;
          case '7':
            // Yard
            temp = temp / 0.9144;
            break;
          case '8':
            // Foot
            temp = temp / 0.3048;
            break;
          case '9':
            // Inch
            temp = temp / 0.0254;
            break;
          case '10':
            // Nautical Mile
            temp = temp / 1852;
            break;
          default:
            break;
        }
        temp = Number(temp.toFixed(6));
        if (temp.toString().length > 11) {
          setOutputValue('Unavailable');
        } else {
        setOutputValue(String(temp));
        }
        break;
      case '2':
        // Temperature
        var temp = Number(inputValue);
        // Convert to Celsius
        switch (measurement1) {
          case '0':
            // Celsius
            temp = temp * 1;
            break;
          case '1':
            // Fahrenheit
            temp = (temp - 32) * 5/9;
            break;
          case '2':
            // Kelvin
            temp = temp - 273.15;
            break;
          default:
            break;
        }
        // Convert to desired unit
        switch (measurement2) {
          case '0':
            // Celsius
            temp = temp / 1;
            break;
          case '1':
            // Fahrenheit
            temp = (temp * 9/5) + 32;
            break;
          case '2':
            // Kelvin
            temp = temp + 273.15;
            break;
          default:
            break;
        }
        temp = Number(temp.toFixed(6));
        if (temp.toString().length > 11) {
          setOutputValue('Unavailable');
        } else {
        setOutputValue(String(temp));
        }
        break;
      case '3':
        // Volume
        var temp = Number(inputValue);
        // Convert to liter 
        switch (measurement1) {
          case '0':
            // Cubic Kilometer
            temp = temp * 1000000000000;
            break;
          case '1':
            // Cubic Meter
            temp = temp * 1000;
            break;
          case '2':
            // Cubic Centimeter
            temp = temp * 0.001;
            break;
          case '3':
            // Liter
            temp = temp * 1;
            break;
          case '4':
            // Milliliter
            temp = temp * 0.001;
            break;
          case '5':
            // US Gallon
            temp = temp * 3.785411784;
            break;
          case '6':
            // US Quart
            temp = temp * 0.946352946;
            break;
          case '7':
            // US Pint
            temp = temp * 0.473176473;
            break;
          case '8':
            // US Cup
            temp = temp * 0.236588236;
            break;
          case '9':
            // US Fluid Ounce
            temp = temp * 0.0295735296;
            break;
          case '10':
            // US Tablespoon
            temp = temp * 0.0147867648;
            break;
          case '11':
            // US Teaspoon
            temp = temp * 0.00492892159;
            break;
          case '12':
            // Cubic Mile
            temp = temp * 4168181825440;
            break;
          case '13':
            // Cubic Yard
            temp = temp * 764.554857984;
            break;
          case '14':
            // Cubic Foot
            temp = temp * 28.316846592;
            break;
          case '15':
            // Cubic Inch
            temp = temp * 0.016387064;
            break;
          default:
            break;
        }
        // Convert to desired unit
        switch (measurement2) {
          case '0':
            // Cubic Kilometer
            temp = temp / 1000000000000;
            break;
          case '1':
            // Cubic Meter
            temp = temp / 1000;
            break;
          case '2':
            // Cubic Centimeter
            temp = temp / 0.001;
            break;
          case '3':
            // Liter
            temp = temp / 1;
            break;
          case '4':
            // Milliliter
            temp = temp / 0.001;
            break;
          case '5':
            // US Gallon
            temp = temp / 3.785411784;
            break;
          case '6':
            // US Quart
            temp = temp / 0.946352946;
            break;
          case '7':
            // US Pint
            temp = temp / 0.473176473;
            break;
          case '8':
            // US Cup
            temp = temp / 0.236588236;
            break;
          case '9':
            // US Fluid Ounce
            temp = temp / 0.0295735296;
            break;
          case '10':
            // US Tablespoon
            temp = temp / 0.0147867648;
            break;
          case '11':
            // US Teaspoon
            temp = temp / 0.00492892159;
            break;
          case '12':
            // Cubic Mile
            temp = temp / 4168181825440;
            break;
          case '13':
            // Cubic Yard
            temp = temp / 764.554857984;
            break;
          case '14':
            // Cubic Foot
            temp = temp / 28.316846592;
            break;
          case '15':
            // Cubic Inch
            temp = temp / 0.016387064;
            break;
          default:
            break;
        }
        temp = Number(temp.toFixed(6));
        if (temp.toString().length > 11) {
          setOutputValue('Unavailable');
        } else {
        setOutputValue(String(temp));
        }
        break;
      case '4':
        // Mass
        var temp = Number(inputValue);
        // Convert to kilogram 
        switch (measurement1) {
          case '0':
            // Metric Ton
            temp = temp * 1000;
            break;
          case '1':
            // Kilogram
            temp = temp * 1;
            break;
          case '2':
            // Gram
            temp = temp * 0.001;
            break;
          case '3':
            // Milligram
            temp = temp * 0.000001;
            break;
          case '4':
            // Mcg
            temp = temp * 0.000000001;
            break;
          case '5':
            // Long Ton
            temp = temp * 1016.0469088;
            break;
          case '6':
            // Short Ton
            temp = temp * 907.18474;
            break;
          case '7':
            // Stone
            temp = temp * 6.35029318;
            break;
          case '8':
            // Pound
            temp = temp * 0.45359237;
            break;
          case '9':
            // Ounce
            temp = temp * 0.0283495231;
            break;
          default:
            break;
        }
        //Convert to desired unit
        switch (measurement2) {
          case '0':
            // Metric Ton
            temp = temp / 1000;
            break;
          case '1':
            // Kilogram
            temp = temp / 1;
            break;
          case '2':
            // Gram
            temp = temp / 0.001;
            break;
          case '3':
            // Milligram
            temp = temp / 0.000001;
            break;
          case '4':
            // Mcg
            temp = temp / 0.000000001;
            break;
          case '5':
            // Long Ton
            temp = temp / 1016.0469088;
            break;
          case '6':
            // Short Ton
            temp = temp / 907.18474;
            break;
          case '7':
            // Stone
            temp = temp / 6.35029318;
            break;
          case '8':
            // Pound
            temp = temp / 0.45359237;
            break;
          case '9':
            // Ounce
            temp = temp / 0.0283495231;
            break;
          default:
            break;
        }
        temp = Number(temp.toFixed(6));
        if (temp.toString().length > 11) {
          setOutputValue('Unavailable');
        } else {
        setOutputValue(String(temp));
        }
        break;
      case '5':
        // Data
        var temp = Number(inputValue);
        // Convert to bit 
        switch (measurement1) {
          case '0':
            // Bit
            temp = temp * 1;
            break;
          case '1':
            // Byte
            temp = temp * 8;
            break;
          case '2':
            // Kilobit
            temp = temp * 1000;
            break;
          case '3':
            // Kilobyte
            temp = temp * 8000;
            break;
          case '4':
            // Megabit
            temp = temp * 1000000;
            break;
          case '5':
            // Megabyte
            temp = temp * 8000000;
            break;
          case '6':
            // Gigabit
            temp = temp * 1000000000;
            break;
          case '7':
            // Gigabyte
            temp = temp * 8000000000;
            break;
          case '8':
            // Terabit
            temp = temp * 1000000000000;
            break;
          case '9':
            // Terabyte
            temp = temp * 8000000000000;
            break;
          case '10':
            // Petabit
            temp = temp * 1000000000000000;
            break;
          case '11':
            // Petabyte
            temp = temp * 8000000000000000;
            break;
          case '12':
            // Exabit
            temp = temp * 1000000000000000000;
            break;
          case '13':
            // Exabyte
            temp = temp * 8000000000000000000;
            break;
          case '14':
            // Zettabit
            temp = temp * 1000000000000000000000;
            break;
          case '15':
            // Zettabyte
            temp = temp * 8000000000000000000000;
            break;
          case '16':
            // Yottabit
            temp = temp * 1000000000000000000000000;
            break;
          case '17':
            // Yottabyte
            temp = temp * 8000000000000000000000000;
            break;
          default:
            break;
        }
        // Convert to desired unit
        switch (measurement2) {
          case '0':
            // Bit
            temp = temp / 1;
            break;
          case '1':
            // Byte
            temp = temp / 8;
            break;
          case '2':
            // Kilobit
            temp = temp / 1000;
            break;
          case '3':
            // Kilobyte
            temp = temp / 8000;
            break;
          case '4':
            // Megabit
            temp = temp / 1000000;
            break;
          case '5':
            // Megabyte
            temp = temp / 8000000;
            break;
          case '6':
            // Gigabit
            temp = temp / 1000000000;
            break;
          case '7':
            // Gigabyte
            temp = temp / 8000000000;
            break;
          case '8':
            // Terabit
            temp = temp / 1000000000000;
            break;
          case '9':
            // Terabyte
            temp = temp / 8000000000000;
            break;
          case '10':
            // Petabit
            temp = temp / 1000000000000000;
            break;
          case '11':
            // Petabyte
            temp = temp / 8000000000000000;
            break;
          case '12':
            // Exabit
            temp = temp / 1000000000000000000;
            break;
          case '13':
            // Exabyte
            temp = temp / 8000000000000000000;
            break;
          case '14':
            // Zettabit
            temp = temp / 1000000000000000000000;
            break;
          case '15':
            // Zettabyte
            temp = temp / 8000000000000000000000;
            break;
          case '16':
            // Yottabit
            temp = temp / 1000000000000000000000000;
            break;
          case '17':
            // Yottabyte
            temp = temp / 8000000000000000000000000;
            break;
          default:
            break;
        }
        temp = Number(temp.toFixed(6));
        if (temp.toString().length > 11) {
          setOutputValue('Unavailable');
        } else {
        setOutputValue(String(temp));
        }
        break;
      case '6':
        // Speed
        var temp = Number(inputValue);
        // Convert to meter/second 
        switch (measurement1) {
          case '0':
            // Meter/Second
            temp = temp * 1;
            break;
          case '1':
            // Kilometer/Hour
            temp = temp * 0.277777778;
            break;
          case '2':
            // Mile/Hour
            temp = temp * 0.44704;
            break;
          case '3':
            // Knot
            temp = temp * 0.514444444;
            break;
          default:
            break;
        }
        // Convert to desired unit
        switch (measurement2) {
          case '0':
            // Meter/Second
            temp = temp / 1;
            break;
          case '1':
            // Kilometer/Hour
            temp = temp / 0.277777778;
            break;
          case '2':
            // Mile/Hour
            temp = temp / 0.44704;
            break;
          case '3':
            // Knot
            temp = temp / 0.514444444;
            break;
          default:
            break;
        }
        temp = Number(temp.toFixed(6));
        if (temp.toString().length > 11) {
          setOutputValue('Unavailable');
        } else {
        setOutputValue(String(temp));
        }
        break;
      case '7':
        // Time
        var temp = Number(inputValue);
        // Convert to second
        switch (measurement1) {
          case '0':
            // Nanosecond
            temp = temp * 0.000000001;
            break;
          case '1':
            // Microsecond
            temp = temp * 0.000001;
            break;
          case '2':
            // Millisecond
            temp = temp * 0.001;
            break;
          case '3':
            // Second
            temp = temp * 1;
            break;
          case '4':
            // Minute
            temp = temp * 60;
            break;
          case '5':
            // Hour
            temp = temp * 3600;
            break;
          case '6':
            // Day
            temp = temp * 86400;
            break;
          case '7':
            // Week
            temp = temp * 604800;
            break;
          case '8':
            // Month
            temp = temp * 2629800;
            break;
          case '9':
            // Year
            temp = temp * 31557600;
            break;
          case '10':
            // Decade
            temp = temp * 315576000;
            break;
          case '11':
            // Century
            temp = temp * 3155760000;
            break;
          default:
            break;
        }
        // Convert to desired unit
        switch (measurement2) {
          case '0':
            // Nanosecond
            temp = temp / 0.000000001;
            break;
          case '1':
            // Microsecond
            temp = temp / 0.000001;
            break;
          case '2':
            // Millisecond
            temp = temp / 0.001;
            break;
          case '3':
            // Second
            temp = temp / 1;
            break;
          case '4':
            // Minute
            temp = temp / 60;
            break;
          case '5':
            // Hour
            temp = temp / 3600;
            break;
          case '6':
            // Day
            temp = temp / 86400;
            break;
          case '7':
            // Week
            temp = temp / 604800;
            break;
          case '8':
            // Month
            temp = temp / 2629800;
            break;
          case '9':
            // Year
            temp = temp / 31557600;
            break;
          case '10':
            // Decade
            temp = temp / 315576000;
            break;
          case '11':
            // Century
            temp = temp / 3155760000;
            break;
          default:
            break;
        }
        temp = Number(temp.toFixed(6));
        if (temp.toString().length > 11) {
          setOutputValue('Unavailable');
        } else {
        setOutputValue(String(temp));
        }
        break;
      default:
        break;
    }
  }

  return (
        <View style={styles.Body}>
          <View style={styles.InputOutput}>
              <View style={styles.Category}>
                <Dropdown items={conversionCategoryItems} onChange={setConversionCategory} />
              </View>
              <View style={styles.Screen}>
                <View style={styles.ScreenRow}>
                  <View style={styles.ScreenSelect}>
                    <Dropdown items={itemList} onChange={setMeasurement1} />
                  </View>
                </View>
                <Text style={styles.ScreenNumericalValues}>{ inputValue }</Text>
              </View>
              <View style={styles.Screen}>
                <View style={styles.ScreenRow}>
                  <View style={styles.ScreenSelect}>
                    <Dropdown items={itemList} onChange={setMeasurement2} />
                  </View>
                </View>
                <Text style={styles.ScreenNumericalValues}>{ outputValue }</Text>
              </View>
          </View>
          <View style={styles.Buttons}>
            <View style={styles.ButtonRow}>
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
                <Pressable style={styles.Number} onPress={() => onPressHandler('7')}>
                  <Text style={styles.NumberText}>7</Text>
                </Pressable>
                <Pressable style={styles.Number} onPress={() => onPressHandler('8')}>
                  <Text style={styles.NumberText}>8</Text>
                </Pressable>
                <Pressable style={styles.Number} onPress={() => onPressHandler('9')}>
                  <Text style={styles.NumberText}>9</Text>
                </Pressable>
                <Pressable style={styles.Accent} onPress={() => onPressHandler('Undo')}>
                  <Text style={styles.AccentText}>Undo</Text>
                </Pressable>
            </View>
            <View style={styles.ButtonRow}>
                <Pressable style={styles.Number} onPress={() => onPressHandler('4')}>
                  <Text style={styles.NumberText}>4</Text>
                </Pressable>
                <Pressable style={styles.Number} onPress={() => onPressHandler('5')}>
                  <Text style={styles.NumberText}>5</Text>
                </Pressable>
                <Pressable style={styles.Number} onPress={() => onPressHandler('6')}>
                  <Text style={styles.NumberText}>6</Text>
                </Pressable>
                <Pressable style={styles.Accent} onPress={() => onPressHandler('DEL')}>
                  <Text style={styles.AccentText}>DEL</Text>
                </Pressable>
            </View>
            <View style={styles.ButtonRow}>
                <Pressable style={styles.Number} onPress={() => onPressHandler('1')}>
                  <Text style={styles.NumberText}>1</Text>
                </Pressable>
                <Pressable style={styles.Number} onPress={() => onPressHandler('2')}>
                  <Text style={styles.NumberText}>2</Text>
                </Pressable>
                <Pressable style={styles.Number} onPress={() => onPressHandler('3')}>
                  <Text style={styles.NumberText}>3</Text>
                </Pressable>
                <Pressable style={styles.Accent} onPress={() => onPressHandler('C')}>
                  <Text style={styles.AccentText}>C</Text>
                </Pressable>
            </View>
            <View style={styles.ButtonRow}>
                <Pressable style={styles.Number} onPress={() => onPressHandler('+/-')}>
                  <Text style={styles.NumberText}>+/-</Text>
                </Pressable>
                <Pressable style={styles.Number} onPress={() => onPressHandler('0')}>
                  <Text style={styles.NumberText}>0</Text>
                </Pressable>
                <Pressable style={styles.Number} onPress={() => onPressHandler('.')}>
                  <Text style={styles.NumberText}>.</Text>
                </Pressable>
                <Pressable style={styles.Accent} onPress={() => onPressHandler('=')}>
                  <Text style={styles.AccentText}>=</Text>
                </Pressable>
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

export default Converter;