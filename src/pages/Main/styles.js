import styled, {keyframes, css} from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background-color: #fff;
  padding: .5rem;
  border-radius: .8rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, .5);
  width: 860px;
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  gap: 1rem;
  border-bottom: 2px #264653 solid;
  padding-bottom: 1rem;
  align-items: center;
  color: #264653;
`;

export const Form = styled.form`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  max-width: 100%;
  input {
    display: inline-block;
    padding: .5rem;
    flex: 1;
    font-size: 1.2rem;
    border: 1px solid ${props => (props.error ? '#d62828' : '#e5e5e5')};
    box-shadow: 1px 1px 3px rgba(38, 70, 83, .2);
    border-radius: 4px;
    &::placeholder {
      color: #8d99ae;
    }
  }
`;

/* button animation */ 
const animate = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`

export const DelButton = styled.button.attrs({
  type: 'button'
})`
  background-color: transparent;
  border: none;
  svg {
    color: #264653;
    transition: ease .3s;
    &:hover{
      color: #fb5607;
    }
  }
`;

export const ListRepos = styled.ul`
  list-style: none;
  span {
    display: flex;
    align-items: center;
    gap: 1rem;
      font-size: .9rem;

    strong {
      font-size: 1rem;
    }
  }

  li {
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    gap: .5rem;
    padding: .5rem 0;
    color: #264653;

    & + li {
      border-top: 1px dashed #d5bdaf;
    }
  }
`;

export const Actions = styled.span`
  display: flex;
  a {
    color: #264653;
    text-decoration: none;
    transition: ease .3s;
    &:hover {
      color: #2a9d8f;
    }
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading
  }))`
  &&[disabled] {
    cursor: not-allowed;
    background-color: #2a9d8f;
  };

  ${
    props => props.loading &&
    css`
      svg{
        animation: ${animate} 1s linear infinite;
      };
    `
  };

  display: flex;
  justify-content: center;
  align-items: center;
  border: transparent;
  border-radius: .25rem;
  background-color:#264653;
  padding: .4rem;
  width: 3rem;
  box-shadow: 1px 1px 3px rgba(38, 70, 83, .2);
  color: #edede9;
  transition: ease .5s;
  &:hover {
    background-color: #2a9d8f;
  };
  
  svg {
    color: #edede9;
  }
`;