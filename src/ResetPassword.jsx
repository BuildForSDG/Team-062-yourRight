import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { InputGroup } from "react-bootstrap"
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import { } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUnlock } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const ResetPassword = () => {
  let [password, updatePassword] = useState('');
  let [confirmationPassword, updateConfirmationPassword] = useState('');
   const handleSubmit = (event) => {
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      }
  
      const setErrors = (password, confirmationPassword) => {
        if ((password === '') || (confirmationPassword = '')) {
          updateErrors({
            password: "Password is required",
            confirmationPassword: "Password is required"
          });
  
        }
        else if (confirmationPassword !== password) {
          updateErrors({ confirmationPassword: "Password doesn't match" });
        }
        setValidated(true);
        return errors;
      };
    }
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setErrors(password,confirmationPassword);
      console.log(setErrors(email));
    }
    if (form.checkValidity() === true) {
      event.preventDefault();
      fetch('http://ur-report-062.simononazi.com', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          password: email,
          password_confirmation:confirmationPassword
        })
      }).then((Response) => {
        Response.json()
      }).then((Result) => {
        if (Result === 'Succcess') {
          props.history.push('/Dashboard')
        } else {
          alert("Email is not registered");
        }
      })

    }
    setValidated(true);

  }
  return (
    <Container >
      <Row>
        <Col>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <label htmlFor="Password">Password</label>
            <InputGroup className="mb-3">
              <Form.Control
                type='password'
                id='Password'
                placeholder="Enter your Password"
                aria-label="Password"
                aria-describedby="basic-addon1"
                value={Password}
                required
                onChange={e => {
                  updatePassword(e.target.value)
                }}
              />
              <InputGroup.Append>
                <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faUnlock} /></InputGroup.Text>
              </InputGroup.Append>
              <Form.Control.Feedback type="invalid">
                {errors.Password}
              </Form.Control.Feedback>
            </InputGroup>

            <InputGroup className="mb-3">
              <Form.Control
                type='password'
                id='confirmation-Password'
                placeholder="Enter your Password"
                aria-label="Password"
                aria-describedby="password"
                value={confirmationPassword}
                isInvalid={confirmationPassword !== password}
                required
                onChange={e => {
                  updateConfirmationPassword(e.target.value)
                }}
              />
              <InputGroup.Append>
                <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faUnlock} /></InputGroup.Text>
              </InputGroup.Append>
              <Form.Control.Feedback type="invalid">
                {errors.confirmationPassword}
              </Form.Control.Feedback>
            </InputGroup>
            <Button
              className='mb-2'
              variant="primary"
              type="submit"
            >
              Log In
                </Button>
          </Form>
        </Col>
      </Row>
    </Container >
  )
}
export default ResetPassword;