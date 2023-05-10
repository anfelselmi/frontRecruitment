import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import AuthService from '../services/AuthService';
function Navbar() {
  const { isAuth, user } = useContext(AuthContext);
  const { setUser, setIsAuth } = useContext(AuthContext);
  function handleLogout() {
    AuthService.logout().then((jsonData) => {
      if (jsonData.success) {
        setUser(jsonData.user);
        setIsAuth(false);
        console.log('..logout');
        window.location.href = '/login';
      } else {
        window.location.href = '/index';
      }
    });
  }
  return (
    <div>
      <div className="topbar">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="full">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="right_topbar">
              <div className="icon_info">
                <ul className="user_profile_dd">
                  <li className="nav-item">
                    <a
                      href="/index"
                      style={{ marginRight: '10px' }}
                      to="/index"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <button
                      class="btn btn-light"
                      style={{
                        marginRight: '10px',
                        backgroundColor: '#FFFFFF',
                      }}
                      onClick={handleLogout}
                    >
                      Se déconnecter
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
