import React, { useState } from "react";
import { Form, ButtonToolbar, Button, Input } from "rsuite";
import axios from "axios";
import { useFormik } from "formik";
import { Link } from "react-router-dom";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      username: "sd",
      password: "",
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log(values);
      save(values);
    },
  });
  const [model, setmodel] = useState({
    username: "",
    password: "",
  });

  function handleForm(e, fieldName) {
    console.log(e);
    if (fieldName === "username") {
      setmodel({ ...model, username: e });
    }
    if (fieldName === "password") {
      setmodel({ ...model, password: e });
    }
  }

  async function save(values) {
    let formData = new FormData();
    formData.append("username", model.username);
    formData.append("password", model.password);
    let res = fetch("https://demoblog.afeagroup.com/user/login", {
      //   mode: "no-cors",
      method: "post",
      data: formData,
      headers: {
        //   "Access-Control-Allow-Origin": "*",
        "Content-Type": "multipart/form-data",
      },
    })
      .then((d) => console.log(d))
      .then((d) => console.log(d));
  }
  console.log(model);

  return (
    <div className="container">
      <div>Login</div>
      <Form>
        <Form.Group>
          <Form.ControlLabel>Username</Form.ControlLabel>
          <Form.Control
            onChange={(e) => handleForm(e, "username")}
            value={model.username}
          />
          <Form.HelpText>Username is required</Form.HelpText>
        </Form.Group>
        <Form.Group>
          <Form.ControlLabel>Password</Form.ControlLabel>
          <Form.Control
            // name="password"
            type="password"
            onChange={(e) => handleForm(e, "password")}
            value={model.password}
            // autoComplete="off"
          />
        </Form.Group>
        <Form.Group>
          <ButtonToolbar>
            <Button appearance="primary" onClick={save}>
              Submit
            </Button>
            <Link to={"/register"} appearance="default">
              Register
            </Link>
          </ButtonToolbar>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Login;
