import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, ButtonToolbar, Button, Input } from "rsuite";

const Post = () => {
  const [model, setmodel] = useState({
    title: "",
    image: "",
    content: "",
    tags: "",
  });
  function handleForm(e, fieldName) {
    console.log(e);
    if (fieldName === "title") {
      setmodel({ ...model, title: e });
    }
    if (fieldName === "image") {
      let file = e.target.files[0];

      console.log(URL.createObjectURL(file));
      setmodel({ ...model, image: URL.createObjectURL(file) });
    }
    if (fieldName === "content") {
      setmodel({ ...model, content: e });
    }
    if (fieldName === "tags") {
      setmodel({ ...model, tags: e });
    }
  }

  async function save(values) {
    let res = await fetch("https://demoblog.afeagroup.com/post/create", {
      //   mode: "no-cors",
      method: "post",
      body: `title=${model.title}&content=${model.content}&tags=${model.tags}`,
      headers: {
        //   "Access-Control-Allow-Origin": "*",
        "X-Auth-Key": "3d2994112c096f93762093dfb598456c",
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((d) => d.json())
      .then((d) => {
        // sessionStorage.setItem("credentials", JSON.stringify(d?.user));
        // return d;
        console.log(d);
        return d;
      })
      .catch((err) => console.log(err, "err"));

    console.log(res);
  }
  console.log(model);
  return (
    <div>
      <div className="container">
        <div>Login</div>
        <Form>
          <Form.Group>
            <Form.ControlLabel>Title</Form.ControlLabel>
            <Form.Control
              onChange={(e) => handleForm(e, "title")}
              value={model.title}
            />
            <Form.HelpText>Title is required</Form.HelpText>
          </Form.Group>
          <Form.Group>
            <Form.ControlLabel>image</Form.ControlLabel>
            <img src={model.image} alt="" />
            <input
              type="file"
              name=""
              id=""
              onChange={(e) => handleForm(e, "image")}
            />
          </Form.Group>
          <Form.Group>
            <Form.ControlLabel>Content</Form.ControlLabel>
            <Form.Control
              type="text"
              onChange={(e) => handleForm(e, "content")}
              value={model.content}
            />
          </Form.Group>
          <Form.Group>
            <Form.ControlLabel>Tags</Form.ControlLabel>
            <Form.Control
              // name="password"
              type="text"
              onChange={(e) => handleForm(e, "tags")}
              value={model.tags}
            />
          </Form.Group>
          <Form.Group>
            <ButtonToolbar>
              <Button appearance="primary" onClick={save}>
                Create
              </Button>
              <Link to={"/"} appearance="default">
                Geri
              </Link>
            </ButtonToolbar>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default Post;
