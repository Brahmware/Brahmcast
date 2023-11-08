import React from 'react';
import { MainNavigationIconProps } from '@/interfaces/SVGProps';
import svgCommonProps from '@/utils/svgCommonProps';
import { styled } from '@mui/material';

const ArrowUp: React.FC<MainNavigationIconProps> = (props) => {
  return (
    <svg
      {...svgCommonProps}
      data-name='Arrow Up Icon'
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
        d="M22.31055,14.5464,16.67078,8.90663a1.5001,1.5001,0,0,0-.49421-.32935L16.155,8.57057a1.46081,1.46081,0,0,0-1.09589-.00006l-.022.00683a1.4997,1.4997,0,0,0-.49268.32788L8.90332,14.5464a1.49984,1.49984,0,0,0,2.12109,2.12109L14.10693,13.585V21.25a1.50025,1.50025,0,0,0,3.00049,0V13.58546l3.082,3.082a1.49984,1.49984,0,0,0,2.1211-2.12109Z"
      />
    </svg>
  )
};

export default styled(ArrowUp)(({ theme }) => ({
  height: "100%",
  width: "100%",

  '& .logenjuice': {
    stroke: '#606161',
  },
}));