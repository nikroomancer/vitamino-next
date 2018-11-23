import styled, {css}from 'styled-components';

// export const BoxInner = styled.div`
//     background: lightskyblue;
//     width: 100%;
//     height: 100%;
//     border: 2px solid #9b9797;
//     border-radius: 4px;
//     padding: 20px;
//     ${props => props.alternateColor && css`
//         background: salmon;
//     `};
//     ${props => props.alternatePadding && css`
//         padding: 30px;
//     `};
// `;

export const Nav = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
`;

export const NavLink = styled.a`
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  :hover{
    background-color: #111;
  }
  ${props => props.active && css`
    background-color: #4CAF50;
  `};
`;

export const NavLogo = styled.a`
 /*font*/
  font-family: 'Hind', sans-serif;
  font-size: 30px;
  letter-spacing: -2px;
  text-shadow: 1px 1px 2px #c4c4c4;
/*box*/
  float: left;
  padding-left: 20px;
  padding-right: 40px;
  margin-right: 10px;
  margin-top: -20px;
`;

export const NavItem = styled.li`
  float: left;
`;
