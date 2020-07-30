import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 140px;
  
  background: #6A5ACD;
  box-shadow: 0 1px 1px rgba(0 , 0, 0, 0.25);
`;

const Title = styled.h1`
  display: flex;
  align-items: center;
  font-style: none;

  color: black;
`;

const Logo = styled.img`
  height: 30px;
  width: 30px;

  margin-right: 10px;
`;

export { Container, Title, Logo };
