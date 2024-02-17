import React from 'react';
import {
  Text,
  StyleSheet,
} from 'react-native';

import { merchTextCSS } from '../../res/styles/merchantText';

const BULLET_POINT = '\u25CF';

function InvalidNameMessage({validName}) {
  return (
    <>
      { validName ?
         <></> :
        <Text style={[merchTextCSS.text, { marginLeft: 10, color: 'red' }]}>
          {BULLET_POINT} Restaurant Name is required
        </Text>
      }
    </>
  );
}

function InvalidPhoneMessage({validPhone}) {
  return (
    <>
      { validPhone ?
         <></> :
        <Text style={[merchTextCSS.text, { marginLeft: 10, color: 'red' }]}>
          {BULLET_POINT} Phone number is required and must contain 10 digits
        </Text>
      }
    </>
  );
}

function InvalidStreetMessage({validStreet}) {
  return (
    <>
      { validStreet ?
         <></> :
        <Text style={[merchTextCSS.text, { marginLeft: 10, color: 'red' }]}>
          {BULLET_POINT} Street is required and must contain valid characters (A-Z, a-z, 0-9, '  ' and [ . , # & - ])
        </Text>
      }
    </>
  );
}

function InvalidCityMessage({validCity}) {
  return (
    <>
      { validCity ?
         <></> :
        <Text style={[merchTextCSS.text, { marginLeft: 10, color: 'red' }]}>
          {BULLET_POINT} City is required and must contain valid characters (A-Z, a-z, '  ' and [ ' . - ])
        </Text>
      }
    </>
  );
}

function InvalidStateMessage({validState}) {
  return (
    <>
      { validState ?
         <></> :
        <Text style={[merchTextCSS.text, { marginLeft: 10, color: 'red' }]}>
          {BULLET_POINT} Full state name or state code is required
        </Text>
      }
    </>
  );
}

function InvalidZipMessage({validZip}) {
  return (
    <>
      { validZip ?
         <></> :
        <Text style={[merchTextCSS.text, { marginLeft: 10, color: 'red' }]}>
          {BULLET_POINT} Zip code is required and must contain 5 digits
        </Text>
      }
    </>
  );
}

function InvalidEmailMessage({validEmail}) {
  return (
    <>
      { validEmail ?
         <></> :
        <Text style={[merchTextCSS.text, { marginLeft: 10, color: 'red' }]}>
          {BULLET_POINT} Email field is required, must be unique, must not match your password, and must be a valid email address
        </Text>
      }
    </>
  );
}

function InvalidValidatorMessage({validValidator}) {
  return (
    <>
      { validValidator ?
         <></> :
         <Text style={[merchTextCSS.text, {marginLeft: 10, color: 'red'}]}>
           {BULLET_POINT} Please reenter password to confirm
         </Text>
      }
    </>
  );
}

function InvalidPasswordMessage({validPassword}) {
  return (
    <>
      { validPassword ?
         <></> :
        <Text style={[merchTextCSS.text, { marginLeft: 10, color: 'red' }]}>
          {BULLET_POINT} Password is required, must have 8 or more characters, and must not match email
        </Text>
      }
    </>
  );
}

function DeleteAccountMessage() {
  return (
    <Text style={[merchTextCSS.text, {color: 'red', margin: 6}]}>
      {BULLET_POINT} This action is irreversible. All account and restaurant information will be lost
    </Text>
  );
}

export {
  InvalidNameMessage, InvalidPhoneMessage, InvalidStreetMessage,
  InvalidCityMessage, InvalidStateMessage, InvalidZipMessage,
  InvalidEmailMessage, InvalidPasswordMessage, InvalidValidatorMessage,
  DeleteAccountMessage,
};