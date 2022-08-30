import styled, { createGlobalStyle } from "styled-components";
interface ISection {
  padding?: string;
}
const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  -webkit-tap-highlight-color:rgba(0,0,0,0) !important;
}

:root{
--white-bg:#ffffff;
--white-text:#ffffff;
--green-text:#2EE09A;
--blue-text:#15265C;
--purple-text:#EF84F5;
--black-bg:#0E1135;
--btn-graidient:linear-gradient(97.86deg, #2EE09A -38.38%, #9747FF 71.88%);
--input-bg:rgba(249, 249, 249, 0.5);
}

body {
  color:var(--white-text);
  font-size:16px;
  font-family:'Kinn','Poppins','Inter','Roboto',sans-serif ;
  }
a{
  text-decoration: none;
  color:#ffffff
}
h1,h2{
  font-family:'Kinn' ;
}
p{
  font-family:'Inter' ;
  color:var(--white-text)
}
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.05);
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.15);
}
`;

export const LayoutWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  background: url("/images/background.jpg") no-repeat;
  background-position: top right;
  background-size: cover;
  position: relative;
  overflow: hidden;
  .container {
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.03), rgba(0, 0, 0, 0.7));
    width: 100%;
    height: 600px;
    position: absolute;
    bottom: 0;
  }
  @media screen and (max-width: 760px) {
    background: url("/images/mobile.jpg") no-repeat;
    background-size: cover;
  }
`;

export const Section = styled.section<ISection>`
  padding: ${props => (props.padding ? props.padding : "")};
`;
export const ModalWrapper = styled.div``;

export default GlobalStyle;
