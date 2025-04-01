import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

const NUMBER_PORT = 3000;

export default defineConfig({
    plugins: [react()],
    server: {
        host: true,
        port: NUMBER_PORT,
        open: true,
    },
    resolve: {
        alias: {
            '~': resolve(__dirname, 'src'),
            '@public': resolve(__dirname, 'public'),
        },
    },
});
