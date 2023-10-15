import BrahmcastFullLogo from '@/icons/logo/BrahmcastFullLogo';
import { alpha, styled } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import ActionCenter from './ActionCenter';

const StyledLink = styled(Link)(({ theme }) => ({
  minWidth: '18rem',
  width: '18rem',
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
      <StyledLink href="/">
        <BrahmcastFullLogo />
      </StyledLink>
      <ActionCenter />
    </nav>
  )
};

export default styled(Navigation)(({ theme }) => ({
  position: 'sticky',
  top: 0,
  left: 0,
  right: 0,
  width: "100%",
  height: "6rem",
  background: `
    linear-gradient(
      180deg,
      ${theme.palette.background.default} 65%,
      ${alpha(theme.palette.background.default, 0)} 100%
    )
  `,
  padding: `0 ${theme.spacing(2)}`,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
}));