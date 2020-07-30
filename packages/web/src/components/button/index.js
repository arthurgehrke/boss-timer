import styled from 'styled-components'

export const Form = styled.form`
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
  display: flex;
  input {
    flex: 1;
    height: 40px;
    padding: 0 20px;
    margin-left: 5px;
    margin-right: 5px;
    background: #999;
    font-size: 18px;
    color: #444;
    border-radius: 3px;
    border: ${props => (props.withError ? '2px solid #F00' : 0)};
  }
  button {
    width: 60;
    height: 40px;
    padding: 0 20px;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
    background: #9400d3;
    color: #fff;
    border: 0;
    text-align: center;
    font-size: 70%;
    font-weight: bold;
    border-radius: 3px;
    &:hover {
      background: #483d8b;
    }
  }
`
