import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const TaskBar: React.FC = () => {
  return (
    <TaskBarStyle>
      <TaskBarLinkStyle to="/tasks">Tasks</TaskBarLinkStyle>
      <TaskBarLinkStyle to="/chat">Chat</TaskBarLinkStyle>
    </TaskBarStyle>
  );
};

const TaskBarStyle = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  border-bottom: 1px solid #f4f4f4;
  padding-left: 20px;
`;

const TaskBarLinkStyle = styled(NavLink)`
margin: 0 10px;
line-height: 2;
font-size: 18px;
text-decoration: none;
color: ${props => props.theme.colors.text.primary};
`

export default TaskBar;
