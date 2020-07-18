import {LoginResponse} from './types/responses';

const BASE_URL = 'http://localhost:7000';
export const memData: any = {};
const postCall = (url: string, data: Object, success?: Function, failure?: Function, method: string = 'POST') => {
    fetch(BASE_URL + url, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((response) => {
            success && success(response);
        })
        .catch((error) => {
            failure && failure(error);
        });
};

const unauthorized = () => {
    window.location.href = '/login';
};

const getCall = (url: string, success?: Function, failure?: Function, redirect: boolean = true) => {
    fetch(BASE_URL + url, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    })
        .then((response) => {
            if (response.status === 401 || response.status === 403) {
                if (redirect) {
                    unauthorized();
                } else {
                    failure && failure({status: 'Failure'});
                }
            }
            return response.json();
        })
        .then((response) => {
            success && success(response);
        })
        .catch((error) => {
            failure && failure(error);
        });
};

const api = {
    authenticate: (success: Function, failure: Function) => {
        getCall('/user/authenticate', success, failure, false);
    },
    user: {
        login: (email: string, password: string, success: Function, failure?: Function) => {
            postCall(
                '/user/login',
                {email: email, password: password},
                (response: LoginResponse) => {
                    localStorage.setItem('token', response.data.accessToken);
                    success(response);
                },
                failure
            );
        },
        register: (name: string, email: string, password: string, success?: Function, failure?: Function) => {
            postCall('/register', {name: name, email: email, password: password}, success, failure);
        },
        logout: (success: Function, failure: Function) => {
            postCall(BASE_URL + '/logout', {}, success, failure, 'DELETE');
        },
    },
    case: {
        getNext: (success: Function, failure: Function) => {
            getCall('/case/next', success, failure, false);
        },
    },
    bodyParts: {
        all: (success: Function, failure: Function) => {
            getCall('/bodypart/all', success, failure, false);
        },
    },
    subitems: {
        all: (success: Function, failure: Function) => {
            getCall('/subitem/all', success, failure, false);
        },
    },
};

export default api;
