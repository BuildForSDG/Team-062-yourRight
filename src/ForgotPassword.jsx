import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import { InputGroup } from "react-bootstrap"
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import { } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
const ForgotPassword = (props) => {
  let [email, updateEmail] = useState('');
  let [errors, updateErrors] = useState({ email: "" });
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    function validateEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }
    const setErrors = (email) => {
      if ((email === '')) {
        updateErrors({ email: "Email is required" });
      }
      else if (!validateEmail(email)) {
        updateErrors({ email: "Email is invalid" });
        console.log(errors);

      }
    }
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setErrors(email);
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
          Email: email
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
    <Container>
      <Row>
        <Col>
          <Form noValidate validated={validated} onSubmit={handleSubmit} className='mt-3'>
            <label htmlFor="email">Enter Email used for Registration</label>
            <InputGroup className="mb-3">
              <Form.Control
                type='email'
                id='email'
                placeholder="Enter your email"
                aria-label="email"
                aria-describedby="basic-addon1"
                value={email}
                required
                onChange={e => {
                  updateEmail(e.target.value)
                }}
              />
              <InputGroup.Append>
                <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faEnvelope} /></InputGroup.Text>
              </InputGroup.Append>
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </InputGroup>
            <Button
              className='mb-2'
              variant="primary"
              type="submit"
            >
              Reset Password
      </Button>
          </Form>
        </Col>
      </Row>
    </Container>

  )
}
export default ForgotPassword;
