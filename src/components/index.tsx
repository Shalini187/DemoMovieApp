import React, { createContext } from 'react';
import HeaderBar from './header';

const AuthContext = createContext<any>(null);

export { AuthContext, HeaderBar }