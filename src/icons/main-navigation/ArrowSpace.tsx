import React from 'react';
import { MainNavigationIconProps } from '@/interfaces/SVGProps';
import svgCommonProps from '@/utils/svgCommonProps';
import { styled } from '@mui/material';

const ArrowSpace: React.FC<MainNavigationIconProps> = (props) => {
  return (
    <svg
      {...svgCommonProps}
      data-name='Arrow Space Icon'
      width="31.214"
      height="31.19126"
      viewBox="0 0 31.214 31.19126"
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
        id="space"
        className="logenjuice"
        d="M23.08,15.133v3.79H7.92v-3.79a1.2635,1.2635,0,0,0-2.527,0v5.054A1.267,1.267,0,0,0,6.656,21.45H24.344a1.267,1.267,0,0,0,1.263-1.263V15.133a1.2635,1.2635,0,0,0-2.527,0Z"
      />
    </svg>
  )
};

export default styled(ArrowSpace)(({ theme }) => ({
  height: "100%",
  width: "100%",

  '& .logenjuice': {
    stroke: '#606161',
  },
}));