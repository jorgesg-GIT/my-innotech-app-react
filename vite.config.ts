import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    coverage: {
      thresholds: {
        lines: 60,
        branches: 60,
        functions: 60,
        statements: 60
      }
    }
  }
});