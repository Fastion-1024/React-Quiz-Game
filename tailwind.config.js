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
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
