import { useContext, useEffect } from 'react';
// import bcrypt from 'react-native-bcrypt';
// import isaac from 'isaac';
import { SignUpContext } from '../context/SignUpContext';
import { STATES } from '../utils/states';
import useMerchant from './useMerchant';

// bcrypt.setRandomFallback((len) => {
//   const buf = new Uint8Array(len);
//   return buf.map(() => Math.floor(isaac.random() * 256));
// });


// used to handle form information for createMerchant (POST 'localhost:3000/api/merchants/')
const useSignUp = () => {
  const [newMerchant, setNewMerchant] = useContext(SignUpContext);
  const { merchants } = useMerchant();

  function getCopyNewMerchant() {
    return JSON.parse(JSON.stringify(newMerchant));
  }

  function updateNewMerchant(field, input) {
    let copy = getCopyNewMerchant(newMerchant);
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

  function isStateCode(text) {
    return Object.values(STATES).find(code => code === text);
  }

  function isFullState(text) {
    return Object.keys(STATES).find(state => state === text);
  }

  function validState(text) {
    return fieldNotNull(text) && (isStateCode(text) || isFullState(text));
  }

  function validZip(text) {
    return fieldNotNull(text, 5) && validZipPattern(text);
  }

  function validEmail(text) {
      let isUnique = !merchants.find(merchant => merchant.email === text);
      let password = newMerchant["password"];
      return fieldNotNull(text)
        && text != password
        && isUnique
        && text.length >= 4
        && validEmailPattern(text)
  }

  function validValidator(text) {
    return text === newMerchant['password'];
  }

 // refactor validPassword check
 // check if email password combination already exists
  function validPassword(text) {
    let email = newMerchant["email"];

    return text.length >= 8
           && text !== email;
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

//   function matchingPasswords() {
//     return newMerchant.password === newMerchant.validator;
//   }

  function fieldNotNull(text, maxChars=225) {
    text = text.trim();
    return text.length > 0 && text.length <= maxChars;
  }

  // replace isValid for authentication in singIn tab
  function checkEmail() {


  }

  function encryptPassword(password) {
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(password, salt);
    return hash;
  }

  function checkPassword(password, hashedPassword) {
    // provide hashed password or id to get hashed password for user
    let isEqual = bcrypt.compareSync(password, hashedPassword)
    return isEqual;
  }

  function getStateCode(text) {
      if (isFullState(text)) {
        return (STATES[text]);
      } else {
        return text
      }
  }

  function formatPhone(text) {
    return text.replace(/[\-\(\)]/g, '');
  }

  function formatNewMerchant() {
    let newMerchantCopy = getCopyNewMerchant();
    newMerchantCopy.password = encryptPassword(newMerchantCopy.password);
    newMerchantCopy.state = getStateCode(newMerchantCopy.state);
    newMerchantCopy.phone = formatPhone(newMerchantCopy.phone);

    return newMerchantCopy;
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
    validValidator,
    encryptPassword,
    checkPassword,
    formatNewMerchant
  }
};

export default useSignUp;
