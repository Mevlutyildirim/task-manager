import React from "react";
import styled from "styled-components";
import SearchIcon from '../assets/icons/search.png';

function Header() {
  return (
    <HeaderWrapper>
      <HeaderForm action="">
        <Search type="search" required name="search" />
        <SearchBtn><SearchImg src={SearchIcon} alt=""/></SearchBtn>
      </HeaderForm>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  background: #f4f4f4;
`;

const HeaderForm = styled.form`
  display: flex;
  width: 100%;
  max-width: 30em;
  height: 40px;
 
`;
const Search = styled.input`
  border-radius: 6px 0 0 6px;
  padding: 10px;
  background: #fff;
  height: 30px;
  width: 100%;
  -webkit-appearance: none;
  border: 1px solid darken(white, 30%);
`;

const SearchImg = styled.img`
width: 100%;
height: 100%;
`

const SearchBtn = styled.button`
background: #3E95EF;
width: 30px;
height: 30px;
border-radius: 0 6px 6px 0;
display: flex;
`

export default Header;
