//import { FaBars } from 'react-icons/fa';
//import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';


export const Nav = styled.nav`
background: #63D471;
height: 80px;

display: flex;
justify-content: center;
align-items:center;
font-size:1rem;
position:sticky;
top:0;
z-index:10;
@media screen and (max-width:960px){
	transition:0.8s all ease;
}
`;
 
export const NavbarContainer = styled.div`
display:flex;
justify-content:space-between;
width:100%;
max-width:1100px;
height:80px;
padding:0 24px;
z-index:1;
`;

export const NavLogo = styled(LinkR)`
text-decoration:none;
color:red;
justify-self:flex-start;
cursor:pointer;
display:flex;
align-items:center;
margin-left:24px;
font-weight:bold;
font-size:1.5rem;
`;

export const NavLinks = styled(LinkS)`
color: #808080;
display: flex !important;
cursor:pointer;
font-size:1.5rem;
font-weight:bold;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;

&.active{
	color: red ;
	border-bottom:3px solid red;
}
`;
 
export const MobileIcon = styled.div`
 display:none;
 
 @media screen and (max-width:768px){
	 display:block;
	 position:absolute;
	 top:0;
	 right:0;
	 transform:translate(-100% , 60%);
	 font-size:1.8rem;
	 coursor:pointer;
	 color:#fff;
 }
 `;
 export const NavItem = styled.li`
 height:80px;
 display:flex;
 text-align:center;
 justify-content:center;

 `;

export const Bars = styled.div`
display: none;
color: #808080;
@media screen and (max-width: 768px) {
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 75%);
	font-size: 1.8rem;
	cursor: pointer;
	color:#fff;
	
}
`;

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style:none;
text-align:center;
margin-right: -22px;


@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtn = styled.nav`
display: flex;
align-items: center;

@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtnLink = styled(LinkR)`
border-radius: 50px;
background: #808080;
white-space:nowrap;
padding: 10px 22px;
color: #000000;
font-size:16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;


&:hover {
	transition: all 0.2s ease-in-out;
	background: #fff;
	color: #808080;
}
`;
