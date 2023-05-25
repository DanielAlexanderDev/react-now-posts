import { render, screen } from "@testing-library/react";
import React from "react";
import PostItem from "../components/PostItem";

describe("test post item", () => {
  beforeEach(() => {
    render(<PostItem author={"Daniel Alexander"} content={"My new Post!!"} />);
  });
  it("render content", () => {
    expect(screen.getByText("Daniel Alexander")).toBeInTheDocument();
    expect(screen.getByText("My new Post!!")).toBeInTheDocument();
  });
});
