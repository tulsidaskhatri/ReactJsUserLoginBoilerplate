import React, {useEffect} from 'react';
import api, {memData} from '../../api';
import {useHistory} from 'react-router-dom';
import {AuthenticateResponse} from '../../types/responses';
import {useLocation} from 'react-router-dom';

function Authenticator() {
    let history = useHistory();
    let location = useLocation();
    useEffect(() => {
        api.authenticate(
            (response: AuthenticateResponse) => {
                if (response.success) {
                    memData.user = response.user;
                    if (
                        location.pathname === '/login' ||
                        location.pathname === '/register' ||
                        location.pathname === '/'
                    ) {
                        history.push(`/${memData.user.role.toLowerCase()}`);
                    }
                }
            },
            (response: any) => {
                history.push('/login');
            }
        );
    }, []);
    return <></>;
}

export default Authenticator;
