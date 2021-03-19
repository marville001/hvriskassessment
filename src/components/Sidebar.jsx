import React from "react";
import styled from "styled-components";
import { Col } from "react-bootstrap";

const Sidebar = () => {
  return (
    <Col md={3} className="sidebar-container">
      <h3 style={{padding: "10px 20px"}}>Dashboard</h3>
      <hr/>
      <SidebarItem href="/">Dashboard</SidebarItem>
      <SidebarItem href="/sessions">Sessions</SidebarItem>
      <SidebarItem href="/profile">Profile</SidebarItem>
    </Col>
  );
};

const SidebarItem = styled.a`
  display: block;
  cursor: pointer;
  background: transparent;
  width: 100%;
  color: #000;
  font-size: 20px;
  margin:0;
  padding: 10px 20px;
  text-decoration:none;
  &:hover {
    text-decoration:none;
    background-color: var(--accentColor);
  }
`

export default Sidebar;
