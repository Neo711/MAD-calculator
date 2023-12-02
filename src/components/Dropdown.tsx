import React from 'react';
import { StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const Dropdown = ({ items, onChange, placeholder }: any) => {
  return (
    <RNPickerSelect style={styles} placeholder={{label: placeholder}} onValueChange={(value) => onChange(value)} items={items} />
  );
}

const styles = StyleSheet.create({
  placeholder: {
    color: 'black'
  },
});


export default Dropdown;