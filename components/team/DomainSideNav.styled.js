import styled from "styled-components";
import { motion } from "framer-motion";
import { devices } from "@/constants/theme";

export const DomainSideNavContainer = styled(motion.div)`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media screen and (${devices.lg}) {
    display: none;
  }
`;

export const DomainNavButton = styled.button`
  padding: 0.75rem 1rem;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 999px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ theme, isActive }) => (isActive ? theme.colors.textPrimary : "#666")};
  transform: ${({ isActive }) => (isActive ? "scale(1.1)" : "scale(1)")};
  opacity: ${({ isActive }) => (isActive ? 1 : 0.8)};

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.2);
    opacity: 1;
  }

  @media screen and (${devices.xl}) {
    padding: 0.625rem 0.875rem;
    font-size: 0.7rem;
  }
`;

