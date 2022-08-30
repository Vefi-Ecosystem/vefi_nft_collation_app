import React from "react";
import { Container, Button, NavLink } from "../index";
import { Typography } from "antd";
import { Section } from "styles/Global.style";
import { HeroWrapper } from "./Hero.style";
const { Paragraph } = Typography;

const HeroSection = () => {
  return (
    <>
      <HeroWrapper>
        <Container>
          <Section>
            <div className="hero__container">
              <div className="section__left">
                <>
                  <h2>Discover &amp; Collect </h2>
                  <div className="wrapper">
                    <div className="words">
                      <span>Super Rare</span>
                      <span>Super Unique</span>
                      <span>Super Quality</span>
                      <span>Awesome Art</span>
                      <span>Super Rare</span>
                      <span>Super Rare</span>
                      <span>Super Rare</span>
                    </div>
                  </div>
                  <h2>Digital Artworks.</h2>
                  <Paragraph className="paragraph">
                    The largest NFT marketplace. Authentic and truly unique digital creation. Signed and issued by the
                    creator, made possible by blockchain technology.
                  </Paragraph>
                </>
              </div>
              <div className="section__right">
                <div className="image__wrapper">
                  <div className="image_wrapper">
                    <div className="img-area"></div>
                  </div>
                </div>
                <div className="active__image__info">
                  <Typography.Title level={2}>Featured Collection</Typography.Title>
                  <p className="paragraph">Art Blocks Factory</p>
                </div>
              </div>
            </div>
            <div className="button__">
              <div className="button__wrapper">
                <NavLink href="/item">
                  <Button
                    label="Whitelist collectiions"
                    bg="rgba(0,0,0,0.5)"
                    color="#fff"
                    borderRadius="30px"
                    className="first"
                  />
                </NavLink>
                <NavLink href="/learn-more">
                  <Button
                    label="Learn more"
                    bg="transparent"
                    color="#fff"
                    borderRadius="30px"
                    border="2px solid rgba(0,0,0,0.8)"
                    className="last"
                  />
                </NavLink>
              </div>
            </div>
          </Section>
        </Container>
      </HeroWrapper>
    </>
  );
};

export default HeroSection;
