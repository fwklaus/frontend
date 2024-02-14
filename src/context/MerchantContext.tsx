import { createContext, useState, useEffect } from 'react';

const MerchantContext = createContext(null);

const MerchantProvider = (props) => {
  const [merchants, setMerchants] = useState([]);

  useEffect(() => {
//     console.log(merchants, " from MerchantContext");
  }, [merchants]);

  return (
    <MerchantContext.Provider value={[merchants, setMerchants]}>
      {props.children}
    </MerchantContext.Provider>
  );
}

export { MerchantContext, MerchantProvider };
