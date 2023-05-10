import React, { useContext, useState } from 'react';
import { RiSendPlaneFill } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { AuthContext } from '../../context/AuthContext';
import { createCandidature } from '../../features/candidature/candidatureSlice';

function Post() {
  const { user } = useContext(AuthContext);
  console.log('userr', user);
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [cv, setCv] = useState(null);
  const dispatch = useDispatch();

  const Post = (e) => {
    e.preventDefault();

    let data = new FormData();
    data.append('nom', nom);
    data.append('prenom', prenom);
    data.append('cv', cv);
    data.append('candidate', user._id);
    data.append('jobOffer', localStorage.getItem('postuler'));
    data.append('company', localStorage.getItem('postuler'));

    dispatch(createCandidature(data));
   
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary btn-xs mr-3"
        data-toggle="modal"
        data-target="#postmodal"
        data-whatever="@mdo"
      >
        Postuler <RiSendPlaneFill />
      </button>

      <div
        class="modal fade"
        id="postmodal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Postuler maintenant
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div class="form-group">
                  <label
                    for="recipient-name"
                    class="col-form-label"
                    style={{ color: 'blue' }}
                  >
                    Nom:
                  </label>
                  <input
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                    type="text"
                    class="form-control"
                  />
                </div>

                <div class="form-group">
                  <label
                    for="recipient-name"
                    class="col-form-label"
                    style={{ color: 'blue' }}
                  >
                    Prenom:
                  </label>
                  <input
                    value={prenom}
                    onChange={(e) => setPrenom(e.target.value)}
                    name="prenom"
                    type="text"
                    class="form-control"
                  />
                </div>
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
              </form>
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary" onClick={Post}>
                Postuler
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
