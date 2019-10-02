/// <reference path="index.d.ts" />
import React, { useRef, useState, useEffect } from "react";
import debounce from "lodash.debounce";
import { Wrapper, AutoSizer, Ellipsis } from "./components";

const ChopLines = ({
  // use lines and lineHeight together or use maxHeight alone
  lines = 0,
  lineHeight = 0,
  maxHeight = 0,
  ellipsis = "…",
  children,
  ...rest
}: ChopLinesProps) => {
  const autoSizerRef = useRef<HTMLDivElement>(null);
  const [measuredHeight, setMeasuredHeight] = useState(0);
  const maxHeightPx = `${maxHeight || lineHeight * lines}px`;
  const doesOverflow = measuredHeight > (maxHeight || lineHeight * lines);

  const measureAutoSizer = () => {
    const { height } = autoSizerRef.current.getBoundingClientRect();
    setMeasuredHeight(height);
  };

  const handleResize = debounce(() => {
    window.requestAnimationFrame(measureAutoSizer);
  }, 50);

  useEffect(() => {
    measureAutoSizer();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Wrapper
      {...rest}
      lineHeight={maxHeight ? "unset" : `${lineHeight}px`}
      maxHeight={!measuredHeight || doesOverflow ? maxHeightPx : "unset"}
      overflow={!measuredHeight || doesOverflow ? "hidden" : "unset"}
    >
      <AutoSizer forwardedRef={autoSizerRef} aria-hidden>
        {children}
      </AutoSizer>
      {children}
      {doesOverflow && <Ellipsis>{ellipsis}</Ellipsis>}
    </Wrapper>
  );
};

export default ChopLines;
