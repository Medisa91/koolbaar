import React, { useState } from "react";
import { Input, Button, Register } from "components";
import { Col, Row } from "react-bootstrap";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";
import { UseWindowSize } from "components/windowSize/UseWindowSize";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import {
  fetchTodos,
  fetchParticularTodo,
} from "../../features/todo/todo-actions";
// import TiSocialFacebookCircular from 'react-icons/lib/ti/social-facebook-circular';

const clientId =
  "165924336796-1o4rjbggsh4ph9qu8m5qnauvsn5ge2rn.apps.googleusercontent.com";

export const Login: React.FC = () => {
  const size = UseWindowSize();

  const onSuccess = (res) => {
    console.log("[Login Success] currentUser:", res.profileObj);
  };

  const onFailure = (res) => {
    console.log("[Login Failed] res:", res);
  };

  const responseFacebook = (response) => {
    console.log(response);
  };

  // const [todo_id, setTodo_id] = useState(1);
  // const dispatch = useAppDispatch();
  // const alltodos = useAppSelector((state) => state.todo.all_todos);
  // const particularTodo = useAppSelector((state) => state.todo.particular_todo);

  // const clickHandler = () => {
  //   dispatch(fetchTodos());
  // };
  // const searchHandler = () => {
  //   dispatch(fetchParticularTodo(todo_id));
  // };
  // const checkTodo = (): boolean => {
  //   if (alltodos.length == 0) {
  //     return false;
  //   }
  //   return true;
  // };

  return (
    <div className="login-slider-container">
      {/* <button onClick={clickHandler}>All Todos</button>
      <button onClick={searchHandler}> Find </button>
      {checkTodo() &&
        alltodos.map((todo) => (
          <div className="todo-container" key={todo.id}>
            <p className="todo-child1">{todo.id}</p>
            <p className="todo-child2">{todo.userId}</p>
            <p className="todo-child3">{todo.title}</p>
          </div>
        ))} */}
      <Row className="login-wrapper">
        <Col className="login-form" lg={5} md={5} xs={12}>
          <h1>Login</h1>
          <Input
            size="sm"
            id="email-input"
            placeholder="Email Address"
            className="custom-input-login"
          />
          <Input
            size="sm"
            id="password-input"
            placeholder="Password"
            className="custom-input-login mt-4"
          />
          <Button
            variant="primary"
            data-test="docs-btn-anchor"
            className="login-btn mt-4"
          >
            Login
          </Button>
        </Col>
        {size.width >= 768 && (
          <Col xs={2} className="right-line-wrapper pr-1">
            <div className="right-line-separate-login">
              <span>OR</span>
            </div>
          </Col>
        )}
        <Col
          className={`login-via-form ${
            size.width < 768 ? "pl-3 mt-5" : "pl-0"
          }`}
          lg={5}
          md={5}
          xs={12}
        >
          <h1>Login Via</h1>

          <FacebookLogin
            appId="598976655336817"
            autoLoad={true}
            fields="name,email,picture"
            callback={responseFacebook}
            cssClass="facebook-btn"
            textButton="Facebook"
          />
          <GoogleLogin
            clientId={clientId}
            render={(renderProps) => (
              <Button
                onClick={renderProps.onClick}
                // disabled={renderProps.disabled}
                variant="danger"
                className="google-btn mt-4"
                // href="https://localhost/signin-google"
              >
                Google
              </Button>
            )}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_origin"}
          />
          <span className="mt-4 d-block forget-password-text">
            Forgot password? Click <a href="/">Here</a>
          </span>
        </Col>
      </Row>
      <div className="bottom-line-separate-login"></div>
      <Register />
    </div>
  );
};
