import { languages, namespaces } from "next-i18next-static-site";

interface Locales {
    [key: string]: any;
}

const locales: Locales = {};
languages.map((language) => {
    locales[language] = {};
    namespaces.map((namespace) => {
        locales[language][namespace] = require("./../../../public/locales/" +
            language +
            "/" +
            namespace +
            ".json");
    });
});

export default locales;
