import React from "react";
import styled from "@emotion/styled";
import { Notifications, Search } from "@mui/icons-material";

const NavBar = styled.div`
  background-color: #0b0b0b;
  color: white;
  font-size: 14px;
  padding: 0px 50px;
`;
const HeaderImg = styled.img`
  height: 25px;
`;
const HeaderLogin = styled.div``;

function Navbar() {
  return (
    <NavBar>
      <HeaderImg
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt=""
      />
      <span>Homepage</span>
      <span>Series</span>
      <span>MOvies</span>
      <span>New and Populalr</span>
      <span>My List</span>
      <HeaderLogin>
        <Search />
        <span>KID</span>
        <Notifications />
      </HeaderLogin>
    </NavBar>
  );
}
export default Navbar;
