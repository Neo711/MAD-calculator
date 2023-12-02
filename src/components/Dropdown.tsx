import React from 'react';
import RNPickerSelect from 'react-native-picker-select';

const Dropdown = ({ items, onChange }: any) => {
    return (
      <RNPickerSelect onValueChange={(value) => onChange(value)} items={items} />
    );
}

export default Dropdown;