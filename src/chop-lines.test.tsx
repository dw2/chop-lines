/// <reference path="index.d.ts" />
import * as React from "react";
import { render, cleanup, act } from "@testing-library/react";
import ChopLines from "./chop-lines";

const defualtBounds = { width: 420, top: 0, left: 0, bottom: 0, right: 0 };
const ellipsis = <a>Read More</a>;
let getBoundingClientRectSpy: any;

const mockBoundsForHeight = (height: number) => {
  getBoundingClientRectSpy = jest
    .spyOn(Element.prototype, "getBoundingClientRect")
    .mockImplementation(() => ({ ...defualtBounds, height }));
};

const setup = (props?: any) =>
  render(
    <ChopLines lines={1} lineHeight={16} children={<p>Test</p>} {...props} />
  );

describe("The ChopLines component", () => {
  afterEach(() => {
    if (getBoundingClientRectSpy) getBoundingClientRectSpy.mockRestore();
    cleanup();
  });

  it("should prevent overflow before content is measured", () => {
    const { container } = setup();
    expect(container.querySelector("div").style.overflow).toBe("hidden");
  });

  it("should render with the default ellipsis", () => {
    mockBoundsForHeight(32);
    const { getByText } = setup();
    expect(getByText("…")).toBeDefined();
  });

  it("should render a given ellipsis when content exceeds maxium lines", () => {
    mockBoundsForHeight(32);
    const { getByText } = setup({
      ellipsis,
      children: (
        <p>
          Too many <br /> lines
        </p>
      )
    });
    expect(getByText("Read More")).toBeDefined();
  });

  it("should not render a given ellipsis when content does not exceed maxium lines", () => {
    mockBoundsForHeight(16);
    const { container, queryByText } = setup({
      ellipsis,
      children: <p>Just one line here.</p>
    });
    expect(queryByText("Read More")).toBeNull();
    expect(container.querySelector("div").style.overflow).toBe("unset");
  });

  it("should render a given ellipsis when content exceeds max height", () => {
    mockBoundsForHeight(40);
    const { getByText } = setup({
      ellipsis,
      lines: undefined,
      lineHeight: undefined,
      maxHeight: 20,
      children: (
        <p>
          Too many <br /> lines
        </p>
      )
    });
    expect(getByText("Read More")).toBeDefined();
  });

  it("should not render a given ellipsis when content does not exceed max height", () => {
    mockBoundsForHeight(20);
    const { queryByText } = setup({
      ellipsis,
      lines: undefined,
      lineHeight: undefined,
      maxHeight: 40,
      children: (
        <p>
          Too many <br /> lines
        </p>
      )
    });
    expect(queryByText("Read More")).toBeNull();
  });

  it("should measure the autoSizer when the window resizes", done => {
    mockBoundsForHeight(20);
    setup({ ellipsis });
    expect(getBoundingClientRectSpy).toHaveBeenCalledTimes(1);
    act(() => {
      window.dispatchEvent(new Event("resize"));
    });
    setTimeout(() => {
      expect(getBoundingClientRectSpy).toHaveBeenCalledTimes(2);
      done();
    }, 100);
  });
});
