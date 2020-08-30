import React from "react";
import styled from "styled-components";

const Task: React.FC<TaskProps> = ({id, title, items }) => {
  return (
    <List>
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
      <CardBody>
        {items.map((val, idx) => (
          <Item>{val.title}</Item>
        ))}
      </CardBody>
      <AddCard>Kart Ekle</AddCard>
    </List>
  );
};

const List = styled.div`
  width: 270px;
  min-height: 80px;
  background: #ebecf0;
  border-radius: 3px;
  margin: 10px 30px;
`;

const TitleContainer = styled.div`
  width: 270px;
  height: 40px;
  background: transparent;
  border-radius: 3px 3px 0 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 10px;
`;

const Title = styled.span`
  font-size: 14px;
  color: #172b4d;
  font-weight: 500;
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: stretch;
`;

const Item = styled.div`
  min-height: 35px;
  background: #fff;
  border-radius: 3px;
`;

const AddCard = styled.button`
  width: 270px;
  height: 40px;
  background: transparent;
  border-radius: 0 0 3px 3px;
  border: none;
  font-size: 12px;
  font-weight: 500;
`;

export default Task;
