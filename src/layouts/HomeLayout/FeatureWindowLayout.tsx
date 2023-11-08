import { UI } from '@/utils/consts';
import { styled } from '@mui/material';
import React from 'react';

interface FeaturelWindowLayoutProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
};

const FeaturelWindowLayout: React.FC<FeaturelWindowLayoutProps> = ({ 
  children, 
  ...props 
}) => {
  return (
    <section {...props} >
      {children}
    </section>
  )
};

export default styled(FeaturelWindowLayout) (({ theme }) => ({
  position: 'relative',
  height: '100%',
  minWidth: UI.controlWindowWidth,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: `${UI.headerHeight} ${theme.spacing(2)}`,
}));