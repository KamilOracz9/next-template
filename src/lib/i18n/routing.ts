import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    localeDetection: false,
    locales: ['en-US', 'pl-PL'],
    defaultLocale: 'pl-PL',
    localePrefix: {
        mode: 'as-needed',
        prefixes: {
            'en-US': '/en',
            'pl-PL': '/pl'
        }
    },
    domains: [
        {
            domain: 'localhost:3000',
            defaultLocale: 'pl-PL',
            locales: ['pl-PL', 'en-US']
        },
        // {
        //     domain: 'localhost:3001',
        //     defaultLocale: 'en-US',
        //     locales: ['en-US']
        // },
    ],
    pathnames: {
        '/': '/',
        '/about': {
            'en-US': '/about',
            'pl-PL': '/o-nas'
        },
    }
});