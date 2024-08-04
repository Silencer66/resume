import type { AppProps } from "next/app";
import "@/app/globals.css";

export function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
