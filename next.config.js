// next.config.js

// module.exports = {
//     images: {
//         domains: [
//             'random-image-pepebigotes.vercel.app',
//             'http://localhost:8000',
//         ],
//     },
// }

module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '8000',
                pathname: '/images/**',
            },
             {
                protocol: 'https',
                hostname: 'ecommerce-api.event-pulse.com',
                port: '',
                pathname: '/images/**',
            },
            {
                protocol: 'https',
                hostname: 'random-image-pepebigotes.vercel.app',
                port: '',
                // pathname: '/images/**',
            },
            {
                protocol: 'https',
                hostname: 'tailus.io',
                port: '',
                // pathname: '/images/**',
            },
        ],
    },
}
