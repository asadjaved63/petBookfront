import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CFormLabel,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { RegisterAuthAction } from "../../actions/auth";
import { cilLockLocked, cilUser, cilLocationPin } from '@coreui/icons'
const Register = () => {


  const [errorHandler, setErrorHandler] = useState({
    hasError: false,
    message: "",
  });
  const [successful, setSuccessful] = useState(false);
  const [validated, setValidated] = useState(false)
  const [loginState, setLoginState] = useState({});
  const { message } = useSelector(state => state.message);
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    } else {
      dispatch(RegisterAuthAction(loginState))
        .then(() => {
          setSuccessful(true);
          console.log(message)
        })
        .catch(() => {
          setSuccessful(false);
        });
    }
    setValidated(true)
  }
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm
                  className="row g-3 needs-validation"
                  noValidate
                  validated={validated}
                  onSubmit={handleSubmit}
                >
                  <h1>Register</h1>
                  <p className="text-medium-emphasis">Create your account</p>
                  {message && (
                    <div className="form-group">
                      <div className={successful ? "alert alert-success" : "alert alert-danger"} role="alert">
                        {message}
                      </div>
                    </div>
                  )}
                  {!successful && (
                    <>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>First Name</CInputGroupText>
                        <CFormInput
                          placeholder="First Name"
                          autoComplete="first Name"

                          onChange={(event) => {
                            const firstname = event.target.value;
                            setLoginState({ ...loginState, ...{ firstname } });
                          }}
                          required
                        />
                      </CInputGroup>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>Last Name</CInputGroupText>
                        <CFormInput
                          placeholder="Last Name"
                          autoComplete="Last Name"
                          name='lastname'
                          onChange={(event) => {
                            const lastname = event.target.value;
                            setLoginState({ ...loginState, ...{ lastname } });
                          }}
                          required
                        />
                      </CInputGroup>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>Username</CInputGroupText>
                        <CFormInput
                          placeholder="Username"
                          autoComplete="username"
                          name='username'
                          onChange={(event) => {
                            const username = event.target.value;
                            setLoginState({ ...loginState, ...{ username } });
                          }}
                          required />
                      </CInputGroup>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>Email</CInputGroupText>
                        <CFormInput
                          placeholder="Email"
                          autoComplete="email"
                          type='email'
                          name='email'

                          onChange={(event) => {
                            const email = event.target.value;
                            setLoginState({ ...loginState, ...{ email } });
                          }}
                          required
                        />
                      </CInputGroup>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>password</CInputGroupText>
                        <CFormInput
                          type="password"
                          placeholder="Password"
                          autoComplete="new-password"
                          name='password'

                          onChange={(event) => {
                            const password = event.target.value;
                            setLoginState({ ...loginState, ...{ password } });
                          }}
                          required
                        />
                      </CInputGroup>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>country</CInputGroupText>
                        <CFormInput
                          placeholder="Country"
                          autoComplete="country"
                          name='country'
                          onChange={(event) => {
                            const country = event.target.value;
                            setLoginState({ ...loginState, ...{ country } });
                          }}
                          required
                        />
                      </CInputGroup>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>City</CInputGroupText>
                        <CFormInput placeholder="City"
                          autoComplete="country"
                          name='city'
                          onChange={(event) => {
                            const city = event.target.value;
                            setLoginState({ ...loginState, ...{ city } });
                          }}
                          required
                        />
                      </CInputGroup>
                      <div className="d-grid">
                        <CButton color="primary" type="submit">
                          SignUp
                        </CButton>
                      </div>
                    </>
                  )}
                </CForm>
                <CRow className="justify-content-center">

                <Link to="/login" className="text-center mt-3">
                      <u>Login!</u>
                    </Link>
                </CRow>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}


export default Register;
