import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0 auto;
  background: ${(props) => props.backgroundColor};
`;
