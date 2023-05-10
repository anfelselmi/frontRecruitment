import React, { useEffect } from 'react';
import { FaRegFilePdf } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllCandidature,
  selectCandidatures,
} from '../../features/candidature/candidatureSlice';
import Navbar from '../../layout/Navbar';
import SideBarPrincipal from '../../layout/SideBarPrincipal';

function Listcandidature() {
  const condidatures = useSelector(selectCandidatures);
  console.log(condidatures, 'zzz');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCandidature());
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
                            <th>nom</th>
                            <th>prenom</th>
                            <th>téléphone</th>
                            <th>email</th>
                            <th>cv</th>
                          </tr>
                        </thead>
                        <tbody>
                          {condidatures.map((c, i) => {
                            console.log(condidatures.candidat, 'ii');
                            return (
                              <tr>
                                <td>{i + 1}</td>
                                <td>{c.nom}</td>
                                <td>{c.prenom}</td>
                                <td>{c.candidate.phone}</td>
                                <td>{c.candidate.email}</td>

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
              )}{' '}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Listcandidature;
