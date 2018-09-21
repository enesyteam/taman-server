import path from 'path';

export default {
    app: {
        host: '0.0.0.0',
        port: 9000,
        jwtKey: 'G4igd1tDQvDWGucY3c7yI6RuM84ffjkdMrRZc44D2IA=',
        defaultCurrency: 'EUR'
    },
    database: {
        servers: [
            {
                host: process.env.DB_PORT_28015_TCP_ADDR || 'localhost',
                port: process.env.DB_PORT_28015_TCP_PORT || 28015
            }
        ],
        name: 'atlas'
    },
    logs: {
        folder: path.join(__dirname, '../logs/'),
        streams: [
            {
                level: 'debug',
                stream: process.stdout // log INFO and above to stdout
            }
        ]
    },
    uploads: {
        provider: 'atlas',
        folder: path.join(process.cwd(), 'uploads'),
        baseUrl: 'http://api.phongthuytaitam.net/uploads'
    },
    emails: {
        from: {
            name: 'Tam An',
            email: 'contact@taman.org'
        }
    },
    storefront: {
        label: 'phongthuytaitam.net',
        baseUrl: 'http://phongthuytaitam.net',
        defaultLocale: 'pt'
    },
    switchPayments: {
        enabled: true,
        baseUrl: 'https://api-test.switchpayments.com/v2',
        accountId: process.env.SWITCH_ACCOUNT_ID,
        privateKey: process.env.SWITCH_PRIVATE_KEY
    },
    mailgun: {
        domain: process.env.MAILGUN_DOMAIN,
        apiKey: process.env.MAILGUN_API_KEY
    }
}
