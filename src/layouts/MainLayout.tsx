import Navigation from '@/containers/Navigation';
import { styled } from '@mui/material';
import React from 'react';

interface MainLayoutProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children, ...props }) => {
  return (
    <main {...props} >
      <Navigation />
      {children}
    </main>
  )
};

export default styled(MainLayout)(({ theme }) => ({
  width: '100%',
  '@supports (height: 100dvh)': {
    height: '100dvh',
  },
}));