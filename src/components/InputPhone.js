import React from 'react';
import PhoneInput from 'react-phone-input-2';
import { useUpdatePhone } from 'state/app/hooks'
import '../style/material.css';

const InputPhone = ({ number, setNumber }) => {
  const updatePhone = useUpdatePhone()
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
        updatePhone(phone);
      }}
    />
  );
};
export default InputPhone;
