import React from 'react';
import styled, {css} from 'styled-components';

interface iflex{
  direction: React.CSSProperties['direction'];
  justify: React.CSSProperties['justifyContent'];
  align:React.CSSProperties['alignItems'];
}
export const Flex = styled.div<iflex>`
 display:flex;
 direction: ${props => props.direction};
 justify-content: ${props => props.justify};
 align-items: ${props => props.align};
`;

