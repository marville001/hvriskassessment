import React from "react";
import { ListGroup } from "react-bootstrap";

const AdminSidebar = () => {
  return (
    <div className="main-dash-sidebar">
      <ListGroup>
        <ListGroup.Item action href="/admin">
          Dashboard
        </ListGroup.Item>
        <ListGroup.Item action href="/admin/sessions">
          Sesions
        </ListGroup.Item>
        <ListGroup.Item action href="/admin/users">
          Users
        </ListGroup.Item>
        <ListGroup.Item action href="">
          Make
        </ListGroup.Item>
        <ListGroup.Item action href="">
          Models
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default AdminSidebar;
