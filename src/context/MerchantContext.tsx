import { createContext, useState, useEffect } from 'react';

const MerchantContext = createContext(null);

const MerchantProvider = (props) => {
  const [merchants, setMerchants] = useState([]);
  const [email, setEmail] = useState({
    "email": ''
  });
  const [password, setPassword] = useState({
    "password": ''
  });

  const [storeInfo, setStoreInfo] = useState({
    "restaurant_name": '',
    "phone": '',
    "street": '',
    "city": '',
    "state": '',
    "zip": '',
  });

  useEffect(() => {
//     console.log(merchants, " from MerchantContext");
  }, [merchants]);

  useEffect(()=>{
//       console.log(password, "password");
//       console.log(email, "email");
//     console.log(storeInfo, "storeInfo");
  }, [password, email, storeInfo]);

  return (
    <MerchantContext.Provider
      value={{
        merchants, setMerchants, email,
        setEmail, password, setPassword,
        storeInfo, setStoreInfo
      }}
    >
      {props.children}
    </MerchantContext.Provider>
  );
}

export { MerchantContext, MerchantProvider };
