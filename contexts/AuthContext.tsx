import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  login: () => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Simulación de usuario logueado para efectos del prototipo
  const [user, setUser] = useState<User | null>({
    id: '1',
    name: 'Carlos Mecánico',
    role: 'MECHANIC',
    avatar: 'CM'
  });

  const login = () => {
    setUser({
      id: '1',
      name: 'Carlos Mecánico',
      role: 'MECHANIC'
    });
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
};