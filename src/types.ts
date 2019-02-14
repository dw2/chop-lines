export interface ChopLinesProps {
  lines: number;
  lineHeight: number;
  children: ReactNode | ReactElement<any>;
  ellipsis?: ReactNode | ReactElement<any>;
  background?: string;
}

export interface ChopLinesState {
  height: number;
}

export interface EllipsisProps {
  lineHeight: string;
  background: string;
}
