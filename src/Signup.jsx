import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import { InputGroup } from "react-bootstrap"
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faUnlock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

const Signup = (props) => {
  const [validated, setValidated] = useState(false);
  let [name, updateName] = useState("");
  let [email, updateEmail] = useState("");
  let [password, updatePassword] = useState('');
  let [confirmationPassword, updateConfirmationPassword] = useState('');
  let [role, changeRole] = useState('Reporter');
  let [errors, updateErrors] = useState({ name: "", email: "", password: "", confirmationPassword: '' });



  const handleSubmit = (event) => {
    const form = event.currentTarget;
    function validateEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }

    const setErrors = (email, name, password, confirmationPassword) => {
      if (!validateEmail(email)) {
        updateErrors({ email: "Email is invalid" });
        console.log(errors);
      }
      if ((email === '') || (name === '') || (password === '') || (confirmationPassword = '')) {
        updateErrors({
          email: "Email is required",
          name: "Name is required",
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

    if ((form.checkValidity() === false)) {
      event.preventDefault();
      event.stopPropagation();
      setErrors(email, name, password, confirmationPassword);
      console.log(setErrors(email, name, password));
    }

    if (form.checkValidity() === true) {
      event.preventDefault();
      fetch('http://ur-report-062.simononazi.com/api/signup', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          name:name,
          email: email,
          password: password,
          password_confirmation: confirmationPassword,
        })
      }).then((Response) => {
        return Response.json()
      }).then((Result) => {
        console.log(Result.status)
        if (Result.status === 'success') {
          props.history.push('/Dashboard')
        }else if(Result.status==='exist'){
          props.history.push('/Signin')
        }
        alert(Result.message)
      })

    }
    console.log([name, password, email]);
    setValidated(true);
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Register Now</h1>
          <p>We will never share your details with anyone</p>
          <hr />
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
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


            <label htmlFor="name">Full Name</label>
            <InputGroup className="mb-3">
              <Form.Control
                id='name'
                placeholder="Enter Full Name"
                aria-label="name"
                aria-describedby="basic-addon1"
                value={name}
                required
                onChange={e => {
                  updateName(e.target.value);
                }}
              />
              <InputGroup.Append>
                <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faUser} /></InputGroup.Text>
              </InputGroup.Append>
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </InputGroup>

            <label htmlFor="password">Password</label>
            <InputGroup className="mb-3">
              <Form.Control
                type='password'
                id='password'
                placeholder="Enter your Password"
                aria-label="password"
                aria-describedby="basic-addon1"
                value={password}
                required
                onChange={e => {
                  updatePassword(e.target.value)
                }}
              />
              <InputGroup.Append>
                <InputGroup.Text id="lockicon"><FontAwesomeIcon icon={faUnlock} /></InputGroup.Text>
              </InputGroup.Append>
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </InputGroup>

            <label htmlFor="Password">Confirm Password</label>
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

            <label htmlFor="role">Select Role</label>
            <InputGroup className='mb-3'>
              <select
                id='role'
                required
                className='input-group form-control'
                placeholder='Select Role'
                value={role}
                onChange={
                  e => {
                    changeRole(e.target.value)
                  }
                }
              >
                <option name='role' disabled placeholder="Select a role">Select a role</option>
                <option name='role' value='Reporter'>Reporter</option>
                <option name='role' value='Organization'>Organization</option>
              </select>
              <Form.Control.Feedback type="invalid">
                Field cannot be empty, Please select a role
              </Form.Control.Feedback>
            </InputGroup>



            <Row>
              <Col>
                <Button
                  className='mb-2'
                  type="submit"
                >
                  Sign up
                </Button>
              </Col>
              <Col>
                <Link to='/Signin'>Already Registered ? Sign in</Link>
              </Col>
            </Row>


          </Form>

        </Col>
      </Row>
    </Container>


  )
}
export default Signup;