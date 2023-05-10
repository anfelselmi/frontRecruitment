import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  DeleteCompany,
  GetCompanys,
  selectAllCompany,
  selectdeletestatus,
} from '../../features/entreprises/entrepriseSlice';
import Navbar from '../../layout/Navbar';
import SideBarPrincipal from '../../layout/SideBarPrincipal';

function ListEntreprise() {
  const dispatch = useDispatch();
  const allcompany = useSelector(selectAllCompany);
  console.log(allcompany, 'fff');
  const deleteCompany = useSelector(selectdeletestatus);

  useEffect(() => {
    dispatch(GetCompanys());
  }, [deleteCompany]);

  return (
    <div>
      <SideBarPrincipal />
      <Navbar />
      <div id="content" style={{ paddingTop: '150px' }}>
        <div class="midde_cont">
          <div class="container-fluid">
            <div className="row column1">
              <div className="col-md-10">
                <div className="white_shd full margin_bottom_30">
                  <div className="full graph_head">
                    <div className="heading1 margin_0">
                      <h2>liste des entreprises</h2>
                    </div>
                  </div>
                  <div class="table-responsive ">
                    <table class="table table-bordered">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Nom</th>
                          <th>Spécialité</th>
                          <th>Email</th>
                          <th>Adresse</th>
                          <th>Téléphone</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {allcompany.map((e, i) => {
                          return (
                            <tr>
                              <td> {i} </td>
                              <td> {e.companyName} </td>
                              <td> {e.speciality} </td>
                              <td> {e.email} </td>
                              <td> {e.address} </td>
                              <td> {e.phone} </td>
                              <td class="d-flex align-items-center">
                                <button
                                  onClick={() => dispatch(DeleteCompany(e._id))}
                                  type="button"
                                  class="btn btn-danger btn-sm btn-icon-text"
                                >
                                  Supprimer
                                  <i class="typcn typcn-delete-outline btn-icon-append"></i>
                                </button>
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
    </div>
  );
}
export default ListEntreprise;
