import Navigation from '@/containers/Navigation';
import React from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <main>
      <Navigation />
      {children}
    </main>
  )
};

export default MainLayout;