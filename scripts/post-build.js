const fs = require("fs");
const path = require("path");

const outDir = path.join(__dirname, "..", "out");

// Create .nojekyll file
fs.writeFileSync(path.join(outDir, ".nojekyll"), "");

// Add redirect to index.html
const indexHtmlPath = path.join(outDir, "index.html");
if (fs.existsSync(indexHtmlPath)) {
    let indexHtml = fs.readFileSync(indexHtmlPath, "utf8");

    // Add meta refresh redirect to /resume/ru (default language)
    const redirectMeta =
        '<meta http-equiv="refresh" content="0; url=/resume/ru">';
    if (!indexHtml.includes('http-equiv="refresh"')) {
        // Insert redirect meta tag right after <head>
        indexHtml = indexHtml.replace("<head>", `<head>${redirectMeta}`);
        fs.writeFileSync(indexHtmlPath, indexHtml);
        console.log("✓ Added redirect to index.html");
    }
}

// Add redirect to 404.html
const notFoundHtmlPath = path.join(outDir, "404.html");
if (fs.existsSync(notFoundHtmlPath)) {
    let notFoundHtml = fs.readFileSync(notFoundHtmlPath, "utf8");

    // Add meta refresh redirect to /resume/ru (default language)
    const redirectMeta =
        '<meta http-equiv="refresh" content="0; url=/resume/ru">';
    if (!notFoundHtml.includes('http-equiv="refresh"')) {
        // Insert redirect meta tag right after <head>
        notFoundHtml = notFoundHtml.replace("<head>", `<head>${redirectMeta}`);
        fs.writeFileSync(notFoundHtmlPath, notFoundHtml);
        console.log("✓ Added redirect to 404.html");
    }
}

console.log("✓ Post-build script completed");
