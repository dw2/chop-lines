import React, { Component } from "react";
import window from "global";
import debounce from "lodash.debounce";
import { Wrapper, AutoSizer, Ellipsis } from "./components";
import { ChopLinesProps, ChopLinesState } from "./types";

class ChopLines extends Component<ChopLinesProps, ChopLinesState> {
  autoSizer?: HTMLElement;
  state = { height: 0 };

  onResize = debounce(() => {
    window.requestAnimationFrame(this.measureAutoSizer);
  }, 50);

  componentDidMount() {
    this.measureAutoSizer();
    window.addEventListener("resize", this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
  }

  get doesOverflow() {
    const { lineHeight, lines, maxHeight } = this.props;
    const { height } = this.state;

    return height > (maxHeight || lineHeight * lines);
  }

  setAutoSizerRef = (autoSizer: HTMLElement) => {
    this.autoSizer = autoSizer;
  };

  measureAutoSizer = () => {
    if (!this.autoSizer) return;

    const dimensions = this.autoSizer.getBoundingClientRect();
    const { height } = dimensions;

    if (height === this.state.height) return;
    this.setState({ height });
  };

  render() {
    const {
      lines = 0,
      lineHeight = 0,
      maxHeight = 0,
      ellipsis = "…",
      children,
      ...rest
    } = this.props;
    const maxHeightPx = `${maxHeight || lineHeight * lines}px`;

    return (
      <Wrapper
        {...rest}
        lineHeight={maxHeight ? "unset" : `${lineHeight}px`}
        maxHeight={this.doesOverflow ? maxHeightPx : "unset"}
        overflow={this.doesOverflow ? "hidden" : "unset"}
      >
        <AutoSizer forwardedRef={this.setAutoSizerRef} aria-hidden>
          {children}
        </AutoSizer>
        {children}
        {this.doesOverflow && <Ellipsis>{ellipsis}</Ellipsis>}
      </Wrapper>
    );
  }
}

export default ChopLines;
