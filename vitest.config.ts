import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true, // Vitest에서 글로벌 테스트 API 사용 (describe, it 등)
    environment: "jsdom", // jsdom 환경 설정
    setupFiles: "./src/test/setup.ts", // 설정 파일 지정 (선택 사항)
  },
});
