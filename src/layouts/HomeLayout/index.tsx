import React from 'react';
import { Box, BoxProps, Divider, styled } from '@mui/material';
import MainWindowLayout from './MainWindowLayout';
import FeatureWindowLayout from './FeatureWindowLayout';
import DisplayControls from '@/components/DisplayControls';

interface HomeLayoutProps extends BoxProps {
  children: [React.ReactNode, React.ReactNode];
};

const HomeLayout: React.FC<HomeLayoutProps> = ({
  children, ...props
}) => {

  const mainWindow = children[0];
  const controlWindow = children[1];

  return (
    <Box {...props}>
      <MainWindowLayout>
        {mainWindow}
      </MainWindowLayout>
      <Divider flexItem orientation="vertical" />
      <FeatureWindowLayout>
        {controlWindow}
      </FeatureWindowLayout>
      <DisplayControls />
    </Box>
  )
};

export default styled(HomeLayout)(({ theme }) => ({
  zIndex: -1,
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  maxWidth: theme.breakpoints.values.xl,
  margin: '0 auto',
  backgroundColor: 'greenyellow'
}));