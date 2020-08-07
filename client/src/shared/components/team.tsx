import React from 'react';
import styled from 'styled-components';
import Card , {AddCard} from 'shared/components/card';

export default function Team(){

  return(
    <Container>
      <Title>Kişisel Panolar</Title>
      <Panos>
        <Card/>
        <AddCard/>
      </Panos>
    </Container>
  )
}

const Container = styled.div`
 padding: 10px 30px;
`;

const Title = styled.h3`
display: block;
padding-left: 10px;
font-size: 16px;
line-height: 24px;
font-weight: 500;
text-align: left;
`;
const Panos = styled.div`
display: flex;
padding: 0 10px;
`;