/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', 'node_modules/flowbite-react/lib/esm/**/*.js'],

    theme: {
        container: {
            center: true,
        },
        screens: {
            sm: {
                max: '1023px',
            },
        },
        extend: {
            colors: {
                primary: 'var(--dr-color-primary)',
                secondary: 'var(--dr-text-secondary)',
                hyperlink: 'var(--dr-text-hyperlink)',
                error: 'var(--dr-color-error)',
                hover: 'var(--dr-color-primary)',
                tab: 'var(--dr-text-tab)',
                placeholder: 'var(--dr-text-placeholder)',
                'dr-border-primary': 'var(--dr-border-primary)',
                'dr-border-secondary': 'var(--dr-border-secondary)',
                'dr-border-input': 'var(--dr-border-input)',
                'dr-border-hover': 'var(--dr-border-hover)',
                'dr-bg-primary': 'var(--dr-bg-primary)',
                'dr-text-primary': 'var(--dr-text-primary)',
                'dr-text-label-mobile': 'var(--dr-text-input-label-mobile)',
            },
            fontSize: {
                '3xl': ['2rem', '2.5rem'],
                xxs: ['0.625rem', '0.875rem'],
            },
        },
    },
    plugins: [],
};
