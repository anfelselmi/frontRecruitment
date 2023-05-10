import React, { useContext } from 'react';
import '../assets/css/style.css';
import abc from '../assets/image/logo.png';
import { AuthContext } from '../context/AuthContext';
import AuthService from '../services/AuthService';
function TopBar(props) {
  const { isAuth } = useContext(AuthContext);
  const { role } = useContext(AuthContext);
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
      <header>
        <div className="header-area ">
          <div id="sticky-header" className="main-header-area">
            <div className="container-fluid ">
              <div className="header_bottom_border">
                <div className="row align-items-center">
                  <div className="col-xl-3 col-lg-2">
                    <div className="logo">
                      <a href="index.html">
                        <img src={abc} alt />
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-7">
                    <div className="main-menu  d-none d-lg-block">
                      <nav>
                        <ul id="navigation">
                          <li>
                            <a href="/index">home</a>
                          </li>
                          <li>
                            <a href="#">
                              pages <i className="ti-angle-down" />
                            </a>
                            <ul className="submenu">
                              <li>
                                <a href="/company">entreprises </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="/index">
                              blog <i className="ti-angle-down" />
                            </a>
                          </li>
                          <li>
                            <a href="/index">Contact</a>
                          </li>
                          {role === 'Admin' && (
                            <li>
                              <a href="/offres">mon espace</a>
                            </li>
                          )}
                          {role === 'Company' && (
                            <li>
                              <a href="/offrentreprise">mon espace</a>
                            </li>
                          )}
                          {role === 'Candidate' && (
                            <li>
                              <a href="/candidatureCandidat">mon espace</a>
                            </li>
                          )}
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                    <div className="Appointment">
                      {!isAuth ? (
                        <>
                          <div className="phone_num d-none d-xl-block">
                            <a href="/login">Log in</a>
                          </div>
                          <div className="d-none d-lg-block">
                            <a className="boxed-btn3" href="/register">
                              Register
                            </a>
                          </div>
                        </>
                      ) : (
                        <div className="d-none d-lg-block">
                          <a className="boxed-btn3" onClick={handleLogout}>
                            Se déconnecter
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="mobile_menu d-block d-lg-none" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
export default TopBar;
