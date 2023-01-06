import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/GitHub_user_search_app/",
  plugins: [react()],
  root: "src",
});
