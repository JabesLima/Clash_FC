// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const VITE_API_KEY ="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjU5ZDRlNTJmLTc5YWUtNGI3Yy05Y2RmLTFlOTFiNmVlMGExZSIsImlhdCI6MTczMTc3OTk0NCwic3ViIjoiZGV2ZWxvcGVyLzRhOTk3YWE3LTEzMjgtMzY0Zi0zNWJhLTYxNzczYzg3ODdmNiIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjIwMC4yMTUuMTY0LjgxIl0sInR5cGUiOiJjbGllbnQifV19.X01Epz8mbACCGaYb1xVDNEQQMYj6OsQBNdU_FJumpHYfyLzYjcPfQueApglNfMm-_4OJNCbTxZWkMqsQrJ5UCA"


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Clash_FC",
  server: {
    proxy: {
      '/api': {
        target: 'https://api.clashofclans.com/v1',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        headers: {
          Authorization: `Bearer ${VITE_API_KEY}`,
        },
      },
    },
  },
});
