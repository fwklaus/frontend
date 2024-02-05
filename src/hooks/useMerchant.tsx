import { useContext, useEffect } from 'react';
import { MerchantContext } from '../context/MerchantContext';
// this should be changed after deployment
// const baseURL = 'http://172.24.112.109:3000';
const baseURL = 'http://172.25.103.21:3000';

// used to interface with backend api
const useMerchant = () => {
  const [merchants, setMerchants] = useContext(MerchantContext);
  const url = 'http://localhost:3000/api/merchants';

  useEffect(() => {
//     console.log(merchants)
  }, [merchants]);

  function getMerchants() {
    return fetch(`${baseURL}/api/merchants/`)
      .then(response => response.json())
      .then(json => setMerchants(json))
      .catch(error => console.log(error));
  }

  function getMerchant() {

  }

  function updateMerchant() {

  }

  function deleteMerchant() {

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
    createMerchant,
    merchants,
  }
};

export default useMerchant;
