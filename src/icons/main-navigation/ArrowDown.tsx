import React from 'react';
import { MainNavigationIconProps } from '@/interfaces/SVGProps';
import svgCommonProps from '@/utils/svgCommonProps';
import { styled } from '@mui/material';

const ArrowDown: React.FC<MainNavigationIconProps> = (props) => {
  return (
    <svg
      {...svgCommonProps}
      data-name='Arrow Down Icon'
      width="31.214"
      height="31.214"
      viewBox="0 0 31.214 31.214"
      {...props}
    >
      <defs>
        <style>
          {`
            .logenjuice{fill:#606161;}
          `}
        </style>
      </defs>
      <path
        id="circle"
        className="logenjuice"
        d="M15.60693,31.21387A15.60694,15.60694,0,1,1,31.21387,15.60693,15.62458,15.62458,0,0,1,15.60693,31.21387ZM15.60693,3A12.60694,12.60694,0,1,0,28.21387,15.60693,12.621,12.621,0,0,0,15.60693,3Z"
      />
      <path
        id="arrow"
        className="logenjuice"
        d="M22.31055,14.5464a1.49946,1.49946,0,0,0-2.1211,0l-3.082,3.082V9.96388a1.50025,1.50025,0,0,0-3.00049,0v7.665L11.02441,14.5464a1.49984,1.49984,0,1,0-2.12109,2.12109l5.642,5.642a1.502,1.502,0,0,0,.4917.32691l.02264.007a1.45913,1.45913,0,0,0,1.09479,0l.02228-.00695a1.50041,1.50041,0,0,0,.49316-.32837l5.64063-5.64063A1.49946,1.49946,0,0,0,22.31055,14.5464Z"
      />
    </svg>
  )
};

export default styled(ArrowDown)(({ theme }) => ({
  height: "100%",
  width: "100%",

  '& .logenjuice': {
    stroke: '#606161',
  },
}));