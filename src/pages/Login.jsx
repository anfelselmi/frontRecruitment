import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import '../assets/css/login.css';
import AuthService from '../services/AuthService';
function Login() {
  const { setUser, setIsAuth, setRole } = useContext(AuthContext);
  const [values, setValues] = useState({});
  const onChangeHandler = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    AuthService.login(values).then((jsonData) => {
      if (jsonData.message === 'user not found') {
        alert('verifiez votre email ou votre mot de passe');
      } else {
        console.log('user', jsonData);
        setUser(jsonData.user);
        setIsAuth(jsonData.isAuthenticated);
        setRole(jsonData.role);
        window.location.href = '/index';
      }
    });
  };
  return (
    <div>
      <div class="container-fluid  bg">
        <div class="row justify-content-center">
          <div class="col-xs-12 col-sm-6 col-md-12 center">
            <form class="form-container white" onSubmit={onSubmit}>
              <h4
                class="text-center"
                style={{
                  Color: 'white',
                  fontSize: '30px',
                  textAlign: 'center',
                }}
              >
                {' '}
                Login
              </h4>
              <hr />
              <div class="form-group">
                <input
                  name="email"
                  onChange={onChangeHandler}
                  type="text"
                  class="form-control mt-5  "
                  id="email"
                  placeholder="email"
                  required
                />
              </div>
              <div class="form-group">
                <input
                  name="password"
                  onChange={onChangeHandler}
                  type="password"
                  class="form-control mt-5"
                  id="password"
                  placeholder="Password"
                  required
                />
              </div>
              <button type="submit" id="btnn" class="btn  mb-5 mt-4 ">
                Se connecter
              </button>
              <p id="signuplink ">
                {' '}
                Don't have an account ? <a href="/register"> Sign Up</a> here
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
