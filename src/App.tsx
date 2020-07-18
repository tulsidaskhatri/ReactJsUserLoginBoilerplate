import React, {useEffect} from 'react';
import Routes from './routes';
import {BrowserRouter} from 'react-router-dom';
import Authenticator from './components/Authenticator/Authenticator';

function App() {
    return (
        <BrowserRouter>
            <Routes />
            <Authenticator />
        </BrowserRouter>
    );
}

export default App;
