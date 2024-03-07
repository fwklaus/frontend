import React from 'react';
import {createContext, useState, useEffect} from 'react';

const SessionContext = createContext(null);

const SessionProvider = props => {
  const [sessionID, setSessionID] = useState([]);
  useEffect(() => {
//     console.log(sessionID.length > 0 ? sessionID : 'null sessionID' + ' (at SessionContext)');
  }, [sessionID]);

  return (
    <SessionContext.Provider value={{sessionID, setSessionID}}>
      {props.children}
    </SessionContext.Provider>
  );
};

export {SessionContext, SessionProvider};
