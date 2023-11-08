import React from 'react';
import { Box, BoxProps, Button, Tooltip, styled } from '@mui/material';
import Link from 'next/link';
import { ButtonProps } from '@/interfaces/ButtonProps';
import ourServices from './services';


const StyledLi = styled('li')(({ theme }) => ({
  margin: `0 ${theme.spacing(1.5)}`,

  '&:first-of-type': {
    marginLeft: theme.spacing(2),
  },

  '&:last-of-type': {
    marginRight: theme.spacing(2),
  },
}));

interface StyledLinkProps extends ButtonProps {
  children?: React.ReactNode;
  component?: React.ElementType;
  href?: string;
  disabled?: boolean;
};

const StyledLink = styled(Button)<StyledLinkProps>(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: 'none',
  margin: 0,
  padding: 0,
  minWidth: 'unset',
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));


interface OurServicesContainerProps extends BoxProps {
  children?: React.ReactNode;
};

const OurServicesContainer: React.FC<OurServicesContainerProps> = (props) => {
  return (
    <Box {...props}>
      {
        Object.entries(ourServices).map(([key, value]) => (
          <Tooltip key={key} title='Coming soon'>
            <StyledLi>
              <StyledLink
                disabled
                href={value.link}
                component={Link}
              >
                {key}
              </StyledLink>
            </StyledLi>
          </Tooltip>
        ))
      }
    </Box>
  )
};

export default styled(OurServicesContainer)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  listStyle: 'none',
  padding: 0,
  margin: 0,
}));