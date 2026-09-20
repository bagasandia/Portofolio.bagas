// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/Portofolio.bagas/", // <-- Ganti dengan nama repositori Anda diawali dan diakhiri garis miring
});
