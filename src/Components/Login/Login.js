import React, { useState } from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import loginLogo from "../../images/login.png";
import "./Login.css";
const Login = () => {
  const {
    setProfile,
    setUsers,
    setError,
    signInWithGoogle,
    error,
    createNewUser,
    logInUser,
    setIsLoading
  } = useAuth();

   //------------------ history ,location and redirectURL area START ----------------------
   const history = useHistory();
   const location = useLocation();
 
   const redirectURL = location.state?.from || "/home";
 
   //------------------ history ,location and redirectURL area END ----------------------
  // states function
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleCheck = (e) => {
    setIsChecked(e.target.checked);
  };
// login function email password
  const userLogInWithEmailPassword = ()=>{
    setIsLoading(true)
    logInUser(email,password)
    .then((userCredential) => {
      setUsers(userCredential.user);
      history.push(redirectURL);
    })
    .catch((error) => {
      const errorMessage = error.message;
      setError(errorMessage);
    }).finally(()=> setIsLoading(false))
 
  }
// user create function 
  const userCreateWithEmailPassword = () =>{
  
    createNewUser(email,password)
    .then((userCredential) => {
      setUsers(userCredential.user);
      setProfile(name)
      history.push(redirectURL);
    })
    .catch((error) => {
      const errorMessage = error.message;
      setError(errorMessage);
    });
    
  }
 

  // --------------- Login with google function area START ---------------

  const logInWithGoogle = () => {
  setIsLoading(true)
    signInWithGoogle()
      .then((result) => {
       
        setUsers(result.user);
        history.push(redirectURL);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      }).finally(()=> setIsLoading(false))
    
  };

  // --------------- Login with google function area ENd ---------------

  return (
    <div className="sign-up mt-5 mt-lg-5 mt-sm-2">
      <Container>
        <Row >
          <Col sm={12} md={5} lg={5}>
            <div data-aos='fade-right'><img src={loginLogo} className="img-fluid" alt="" /></div>
          </Col>

          <Col sm={12} md={5} lg={5}>
            <div data-aos='fade-left' className="container mt-5 sign-up">
              <h2>Please {isChecked ? "Login" : "Register"} </h2>
              <Form onSubmit={handleFormSubmit}>
               {
                 !isChecked &&  <div>
                 <Form.Group className="mb-3" controlId="formBasicEmail">
                   <Form.Label className="text-end">Name</Form.Label>
                   <Form.Control
                     onBlur={handleNameChange}
                     type="text"
                     placeholder="Enter Your Name"
                   />
                 </Form.Group>
               </div>
               }
               

                <div>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="text-end">Email address</Form.Label>
                    <Form.Control
                      onBlur={handleEmailChange}
                      type="email"
                      placeholder="Enter Your Email"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      onBlur={handlePasswordChange}
                      type="password"
                      placeholder="Enter Password"
                    />
                  </Form.Group>
                  <small>{error}</small>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                      onClick={handleCheck}
                      type="checkbox"
                      label="Already Registered?"
                    />
                  </Form.Group>
                  {isChecked ? (
                    <Button onClick={userLogInWithEmailPassword} variant="danger">Login</Button>
                  ) : (
                    <Button
                      onClick={userCreateWithEmailPassword}
                      variant="danger"
                      type="submit"
                    >
                      Register
                    </Button>
                  )}
                  <Button
                    variant="danger"
                    onClick={logInWithGoogle}
                    className="ms-2"
                  >
                    Login With Google
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
