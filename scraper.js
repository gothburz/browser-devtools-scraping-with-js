const scrapeData = (path, packageArray) => {
    // Get all anchor tags
    const aTags = document.getElementsByTagName('a');
    // Iterate and check href attribute
    for (let i = 0; i < aTags.length; i++) {
        // Check the href attribute for the specified path
        if (aTags[i].getAttribute('href').includes(path)) {
            // If path matches, add the package name to the packageArray array
            packageArray.push(aTags[i].innerText);
        }
    }
};