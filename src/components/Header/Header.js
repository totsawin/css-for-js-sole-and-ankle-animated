import React from 'react';
import styled from 'styled-components/macro';

import { QUERIES, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import VisuallyHidden from '../VisuallyHidden';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DesktopNav>
          <NavLink href="/sale">
            <NavLinkNormal>
              Sale
            </NavLinkNormal>
            <NavLinkBold>
              Sale
            </NavLinkBold>
          </NavLink>
          <NavLink href="/new"> 
            <NavLinkNormal>
              New&nbsp;Releases
            </NavLinkNormal>
            <NavLinkBold>
              New&nbsp;Releases
            </NavLinkBold>
          </NavLink>
          <NavLink href="/men">
            <NavLinkNormal>
              Men
            </NavLinkNormal>
            <NavLinkBold>
              Men
            </NavLinkBold>
          </NavLink>
          <NavLink href="/women">
            <NavLinkNormal>
              Women
            </NavLinkNormal>
            <NavLinkBold>
              Women
            </NavLinkBold>
          </NavLink>
          <NavLink href="/kids">
            <NavLinkNormal>
              Kids
            </NavLinkNormal>
            <NavLinkBold>
              Kids
            </NavLinkBold>
          </NavLink>
          <NavLink href="/collections">
            <NavLinkNormal>
              Collections
            </NavLinkNormal>
            <NavLinkBold>
              Collections
            </NavLinkBold>
          </NavLink>
        </DesktopNav>
        <MobileActions>
          <ShoppingBagButton>
            <Icon id="shopping-bag" />
            <VisuallyHidden>Open cart</VisuallyHidden>
          </ShoppingBagButton>
          <UnstyledButton>
            <Icon id="search" />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" />
            <VisuallyHidden>Open menu</VisuallyHidden>
          </UnstyledButton>
        </MobileActions>
        <Filler />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow: auto;

  @media ${QUERIES.tabletAndSmaller} {
    justify-content: space-between;
    align-items: center;
    border-top: 4px solid var(--color-gray-900);
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(1rem, 9.2vw - 4.5rem, 3.5rem);
  margin: 0px 48px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const MobileActions = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    gap: 32px;
    display: flex;
  }

  @media ${QUERIES.phoneAndSmaller} {
    gap: 16px;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    flex: revert;
  }
`;

const ShoppingBagButton = styled(UnstyledButton)`
  transform: translateX(-2px);
`;

const Filler = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const NavLink = styled.a`
  position: relative;
  overflow: hidden;
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Text = styled.div`
  transition: transform 400ms ease-out;
  transform: translateY(var(--transform-from));
  @media (prefers-reduced-motion: no-preference) {
    ${NavLink}:hover & {
      transform: translateY(var(--transform-to));
      transition: transform 200ms ease-out;
    }
  }
`;

const NavLinkNormal = styled(Text)`
  --transform-to: -100%;
  --transform-from: 0%;
`;

const NavLinkBold = styled(Text)`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  font-weight: ${WEIGHTS.bold};
  --transform-to: 0%;
  --transform-from: 100%;
`;


export default Header;
