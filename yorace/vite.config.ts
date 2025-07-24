import path from "path"

import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      public: `${path.resolve(__dirname, "./public/")}`,
      pages: `${path.resolve(__dirname, "./src/pages")}`,
      types: `${path.resolve(__dirname, "./src/@types")}`,
      configs: `${path.resolve(__dirname, "./src/@configs")}`,
      data: `${path.resolve(__dirname, "./src/@data")}`,
      hooks: `${path.resolve(__dirname, "./src/@hooks")}`,
      providers: `${path.resolve(__dirname, "./src/@providers")}`,
      services: `${path.resolve(__dirname, "./src/@services")}`,
      shared: `${path.resolve(__dirname, "./src/@shared")}`,
      utils: `${path.resolve(__dirname, "./src/@utils")}`,
      components: `${path.resolve(__dirname, "./src/@components")}`,
    },
  },
})
