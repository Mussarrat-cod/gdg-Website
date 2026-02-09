import { devices } from "@/constants/theme";
import { keyframes, styled } from "styled-components";

const fadeOut = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scale(20);
  }
`;

const dotAnimation = keyframes`
  0% {
    transform: scale(0) translateX(0);
    opacity: 0;
  }
  30% {
    transform: scale(1) translateX(0);
    opacity: 1;
  }
  100% {
    transform: scale(1) translateX(0);
    opacity: 1;
  }
`;

const circularBufferAnimation = keyframes`
  0% {
    transform: rotate(0deg) translateX(40px) rotate(0deg) scale(1);
  }
  100% {
    transform: rotate(360deg) translateX(40px) rotate(-360deg) scale(1);
  }
`;

const transformAnimation = keyframes`
  0% {
    transform: rotate(0deg) translateX(40px) rotate(0deg) scale(1);
  }
  100% {
    transform: rotate(720deg) translateX(60px) rotate(-720deg) scale(1.5);
  }
`;

export const LoaderContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.bgPrimary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 300;
  position: fixed;
  top: 0;
  left: 0;
  animation: ${fadeOut} 0.7s ease-in-out 2.4s forwards;
`;

export const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0px;
  transform: translateX(0);
`;

export const Dot = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  position: absolute;
  animation: 
    ${dotAnimation} 0.6s ease-in-out ${({ delay }) => delay}s both,
    ${circularBufferAnimation} 1.5s linear 0.8s infinite,
    ${transformAnimation} 1s ease-in-out 2.3s forwards;
  transform-origin: center;
  
  ${({ position }) => {
    const delays = [0, 0.1, 0.2, 0.3];
    const bufferDelays = [0.8, 1.05, 1.3, 1.55];
    return `
      animation-delay: ${delays[position]}s, ${bufferDelays[position]}s, 2.3s;
    `;
  }}
`;
