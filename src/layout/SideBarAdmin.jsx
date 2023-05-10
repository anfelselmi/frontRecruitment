import React from 'react';
import { a } from 'react-router-dom';
function SideBarAdmin() {
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
                  src="images/layout_img/user_img.png"
                  alt="#"
                />
              </div>
              <div className="user_info mt-3">
                <h6>Anfel Selmi</h6>
                <p>
                  <span className="online_animation" /> Online
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="sidebar_blog_2">
          <ul className="list-unstyled components">
            <li className="active">
              <a href="/offres">
                {' '}
                <i class="fa fa-briefcase red_color"> </i>
                <span>Offres</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="sidebar_blog_2">
          <ul className="list-unstyled components">
            <li className="active">
              <a href="/candidatures">
                <i class="fa fa-table blue1_color"></i>{' '}
                <span>Candidatures</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="sidebar_blog_2">
          <ul className="list-unstyled components">
            <li className="active">
              <a href="/entreprises">
                <i class="fa fa-object-group yellow_color"></i>
                <span>Entreprises</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="sidebar_blog_2">
          <ul className="list-unstyled components">
            <li className="active">
              <a href="/candidats">
                <i class="fa fa-users green_color"></i>
                <span>Candidats</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default SideBarAdmin;
