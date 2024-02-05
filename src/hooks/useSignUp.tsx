import { useContext, useEffect } from 'react';
import { SignUpContext } from '../context/SignUpContext';
// import useMerchant from './useMerchant';

// used to handle form information for createMerchant (POST 'localhost:3000/api/merchants/')
const useSignUp = () => {
  const [newMerchant, setNewMerchant] = useContext(SignUpContext);

  useEffect(() => {
    console.log(newMerchant);
  }, [newMerchant]);

  function getCopy() {
    return JSON.parse(JSON.stringify(newMerchant));
  }

  function updateNewMerchant(field, input) {
    let copy = getCopy(newMerchant);
    copy[field] = input;
    setNewMerchant(copy);
  }

  // check if email password combination already exists
  function validPassword(merchants) {
    if (merchants.length < 1) return true;
    let matching = matchingPasswords();
    let unique = isUnique(merchants);

    if (matching && unique) {
      return true;
    }

    return false;
  }

  function isUnique(merchants) {
    let match = merchants.find((merchant) => {
      let email = newMerchant.email;
      let password = newMerchant.password;

      return merchant.email === email
             && merchant.password === password;
    });

    return !!(match);
  }

  function matchingPasswords() {
    return newMerchant.password === newMerchant.validator;
  }

  return {
    newMerchant,
    updateNewMerchant,
    validPassword,
  }
};

export default useSignUp;
