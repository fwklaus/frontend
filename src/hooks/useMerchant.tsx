import { useContext, useEffect } from 'react';
import { MerchantContext } from '../context/MerchantContext';

// this should be changed after deployment
//   const url = 'http://localhost:3000/api/merchants';
// const baseURL = 'http://172.24.112.109:3000';
// const baseURL = 'http://172.25.103.21:3000/api/merchants/';
const baseURL = 'http://172.21.238.183:3000/api/merchants/';

// import { formatPhone, getStateCode } from '../utils/validationUtils';

// interfaces with backend
const useMerchant = () => {
  const {
    merchants, setMerchants, email,
    setEmail, password, setPassword,
    storeInfo, setStoreInfo
  } = useContext(MerchantContext);

  function fillStoreInfo(currentMerchant) {
    let fields = {
       "restaurant_name": currentMerchant.restaurant_name,
       "phone": currentMerchant.phone,
       "street": currentMerchant.street,
       "city": currentMerchant.city,
       "state": currentMerchant.state,
       "zip": currentMerchant.zip,
    }
    setStoreInfo(fields);
  }

  function fillLoginInfo(currentMerchant) {
    setEmail({
      "email": currentMerchant.email
    });

    // need to set to hidden unencrypted password
    // get merchant by currentMerchant.id ?
    // route to return unencrypted password ?
    setPassword({
      "password": currentMerchant.password
    });
  }

  function updateStoreInfo(field, text) {
    let copy = JSON.parse(JSON.stringify(storeInfo));

    copy[field] = text;
    setStoreInfo(copy);
  }

  function updatePassword(text) {
    let copy = JSON.parse(JSON.stringify(password));
    copy["password"] = text;
    setPassword(copy);
  }

  function updateEmail(text) {
    let copy = JSON.parse(JSON.stringify(email));
    copy["email"] = text;
    setEmail(copy);
  }

  function getMerchantsCopy() {
    return JSON.parse(JSON.stringify(merchants));
  }

  function getMerchants() {
    return fetch(`${baseURL}`)
      .then(response => response.json())
      .then(json => {
        if (JSON.stringify(merchants) !== JSON.stringify(json)) {
          setMerchants(json)
        }
      })
      .catch(error => console.log(error));
  }

  function findIndex(id) {
    return merchants.findIndex(merchant => merchant.id === id);
  }

  function getMerchant(id, update=false) {
    return fetch(baseURL + id)
      .then(response => response.json())
      .then(json => {
        let merchant = json;
        // if we are updating, replace merchant in merchants with updated merchant
        if (update) {
          let idx = findIndex(merchant.id);
          if (idx === -1) {
            throw Error("getMerchant: merchant is missing")
          }

          let merchantsCopy = getMerchantsCopy();
          merchantsCopy.splice(idx, 1, merchant);
          setMerchants(merchantsCopy);
        }

        return merchant;
      })
      .catch(error => console.log(error));
  }

  async function updateMerchant(merchant, updateObj) {
    let updateFields = []
    let merchantId = merchant.id;

    for (const field in updateObj) {
      let value = updateObj[field];
      let merchantValue = merchant[field];
       if (value !== merchantValue) {
          updateFields.push(field);
       }
    }

    let requests = updateFields.map(field => {
      let body = {
        "columnName": field,
        "newValue": updateObj[field]
      };

      let requestObject  = {
        method: 'PATCH',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
      };

      return fetch(baseURL + merchantId, requestObject);
    });

    try {
      let responses = await Promise.all(requests);
      let json = await Promise.all(responses.map(response => response.json()));
      json.forEach(obj => console.log(obj.message));
      alert ('Successfully update merchant.')
    } catch (e) {
      throw new Error(e.message, "at UpdateMerchant");
    }
  }

  async function deleteMerchant(id) {
    // filter out merchant fom merchants and setMerchants to new merchant array
    let merchantsCopy = getMerchantsCopy();
    let filtered = merchantsCopy.filter(merchant => merchant.id !== id);
    setMerchants(filtered);

    let requestObj = {
      method: "DELETE",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }

    // delete the merchant on the server
    try {
      let res = await fetch(baseURL + id, requestObj);
      let json = await res.json();

      if (res.status === 400) {
        throw new Error(json.error);
      }

      alert(json.message);
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async function createMerchant(newMerchant) {
    let requestObject = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newMerchant),
    }

    try {
      let response = await fetch(baseURL, requestObject);
      let json = await response.json();

      if (response.status === 400) {
        throw new Error(json.error);
      }

      alert(json.success);
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async function postSignIn(credentials) {
    let requestObject = {
      method: 'POST',
      headers : {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    }

    try {
      let response = await fetch(baseURL + 'sign-in', requestObject);
      let json = await response.json();
      if (response.status === 400) {
        throw new Error(json.error, "at /sign-in");
      }

      alert(json.success);
    } catch (e) {
      throw new Error(e.message, "at postSignIn");
    }
  }

  return {
    getMerchants,
    getMerchant,
    createMerchant,
    merchants,
    updateMerchant,
    deleteMerchant,
    postSignIn,
    updatePassword,
    updateEmail,
    fillStoreInfo,
    fillLoginInfo,
    storeInfo,
    updateStoreInfo,
    email,
    password
  }
};

export default useMerchant;
