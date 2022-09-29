import React from "react";
import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import Note from "../components/Note";

describe("notes tests", () => {
  it("render content", () => {
    const component = render(<Note />);

    component.getByText("Note");
  });
});
