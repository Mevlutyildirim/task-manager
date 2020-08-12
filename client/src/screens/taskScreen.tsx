import React from "react";
import styled from "styled-components";
import Task from "shared/components/task";
import * as Button from "shared/components/button";
import SideBar from "shared/components/sideBar";

const {PrimaryButton} = Button;

function TaskScreen() {
  return (
    <List>
      <Tasks>
        <Task />
        <PrimaryButton title="Liste Ekle" />
      </Tasks>
      <SideBar />
    </List>
  );
}

const List = styled.div`
  display: flex;
  align-items: stretch;
  flex:1;
  overflow:scroll;
`;

const Tasks = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-start;
`;

export default TaskScreen;
