import React from "react";
import styled from "styled-components";
import home from "../../assets/icons/home.png";
import bell from "../../assets/icons/bell.png";
import search from "../../assets/icons/search.png";

type IconProps = {
  name: "home" | "bell" | "search"
}

const Icon= ({name}) => {

  if (name === "home") {
    return <HomeIcon></HomeIcon>;
  }
  if (name === "bell") {
    return <BellIcon></BellIcon>;
  }
  
  return <SearchIcon></SearchIcon>;
}

function Navigation() {
  return (
    <NavigationNav>
      <Icon name="home"/>
      <Icon name="bell"/>
      <Icon name="search"/>
      <Profile/>
    </NavigationNav>
  );
}

const NavigationNav = styled.nav`
  border-top: 1px solid rgba(0,0,0,0.25);
  height: 50px;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 1000;
  background: #fff;
`;

const Profile = styled.span`
display: block;
height: 30px;
width: 30px;
border-radius: 50%;
background-color: #C4C4C4;
`
const BasicIcon = styled.span`
  display: block;
  height: 30px;
  width: 30px;
  background-size: 30px;
  background-repeat: no-repeat;
  background-position: center;
`;

const HomeIcon = styled(BasicIcon)`
  background-image: url(${home});
`;

const BellIcon = styled(BasicIcon)`
  background-image: url(${bell});
`;

const SearchIcon = styled(BasicIcon)`
  background-image: url(${search});
`;
export default Navigation;
