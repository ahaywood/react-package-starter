import React from "react";
import { render, screen } from "@testing-library/react";
import { Icon } from "./Icon";

describe('Icon', () => {
  it('should render', () => {
    expect(() => {render(
    <Icon />)}).not.toThrow();
  });

  it.skip("it displays the correct label", () => {
    render(
      <Icon />
    );
    expect(screen.getByText("something")).toBeInTheDocument();
  })
});