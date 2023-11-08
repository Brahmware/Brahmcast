import BrahmcastFullLogo from '@/icons/logo/BrahmcastFullLogo';
import { Box, alpha, styled } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import ActionCenter from './ActionCenter';
import { UI } from '@/utils/consts';

const NavWrapper = styled(Box)(({ theme }) => ({
  height: '100%',
  width: '100%',
  maxWidth: theme.breakpoints.values.xl,
  margin: '0 auto',
  padding: `0 ${theme.spacing(2)}`,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

const StyledLink = styled(Link)(({ theme }) => ({
  minWidth: '16rem',
  width: '16rem',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: theme.spacing(2),
}));

interface NavigationProps {
  children?: React.ReactNode;
};

const Navigation: React.FC<NavigationProps> = (props) => {
  return (
    <nav {...props}>
      <NavWrapper>
        <StyledLink href="/">
          <BrahmcastFullLogo />
        </StyledLink>
        <ActionCenter />
      </NavWrapper>
    </nav>
  )
};

export default styled(Navigation)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  width: "100%",
  height: UI.headerHeight,
  background: UI.gradientWhite(180),
}));