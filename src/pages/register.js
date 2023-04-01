import React, { useState } from "react";
import { Form, ButtonToolbar, Button, Input } from "rsuite";
import axios from "axios";
import { useFormik } from "formik";
import { json, Link, useNavigate } from "react-router-dom";

const Textarea = React.forwardRef((props, ref) => (
  <Input {...props} as="textarea" ref={ref} />
));

const Register = () => {
  const navigate = useNavigate();
  const [model, setmodel] = useState({
    username: "",
    password: "",
    passconf: "",
  });

  function handleForm(e, fieldName) {
    console.log(e);
    if (fieldName === "username") {
      setmodel({ ...model, username: e });
    }
    if (fieldName === "password") {
      setmodel({ ...model, password: e });
    }
    if (fieldName === "passconf") {
      setmodel({ ...model, passconf: e });
    }
  }

  async function save(values) {
    let formData = new FormData();
    formData.append("username", model.username);
    formData.append("password", model.password);
    formData.append("passconf", model.passconf);
    let res = await fetch("https://demoblog.afeagroup.com/user/register", {
      //   mode: "no-cors",
      method: "post",
      body: `username=${model.username}&password=${model.password}&passconf=${model.passconf}`,
      headers: {
        //   "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((d) => d.json())
      .then((d) => {
        sessionStorage.setItem("credentials", JSON.stringify(d?.user));
        return d;
      });

    console.log(res);
    if (res?.user) {
      navigate("/");
    }
  }
  console.log(model);

  return (
    <div className="container">
      <div>Register</div>
      <Form>
        <Form.Group controlId="username">
          <Form.ControlLabel>Username</Form.ControlLabel>
          <Form.Control
            name="username"
            onChange={(e) => handleForm(e, "username")}
            value={model.username}
          />
          <Form.HelpText>Username is required</Form.HelpText>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.ControlLabel>Password</Form.ControlLabel>
          <Form.Control
            name="password"
            type="password"
            onChange={(e) => handleForm(e, "password")}
            value={model.password}
            autoComplete="off"
          />
        </Form.Group>
        <Form.Group controlId="passconf">
          <Form.ControlLabel>Password Confirm</Form.ControlLabel>
          <Form.Control
            name="passconf"
            type="password"
            autoComplete="off"
            onChange={(e) => handleForm(e, "passconf")}
            value={model.passconf}
          />
        </Form.Group>
        <Form.Group>
          <ButtonToolbar>
            <Button onClick={save} appearance="primary">
              Submit
            </Button>
            <Link to={"/login"} appearance="default">
              Login
            </Link>
          </ButtonToolbar>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Register;
