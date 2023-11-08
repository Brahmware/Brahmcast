import React from 'react';
import { Box, BoxProps, styled } from '@mui/material';
import { UI } from '@/utils/consts';
import ControlUp from './ControlUp';
import ControlDown from './ControlDown';
import ControlEnter from './ControlEnter';
import ControlSpace from './ControlSpace';
import ControlRight from './ControlRight';
import ControlLeft from './ControlLeft';

const ControlsWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  paddingRight: UI.controlWindowWidth,
}));

interface DisplayControlProps extends BoxProps {
  children?: React.ReactNode;
};

const DisplayControls: React.FC<DisplayControlProps> = (props) => {
  return (
    <Box {...props}>
      <ControlsWrapper>
        <ControlLeft />
        <ControlRight />
        <ControlUp />
        <ControlDown />
        <ControlEnter />
        <ControlSpace />
      </ControlsWrapper>
    </Box>
  )
};

export default styled(DisplayControls)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  height: UI.headerHeight,
  background: UI.gradientWhite(0),
  zIndex: 1,
  borderTop: `1px solid red`,
  padding: `0 ${theme.spacing(2)}`,
}));