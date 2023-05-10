import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import abc from '../assets/image/illustration.png';
import '../assets/css/style.css';
import { GetAllAnnonce, selectAnnonces } from '../features/jjob/jobSlice';
import Footer from '../layout/Footer';
import TopBar from '../layout/Topbar';
import logo from '../assets/image/candiateds/3.png'
function Home() {
  const dispatch = useDispatch();
  const offre = useSelector(selectAnnonces);
  console.log(offre, 'eee');
  useEffect(() => {
    dispatch(GetAllAnnonce());
  }, []);
  return (
    <div>
      <TopBar />
      {/* slider_area_start */}
      <div className="slider_area">
        <div className="single_slider  d-flex align-items-center slider_bg_1">
          <div className="container" style={{ height: '500px !important' }}>
            <div className="row align-items-center">
              <div className="col-lg-7 col-md-6">
                <div className="slider_text">
                  <h5
                    className="wow fadeInLeft"
                    data-wow-duration="1s"
                    data-wow-delay=".2s"
                  >
                    4536+ Jobs listed
                  </h5>
                  <h3
                    className="wow fadeInLeft"
                    data-wow-duration="1s"
                    data-wow-delay=".3s"
                  >
                    Find your Dream Job
                  </h3>
                  <p
                    className="wow fadeInLeft"
                    data-wow-duration="1s"
                    data-wow-delay=".4s"
                  >
                    We provide online instant cash loans with quick approval
                    that suit your term length
                  </p>
                  <div
                    className="sldier_btn wow fadeInLeft"
                    data-wow-duration="1s"
                    data-wow-delay=".5s"
                  >
                    <a href="#" className="boxed-btn3">
                      Upload your Resume
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="ilstration_img wow fadeInRight d-none d-lg-block text-right"
          data-wow-duration="1s"
          data-wow-delay=".2s"
        >
          <img src={abc} alt />
        </div>
      </div>
      <div className="job_listing_area ">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="section_title mt-5">
                <h3>Job Listing</h3>
              </div>
            </div>
          </div>
          <div className="job_lists">
            {offre && (
              <div className="row">
                {offre.map((OffreHome, i) => {
                  return (
                    <div className="col-lg-12 col-md-12">
                      <div className="single_jobs white-bg d-flex justify-content-between">
                        <div className="jobs_left d-flex align-items-center">
                          <div className="thumb">
                            {OffreHome.company ? 
                            
                            (<img
                              style={{ width: '100%', height: '100%' }}
                              src={
                                'http://localhost:4000/file/' +
                                OffreHome.company.avatar 
                              }
                              alt
                            
                            />)
                            : (<img
                            style={{ width: '100%', height: '100%' }}
                            src={logo}
                            alt
                          
                          />)
                                      }
                          </div>

                          <div className="jobs_conetent">
                            <a>
                              <h4>{OffreHome.title}</h4>
                            </a>
                            <div className="links_locat d-flex align-items-center">
                              <div className="location">
                                <p>
                                  {' '}
                                  <i className="fa fa-map-marker" />
                                  {OffreHome.company &&
                                    OffreHome.company.address}
                                </p>
                              </div>
                              <div className="location">
                                <p>
                                  {' '}
                                  <i className="fa fa-file-text-o" />{' '}
                                  {OffreHome.contract}
                                </p>
                              </div>

                              <div className="location">
                                <p>
                                  {' '}
                                  <i className="fa fa-clock-o" />{' '}
                                  {moment(OffreHome.dateStart).format(
                                    'DD-MM-YYYY'
                                  )}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="jobs_right">
                          <div className="apply_now">
                            <span
                              onClick={() => {
                                localStorage.setItem('postuler', OffreHome._id);
                              }}
                            >
                              <a href="/offredetails" className="boxed-btn3">
                                postuler
                              </a>
                            </span>
                          </div>
                          <div className="date">
                            <p>
                              Date line:
                              {moment(OffreHome.createdAt).format('DD-MM-YYYY')}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
export default Home;
