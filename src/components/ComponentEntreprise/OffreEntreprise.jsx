import React, { useContext, useEffect } from 'react';
import { TiDeleteOutline } from 'react-icons/ti';
import CreateOffre from './CreateOffre';
import { useDispatch, useSelector } from 'react-redux';
import {
  DeleteAnnonce,
  GetByCompany,
  selectAddAnnonces,
  selectdeleteAnnonces,
  selectgetbyCompanyId,
} from '../../features/jjob/jobSlice';
import moment from 'moment/moment';
import SideBarPrincipal from '../../layout/SideBarPrincipal';
import { BsPencilSquare } from 'react-icons/bs';
import { AuthContext } from '../../context/AuthContext';
import Navbar from '../../layout/Navbar';

function OffreEntreprise() {
  const { user } = useContext(AuthContext);
  const dispatch = useDispatch();
  const deleteA = useSelector(selectdeleteAnnonces);
  const annonces = useSelector(selectgetbyCompanyId);
  const createannonce = useSelector(selectAddAnnonces);
  useEffect(() => {
    dispatch(GetByCompany(user._id));
  }, [deleteA, createannonce]);

  return (
    <div>
      <SideBarPrincipal />
      <Navbar />
      <div id="content">
        <div class="main">
          <div class="midde_cont">
            <div class="container">
              <div class="dash_blog_inner" style={{ marginTop: '100px' }}>
                <div class="list_cont">
                  <CreateOffre />
                  <h4 style={{ color: 'black' }}>
                    Liste des Offres publiées
                  </h4>{' '}
                </div>
                <div class="table-responsive-sm">
                  <table class="table table-striped projects">
                    <thead class="thead-dark">
                      <tr>
                        <th>Title</th>
                        <th>contrat</th>
                        <th>salaire</th>
                        <th>Date_Publication</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {annonces.map((item, i) => {
                        return (
                          <tr>
                            <td>{item.title}</td>
                            <td>{item.contract}</td>
                            <td>{item.salary}</td>
                            <td>
                              {moment(item.createdAt).format('DD-MM-YYYY')}
                            </td>
                            <td>
                              <BsPencilSquare
                                style={{
                                  color: 'blue',
                                  fontSize: '20px',
                                  marginRight: '30px',
                                  cursor: 'pointer',
                                }}
                              />
                              <TiDeleteOutline
                                onClick={() =>
                                  dispatch(DeleteAnnonce(item._id))
                                }
                                style={{
                                  color: 'red',
                                  fontSize: '25px',
                                  cursor: 'pointer',
                                }}
                              />
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OffreEntreprise;
