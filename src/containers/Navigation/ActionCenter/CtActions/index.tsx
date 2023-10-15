import React from 'react';
import { Button, styled } from '@mui/material';

const StyledButton = styled(Button)(({ theme }) => ({
  minWidth: '8rem',
}));

const StyledLi = styled('li')(({ theme }) => ({
  listStyle: 'none',
  margin: '0 ' + theme.spacing(2),
  '&:last-of-type': {
    marginRight: 0,
  },
}));

interface CtActionsProps extends React.HTMLAttributes<HTMLUListElement> {
  children?: React.ReactNode;
};

const CtActions: React.FC<CtActionsProps> = (props) => {
  return (
    <ul {...props}>
      <StyledLi>
        <StyledButton
          variant='text'
          color='primary'
        >
          Sign Up
        </StyledButton>
      </StyledLi>
      <StyledLi>
        <StyledButton
          variant='contained'
          color='primary'
        >
          Login
        </StyledButton>
      </StyledLi>
    </ul>
  )
}

export default styled(CtActions)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: 0,
  margin: 0,
}));