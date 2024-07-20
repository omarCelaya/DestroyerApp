import { keyframes } from '@mui/material'

export const slideInFromBottom = keyframes`
0% {
  transform: translateY(100%);
  opacity: 0;
}
100% {
  transform: translateY(0);
  opacity: 1;
}
`;