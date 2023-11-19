import React, { useContext, useState } from "react";
import { Button, Container, Form, FormGroup } from "react-bootstrap";
import AuthoContext from "../Context/Autho-Context";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authCtx = useContext(AuthoContext);
  const navigate = useNavigate();

  const switchHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log(email, password);

    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBodFqTUVmxFU7cAs1QFVMQnN1VluvJxqg";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBodFqTUVmxFU7cAs1QFVMQnN1VluvJxqg";
    }
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (data.error) {
      alert(data.error.message);
      console.log(data.error.message);
    } else {
      if (data.registered) {
        localStorage.setItem("token", data.idToken);
        authCtx.login(true);
        navigate("/");
      } else {
        setIsLogin(true);
      }
    }
  };

  const changeEmail = (event) => {
    setEmail(event.target.value);
  };
  localStorage.setItem("email", email);

  const changePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <Container className="mt-5">
        <h1 style={{ marginLeft: "17rem", fontStyle: "unset" }}>
          Welcome To My Store
        </h1>
        <div
          style={{
            border: "1px solid black",
            borderRadius: "15px",
            boxShadow: "2px 2px 2px 2px black",
            padding: "1rem 5rem",
            marginLeft: "20%",
            marginRight: "20%",
          }}
        >
          <h2
            style={{
              color: "blue",
              textDecoration: "underline black",
              textTransform: "capitalize",
            }}
          >
            {isLogin ? "Login" : "Sing Up"}
          </h2>
          <Form
            style={{ fontWeight: "bold", marginTop: "1rem" }}
            onSubmit={submitHandler}
          >
            <FormGroup controlId="formBasicEmail">
              <Form.Label>Your Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={changeEmail}
                placeholder="Enter Your Email Id"
                required
              />
            </FormGroup>
            <FormGroup controlId="formBasicPassword">
              <Form.Label>Your Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={changePassword}
                placeholder="Enter Your Password"
                required
              />
            </FormGroup>
            <div style={{ textAlign: "center", fontWeight: "bold" }}>
              <Button variant="dark" className="mt-3" type="submit">
                {isLogin ? "Login" : "Create Account"}
              </Button>

              <br />
              <br />
              <Button type="button" onClick={switchHandler} variant="dark">
                {isLogin ? "Create new account" : "Login with existing account"}
              </Button>
            </div>
          </Form>
        </div>
      </Container>
    </>
  );
};
export default Login;
