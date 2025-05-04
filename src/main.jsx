import { createRoot } from 'react-dom/client'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';



createRoot(document.getElementById('root')).render(

    <Auth0Provider
      // domain=""
      // clientId=''
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <BrowserRouter>

        <App />

      </BrowserRouter>
    </Auth0Provider>,

)
