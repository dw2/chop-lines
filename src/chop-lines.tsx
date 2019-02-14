import React, { Component } from 'react';
import window from 'global';
import debounce from 'lodash.debounce';
import { Wrapper, AutoSizer, Ellipsis } from './styled-components';
import { ChopLinesProps, ChopLinesState } from './types';

class ChopLines extends Component<ChopLinesProps, ChopLinesState> {
  autoSizer?: HTMLElement;
  state = { height: 0 };

  onResize = debounce(() => {
    window.requestAnimationFrame(this.measureAutoSizer);
  }, 50);

  componentDidMount() {
    this.measureAutoSizer();
    window.addEventListener('resize', this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  get doesOverflow() {
    const { lineHeight, lines } = this.props;
    const { height } = this.state;

    return height > lineHeight * lines;
  }

  setAutoSizerRef = (autoSizer: HTMLElement) => {
    this.autoSizer = autoSizer;
  }

  measureAutoSizer = () => {
    if (!this.autoSizer) return;

    const dimensions = this.autoSizer.getBoundingClientRect();
    const { height } = dimensions;

    if (height === this.state.height) return;
    this.setState({ height });
  }

  render() {
    const {
      lines,
      lineHeight,
      children,
      ellipsis = '…',
      background = '#ffffff',
      ...rest
    } = this.props;
    const maxHeight = this.doesOverflow ? `${lineHeight * lines}px` : 'auto';
    const overflow = this.doesOverflow ? 'hidden' : 'auto';
    const lineHeightPx = `${lineHeight}px`;

    return (
      // @ts-ignore
      <Wrapper
        css={{ lineHeight: lineHeightPx, maxHeight, overflow }}
        {...rest}
      >
        <AutoSizer ref={this.setAutoSizerRef} aria-hidden>
          {children}
        </AutoSizer>
        {children}
        {this.doesOverflow && (
          <Ellipsis
            background={background}
            lineHeight={lineHeightPx}
          >
            {ellipsis}
          </Ellipsis>
        )}
      </Wrapper>
    );
  }
}

export default ChopLines;
