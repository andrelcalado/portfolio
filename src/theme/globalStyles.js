import styled from "styled-components";

export const theme = {
  colors: {
    white: "#FAFAFA",
    black: "#121212",
    blue: {
      darkLight: '#01151C',
      dark: "#000027",
    },
    green: {
      white: '#97FFE1',
      light: '#3CFFD1',
    }
  },
};

export const Container = styled.div`
  max-width: calc(1300px - 40px);
  padding: 0 20px;
  margin: 0 auto;
  width: 100%;
`;
