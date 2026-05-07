import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  overflow-x: hidden;

  section {
    scroll-margin-top: 95px;
  }

  @media (max-width: 668px) {
    section {
      scroll-margin-top: 72px;
    }
  }
`;
