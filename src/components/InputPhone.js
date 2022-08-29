import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import '../style/material.css';

const InputPhone = () => {

  const [number, setNumber] = useState('');
  return (
    <PhoneInput
      country={'us'}
      onlyCountries={['tw', 'us']}
      localization={{
        Taiwan: '台灣',
      }}
      value={number}
      onChange={(phone) => {
        setNumber(phone);
      }}
    />
  );
};
export default InputPhone;
