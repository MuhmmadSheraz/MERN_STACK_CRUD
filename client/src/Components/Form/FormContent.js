import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { useDispatch } from "react-redux";
import FileBase64 from "react-file-base64";
import { createPost } from "../../store/actions/postAction.js";
import "./form.css";

const FormContent = () => {
  const dispatch = useDispatch();

  const [postData, setPostData] = useState({
    creator: "hamza",
    title: "my first post",
    description: "no Dexx",
    tags: "hpuse",
    selectedFile: "zsasas",
  });
  const hanldeSubmitPost = () => {
    dispatch(createPost(postData));
  };
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <Form onSubmit={(e) => e.preventDefault()}>
        <FormGroup className="form_data">
          <Label className="form_data " for="Title">
            Post Title
          </Label>
          <Input
            type="text"
            onChange={(e) => {
              setPostData({ ...postData, title: e.target.value });
            }}
            value={postData.title}
            name="title"
            placeholder="Enter Post Title"
          />
        </FormGroup>

        <FormGroup className="form_data">
          <Label className="form_data " for="exampleText">
            Post Description
          </Label>
          <Input
            type="textarea"
            onChange={(e) => {
              setPostData({ ...postData, description: e.target.value });
            }}
            value={postData.description}
            name="description"
          />
        </FormGroup>
        <FormGroup className="form_data">
          <Label className="form_data " for="exampleText">
            Creater
          </Label>
          <Input
            type="textarea"
            onChange={(e) => {
              setPostData({ ...postData, creator: e.target.value });
            }}
            value={postData.creator}
            name="creater"
          />
        </FormGroup>
        <FormGroup className="form_data">
          <Label className="form_data " for="exampleText">
            Tags
          </Label>
          <Input
            type="textarea"
            onChange={(e) => {
              setPostData({ ...postData, tags: e.target.value });
            }}
            value={postData.tags}
            name="tags"
          />
        </FormGroup>
        <FileBase64
          type="file"
          multiple={false}
          onDone={({ base64 }) =>
            setPostData({ ...postData, selectedFile: base64 })
          }
        />

        <Button onClick={hanldeSubmitPost}>Submit</Button>
      </Form>
    </div>
  );
};

export default FormContent;
