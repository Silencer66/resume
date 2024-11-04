import type { AppProps } from "next/app";
import {
    I18nProvider,
    languages,
    defaultLanguage,
    namespaces,
    defaultNamespace,
} from "next-i18next-static-site";

import "@/app/globals.css";

import locales from "@/shared/lib/locales";

const App = ({ Component, pageProps }: AppProps) => {
    const i18n = {
        languages,
        defaultLanguage,
        namespaces,
        defaultNamespace,
        locales,
    };

    return (
        <I18nProvider i18n={i18n}>
            <Component {...pageProps} />
        </I18nProvider>
    );
};

export default App;
