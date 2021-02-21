import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deletePost } from "../../store/actions/postAction.js";

const Example = ({ data, setCurrentId }) => {
  const dispatch = useDispatch();
  return (
    <div className="m-5 col-md-4">
      <Card style={{ width: "100%" }}>
        <CardImg
          top
          style={{ height: "200px", width: "inherit" }}
          src={
            data.selectedFile
              ? `${data.selectedFile}`
              : "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
          }
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle tag="h5">{data.title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {moment(data.createdAt).fromNow()}
          </CardSubtitle>
          <CardText>{data.description}</CardText>
          <Button color="warning m-2" onClick={() => setCurrentId(data._id)}>
            Edit
          </Button>
          <Button
            color="danger m-2"
            onClick={() => dispatch(deletePost(data._id))}
          >
            Delete
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Example;
