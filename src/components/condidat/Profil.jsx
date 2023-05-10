import React, { useContext, useState } from 'react';
import { CameraOutlined } from '@ant-design/icons';
import { EditOutlined } from '@ant-design/icons';
import { AuthContext } from '../../context/AuthContext';
import { useDispatch } from 'react-redux';
import Navbar from '../../layout/Navbar';
import SideBarPrincipal from '../../layout/SideBarPrincipal';
import { uploadavatar } from '../../features/user/userSlice';
import { UpdateCondidat } from '../../features/candidats/candidateSlice';
import { UpdateCompany } from '../../features/entreprises/entrepriseSlice';

const Profil = () => {
  const { role, user } = useContext(AuthContext);
  const [disabled, setdisabled] = useState(true);
  const [userdetails, setuserdetails] = useState(user);

  const dispatch = useDispatch();

  const handlePicChanged = (e) => {
    let fdata = new FormData();
    fdata.append('avatar', e.target.files[0]);
    let data = {
      id: user._id,
      data: fdata,
    };

    dispatch(uploadavatar(data));
    window.location.reload(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setuserdetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    console.log(userdetails);
  };

  const handleupdate = () => {
    let data = {
      id: user._id,
      data: userdetails,
    };
    console.log(user, 'bbb');

    if (role === 'Candidate') {
      dispatch(UpdateCondidat(data));
    } else {
      dispatch(UpdateCompany(data));
    }

    setdisabled(!disabled);
  };

  return (
    <div>
      <SideBarPrincipal />
      <Navbar />
      <div id="content">
        <div class="main">
          <div class="midde_cont">
            <div class="container-fluid" style={{ marginTop: '50px' }}>
              <div class="row column1">
                <div class="col-md-2"></div>
                <div class="col-md-8">
                  <div class="white_shd full ">
                    <div class="full price_table padding_infor_info">
                      <div class="row mt-5">
                        <div class="col-lg-12">
                          <div class="full dis_flex center_text mt-5">
                            <div
                              class="profile_img "
                              style={{ marginLeft: '100px' }}
                            >
                              {' '}
                              <img
                                class="rounded-circle "
                                style={{ height: '180px', width: '180px' }}
                                src={
                                  'http://localhost:4000/file/' + user.avatar
                                }
                              />
                              <CameraOutlined
                                onClick={() =>
                                  document.getElementById('upload').click()
                                }
                                style={{
                                  color: 'blue',
                                  width: '40px',
                                  height: '40px',
                                  position: 'absolute',
                                }}
                                className="upload"
                              />
                              <div class="contact_inner mt-5 ml-5">
                                {role === 'Candidate' ? (
                                  <h3>
                                    {user.fullName} {user.lastName}{' '}
                                  </h3>
                                ) : (
                                  <h3>{user.companyName} </h3>
                                )}
                                <ul class="list-unstyled">
                                  <li>
                                    <i class="fa fa-envelope-o"></i> :
                                    {user.email}
                                  </li>
                                  <li>
                                    <i class="fa fa-phone"></i> :{user.phone}
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div class="profile_contant">
                              <div className="col-md-12 ">
                                <div className="d-flex justify-content-between align-items-center  text-right">
                                  <h4 className="mb-5">Profile Settings</h4>
                                  <EditOutlined
                                    onClick={() => setdisabled(!disabled)}
                                    style={{ fontSize: '30px', color: 'blue' }}
                                  />
                                </div>
                                {role === 'Candidate' && (
                                  <>
                                    <div className="col-md-12">
                                      <label>Nom</label>
                                      <input
                                        value={userdetails.fullName}
                                        onChange={handleChange}
                                        type="text"
                                        className="form-control"
                                        name="fullName"
                                        disabled={disabled}
                                        style={{
                                          fontSize: '13px',
                                          color: 'black',
                                          fontWeight: 'bold',
                                        }}
                                      />
                                    </div>
                                    <div className="col-md-12">
                                      <label>Prenom</label>
                                      <input
                                        value={userdetails.lastName}
                                        onChange={handleChange}
                                        type="text"
                                        className="form-control"
                                        name="lastName"
                                        disabled={disabled}
                                        style={{
                                          fontSize: '13px',
                                          color: 'black',
                                          fontWeight: 'bold',
                                        }}
                                      />
                                    </div>
                                  </>
                                )}

                                {role === 'Company' && (
                                  <>
                                    <div className="col-md-12">
                                      <label>Nom Entreprise</label>
                                      <input
                                        value={userdetails.companyName}
                                        onChange={handleChange}
                                        type="text"
                                        className="form-control"
                                        name="companyName"
                                        disabled={disabled}
                                        style={{
                                          fontSize: '13px',
                                          color: 'black',
                                          fontWeight: 'bold',
                                        }}
                                      />
                                    </div>
                                    <div className="col-md-12">
                                      <label>Site web</label>
                                      <input
                                        value={userdetails.siteWeb}
                                        onChange={handleChange}
                                        type="text"
                                        className="form-control"
                                        name="siteWeb"
                                        disabled={disabled}
                                        style={{
                                          fontSize: '13px',
                                          color: 'black',
                                          fontWeight: 'bold',
                                        }}
                                      />
                                    </div>
                                    <div className="col-md-12">
                                      <label>spécialité</label>
                                      <input
                                        value={userdetails.speciality}
                                        onChange={handleChange}
                                        type="text"
                                        className="form-control"
                                        name="speciality"
                                        disabled={disabled}
                                        style={{
                                          fontSize: '13px',
                                          color: 'black',
                                          fontWeight: 'bold',
                                        }}
                                      />
                                    </div>
                                  </>
                                )}
                                <div className="col-md-12">
                                  <label>Téléphone</label>
                                  <input
                                    value={userdetails.phone}
                                    onChange={handleChange}
                                    name="phone"
                                    type="text"
                                    className="form-control"
                                    disabled={disabled}
                                    style={{
                                      fontSize: '13px',
                                      color: 'black',
                                      fontWeight: 'bold',
                                    }}
                                  />
                                </div>
                                <div className="col-md-12">
                                  <label>addresse</label>
                                  <input
                                    value={userdetails.address}
                                    onChange={handleChange}
                                    type="text"
                                    className="form-control"
                                    name="address"
                                    disabled={disabled}
                                    style={{
                                      fontSize: '13px',
                                      color: 'black',
                                      fontWeight: 'bold',
                                    }}
                                  />
                                </div>

                                <div className="col-md-12">
                                  <label>Email</label>
                                  <input
                                    value={userdetails.email}
                                    onChange={handleChange}
                                    type="text"
                                    className="form-control"
                                    name="email"
                                    disabled={disabled}
                                    style={{
                                      fontSize: '13px',
                                      color: 'black',
                                      fontWeight: 'bold',
                                    }}
                                  />
                                </div>
                                <div className="mt-5 mb-5 text-right">
                                  <button
                                    onClick={() => handleupdate()}
                                    className="btn btn-primary profile-button"
                                    type="button"
                                  >
                                    save
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <input
        id="upload"
        onChange={(e) => handlePicChanged(e)}
        type="file"
        hidden
      />
    </div>
  );
};

export default Profil;
