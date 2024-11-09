const nextConfig = {
    output: "export",
    assetPrefix: "./",
    images: {
        unoptimized: true,
    },
    reactStrictMode: true,
    env: {
        NEXT_PUBLIC_I18N_LANGUAGES: '["ru", "en"]',
        NEXT_PUBLIC_I18N_DEFAULT_LANGUAGE: "ru",
        NEXT_PUBLIC_I18N_NAMESPACES: '["common"]',
        NEXT_PUBLIC_I18N_DEFAULT_NAMESPACE: "common",
    },
};

module.exports = nextConfig;
