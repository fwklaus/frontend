import { useContext, useEffect } from 'react';
import { SignUpContext } from '../context/SignUpContext';

import { getStateCode, formatPhone } from '../utils/validationUtils'

// used to handle sign-up form info - createMerchant (POST 'localhost:3000/api/merchants/')
const useSignUp = () => {
  const [newMerchant, setNewMerchant] = useContext(SignUpContext);

  function getCopyNewMerchant() {
    return JSON.parse(JSON.stringify(newMerchant));
  }

  function updateNewMerchant(field, input) {
    let copy = getCopyNewMerchant(newMerchant);
    copy[field] = input;
    setNewMerchant(copy);
  }

  function formatNewMerchant() {
    let newMerchantCopy = getCopyNewMerchant();
    newMerchantCopy.state = getStateCode(newMerchantCopy.state);
    newMerchantCopy.phone = formatPhone(newMerchantCopy.phone);

    return newMerchantCopy;
  }

  return {
    formatNewMerchant,
    updateNewMerchant,
    newMerchant,
  }
};

export default useSignUp;
