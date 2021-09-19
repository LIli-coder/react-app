import styled from 'styled-components';

// Forms, inputs, buttons
export const Body = styled.body `
  background: #0e101c;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
`

export const Form = styled.form`
  margin:0 auto;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
 
`;

export const Input = styled.input`
 display:block;
  width: 100%;
  height: 35px;
  border: 1px solid #ccc;
  background-color: #fff
`;
export const Label = styled.label`
  color: #8d8d8d;
  // position: absolute;
  // top: 27px;
  // left: 55px;
  // background: red;
  // transition: 300ms;
  // transform: translate(-50%, -50%);
`;
export const Button = styled.button`
  width: 300px;
  height: 35px;
  background-color: #5995ef;
  color: #fff;
  border-radius: 3px;
`;

// Text

export const Title = styled.h1`
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  color: #4d4d4d;
  font-size: 2.2em;
`;

export const Title2 = styled.h2`
  font-family: 'Raleway', sans-serif;
  font-weight: 300;
  color: #4d4d4d;
  font-size: 1.8em;
`;

export const Text = styled.p`
  font-family: 'Raleway', sans-serif;
  color: ${props => props.color || '#4d4d4d'}
`;