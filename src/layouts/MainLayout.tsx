import Navigation from '@/containers/Navigation';
import { UI } from '@/utils/consts';
import { useWindowHeight } from '@/utils/hooks/useWindowHeight';
import { styled } from '@mui/material';
import React from 'react';

interface MainLayoutProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children, ...props }) => {
  const windowHeight = useWindowHeight();
  return (
    <main {...props} style={{ height: `calc(${windowHeight}px)` }}>
      <Navigation />
      {children}
    </main>
  )
};

export default styled(MainLayout)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  '@supports (height: 100dvh)': {
    height: '100dvh',
  },
}));