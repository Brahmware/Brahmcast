import React from 'react';
import { MainNavigationIconProps } from '@/interfaces/SVGProps';
import svgCommonProps from '@/utils/svgCommonProps';
import { styled } from '@mui/material';

const ArrowEnter: React.FC<MainNavigationIconProps> = (props) => {
  return (
    <svg
      {...svgCommonProps}
      data-name='Arrow Enter Icon'
      width="37.2937"
      height="31.214"
      viewBox="0 0 37.2937 31.214"
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
        d="M15.60693,28.21388A12.60694,12.60694,0,1,1,27.7998,12.45839h3.09455a15.63725,15.63725,0,1,0-.29,7.42272H27.452A12.61633,12.61633,0,0,1,15.60693,28.21388Z"
      />
      <path
        id="arrow"
        className="logenjuice"
        d="M35.58234,4.19a1.71139,1.71139,0,0,0-1.71143,1.71137V12.747a1.71142,1.71142,0,0,1-1.71136,1.71143H15.74725l2.22486-2.20771a1.71839,1.71839,0,0,0-2.43018-2.43017l-5.13422,5.13415a1.76932,1.76932,0,0,0,0,2.43018L15.54193,22.519a1.7184,1.7184,0,1,0,2.43018-2.43017l-2.22486-2.20771h16.4123A5.13415,5.13415,0,0,0,37.2937,12.747V5.90138A1.71137,1.71137,0,0,0,35.58234,4.19Z"
      />
    </svg>
  )
};

export default styled(ArrowEnter)(({ theme }) => ({
  height: "100%",
  width: "100%",

  '& .logenjuice': {
    stroke: '#606161',
  },
}));