import React from 'react';
import styled, {css} from 'styled-components';


export const Flex = styled.div`
 display:flex;
 direction: ${props => props.direction};
 justify-content: ${props => props.justify};
 align-items: ${props => props.align};
`;

