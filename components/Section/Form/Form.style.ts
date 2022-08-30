import styled from "styled-components";

export const FormWrapper = styled.section`
  width: 100%;
  padding: 40px 0;
  .ant-select-suffix {
    display: none !important ;
  }
  .form__container {
    width: 500px;
    .file {
      display: none;
    }
    .upload {
      border: 2px dashed #fff;
      padding: 80px;
      display: flex;
      width: 50%;
      align-items: center;
      text-align: center;
      justify-content: center;
      border-radius: 10px;
      cursor: pointer;

      .upload__img {
        font-size: 4rem;
        font-weight: 600;
      }
      @media screen and (max-width: 760px) {
        width: 100%;
      }
    }
    .form {
      padding: 20px 0;
    }
    @media screen and (max-width: 760px) {
      width: 100%;
    }
  }
  .form__wrapper {
    flex: 0.6;
  }

  .form__control {
    width: 100%;
    background: var(--input-bg);
    border: none;
    padding: 15px 20px;
    border-radius: 10px;
    outline: 0px;
    letter-spacing: 0.1rem;
  }
  h3 {
    font-family: "Inter" !important;
    color: var(--white-text);
    font-size: 0.9rem;
  }
  p {
    color: var(--input-bg);
    font-size: 0.75rem;
    padding-bottom: 8px;
    text-transform: capitalize;
  }
  .red {
    color: red;
    font-weight: 600;
  }
  .ant-select {
    width: 100% !important ;
  }
  .ant-select-selector {
    background: var(--input-bg) !important;
    border-radius: 10px !important;
    border: none !important ;
    height: auto !important;
    padding: 15px 20px !important;
  }
`;
