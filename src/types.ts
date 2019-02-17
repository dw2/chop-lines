type Children = ReactNode | ReactElement<any>;

export interface ChopLinesProps {
  lines?: number;
  lineHeight?: number;
  maxHeight?: number;
  background?: string;
  ellipsis?: Children;
  children: Children;
}

export interface ChopLinesState {
  height: number;
}

export interface WrapperProps {
  lineHeight: string;
  maxHeight: string;
  overflow: string;
  children: Children;
}

export interface AutoSizerProps {
  forwardedRef: (autoSizer: HTMLElement) => void;
  children: Children;
}

export interface EllipsisProps {
  children: Children;
}
