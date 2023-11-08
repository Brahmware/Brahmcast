import { Box, BoxProps, styled } from '@mui/material';
import React from 'react';
import OurServices from './OurServices';
import CtActions from './CtActions';
import { UI } from '@/utils/consts';


interface ActionCenterProps extends BoxProps {
  children?: React.ReactNode;
};

const ActionCenter: React.FC<ActionCenterProps> = (props) => {
  return (
    <Box {...props}>
      <OurServices />
      <CtActions />
    </Box>
  )
};

export default styled(ActionCenter)(({ theme }) => ({
  width: `calc(${UI.controlWindowWidth} - ${theme.spacing(2)})`,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
}));