import styled from "styled-components";

export const SliderWrapper = styled.section`
  padding: 30px 0;

  .slider__container {
    display: flex;
    width: max-content;
    gap: 10px;
    width: 100%;

    @media screen and (max-width: 760px) {
      display: flex;
      width: max-content;
      gap: 10;
      .Slide {
        background: transparent;
        img {
          width: 100%;
          height: 300px;
          object-fit: contain;
        }
      }
    }
  }
`;

export const ItemWrapper = styled.div`
  @media screen and (max-width: 760px) {
    width: 100%;
    padding: 0 20px;
  }
`;
