import styled from "styled-components";

export const HeroWrapper = styled.section`
  height: calc(100vh - 80px);
  align-items: center;
  display: flex;

  @media screen and (max-width: 760px) {
    height: 100%;
    flex-direction: column;
    margin-top: 30px;
  }
  .wrapper {
    display: flex;
    height: 70px;
    margin: -30px 0 10px 0;

    .words {
      overflow: hidden;
    }
    @media screen and (max-width: 760px) {
      margin: -10px 0 0 0;
      height: 35px;
    }

    span {
      height: 100%;
      display: block;
      color: var(--green-text);
      font-size: 3.5rem;
      animation: toggle_words 10s infinite;
      padding-right: 2px;

      &:nth-child(even) {
        color: #ef84f5;
      }

      @media screen and (max-width: 760px) {
        font-size: 1.5rem;
        line-height: 150%;
      }
      @media screen and (max-width: 320px) {
        font-size: 1.25rem;
        line-height: 150%;
      }
    }
  }

  @keyframes toggle_words {
    10% {
      transform: translateY(-112%);
    }
    25% {
      transform: translateY(-100%);
    }
    35% {
      transform: translateY(-212%);
    }
    50% {
      transform: translateY(-200%);
    }
    60% {
      transform: translateY(-312%);
    }
    75% {
      transform: translateY(-300%);
    }
    80% {
      transform: translateY(-412%);
    }
    100% {
      transform: translateY(-402%);
    }
  }
  h2 {
    font-size: 3.5rem;
    line-height: 122.02%;
    letter-spacing: 0.019em;
    color: var(--white-text);

    @media screen and (max-width: 760px) {
      font-size: 1.5rem;
      line-height: 150%;
    }
    @media screen and (max-width: 320px) {
      font-size: 1.25rem;
      line-height: 150%;
    }
  }
  .paragraph {
    font-family: "Inter";
    color: var(--white-text);
    font-size: 0.8rem;
    font-weight: 400;
    line-height: 25px;
    max-width: 450px;
    letter-spacing: 0.02em;
    @media screen and (max-width: 760px) {
      font-size: 0.7rem;
    }
  }
  .button__wrapper {
    display: flex;
    gap: 20px;
    padding: 10px 0;
    @media screen and (max-width: 760px) {
      flex-direction: column;
      column-gap: 20px;
      justify-content: center;
      text-align: center;
      align-items: center;
    }
  }
  .hero__container {
    display: flex;
    width: 100%;
    padding-top: 80px;
    @media screen and (max-width: 760px) {
      width: 100%;
      padding: 0 20px;
      flex-direction: column;
    }
  }
  .section__left {
    flex: 0.6;
    @media screen and (max-width: 760px) {
      flex: 1;
    }
  }
  .section__right {
    width: 100%;
    flex: 0.4;
    align-items: center;
    .image__wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding-top: 20px;
      position: relative;
      img {
        object-fit: contain;
        border-radius: 5px;
      }
    }
    .active__image__info {
      justify-content: center;
      display: flex;
      align-items: center;
      text-align: center;
      flex-direction: column;
      padding: 15px 0;
      h2 {
        font-size: 1rem;
      }
      .paragraph {
        margin-top: -10px;
        color: rgba(255, 255, 255, 0.5);
      }
    }
    @media screen and (max-width: 760px) {
      flex-direction: column;
      flex: 1;
    }
  }
  .image_wrapper {
    position: relative;
    top: -30px;
    transform: translate(10px);
    @media screen and (max-width: 760px) {
      top: 10px;
      margin-bottom: 30px;
    }
  }
  .img-area {
    height: 300px;
    width: 350px;
    position: relative;
    box-shadow: 2px 2px 2px 5px rgba(0, 0, 0, 0.3);
    border: 2px solid #fff;
    background-image: url("/images/1.jpg");

    @media screen and (max-width: 760px) {
      width: 250px;
      height: 250px;
    }
  }
  .img-area:before {
    content: "";
    height: 300px;
    width: 350px;
    background: brown;
    z-index: -1;
    border: 5px solid #fff;
    position: absolute;
    top: 0;
    left: -10px;
    box-shadow: 2px 2px 2px 5px rgba(0, 0, 0, 0.3);
    transform: rotate(-5deg);
    backface-visibility: hidden;
    @media screen and (max-width: 760px) {
      width: 100%;
      height: 100%;
      transform: rotate(-10deg);
    }
  }
  .img-area:after {
    content: "";
    height: 300px;
    width: 350px;
    background: green;
    z-index: -1;
    border: 5px solid #fff;
    position: absolute;
    top: 0;
    left: -10px;
    box-shadow: 2px 2px 2px 5px rgba(0, 0, 0, 0.3);
    transform: rotate(4deg);
    backface-visibility: hidden;
    @media screen and (max-width: 760px) {
      width: 100%;
      height: 100%;
      background-size: contain;
      transform: rotate(10deg);
    }
  }
  .button__ {
    position: relative;
    top: -60px;

    @media screen and (max-width: 760px) {
      top: 0;
      padding-bottom: 30px;
      justify-content: center;
      display: flex;
      text-align: center;
      align-items: center;

      .first {
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      }
      .last {
        border: 2px solid #fff;
      }
    }
  }
`;
