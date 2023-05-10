import React, { useContext, useState } from 'react';
import { Modal } from 'antd';
import { useDispatch } from 'react-redux';
import { CreateAnnonce } from '../../features/jjob/jobSlice';
import { AuthContext } from '../../context/AuthContext';
import { Form } from 'react-bootstrap';
function CreateOffre() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const [values, setValues] = useState({});
  const { user } = useContext(AuthContext);
  const dispatch = useDispatch();
  const onChangeHandler = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
      company: user._id,
    });
  };

  const OnCreate = (e) => {
    e.preventDefault();

    dispatch(CreateAnnonce(values));
    setIsModalVisible(false);
  };

  return (
    <>
      <span
        class="plus_green_bt"
        onClick={showModal}
        style={{ cursor: 'pointer' }}
      >
        +
      </span>

      <Modal
        footer={null}
        title="Ajouter une nouvelle offre d'emploi"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div class="modal-body">
          <form>
            <div class="form-group" style={{ height: '50px' }}>
              <input
                name="title"
                onChange={onChangeHandler}
                style={{ height: '50px', color: 'black', fontSize: '15px' }}
                type="text"
                class="form-control"
                placeholder="Title"
              />
            </div>
            <div class="form-group" style={{ height: '50px' }}>
              <input
                name="description"
                onChange={onChangeHandler}
                style={{ height: '50px', color: 'black', fontSize: '15px' }}
                type="text"
                class="form-control"
                placeholder="description"
              />
            </div>

            <div class="form-group">
              <Form.Control
                style={{ height: '50px', color: 'black', fontSize: '15px' }}
                as="select"
                custom
                name="contract"
                onChange={onChangeHandler}
              >
                <option>CDI</option>
                <option>CDD</option>
                <option>SIVP</option>
              </Form.Control>
            </div>

            <div class="form-group" style={{ height: '50px' }}>
              <input
                name="dateStart"
                onChange={onChangeHandler}
                style={{ height: '50px', color: 'black', fontSize: '15px' }}
                type="date"
                class="form-control"
                placeholder="date_debut"
              />
            </div>
            <div class="form-group" style={{ height: '50px' }}>
              <input
                name="dateEnd"
                onChange={onChangeHandler}
                style={{ height: '50px', color: 'black', fontSize: '15px' }}
                type="date"
                class="form-control"
                placeholder="date_fin"
              />
            </div>
            <div class="form-group" style={{ height: '50px' }}>
              <input
                name="salary"
                onChange={onChangeHandler}
                style={{ height: '50px', color: 'black', fontSize: '15px' }}
                type="text"
                class="form-control"
                placeholder="Salaire"
              />
            </div>
          </form>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-primary" onClick={OnCreate}>
            Ajouter
          </button>
        </div>
      </Modal>
    </>
  );
}

export default CreateOffre;
