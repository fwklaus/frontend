import { useContext, useEffect } from 'react';
import { SignUpContext } from '../context/SignUpContext';

const useSignUp = () => {
  const [newMerchant, setNewMerchant] = useContext(SignUpContext);

  useEffect(() => {}, [newMerchant]);

  function getCopy() {
    return JSON.parse(JSON.stringify(newMerchant));
  }

  function updateNewMerchant(field, input) {
    let copy = getCopy(newMerchant);
    copy[field] = input;
    setNewMerchant(copy);
  }

  function validatePassword() {

    console.log('implement validation');
  }

  return {
    newMerchant,
    updateNewMerchant,
    validatePassword
  }
};

export default useSignUp;
