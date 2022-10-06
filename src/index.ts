const main = async () => {
    console.log('hello, world');
};

main().catch((e) => {
    console.error(e);
    process.exit(1);
});

export {};
