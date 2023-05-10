import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  GetCompanys,
  selectAllCompany,
} from '../features/entreprises/entrepriseSlice';
import Footer from '../layout/Footer';
import TopBar from '../layout/Topbar';
function Company() {
  const dispatch = useDispatch();
  const allcompany = useSelector(selectAllCompany);
  console.log(allcompany, 'ddd');
  useEffect(() => {
    dispatch(GetCompanys());
  }, []);
  return (
    <div>
      <TopBar />
      <div>
        {/* bradcam_area  */}
        <div className="bradcam_area bradcam_bg_1">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="bradcam_text">
                  <h3>Entreprises</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="featured_candidates_area candidate_page_padding">
          <div className="container">
            <div className="row">
              {allcompany.map((e, i) => {
                return (
                  <div className="col-md-6 col-lg-3">
                    <div className="single_candidates text-center">
                      <div className="thumb">
                        <img
                          src={'http://localhost:4000/file/' + e.avatar}
                          alt
                        />
                      </div>
                      <a href="#">
                        <h4>{e.companyName}</h4>
                      </a>
                      <p>Site:{e.siteWeb}</p>
                      <p> specialité: {e.speciality}</p>
                      <p>adresse: {e.address}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Company;
