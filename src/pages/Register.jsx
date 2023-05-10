import React, { useContext, useState } from 'react';
import '../assets/register.css';
import abc from '../assets/image/abcd.png';
import { Form, Input, Button } from 'antd';
import { AuthContext } from '../context/AuthContext';
import AuthService from '../services/AuthService';
function Register(props) {
  const [role, setrole] = useState('');
  const { setUser, setIsAuth } = useContext(AuthContext);
  const onFinish = (values) => {
    console.log('Success:', values);
    if (role == 'Company') {
      AuthService.registerCampany(values).then((jsonData) => {
        if (!jsonData.error) {
          setUser(jsonData.user);
          setIsAuth(jsonData.isAuthenticated);
          props.history.replace('/login');
        } else {
          console.log('...register error...', jsonData);
        }
      });
    } else if (role == 'Candidate') {
      AuthService.registerCandidate(values).then((jsonData) => {
        if (!jsonData.error) {
          setUser(jsonData.user);
          setIsAuth(jsonData.isAuthenticated);
          props.history.replace('/login');
        } else {
          console.log('...register error...', jsonData);
        }
      });
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div>
      <div className="container-fluid">
        {role === '' && (
          <div className="audit ">
            <h2 className="h2">inscrivez-vous maintenant !!!</h2>
            <div className="container mt-5">
              <div className="row mt-5 mb-5">
                <div className="col-md-6 mt-5">
                  <div className="containero">
                    <span className="imageglobal">
                      {' '}
                      <img
                        className="image"
                        onClick={() => setrole('Company')}
                        src="data:image/png;base64,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"
                        alt=""
                      />
                    </span>
                    <div className="overlay">
                      <div className="text">Entreprise</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mt-5">
                  <div class="containero">
                    <span className="imageglobal">
                      <img
                        className="image"
                        onClick={() => setrole('Candidate')}
                        src="https://static.vecteezy.com/ti/vecteur-libre/p1/2779391-responsable-rh-recherche-et-analyse-candidat-pour-emploi-entretien-pour-emploi-concept-vector-illustration-isolated-flat-vectoriel.jpg"
                        alt=""
                      />
                    </span>
                    <div className="overlay">
                      <div className="text">Candidat</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {role === 'Company' && (
          <>
            <div className="container">
              <div class="row">
                <div class="col-md-6">
                  <img
                    src={abc}
                    alt=""
                    align="left"
                    style={{
                      width: '600px',
                      height: '500px',
                      marginTop: '150px',
                    }}
                  />
                </div>
                <div class="col-md-6">
                  <Form
                    name="basic"
                    style={{ marginTop: '150px' }}
                    labelCol={{
                      span: 8,
                    }}
                    wrapperCol={{
                      span: 16,
                    }}
                    initialValues={{
                      remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                  >
                    <Form.Item name="companyName" label="Nom_entreprise">
                      <Input />
                    </Form.Item>
                    <Form.Item name="phone" label="N° Téléphone">
                      <Input />
                    </Form.Item>

                    <Form.Item name="address" label="adresse">
                      <Input />
                    </Form.Item>

                    <Form.Item
                      name="siteWeb"
                      label="Site web"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your password!',
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name="speciality"
                      label="Spécialité"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your spécialité!',
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item name="email" label="Email">
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name="password"
                      label="Password"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your password!',
                        },
                      ]}
                      hasFeedback
                    >
                      <Input.Password />
                    </Form.Item>

                    <Form.Item>
                      <Button
                        type="primary"
                        htmlType="submit"
                        style={{ marginLeft: '100%', background: 'orange' }}
                      >
                        {' '}
                        Submit
                      </Button>
                    </Form.Item>
                  </Form>
                </div>
              </div>{' '}
            </div>
          </>
        )}

        {role === 'Candidate' && (
          <>
            <div className="container">
              <div class="row">
                <div class="col-md-6">
                  <img
                    src={abc}
                    alt=""
                    align="left"
                    style={{
                      width: '600px',
                      height: '500px',
                      marginTop: '150px',
                    }}
                  />
                </div>
                <div class="col-md-6">
                  <Form
                    name="basic"
                    style={{ marginTop: '150px' }}
                    labelCol={{
                      span: 8,
                    }}
                    wrapperCol={{
                      span: 16,
                    }}
                    initialValues={{
                      remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                  >
                    <Form.Item name="fullName" label="Nom">
                      <Input />
                    </Form.Item>

                    <Form.Item name="lastName" label="Prenom">
                      <Input />
                    </Form.Item>

                    <Form.Item name="phone" label="N° Téléphone">
                      <Input />
                    </Form.Item>

                    <Form.Item name="address" label="Adresse">
                      <Input />
                    </Form.Item>

                    <Form.Item name="email" label="Email">
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name="password"
                      label="Password"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your password!',
                        },
                      ]}
                      hasFeedback
                    >
                      <Input.Password />
                    </Form.Item>

                    <Form.Item>
                      <Button
                        type="primary"
                        htmlType="submit"
                        style={{ marginLeft: '100%', background: 'orange' }}
                      >
                        {' '}
                        Submit
                      </Button>
                    </Form.Item>
                  </Form>
                </div>{' '}
              </div>{' '}
            </div>{' '}
          </>
        )}
      </div>
    </div>
  );
}

export default Register;
