import React from 'react';

interface AuthContextProps {
    isLoggedIn: boolean,
}
const AuthContext = React.createContext<AuthContextProps>({
    isLoggedIn: false,
});

export default AuthContext;