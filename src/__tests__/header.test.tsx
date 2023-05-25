import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import "@testing-library/jest-dom";
import React from "react";
import Header from "../components/Header";
import { BrowserRouter } from "react-router-dom";

describe("Header", () => {
  beforeEach(() => {
    render(<Header />, { wrapper: BrowserRouter });
  });

  it("render title", () => {
    expect(screen.getByText("now")).toBeInTheDocument();
  });

  it("renders navigation items", () => {
    expect(screen.getByText("Browse")).toBeInTheDocument();
    expect(screen.getByText("Following")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
  });

  it("shows non registered nav buttons", () => {
    expect(screen.getByText("Sign In")).toBeInTheDocument();
    expect(screen.getByText("Sign Up")).toBeInTheDocument();
  });
});
