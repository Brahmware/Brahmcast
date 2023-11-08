import { Box, BoxProps, styled } from '@mui/material';
import React from 'react';

interface DisplayFeatureProps extends BoxProps {
  children?: React.ReactNode;
};

const DisplayFeature: React.FC<DisplayFeatureProps> = (props) => {
  return (
    <Box {...props}>
      Display Feature
    </Box>
  )
};

export default styled(DisplayFeature)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflowY: 'auto',
}));