import React from 'react'
import ReactDOM from 'react-dom/client'
import Qulwa from './Qulwa.tsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
import UserProvider from './context/UserContex.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="753582890177-vana6nojon0h5smbvtoaarvvusv6vh7s.apps.googleusercontent.com">
      <UserProvider>
        <Qulwa />
      </UserProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>,
)
