/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    ],
    theme: {
        extend: {
            // Betűtípus beállítása
            fontFamily: {
                // A 'serif' alapértelmezett betűtípus felülírása Playfair Display-jel
                serif: ['Playfair Display', 'Georgia', 'serif'],
                // A 'sans' (alap) betűtípus beállítása egy letisztult fontra
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            // Egyedi színek beállítása a logó monokróm stílusához
            colors: {
                'renome-primary': '#4A4A4A', // Sötétebb szürke, a logó színe
                'renome-secondary': '#B38B59', // Elegáns arany/bézs a kiemelésekhez (opcionális)
                'renome-bg': '#F7F7F7', // Majdnem fehér háttér
            },
        },
    },
    plugins: [
        // Ha szükséged lesz form elemek stílusára (pl. Foglalás)
        // require('@tailwindcss/forms'),
    ],
};