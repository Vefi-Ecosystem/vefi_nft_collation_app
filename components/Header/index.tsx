import React from 'react';
import { HeaderContainer } from './Header.style';
import { Container, Button, Image, NavLink } from '../index';
import Link from 'next/link';
import { FiMoreVertical } from 'react-icons/fi';
const Header = () => {
  return (
    <>
      <HeaderContainer>
        <Container>
          <div className="header__container">
            <div className="header__logo">
              <NavLink href="/">
                <Image
                  src="/images/logo.svg"
                  width="100%"
                  height="80px"
                  alt="logo"
                />
              </NavLink>
            </div>
            <div className="header__nav">
              <div className="nav__left">
                <Link href="/">Marketplace</Link>
                <Link href="/">Artist</Link>
                <Link href="/">Collections</Link>
              </div>
              <div className="nav__right mobile_">
                <NavLink href="/item">
                  <Button
                    label="+"
                    fontSize="1.8rem"
                    color="#fff"
                    bg="rgba(0,0,0,0.4)"
                    padding="10px"
                  />
                </NavLink>
                <FiMoreVertical className="btn" />
              </div>
            </div>
          </div>
        </Container>
      </HeaderContainer>
    </>
  );
};

export default Header;
