import { UI } from '@/utils/consts';
import { styled } from '@mui/material';
import React from 'react';

interface MainWindowLayoutProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
};

const MainWindowLayout: React.FC<MainWindowLayoutProps> = ({
  children,
  ...props
}) => {
  return (
    <section {...props} >
      {children}
    </section>
  )
};

export default styled(MainWindowLayout)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: `${UI.headerHeight} ${theme.spacing(2)}`,
}));