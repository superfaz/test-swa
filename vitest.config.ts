import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

console.log("ici config");

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "happy-dom",
    setupFiles: ["./vitest.setup.ts"],
  },
});
