import styled from "styled-components";
import { Link } from "react-router-dom";

export const Loading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  color: #fff;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: .3rem;
  justify-content: center;
  width: 860px;  
`;

export const Text = styled.p`
  display: flex;
  gap: .6rem;
  flex-wrap: wrap;
  font-size: 1rem;
  align-items: center;
`;

export const Small = styled.span`
  font-size: small;
`;

export const Labels = styled.span`
  display: flex;
  color: #edede9;
  background-color: #9d4edd;
  padding: 4px 6px;
  border-radius: .25rem;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 100%;
  background-color: #00afb9;
  box-shadow: 0 3px 7px rgba(0, 0, 0, .3);
  padding: .5rem;
  height: 3rem;
`;

export const Filters = styled.div`
  display: flex;
  gap: .5rem;

  button {
    padding: .5rem;
    border: none;
    background-color: #2b2d42;
    color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 5px rgba(0, 0, 0, .3);
    transition: ease .5s;
    &:hover {
      background-color: #3a86ff;
      color: #2b2d42;
    }
    &:disabled {
      background-color: #8d99ae;
      cursor: not-allowed;
    }
    &:nth-child(${props => props.active + 1}){
      background-color: #3a86ff;
      color: #fff;
    }
  }
`;

export const SubTitle = styled.h3`
  display: flex;
  justify-content: center;
  min-width: 100%;
  text-align: center;
`;

export const Owner = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: .5rem;
  align-items: center;
  min-width: 100%;  
  border-bottom: 2px solid #3d405b;

  img {
    border: solid 2px #00afb9;
    border-radius: 1.2rem;
    width: 80px;
    box-shadow: 0 0 5px rgba(0, 0, 0, .3);
    padding: .3rem;
  }
`;

export const IssuesList = styled.ul`
  display: flex;
  list-style: none;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  img {
    width: 46px;
    border: 1px solid #c0c0c0;
    border-radius: 50%;
    box-shadow: 0 0 5px rgba(0, 0, 0, .3);
  }

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .2rem 0;
    gap: .5rem;

    & + li {
      border-top: 1px dashed #3d405b;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  height: max-content;
  gap: 1rem;
  color: #264653;
  background-color: #fff;
  border-radius: .8rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, .5);
  width: 100%;
`;

export const IssuesBody = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 100%;
  padding: 0 .5rem .5rem .5rem;
`;

export const IssueDetail= styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: .7rem;
  padding: 0 .5rem;
  flex: 1;

  a {
      text-decoration: none;
      color: #00afb9;
      transition: ease .3s;
      &:hover {
        color: #3a86ff;
      }
    }

  span {
    font-size: small;
  }
`;

export const User = styled.span`
  display: flex;
  gap: .2;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 160px;
`;

export const BackButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border-radius: 50%;
  
  svg {
    color: #2b2d42;
    transition: ease .5s;
    &:hover {
      color: #fff;
    }
  }
`;

export const IssuesFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #00afb9;
  min-width: 100%;
  padding: .5rem;
  height: 3rem;
  box-shadow: 0 0 7px rgba(0, 0, 0, .3);
  border-top: 2px solid #3d405b;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    font-size: 2rem;
    border-radius: 20px;
    color: #2b2d42;
    padding: 0;

    &:hover {
      color: #fff;
    }

    &:disabled {
      color: #8d99ae;
      cursor: not-allowed;
    }
  }
`;