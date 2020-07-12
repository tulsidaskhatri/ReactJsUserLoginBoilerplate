const BASE_URL = "http://localhost:7000";
let jwt: String;
const postCall = (
  url: string,
  data: Object,
  success?: Function,
  failure?: Function,
  method: string = "POST"
) => {
  fetch(BASE_URL + url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
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
  window.location.href = "/login";
};

const getCall = (url: string, success?: Function, failure?: Function) => {
  fetch(BASE_URL + url, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  })
    .then((response) => {
      if (response.status === 401 || response.status === 403) unauthorized();
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
  welcome: (success: Function) => {
    getCall("/", success);
  },
  user: {
    login: (
      email: string,
      password: string,
      success: Function,
      failure?: Function
    ) => {
      postCall(
        "/login",
        { email: email, password: password },
        (response: any) => {
          jwt = response.accessToken;
          success(response);
        },
        failure
      );
    },
    register: (
      name: string,
      email: string,
      password: string,
      success?: Function,
      failure?: Function
    ) => {
      postCall(
        "/register",
        { name: name, email: email, password: password },
        success,
        failure
      );
    },
    logout: (success: Function, failure: Function) => {
      postCall(BASE_URL + "/logout", {}, success, failure, "DELETE");
    },
  },
};

export default api;
