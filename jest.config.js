const config = {
    transform: {
        '^.+\\.(t|j)sx?$': ['@swc/jest'],
    },
    testPathIgnorePatterns: ['/node_modules/', '/dist/'],
};

export default config;
