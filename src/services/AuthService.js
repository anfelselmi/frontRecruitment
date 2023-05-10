const AuthService = {
  login: function (userInfo) {
    return fetch(
      'http://localhost:4000/user/login',

      {
        method: 'POST',
        body: JSON.stringify(userInfo),
        headers: {
          'Content-Type': 'application/json',
        },

        credentials: 'include',
      }
    ).then((res, errors) => {
      if (res.status === 404) {
        return errors;
      } else {
        if (res.status !== 401) return res.json().then((jsonData) => jsonData);
        else
          return {
            isAuthenticated: false,
            user: { email: '', role: '' },
            message: 'errors connect',
          };
      }
    });
  },
  registerCampany: function (userInfo) {
    return fetch('http://localhost:4000/company/register', {
      method: 'POST',
      body: JSON.stringify(userInfo),
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((jsonData) => jsonData);
  },
  registerCandidate: function (userInfo) {
    return fetch('http://localhost:4000/candidate/register', {
      method: 'POST',
      body: JSON.stringify(userInfo),
      headers: {
        'Content-Type':'application/json',
      },
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((jsonData) => jsonData);
  },
  logout: function () {
    return fetch('http://localhost:4000/user/logout', {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((jsonData) => jsonData);
  },
  isAuthenticated: function () {
    return fetch('http://localhost:4000/user/authenticated', {
      credentials: 'include',
    }).then((res) => {
      if (res.status !== 401) return res.json().then((jsonData) => jsonData);
      else return { isAuthenticated: false, user: { email: '', role: '' } };
    });
  },
};
export default AuthService;
