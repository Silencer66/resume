var en = require("./translations.en.json");
var ru = require("./translations.ru.json");

const i18n = {
    translations: {
        en,
        ru,
    },
    defaultLang: "en",
    useBrowserDefault: true,
    // optional property will default to "query" if not set
    languageDataStore: "query" || "localStorage",
};

module.exports = i18n;
