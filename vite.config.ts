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
        proxy: {
            "/proxy": {
                // 跨域配置
                target: 'development' === process.env.NODE_ENV ? configJs.LOCAL_SERVER_URL : configJs.SERVER_URL,
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/proxy/, ""),
            },
        },
        open: true,
    },
});
