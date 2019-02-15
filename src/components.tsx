import * as React from 'react';
import { WrapperProps, AutoSizerProps, EllipsisProps } from './types';

export const Wrapper = ({
  lineHeight,
  maxHeight,
  overflow,
  children,
  ...rest
}: WrapperProps) => (
  <div
    {...rest}
    style={{
      position: 'relative',
      lineHeight,
      maxHeight,
      overflow,
    }}
  >
    {children}
  </div>
);

export const AutoSizer = ({ forwardedRef, children }: AutoSizerProps) => (
  <div
    ref={forwardedRef}
    style={{
      opacity: 0,
      pointerEvents: 'none',
      left: 0,
      position: 'absolute',
      right: 0,
      top: 0,
      visibility: 'hidden',
      zIndex: -1,
    }}
  >
    {children}
  </div>
);

export const Ellipsis = ({ children }: EllipsisProps) => (
  <div
    style={{
      bottom: 0,
      lineHeight: 'inherit',
      position: 'absolute',
      right: 0,
      userSelect: 'none',
    }}
  >
    {children}
  </div>
);
