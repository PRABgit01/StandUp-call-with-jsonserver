import { Link } from "react-router-dom";
import styled from "styled-components";

export const ButtonCardBox=styled.div`
    display: flex;
`

export const CardStyledButton = styled.button`
  background-image: linear-gradient(
    to right,
    #a99bf9 0%,
    #e3dbf6 51%,
    #2bc0e4 100%
  ); 

  margin: 10px;
  padding: 10px 35px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: #fff;
  box-shadow: 0 0 20px #ccc;
  border-radius: 10px;
  display: block;
  border: none;
  font-size: 10px;
  font-weight: 700;

  &:hover {
    background-position: right center;
    color: #fff;
    text-decoration: none;
  } 
`;

export const CreateButtonDesign=styled(Link)`
text-decoration: none;
background-image: linear-gradient(
    to right,
    #a99bf9 0%,
    #e3dbf6 51%,
    #2bc0e4 100%
  ); 

  margin: 10px;
  padding: 10px 35px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: #000;
  box-shadow: 0 0 20px #ccc;
  border-radius: 10px;
  display: block;
  border: none;
  font-size: 10px;
  font-weight: 700;

  &:hover {
    background-position: right center;
    color: #fff;
    text-decoration: none;
  }
`