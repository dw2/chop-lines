declare interface ChopLinesProps {
  lines?: number;
  lineHeight?: number;
  maxHeight?: number;
  background?: string;
  ellipsis?: React.ReactNode;
  children: React.ReactNode;
}

declare interface WrapperProps {
  lineHeight: string;
  maxHeight: string;
  overflow: string;
  children: React.ReactNode;
}

declare interface AutoSizerProps {
  children: React.ReactNode;
  forwardedRef: React.RefObject<HTMLDivElement>;
}

declare interface EllipsisProps {
  children: React.ReactNode;
}
