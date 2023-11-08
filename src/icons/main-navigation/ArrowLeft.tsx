import React from 'react';
import { MainNavigationIconProps } from '@/interfaces/SVGProps';
import svgCommonProps from '@/utils/svgCommonProps';
import { styled } from '@mui/material';

const ArrowLeft: React.FC<MainNavigationIconProps> = (props) => {
  return (
    <svg
      {...svgCommonProps}
      data-name='Arrow Left Icon'
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
        d="M21.25,14.107H13.585l3.08252-3.08252a1.49984,1.49984,0,0,0-2.12109-2.1211L8.90521,14.54451a1.49988,1.49988,0,0,0-.32782.49249l-.007.02234a1.46069,1.46069,0,0,0,.00007,1.09552l.00683.022a1.50074,1.50074,0,0,0,.32929.494l5.63977,5.63977a1.49984,1.49984,0,0,0,2.12109-2.1211l-3.082-3.082H21.25a1.50024,1.50024,0,0,0,0-3.00048Z"
      />
    </svg>
  )
};

export default styled(ArrowLeft)(({ theme }) => ({
  height: "100%",
  width: "100%",

  '& .logenjuice': {
    stroke: '#606161',
  },
}));