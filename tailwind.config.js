import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            keyframes: {
                fadeIn: {
                    from: { opacity: '0' },
                    to: { opacity: '1' }
                },
                fall: {
                    '0%': { transform: 'translateY(-10vh) translateX(0)' },
                    '10%': {
                        opacity: '1'
                    },
                    '90%': {
                        opacity: '1'
                    },
                    '100%': { transform: 'translateY(100vh) translateX(20px)' }
                }
            },
            animation: {
                'fade-in': 'fadeIn 1s ease-in',
                'fall': 'fall 10s linear infinite'
            },
        },
    },

    plugins: [forms],
};
