import styled from "styled-components";

export const LearnMoreWrapper = styled.section`
  padding: 80px 0;

  .icon {
    font-size: 1.6rem !important;
    color: #fff;
    font-weight: bold !important;
  }

  .box {
    align-items: center;
    justify-content: center;
    height: 45px;
    width: 45px;
    background-color: rgba(255, 255, 255, 0.3);
    display: flex;
    border-radius: 50%;
    transition: all 2000ms ease-out;
    &:hover {
      background: var(--blue-text);
    }
  }
  .Learn__more {
    line-height: 39px;
    font-family: "Inter";
    padding: 20px 0;

    h1 {
      color: #fff;
      font-family: "Inter";
      padding: 30px 0 10px 0;
    }
    .content {
      margin-left: 30px;
      max-width: 600px;
      line-height: 40px;
    }
  }

  @media screen and (max-width: 760px) {
    width: 100%;
    padding: 30px 20px;

    h1 {
      font-size: 1.4rem;
      line-height: 130%;
    }
    .content {
      font-size: 0.8rem;
      max-width: 100%;
    }
  }
`;
