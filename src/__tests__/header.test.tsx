import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import "@testing-library/jest-dom";
import React from "react";
import Header from "../components/Header";
import { BrowserRouter } from "react-router-dom";

describe("Header", () => {
  it("render title", () => {
    const component = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    component.getByText("now");
  });
});
