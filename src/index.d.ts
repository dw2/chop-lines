declare interface ChopLinesProps {
  lines?: number;
  lineHeight?: number;
  maxHeight?: number;
  background?: string;
  ellipsis?: any;
  children: any;
}

declare interface WrapperProps {
  lineHeight: string;
  maxHeight: string;
  overflow: string;
  children: any;
}

declare interface AutoSizerProps {
  children: any;
  forwardedRef: React.RefObject<HTMLDivElement>;
}

declare interface EllipsisProps {
  children: any;
}
