import Button from "components/Button";
import { Container, Image, NavLink } from "../index";
import Link from "next/link";
import React from "react";
import { FooterWrapper } from "./Footer.style";
import { FiArrowRight, FiFacebook, FiTwitter, FiInstagram, FiYoutube } from "react-icons/fi";
import { FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <Container>
          <div className="footer__container">
            <div className="footer__left">
              <div className="logo">
                <NavLink href="/">
                  <Image src="/images/logo.svg" width="100%" height="80px" alt="logo" />
                </NavLink>
              </div>
            </div>
            <div className="footer__nav">
              <div className="footer__right">
                <div className="footer__links">
                  <a href="https://vefinetwork.org">Ecosystem</a>
                  <a href="#">Partners</a>
                  <a href="https://brisescan.com/token/0xd6447d2fa919811c41a064bdbdab1e281f8de9b2">Token</a>
                </div>
              </div>
              <div className="footer__scroll">
                <Button bg="transparent" icon={<FiArrowRight />} color="#fff" fontSize="1rem" />
              </div>
            </div>
          </div>
          <div className="footer__bottom">
            <div className="social__icons">
              <div className="button">
                <a href="#">
                  <Button icon={<FaDiscord />} bg="transparent" fontSize="0.9rem" color="var(--white-text)" />
                </a>
              </div>
              <div className="button">
                <a href="#">
                  <Button icon={<FiFacebook />} bg="transparent" fontSize="0.9rem" color="var(--white-text)" />
                </a>
              </div>
              <div className="button">
                <a href="#">
                  <Button icon={<FiTwitter />} bg="transparent" fontSize="0.9rem" color="var(--white-text)" />
                </a>
              </div>
              <div className="button">
                <a href="#">
                  <Button icon={<FiInstagram />} bg="transparent" fontSize="0.9rem" color="var(--white-text)" />
                </a>
              </div>
              <div className="button">
                <a href="#">
                  <Button icon={<FiYoutube />} bg="transparent" fontSize="0.9rem" color="var(--white-text)" />
                </a>
              </div>
            </div>
            <p className="paragraph">&copy; 2022 Vefi Technology. All Right Reserved</p>
          </div>
        </Container>
      </FooterWrapper>
    </>
  );
};

export default Footer;
