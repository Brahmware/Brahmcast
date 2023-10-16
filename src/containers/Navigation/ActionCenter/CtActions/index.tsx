import React from 'react';
import { Button, Tooltip, styled } from '@mui/material';

const StyledButton = styled(Button)(({ theme }) => ({
  minWidth: '6rem',
}));

const StyledLi = styled('li')(({ theme }) => ({
  listStyle: 'none',
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
      <Tooltip title='Coming soon'>
        <StyledLi>
          <StyledButton
            disabled
            variant='contained'
            color='primary'
          >
            Sign In
          </StyledButton>
        </StyledLi>
      </Tooltip>
    </ul>
  )
};

export default styled(CtActions)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: 0,
  margin: 0,
  marginLeft: theme.spacing(2),
}));