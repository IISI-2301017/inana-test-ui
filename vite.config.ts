import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        outDir: "/home/damn/inana-rag/static",
        emptyOutDir: true,
        sourcemap: true,
        rollupOptions: {
            output: {
                manualChunks: id => {
                    if (id.includes("@fluentui/react-icons")) {
                        return "fluentui-icons";
                    } else if (id.includes("@fluentui/react")) {
                        return "fluentui-react";
                    } else if (id.includes("node_modules")) {
                        return "vendor";
                    }
                }
            }
        },
        target: "esnext"
    },
    server: {
        proxy: {
            "/content/": "http://inanatest.koreacentral.cloudapp.azure.com/inana-rag-iisi",
            "/auth_setup": "http://inanatest.koreacentral.cloudapp.azure.com/inana-rag-iisi",
            "/ask": "http://inanatest.koreacentral.cloudapp.azure.com/inana-rag-iisi",
            "/chat": "http://inanatest.koreacentral.cloudapp.azure.com/inana-rag-iisi"
        }
    },
    base: "./"
});
