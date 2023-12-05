import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
   baseUrl: "http://localhost:8000",
    watchForFileChanges: false,
    experimentalSessionAndOrigin: true,
    viewportWidth: 1600,
    viewportHeight: 860,
    setupNodeEvents(on, config) {
     on("after:screenshot", (details) => {
        
      });
      
    },
  },
});
