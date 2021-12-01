import React from "react";
import styled from "@emotion/styled";

const NavBar = styled.div`
  background-color: #0b0b0b;
  color: white;
`;

function Navbar() {
  return (
    <NavBar>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt=""
      />
    </NavBar>
  );
}
export default Navbar;
