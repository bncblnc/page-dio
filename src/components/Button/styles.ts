import styled, { css } from "styled-components";
import { IButtonStyled } from "./types";

export const ButtonContainer = styled.button<IButtonStyled>`
  background: ${({ variant }) =>
    variant === "primary" ? "#565656" : "#e4105d"};
  border: none;
  border-radius: 22px;
  position: relative;

  color: #ffffff;
  padding: 5px 12px;
  min-width: 120px;
  width: 100%;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    opacity: 0.85;
  }

  ${({ variant }) =>
    variant !== "primary" &&
    css`
      min-width: 167px;
      height: 33px;

      &::after {
        content: "";
        position: absolute;
        border: 1px solid #e4105d;
        top: -5px;
        left: -6px;
        width: calc(100% + 10px);
        height: calc(100% + 10px);
        border-radius: 22px;
        transition: all 0.2s;
      }

      &:hover::after {
        width: calc(100% + 8px);
        height: calc(100% + 7px);
        top: -4px;
        left: -5px;
      }
    `}
`;
