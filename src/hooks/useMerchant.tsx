import { useContext, useEffect } from 'react';
import { MerchantContext } from '../context/MerchantContext';
// this should be changed after deployment
// const baseURL = 'http://172.24.112.109:3000';
const baseURL = 'http://172.25.103.21:3000';

// used to interface with backend api
const useMerchant = () => {
  const [merchants, setMerchants] = useContext(MerchantContext);
  const url = 'http://localhost:3000/api/merchants';

  function getCopy() {
    return JSON.parse(JSON.stringify(merchants));
  }

  function getMerchants() {
    return fetch(`${baseURL}/api/merchants/`)
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
    return fetch(`${baseURL}/api/merchants/${id}`)
      .then(response => response.json())
      .then(json => {
        let merchant = json[0];

        // if we are updating, replace the merchant with the update merchant in merchants
        if (update) {
          let idx = findIndex(merchant.id);
          if (idx === -1) {
            throw Error("getMerchant: merchant is missing")
          }

          let merchantsCopy = getCopy();
          merchantsCopy.splice(idx, 1, merchant);
          setMerchants(merchantsCopy);
        }

        return json[0];
      })
      .catch(error => console.log(error));
  }

  async function updateMerchant(merchant, updateObj) {
    let updateFields = []

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

      return fetch(`${baseURL}/api/merchants/${merchant.id}`, requestObject);
    });

    try {
      let responses = await Promise.all(requests);
      let json = await Promise.all(responses.map(response => response.json()));
      json.forEach(obj => console.log(obj.message));
    } catch (e) {
      console.log(e);
    }
  }

  async function deleteMerchant(id) {
    // filter out merchant fom merchants and setMerchants to new merchant array
    // delete the merchant on the server
    let merchantsCopy = getCopy();
    let filtered = merchantsCopy.filter(merchant => merchant.id !== id);
    setMerchants(filtered);

    let requestObj = {
      method: "DELETE",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }

    try {
      await fetch(`${baseURL}/api/merchants/${id}`, requestObj);
      alert('Successfully Deleted Merchant');
    } catch (e) {
      console.log(e);
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

    let response = await fetch(`${baseURL}/api/merchants/`, requestObject)
    let json = await response.json();
    console.log(json.message);
  }

  return {
    getMerchants,
    getMerchant,
    createMerchant,
    merchants,
    updateMerchant,
    deleteMerchant
  }
};

export default useMerchant;
