import * as React from "react";

export interface ChopLinesProps {
  lines?: number;
  lineHeight?: number;
  maxHeight?: number;
  background?: string;
  ellipsis?: React.ReactNode;
  children: React.ReactNode;
}

export interface WrapperProps {
  lineHeight: string;
  maxHeight: string;
  overflow: string;
  children: React.ReactNode;
}

declare interface AutoSizerProps {
  children: React.ReactNode;
  forwardedRef: React.RefObject<HTMLDivElement>;
}

export interface EllipsisProps {
  children: React.ReactNode;
}

declare class ChopLines extends React.Component<ChopLinesProps, any> {}

export as namespace ChopLines;

export default ChopLines;
