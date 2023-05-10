import React, { useContext, useEffect } from 'react';
import { FaRegFilePdf } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { AuthContext } from '../../context/AuthContext';
import {
  getCandidatureBYCANDIDAT,
  selectcondCondidatStatus,
} from '../../features/candidature/candidatureSlice';
import Navbar from '../../layout/Navbar';
import SideBarPrincipal from '../../layout/SideBarPrincipal';

function CandidatureCandidat() {
  const { user } = useContext(AuthContext);

  const condidatures = useSelector(selectcondCondidatStatus);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(user._id, 'rrr');
    dispatch(getCandidatureBYCANDIDAT(user._id));
  }, []);

  return (
    <div>
      <SideBarPrincipal />
      <Navbar />
      <div id="content">
        <div class="main">
          <div class="midde_cont">
            <div class="container-fluid">
              {condidatures && (
                <div class=" col-md-10 " style={{ marginTop: '100px' }}>
                  <h4 style={{ color: 'black' }}>Tableaux candidatures</h4>
                  <div class="full price_table padding_infor_info">
                    <div class="table-responsive-sm">
                      <table class="table table-striped projects">
                        <thead class="thead-dark">
                          <tr>
                            <th>#</th>
                            <th>poste</th>
                            <th>Entreprise</th>
                            <th>adresse</th>
                            <th>email</th>
                            <th>cv</th>
                          </tr>
                        </thead>
                        <tbody>
                          {condidatures.map((c, i) => {
                            return (
                              <tr>
                                <td>{i + 1}</td>
                                <td>{c.jobOffer && c.jobOffer.title}</td>
                                <td>{c.company && c.company.companyName}</td>

                                <td>{c.company && c.company.address}</td>
                                <td>{c.company && c.company.email}</td>

                                <td>
                                  {' '}
                                  <a
                                    href={'http://localhost:4000/file/' + c.cv}
                                    target="_blank"
                                  >
                                    <FaRegFilePdf
                                      style={{
                                        fontSize: '20px',
                                        color: 'blue',
                                      }}
                                    />
                                  </a>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CandidatureCandidat;
