import { beforeEach, describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "./page";

console.log("ici");
describe("Page", () => {
  console.log("ici");
  beforeEach(() => {
    console.log("ici");
    render(<Page />);
  });

  console.log("ici");
  test("Page is live", async () => {
    console.log("ici");
    expect(
      screen.getByRole("link", { name: "By Vercel Logo" })
    ).toBeDefined();
  });
});
