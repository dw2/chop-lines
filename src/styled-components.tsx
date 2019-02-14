import styled, { css } from 'styled-components';
import { EllipsisProps } from './types';

export const Wrapper = styled.div`
  position: relative;
`;

export const AutoSizer = styled.div`
  opacity: 0;
  pointer-events: none;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  visibility: hidden;
  z-index: -1;
`;

export const Ellipsis = styled.div`
  bottom: 0;
  line-height: inherit;
  position: absolute;
  right: 0;
  user-select: none;

  :before {
    bottom: 0;
    content: '';
    position: absolute;
    right: 100%;
    top: 0;
    width: ${({ lineHeight }: EllipsisProps) => lineHeight};
  }

  ${({ background }: EllipsisProps) => css`
    background: ${background};

    :before {
      background: linear-gradient(to right, transparent, ${background});
    }
  `};
`;
