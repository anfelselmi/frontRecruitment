import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AuthContext } from '../../context/AuthContext';
import { createCandidature } from '../../features/candidature/candidatureSlice';
import { GetAnnonceById, selectgetbyId } from '../../features/jjob/jobSlice';
import TopBar from '../../layout/Topbar';
import moment from 'moment';
import Footer from '../../layout/Footer';

function OffreDetails() {
  const { user } = useContext(AuthContext);
  console.log('usrrr', user);
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [cv, setCv] = useState(null);
  const dispatch = useDispatch();
  const annonce = useSelector(selectgetbyId);
  console.log(annonce.company && annonce.company.avatar, 'qqqq');

  const Post = (e) => {
    e.preventDefault();

    let data = new FormData();
    data.append('nom', nom);
    data.append('prenom', prenom);
    data.append('cv', cv);
    data.append('candidate', user._id);
    data.append('jobOffer', localStorage.getItem('postuler'));
    data.append('company', annonce.company._id);

    dispatch(createCandidature(data));
  };

  useEffect(() => {
    dispatch(GetAnnonceById(localStorage.getItem('postuler')));
  }, []);

  return (
    <div>
      <TopBar />
      {annonce && (
        <div>
          <div className="bradcam_area bradcam_bg_1">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="bradcam_text">
                    <h3>{annonce.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*/ bradcam_area  */}
          <div className="job_details_area">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="job_details_header">
                    <div className="single_jobs white-bg d-flex justify-content-between">
                      <div className="jobs_left d-flex align-items-center">
                        <div className="thumb">
                          <img
                            style={{ width: '100%', height: '100%' }}
                            src={
                              'http://localhost:4000/file/' +
                              annonce.company.avatar
                            }
                            alt
                          />
                        </div>
                        <div className="jobs_conetent">
                          <a href="#">
                            <h4>{annonce.title}</h4>
                          </a>
                          <div className="links_locat d-flex align-items-center">
                            <div className="location">
                              <p>
                                {' '}
                                <i className="fa fa-map-marker" />{' '}
                                {annonce.company && annonce.company.address}
                              </p>
                            </div>
                            <div className="location">
                              <p>
                                {' '}
                                <i className="fa fa-briefcase" />{' '}
                                {annonce.company && annonce.company.speciality}
                              </p>
                            </div>
                            <div className="location">
                              <p>
                                {' '}
                                <i className="fa fa-calendar" />{' '}
                                {moment(annonce.dateStart).format('DD-MM-YYYY')}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="descript_wrap white-bg">
                    <div className="single_wrap">
                      <h4>description du poste</h4>
                      <p>{annonce.description}</p>
                    </div>
                  </div>

                  <div className="apply_job_form white-bg">
                    <h4>postuler pour cette offre</h4>
                    <form action="#">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="input_field">
                            <input
                              value={nom}
                              onChange={(e) => setNom(e.target.value)}
                              type="text"
                              placeholder="nom"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input_field">
                            <input
                              value={prenom}
                              onChange={(e) => setPrenom(e.target.value)}
                              type="text"
                              placeholder="prenom"
                            />
                          </div>
                        </div>

                        <div className="col-md-12">
                          <div class="form-group">
                            <label
                              for="recipient-name"
                              class="col-form-label"
                              style={{ color: 'blue' }}
                            >
                              cv:
                            </label>
                            <input
                              onChange={(e) => setCv(e.target.files[0])}
                              class="form-control"
                              type="file"
                              name="cv"
                              id="formFile"
                              required
                            />
                          </div>
                        </div>

                        <div className="col-md-12">
                          <div className="submit_btn">
                            <button
                              className="boxed-btn3 w-100"
                              type="submit"
                              onClick={Post}
                            >
                              Postuler
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="job_sumary">
                    <div className="summery_header">
                      <h3>Sommaire</h3>
                    </div>
                    <div className="job_content">
                      <ul>
                        <li>
                          Published on:{' '}
                          <span>
                            {moment(annonce.createdAt).format('DD-MM-YYYY')}
                          </span>
                        </li>
                        <li>
                          contract: <span>{annonce.contract}</span>
                        </li>
                        <li>
                          Salary: <span>{annonce.salary} d</span>
                        </li>
                        <li>
                          Location:{' '}
                          <span>
                            {' '}
                            {annonce.company && annonce.company.address}
                          </span>
                        </li>
                        <li>
                          date Start:{' '}
                          <span>
                            {moment(annonce.dateStart).format('DD-MM-YYYY')}
                          </span>
                        </li>
                        <li>
                          date End:{' '}
                          <span>
                            {' '}
                            {moment(annonce.dateEnd).format('DD-MM-YYYY')}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="share_wrap d-flex">
                    <span>partager on:</span>
                    <ul>
                      <li>
                        <a href="#">
                          {' '}
                          <i className="fa fa-facebook" />
                        </a>{' '}
                      </li>
                      <li>
                        <a href="#">
                          {' '}
                          <i className="fa fa-google-plus" />
                        </a>{' '}
                      </li>
                      <li>
                        <a href="#">
                          {' '}
                          <i className="fa fa-twitter" />
                        </a>{' '}
                      </li>
                      <li>
                        <a href="#">
                          {' '}
                          <i className="fa fa-envelope" />
                        </a>{' '}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default OffreDetails;
