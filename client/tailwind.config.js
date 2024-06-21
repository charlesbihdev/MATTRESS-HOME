const flowbite = require('flowbite-react/tailwind')

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', flowbite.content()],
    theme: {
        listStyleType: {
            none: 'none',
            disc: 'disc',
            decimal: 'decimal',
            square: 'square',
            roman: 'upper-roman',
        },
    },
    plugins: [require('@tailwindcss/forms'), flowbite.plugin()],
}
