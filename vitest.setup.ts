import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

console.log("ici");

afterEach(() => {
  cleanup();
});
