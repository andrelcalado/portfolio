import styled from "styled-components";

export const theme = {
  colors: {
    white: "#FAFAFA",
    black: "#121212",
    blue: {
      darkLight: "#01151C",
      dark: "#000027",
    },
    green: {
      gray: "#c2d8d3",
      light: "#3CFFD1",
      shadow: "#1F8069",
    },
    gray: {
      200: "#CACBCF",
      250: "#B9BABA",
      300: "#4E525D",
      400: "#363636",
    },
  },
};

export const Container = styled.div`
  max-width: calc(1300px - 80px);
  padding: 0 40px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 500px) {
    max-width: calc(1300px - 40px);
    padding: 0 20px;
  }
`;
