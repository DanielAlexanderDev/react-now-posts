import { cleanup, render } from "@testing-library/react";
import Home from "../pages/Home/index";
import React from "react";

describe("home", () => {
  beforeEach(() => {
    render(<Home />);
  });

  afterEach(() => {
    cleanup();
  });
});
