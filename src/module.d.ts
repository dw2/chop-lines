export as namespace ChopLines;

export interface ChopLinesProps {
  lines?: number;
  lineHeight?: number;
  maxHeight?: number;
  background?: string;
  ellipsis?: React.ReactNode;
  children: React.ReactNode;
}
