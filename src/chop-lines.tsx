/// <reference path="index.d.ts" />
import React, { Component } from "react";
import debounce from "lodash.debounce";
import { Wrapper, AutoSizer, Ellipsis } from "./components";

class ChopLines extends Component<ChopLinesProps, ChopLinesState> {
  autoSizer?: HTMLElement;
  state = { height: 0 };

  onResize = debounce(() => {
    this.window.requestAnimationFrame(this.measureAutoSizer);
  }, 50);

  componentDidMount() {
    this.measureAutoSizer();
    this.window.addEventListener("resize", this.onResize);
  }

  componentWillUnmount() {
    this.window.removeEventListener("resize", this.onResize);
  }

  get window() {
    /* istanbul ignore next */
    if (window) return window;
    /* istanbul ignore next */
    // @ts-ignore
    if (typeof global !== "undefined" && global.window) return global.window;
    /* istanbul ignore next */
    return {
      requestAnimationFrame: () => {},
      addEventListener: () => {},
      removeEventListener: () => {}
    };
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
