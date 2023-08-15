import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from 'path';
// import config from "./config.json";
const configJs = require('./config.json')
const resolve = (dir: string) => path.join(__dirname, dir);

export default defineConfig({
    plugins: [vue()],
    base: "./",
    resolve: {
        alias: {
            "@/src": resolve("src"),
            "@assets": resolve("src/assets"),
            "@utils": resolve("src/utils"),
        },
    },
    server: {
        port: 3000,
        proxy: {
            "/proxy": {
                // 跨域配置
                target: configJs.SERVER_URL,
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/proxy/, ""),
            },
        },
        open: true,
    },
});
