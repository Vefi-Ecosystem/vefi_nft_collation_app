import styled from "styled-components";

export const FooterWrapper = styled.footer`
  width: 100%;
  background: var(--black-bg);
  padding: 50px 0;

  .footer__container {
    display: flex;
    width: 100%;
    align-items: center;

    .footer__left {
      flex: 0.3;
      width: 100%;
      display: flex;

      .logo {
        width: 100%;
        img {
          width: 100%;
          height: 80px;
          object-fit: contain;
        }
      }
      @media screen and (max-width: 760px) {
        padding: 0 20px;
      }
    }
    .footer__nav {
      flex: 0.7;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .footer__links {
        a {
          margin: 0 25px;
          font-family: "Poppins";
          font-size: 1.5rem;
          color: rgba(255, 255, 255, 0.8);
        }
      }
      .footer__right {
        overflow-x: scroll;
      }
    }
    @media screen and (max-width: 760px) {
      padding: 0 20px;
      display: flex;
      flex-direction: column;
    }
  }
  .footer__bottom {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    flex-direction: column;
    .social__icons {
      display: flex;
    }
    button {
      padding: 5px;
    }
    .button {
      padding: 5px 0;
    }
    .paragraph {
      font-size: 0.7rem;
      color: rgba(255, 255, 255, 0.5);
    }
  }
  @media screen and (max-width: 760px) {
    padding: 0;
  }
`;
