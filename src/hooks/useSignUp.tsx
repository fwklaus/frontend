import { useContext, useEffect } from 'react';
import { SignUpContext } from '../context/SignUpContext';
import { STATES } from '../utils/states';

// used to handle form information for createMerchant (POST 'localhost:3000/api/merchants/')
const useSignUp = () => {
  const [newMerchant, setNewMerchant] = useContext(SignUpContext);

  function getCopy() {
    return JSON.parse(JSON.stringify(newMerchant));
  }

  function updateNewMerchant(field, input) {
    let copy = getCopy(newMerchant);
    copy[field] = input;
    setNewMerchant(copy);
  }

  function validNumPattern(text) {
    let validNum = new RegExp(/^\d{10}$/);
    text = text.replace(/[\-\(\)]/g, '');
    text = text.trim();
    return validNum.test(text);
  }

  function validZipPattern(text) {
    let validZip = new RegExp(/^\d{5}$/);
    text = text.trim();
    return validZip.test(text);
  }

  function validStreetPattern(text) {
    let validStreetChars = new RegExp(/^[A-Za-z0-9\s\.\,\#\&\-]+$/);
    text = text.trim();
    return validStreetChars.test(text);
  }

  function validCityPattern(text) {
    let validCityChars = new RegExp(/^[A-Za-z\s\'\.\-]+$/);
    text = text.trim();
    return validCityChars.test(text);
  }

  function validEmailPattern(text) {
    let validEmail = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
    text = text.trim();
    return validEmail.test(text);
  }

  function validRestaurantName(text) {
    return fieldNotNull(text);
  }

  function validPhoneNumber(text) {
    return fieldNotNull(text) && validNumPattern(text);
  }

  function validStreet(text) {
    return fieldNotNull(text) && validStreetPattern(text);
  }

  function validCity(text) {
    return fieldNotNull(text) && validCityPattern(text);
  }

  function validState(text) {
    return fieldNotNull(text, 2) && STATES[text];
  }

  function validZip(text) {
    return fieldNotNull(text, 5) && validZipPattern(text);
  }

  function validEmail(text) {
    // email must be unique - check server
    // must be valid email pattern ✔️
    // must not be empty ✔️
    // must be greater than 4 length ✔️
    // email and password must not be the same

    return fieldNotNull(text)
      && text >= 4
      && validEmailPattern(text)
  }

  // must match the first password
  function validValidator(text) {

  }

 // refactor validPassword check
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

  function fieldNotNull(text, maxChars=225) {
    text = text.trim();
    return text.length > 0 && text.length <= maxChars;
  }

  return {
    newMerchant,
    updateNewMerchant,
    validPhoneNumber,
    validRestaurantName,
    validStreet,
    validCity,
    validState,
    validZip,
    validEmail,
    validPassword,
  }
};

export default useSignUp;
