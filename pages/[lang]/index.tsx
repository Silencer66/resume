import { ResumePage } from "@/pages/ResumePage";
import { getAllLanguageSlugs, getLanguage } from "next-i18next-static-site";

export default ResumePage;

export async function getStaticPaths() {
    const paths = getAllLanguageSlugs();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }: any) {
    const language = getLanguage(params.lang);
    return {
        props: {
            language,
        },
    };
}
