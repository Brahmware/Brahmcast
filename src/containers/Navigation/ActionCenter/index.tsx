import { Box, BoxProps, styled } from '@mui/material';
import React from 'react';
import OurServices from './OurServices';
import CtActions from './CtActions';


interface ActionCenterProps extends BoxProps {
  children?: React.ReactNode;
};

const ActionCenter: React.FC<ActionCenterProps> = (props) => {
  return (
    <Box
      {...props}
    >
      <OurServices />
      <CtActions />
    </Box>
  )
};

export default styled(ActionCenter)({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'end',
  alignItems: 'center',
});