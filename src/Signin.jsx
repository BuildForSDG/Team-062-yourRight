import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { InputGroup } from "react-bootstrap"
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import { } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUnlock } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';


const Signin = (props) => {
 
  let [Email, updateEmail] = useState('');
  let [Password, updatePassword] = useState('');
  const [validated, setValidated] = useState(false);

  let [errors, updateErrors] = useState({ Email: "", Password: "" });

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    function validateEmail(Email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(Email).toLowerCase());
    }

    const setErrors = (Email, Password) => {
      if ((Password === '') || (Email === '')) {
        updateErrors({ Email: "Email is required", Password: "Password is required" });
      }
      else if (!validateEmail(Email)) {
        updateErrors({ Email: "Email is invalid" });
        console.log(errors);

      }
      return errors;
    };

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setErrors(Email, Password);
      console.log(setErrors(Email, Password));
    }

    if (form.checkValidity() === true) {
      event.preventDefault();
      fetch('http://ur-report-062.simononazi.com/api/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          email: Email,
          password:Password,
        })
      }).then((Response) => {
       return Response.json();
      }).then((Result) => {
        console.log(Result);
        if (Result === 'Succcess')
      {
        props.history.push('/Dashboard')
      }else{
        alert("Email or Password is incorrect");
      }
       })

    }

    console.log([Email, Password]);


    setValidated(true);
  };
  return (
    <Container >
      <Row>
        <Col>
          <h1>Login Now</h1>
          <hr />
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <label htmlFor="Email">Email</label>
            <InputGroup className="">
              <Form.Control
                type='Email'
                id='Email'
                placeholder="Enter your Email"
                aria-label="Email"
                aria-describedby="basic-addon1"
                value={Email}
                required
                onChange={e => {
                  updateEmail(e.target.value)
                }}
              />
              <InputGroup.Append>
                <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faEnvelope} /></InputGroup.Text>
              </InputGroup.Append>
              <Form.Control.Feedback type="invalid">
                {errors.Email}
              </Form.Control.Feedback>
            </InputGroup>

            <Form.Text className="text-muted">
              We'll never share your Email with anyone else.
            </Form.Text>


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



            <Row>
              <Col>
                <Button
                  className='mb-2'
                  variant="primary"
                  type="submit"
                >
                  Log In
                </Button>
              </Col>
              <Col>
                <Link to='/Signup'>Not yet Registered? Sign up</Link>
              </Col>
            </Row>

            <Row>
              <Col>
                  <Link to='/Forgot-Password'>Forgot Password?</Link>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container >
  )
}
export default Signin;