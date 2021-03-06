import React from "react";
import styled from "styled-components";
import Task from "shared/components/task";
import * as Button from "shared/components/button";
import SideBar from "shared/components/sideBar";
import { TaskBar } from "shared/components/layout";
import { useDocument } from "../shared/hooks";
const { PrimaryButton } = Button;

function TaskScreen() {
  useDocument("tasks");

  const datas: Array<TaskProps> = [
    {
      id: 1,
      title: "ilk görev",
      items: [
        { id: 1, title: "do it" },
        { id: 2, title: "make me money" },
      ],
    },
    {
      id: 2,
      title: "her zaman çalış",
      items: [{ id: 2, title: "make it right" }],
    },
  ];

  return (
    <>
      <TaskBar />
      <List>
        <Tasks>
          {datas.map((taskItem, idx) => (
            <Task
              id={taskItem.id}
              title={taskItem.title}
              items={taskItem.items}
            />
          ))}
          <PrimaryButton title="Liste Ekle" />
        </Tasks>
        <SideBar />
      </List>
    </>
  );
}

const List = styled.div`
  display: flex;
  align-items: stretch;
  flex: 1;
  overflow: scroll;
`;

const Tasks = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-start;
`;

export default TaskScreen;
