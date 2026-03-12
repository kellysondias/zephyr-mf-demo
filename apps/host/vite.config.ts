import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { withZephyr } from "vite-plugin-zephyr";
import { federation } from "@module-federation/vite";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host",
      remotes: {
        remote: {
          type: "module",
          name: "remote",
          entry:
            "https://kellysondias-outlook-com-8-remote-zephyr-mf-demo--336219d00-ze.zephyrcloud.app/remoteEntry.js",
          entryGlobalName: "remote",
          shareScope: "default",
        },
      },
      shared: {
        react: { singleton: true, requiredVersion: "^18.0.0" },
        "react-dom": { singleton: true, requiredVersion: "^18.0.0" },
      },
      dts: false,
    }),
    withZephyr(),
  ],
  build: { target: "esnext" },
});
