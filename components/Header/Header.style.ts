import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 80px;

  .header__container {
    display: flex;
    width: 100%;
    align-items: center;
    height: 80px;
    color: #fff;
    .header__logo {
      flex: 0.3;
      width: 100%;

      img {
        width: 80px;
        height: 80px;
        object-fit: contain;
      }
    }
    .header__nav {
      flex: 0.7;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .nav__left {
        a {
          margin: 0 20px;
          font-family: "Inter";
          font-size: 1.3rem;
        }
        @media screen and (max-width: 760px) {
          display: none;
        }
      }

      @media screen and (max-width: 760px) {
        justify-content: right;
      }
    }

    .mobile {
      display: none;
      @media screen and (max-width: 760px) {
        display: flex;
        width: max-content;
      }
    }
    @media screen and (max-width: 760px) {
      padding: 0 20px;
      width: 100%;
      background: var(--black-bg);
    }
  }
  .mobile_ {
    .btn {
      display: none;
    }
    @media screen and (max-width: 760px) {
      display: flex;
      align-items: center;

      .btn {
        font-size: 1.8rem;
        display: flex;
      }
      button {
        border-radius: 50%;
        background: #fff;
        color: var(--blue-text);
        padding: 8px 5px;
      }
    }
  }
`;
