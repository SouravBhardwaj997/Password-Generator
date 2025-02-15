import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { allowedHosts: ["8fc9-202-164-57-132.ngrok-free.app"] },
});
