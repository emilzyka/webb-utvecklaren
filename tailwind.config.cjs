/** @type {import('tailwindcss').Config} */
const { createThemes } = require('tw-colors');

module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                bone: '#f3efd3',
                gold: '#ffc001',
                bglight: '#26203a',
            },
        },
        screens: {
            '2xl': { max: '1535px' },
            // => @media (max-width: 1535px) { ... }

            xl: { max: '1279px' },
            // => @media (max-width: 1279px) { ... }

            lg: { max: '1023px' },
            // => @media (max-width: 1023px) { ... }

            md: { max: '767px' },
            // => @media (max-width: 767px) { ... }

            sm: { max: '639px' },
            // => @media (max-width: 639px) { ... }

            smm: { min: '639px' },
            // => @media (min-width: 639px) { ... }
        },
    },
    plugins: [
        createThemes({
            light: {
                primary: 'black',
                secondary: 'rgb(192 132 252)',
                highlight: 'rgb(239 68 68)',
                text: 'rgb(30 41 59)',
            },
            dark: {
                primary: '#f3efd3',
                secondary: '#ffc001',
                highlight: 'rgb(239 68 68)',
                text: 'rgb(156 163 175)',
            },
        }),
    ],
};
