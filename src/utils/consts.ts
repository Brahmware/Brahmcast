import theme from "@/theme";
import { alpha } from "@mui/material";

export const UI = {
  headerHeight: '6rem',
  controlWindowWidth: '32rem',
  gradientWhite: (deg: number) => `
    linear-gradient(
      ${deg}deg,
      ${theme.palette.background.default} 40%,
      ${alpha(theme.palette.background.default, 0.75)} 60%,
      ${alpha(theme.palette.background.default, 0.33)} 80%,
      ${alpha(theme.palette.background.default, 0)} 100%
    )
  `,
};

export const SYSTEM = {};