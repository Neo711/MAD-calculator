import React from 'react';
import { StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const Dropdown = ({ items, onChange }: any) => {
    return (
      <RNPickerSelect style={styles} placeholder={{label: 'Select an item'}} onValueChange={(value) => onChange(value)} items={items} />
    );
}

const styles = StyleSheet.create({
  placeholder: {
    color: 'black'
  },
});


export default Dropdown;