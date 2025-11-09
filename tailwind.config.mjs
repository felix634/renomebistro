/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    ],
    theme: {
        extend: {
            // Betűtípus beállítása
            fontFamily: {
                // Playfair Display (elegáns, logó stílus)
                serif: ['Playfair Display', 'Georgia', 'serif'],
                // Inter (letisztult, modern)
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            // Egyedi színek (monokróm séma)
            colors: {
                'renome-primary': '#4A4A4A', 
                'renome-bg': '#F7F7F7',
            },
        },
    },
    plugins: [],
};