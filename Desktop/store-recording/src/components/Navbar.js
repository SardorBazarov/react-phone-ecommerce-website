import React, { Component } from "react";
import { Link } from 'react-router-dom';
import logo from "../logo.svg";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

export default class Navbar extends Component {
    render() {
        return (
          <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
            <Link src="https://kit.fontawesome.com/70e9380bbb.js" crossorigin="anonymous"></Link>
            <Link to="/">
              <img src={logo} alt="store" className="navbar-brand"/>
               
            </Link>
            <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5">
                  <Link to="/" className="nav-link">
                    products
                  </Link>
                </li>
            </ul>
            <Link to="/cart" className="ml-auto">  
              <ButtonContainer>
                <i className="mr-2 fas fa-cart-plus"/>
                  my cart
              </ButtonContainer>
            </Link>
          </NavWrapper> 
        );
    }
}

const NavWrapper = styled.nav`
background: var(--lightViolet);
position: absolute;
top:0;
bottom:1;
right:0;
left:0;
display: flex;
justify-content: center;
.nav-link{
 color: var(--mainWhite);
 font-size: 1.3rem;
 text-transform: capitalize ;
}
`;