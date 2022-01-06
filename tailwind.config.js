module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            maxHeight: {
                'screen-sm': '640px',
                'screen-md': '768px',
                'screen-lg': '1024px',
                'screen-xl': '1280px',
            },
            width: {
                '6/5': '120%',
                '7/5': '140%',
                88: '22rem',
            },
            height: {
                '1/2': '50%',
                '1/3': '33%',
                '2/3': '66%',
                '1/4': '25%',
                '3/4': '75%',
                '1/5': '20%',
                '2/5': '40%',
                '3/5': '60%',
                '4/5': '80%',
                88: '22rem',
            },
            rotate: {
                10: '10deg',
            },
            borderWidth: {
                12: '12px',
                16: '16px',
                20: '20px',
                24: '24px',
            },
            animation: {
                'pulse-full': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                'pulse-full': {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: 0.1 },
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
