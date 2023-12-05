const clearCache = async () => {
    try {
        console.log('Clearing cache...');

        //Will need to use a tool here to use cache, i heard redis is good test

        console.log('Cache cleared successfully.');
    } catch (error) {
        console.error('Error clearing cache:', error);
    }
};

clearCache();
