import styled from "styled-components";

export const Title = styled.h1`
  color: #edede9;
  text-align: center;
`;

export const NavLink = styled.span`
  display: flex;
  gap: 1rem;

  .nav-link {
    display: flex;
    justify-content: center;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 500;
    padding: .5rem 1rem;
    border-radius: 4px;
    color: #edf2f4;
    background-color: #003049;
    transition: ease .5s;
    &:hover {
      color: #003049;
      background-color: #2a9d8f;
    }
  }  
`