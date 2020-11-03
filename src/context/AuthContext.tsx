import React, { createContext, useCallback } from 'react';
import api from '../services/api';

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextState {
  name: string;
  singIn(credentials: SignInCredentials): Promise<void>;
}

export const AuthContext = createContext<AuthContextState>(
  {} as AuthContextState,
);

export const AuthProvider: React.FC = ({ children }) => {
  const singIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', { email, password });
    console.log(response.data);
  }, []);

  return (
    <AuthContext.Provider value={{ name: 'Francisco Maik', singIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
