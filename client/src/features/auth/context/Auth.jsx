import pt from 'prop-types';
import { createContext, useContext, useEffect, useState } from 'react';
import { getCookie, setCookie } from 'utils/';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    let userId = getCookie('user');

    if(!userId) {
      userId = Math.random().toString();
      setCookie('user', userId);
    }

    setUser(userId);
  }, []);
  
  return (
    <AuthContext.Provider
      value={{
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: pt.node.isRequired,
}

function useAuthContext() {
  return useContext(AuthContext);
}

export {
  AuthProvider,
  useAuthContext
};