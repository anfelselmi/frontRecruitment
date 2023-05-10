import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
function SidebarEntreprise() {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <nav id="sidebar">
        <div className="sidebar_blog_1">
          <div className="sidebar-header">
            <div className="logo_section">
              <a href="index.html">
                <img className="logo_icon img-responsive" />
              </a>
            </div>
          </div>
          <div className="sidebar_user_info">
            <div className="icon_setting" />
            <div className="user_profle_side">
              <div className="user_img mt-3">
                <img
                  className="img-responsive"
                  src={'http://localhost:4000/file/' + user.avatar}
                  alt="logo"
                />
              </div>
              <div className="user_info mt-3">
                <h6>Entreprise</h6>
                <p>
                  <span className="online_animation" /> Online
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="sidebar_blog_2 mt-5">
          <ul className="list-unstyled components">
            <li className="active">
              <a href="/offrentreprise">
                {' '}
                <i class="fa fa-briefcase red_color"> </i>
                <span> Mes Offres</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="sidebar_blog_2">
          <ul className="list-unstyled components">
            <li className="active">
              <a href="/candidaturesComapny">
                <i class="fa fa-object-group yellow_color"></i>{' '}
                <span> List Candidatures </span>
              </a>
            </li>
          </ul>
        </div>

        <div className="sidebar_blog_2">
          <ul className="list-unstyled components">
            <li className="active">
              <a href="/profil">
                <i class="fa fa-user ml-3 mr-3 green_color"></i>{' '}
                <span> profil </span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default SidebarEntreprise;
