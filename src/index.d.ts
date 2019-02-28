declare interface ChopLinesProps {
  lines?: number;
  lineHeight?: number;
  maxHeight?: number;
  background?: string;
  ellipsis?: any;
  children: any;
}

declare interface ChopLinesState {
  height: number;
}

declare interface WrapperProps {
  lineHeight: string;
  maxHeight: string;
  overflow: string;
  children: any;
}

declare interface AutoSizerProps {
  forwardedRef: (autoSizer: HTMLElement) => void;
  children: any;
}

declare interface EllipsisProps {
  children: any;
}
