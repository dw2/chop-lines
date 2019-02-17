import * as React from "react";
import { mount } from "enzyme";
import ChopLines from "./chop-lines";

describe("The ChopLines component", () => {
  let wrapper;
  const ellipsis = <a>Read More</a>;
  const defualtBounds = { width: 420, top: 0, left: 0, bottom: 0, right: 0 };

  const mockBoundsForHeight = (height: number) => {
    Element.prototype.getBoundingClientRect = jest.fn(() => {
      return { ...defualtBounds, height };
    });
  };

  it("should render with the default ellipsis", () => {
    mockBoundsForHeight(32);
    wrapper = mount(
      <ChopLines lines={1} lineHeight={16}>
        <p>Testing</p>
      </ChopLines>
    );
    expect(wrapper.html()).toContain("…");
  });

  it("should render the ellipsis when content exceeds maxium lines", () => {
    mockBoundsForHeight(32);
    wrapper = mount(
      <ChopLines lines={1} lineHeight={16} ellipsis={ellipsis}>
        <p>
          Too many <br /> lines
        </p>
      </ChopLines>
    );
    expect(wrapper.html()).toContain("Read More");
  });

  it("should not render the ellipsis when content does not exceed maxium lines", () => {
    mockBoundsForHeight(16);
    wrapper = mount(
      <ChopLines lines={1} lineHeight={16} ellipsis={ellipsis}>
        <p>Just one line here.</p>
      </ChopLines>
    );
    expect(wrapper.html()).not.toContain("Read More");
  });

  it("should render the ellipsis when content exceeds max height", () => {
    mockBoundsForHeight(40);
    wrapper = mount(
      <ChopLines maxHeight={20} ellipsis={ellipsis}>
        <p>
          Too many <br /> lines
        </p>
      </ChopLines>
    );
    expect(wrapper.html()).toContain("Read More");
  });

  it("should not render the ellipsis when content does not exceed max height", () => {
    mockBoundsForHeight(20);
    wrapper = mount(
      <ChopLines maxHeight={40} ellipsis={ellipsis}>
        <p>Just one line here.</p>
      </ChopLines>
    );
    expect(wrapper.html()).not.toContain("Read More");
  });

  describe("when unmounting", () => {
    it("should do nothing when the autoSizer ref is not defined", () => {
      wrapper = mount(
        <ChopLines lines={1} lineHeight={16} ellipsis={ellipsis}>
          <p>test</p>
        </ChopLines>
      );
      const instance = wrapper.instance();

      jest.spyOn(window, "removeEventListener");
      instance.componentWillUnmount();
      expect(window.removeEventListener).toHaveBeenCalled();
    });
  });

  describe("when the resize event fires", () => {
    it("should debounce and measure the autoSizer", done => {
      wrapper = mount(
        <ChopLines lines={1} lineHeight={16} ellipsis={ellipsis}>
          <p>test</p>
        </ChopLines>
      );
      const instance = wrapper.instance();

      jest.spyOn(instance, "measureAutoSizer");
      instance.onResize();
      expect(instance.measureAutoSizer).not.toHaveBeenCalled();
      setTimeout(() => {
        expect(instance.measureAutoSizer).toHaveBeenCalled();
        done();
      }, 100);
    });
  });

  describe("measureAutoSizer function", () => {
    it("should do nothing when the autoSizer ref is not defined", () => {
      wrapper = mount(
        <ChopLines lines={1} lineHeight={16} ellipsis={ellipsis}>
          <p>test</p>
        </ChopLines>
      );
      const instance = wrapper.instance();

      jest.spyOn(instance, "setState");
      instance.autoSizer = null;
      instance.measureAutoSizer();
      expect(instance.setState).not.toHaveBeenCalled();
    });

    it("should do nothing when the measured height has not changed", () => {
      mockBoundsForHeight(16);
      wrapper = mount(
        <ChopLines lines={1} lineHeight={16} ellipsis={ellipsis}>
          <p>test</p>
        </ChopLines>
      );
      const instance = wrapper.instance();

      wrapper.setState({ height: 16 });
      jest.spyOn(instance, "setState");
      instance.measureAutoSizer();
      expect(instance.setState).not.toHaveBeenCalled();
    });
  });
});
