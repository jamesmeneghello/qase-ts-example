import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
    use: {
        baseURL: 'http://localhost:3000',
        trace: 'on-first-retry',
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        // admin by default
        storageState: './state/adminStorageState.json',
    },
    reporter: [
        ['list'],
        ['junit', { outputFile: 'junit.xml' }],
        [
            'playwright-qase-reporter',
            {
                // api token configured via envvar
                projectCode: 'CODE',
                runComplete: true,
                basePath: 'https://api.qase.io/v1',
                logging: true,
                uploadAttachments: true,
            },
        ],
    ],
    projects: [
        {
            name: 'chromium',
            use: {
                ...devices['Desktop Chrome'],
                launchOptions: {
                    args: ['--disable-gpu'],
                },
            },
        },
        // {
        //   name: 'firefox',
        //   use: {
        //     ...devices['Desktop Firefox'],
        //     launchOptions: {
        //       args: ['--disable-gpu']
        //     }
        //   },
        // },
        // {
        //   name: 'webkit',
        //   use: {
        //     ...devices['Desktop Safari']
        //   },
        // },
    ],
};
export default config;
