import { FaLocationDot } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { ProfileImage } from "@/shared/ui/ProfileImage";
import { useRouter } from "next/router";

import photo from "../../public/profile-photo.jpg";
import {
    defaultLanguage,
    languages,
    useTranslation,
} from "next-i18next-static-site";

export function ResumePage() {
    const { t } = useTranslation();
    const router = useRouter();

    const langText = "EN | RU";
    const { pathname, query, asPath } = router;

    const toggle = () => {
        const slug = asPath.split("/")[1];
        const langSlug = languages.includes(slug) && slug;
        const language: any = query.lang || langSlug || defaultLanguage;

        let newLang = language === "en" ? "ru" : "en";

        let href = pathname;
        if (newLang) {
            if (pathname.startsWith("/404")) {
                href = `/${newLang}`;
            } else {
                href = pathname.replace("[lang]", newLang);
            }
        } else {
            if (language) {
                href = `/${language}${href}`;
            } else {
                href = `/${href}`;
            }
        }

        // Fix double slashes
        href = href.replace(/([^:]\/)\/+/g, "$1").replace("//", "/");

        router.push(href);
    };

    return (
        <div className="m-5 max-w-5xl mx-auto">
            <button className="m-3" onClick={toggle}>
                {langText}
            </button>
            <div className="flex flex-col sm:flex-row justify-between items-center">
                <div className="m-3 text-left">
                    <div className="mt">
                        <p className="text-2xl sm:text-xxl font-bold">
                            {t("ПАЛАМАРЧУК")}
                        </p>
                    </div>
                    <div>
                        <p className="text-2xl sm:text-xxl font-bold">
                            {t("АРТЕМ МАКСИМОВИЧ")}
                        </p>
                    </div>
                    <div className="mt-2">
                        <p className="text-md sm:text-lg text-red-aqua">
                            {t("программист")}
                        </p>
                    </div>
                    <div className="mt-2 flex items-center">
                        <FaTelegramPlane className="mr-2 text-red-aqua" />
                        <a
                            href="https://t.me/si1encer"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            @si1encer
                        </a>
                    </div>
                    <div className="mt-2 flex items-center">
                        <IoMail className="mr-2 text-red-aqua" />
                        <p className="text-md sm:text-lg">
                            tema.palamar4uck@yandex.ru
                        </p>
                    </div>
                    <div className="mt-2 flex items-center">
                        <FaLocationDot className="mr-2 text-red-aqua" />
                        <p className="text-md sm:text-lg">{t("Москва")}</p>
                    </div>
                </div>
                <ProfileImage
                    image={photo}
                    className="max-w-xs w-full sm:w-auto sm:ml-5"
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
                <div className="col-span-1">
                    {/* секция "основное" */}
                    {/* <section className="mt-5">
                        <div className="text-center border-red-aqua border-t-2 border-b-2">
                            <p className="text-xl font-bold">{t("основное")}</p>
                        </div>
                        <div className="mt-4">
                            <p className="font-bold">{t("график работы")}</p>
                            <p className="text-xs">
                                {t(
                                    "Гибкий график. Полный день. Удалённая работа."
                                )}
                            </p>
                        </div>
                        <div className="mt-3">
                            <p className="font-bold">{t("занятость")}</p>
                            <p className="text-xs">
                                {t("Полная. Частичная. Проектная. Стажировка.")}
                            </p>
                        </div>
                    </section> */}

                    {/* секция "обо мне" */}
                    <section className="mt-5">
                        <div className="text-center border-red-aqua border-t-2 border-b-2">
                            <p className="text-xl font-bold">{t("обо мне")}</p>
                        </div>
                        <div className="mt-5">
                            <p className="font-bold">{t("дата рождения")}</p>
                            <p className="text-xs">{t("23 мая 2002")}</p>
                        </div>
                        <div className="mt-3">
                            <p className="font-bold">{t("образование")}</p>
                            <p className="text-xs">{t("Высшее")}</p>
                        </div>
                        <div className="mt-3">
                            <p className="font-bold">{t("гражданство")}</p>
                            <p className="text-xs">{t("Россия")}</p>
                        </div>
                    </section>
                </div>

                <div className="col-span-2">
                    {/* секция "опыт работы" */}
                    <section className="mt-5">
                        <div className="text-center border-red-aqua border-t-2 border-b-2">
                            <p className="text-xl font-bold">
                                {t("опыт работы")}
                            </p>
                        </div>
                        <section className="mt-6">
                            <div>
                                <p className="font-semibold">
                                    {t("ПАРАМЕТРИКА")}
                                </p>
                                <p className="text-xs">
                                    {t("Октябрь 2023 - по настоящее время")}
                                </p>
                            </div>
                            <div className="mt-3">
                                <p className="font-semibold">
                                    {t("младший инженер программист")}
                                </p>
                                <p className="text-xs">
                                    {t(
                                        "Разработка ПО для архитекторов на базе ASP.NET и React."
                                    )}
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>{t("Работа с C# и TypeScript.")}</li>
                                    <li>
                                        {t("Поддержка базы данных MongoDB.")}
                                    </li>
                                    <li>
                                        {t(
                                            "Применение паттернов MVC и MediatR."
                                        )}
                                    </li>
                                    <li>{t("Unit-тесты и Swagger.")}</li>
                                    <li>
                                        {t("Разработка REST API и WebSockets.")}
                                    </li>
                                    <li>
                                        {t(
                                            "Интеграция FSD (Feature-Sliced Design)."
                                        )}
                                    </li>
                                    <li>
                                        {t(
                                            "Компонентные тесты и Storybook для UI."
                                        )}
                                    </li>
                                    <li>
                                        {t(
                                            "Настройка Webpack и работа с Next.js."
                                        )}
                                    </li>
                                    <li>{t("Three.js для 3D-графики.")}</li>
                                </ul>
                            </div>
                        </section>
                        <section className="mt-5">
                            <div>
                                <p className="font-semibold">
                                    {t("ООО ТОПСРМ")}
                                </p>
                                <p className="text-xs">
                                    {t("Февраль 2023 - Октябрь 2023")}
                                </p>
                            </div>
                            <div className="mt-3">
                                <p className="font-semibold">
                                    {t("младший инженер программист")}
                                </p>
                                <p className="text-xs">
                                    {t("Доработка и обслуживание CRM системы.")}
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>
                                        {t(
                                            "Написание плагинов, бизнес-процессов в low code платформе."
                                        )}
                                    </li>
                                    <li>
                                        {t(
                                            "Работа с sql базами данных, CRUDзапросы."
                                        )}
                                    </li>
                                    <li>{t("Написание web-сервисов.")}</li>
                                </ul>
                            </div>
                        </section>
                        <section className="mt-5">
                            <div>
                                <p className="font-semibold">
                                    {t("Telegram Chess")}
                                </p>
                                <p className="text-xs">
                                    {t("2024 — 2025")} | {t("Pet-проект")}
                                </p>
                            </div>
                            <div className="mt-3">
                                <p className="font-semibold">
                                    {t("Fullstack-разработчик")}
                                </p>
                                <p className="text-xs">
                                    <a
                                        href="https://t.me/monte_cristo_chess_bot"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-red-aqua hover:underline"
                                    >
                                        https://t.me/monte_cristo_chess_bot
                                    </a>
                                </p>
                                <p className="text-xs mt-2">
                                    {t(
                                        "Онлайн-шахматы, реализованные как Telegram Web App с возможностью игры на криптовалюту USDT и внутриигровыми покупками за Telegram Stars."
                                    )}
                                </p>
                                <ul className="list-disc list-inside mt-2">
                                    <li>
                                        {t(
                                            "Разработка серверной части на Node.js с использованием Prisma и PostgreSQL."
                                        )}
                                    </li>
                                    <li>
                                        {t(
                                            "Реализация клиентской части на React + Tailwind CSS, модульная сборка через Vite."
                                        )}
                                    </li>
                                    <li>
                                        {t(
                                            "Интеграция Socket.io для real-time взаимодействия между игроками."
                                        )}
                                    </li>
                                    <li>{t("Работа с Web3 API.")}</li>
                                </ul>
                            </div>
                        </section>
                    </section>

                    {/* секция "образование" */}
                    <section className="mt-5">
                        <div className="text-center border-red-aqua border-t-2 border-b-2">
                            <p className="text-xl font-bold">
                                {t("образование")}
                            </p>
                        </div>
                        <section className="mt-5">
                            <div>
                                <p className="font-semibold">
                                    {t(
                                        "МОСКОВСКИЙ АВТОМОБИЛЬНО-ДОРОЖНЫЙ ГОСУДАРСТВЕННЫЙ ТЕХНИЧЕСКИЙ УНИВЕРСИТЕТ (МАДИ)"
                                    )}
                                </p>
                                <p className="text-xs">{"2024-2026"}</p>
                            </div>
                            <div className="flex">
                                <div>
                                    <p className="font-semibold">
                                        {t("факультет")}
                                    </p>
                                    <p className="font-semibold">
                                        {t("степень")}
                                    </p>
                                    <p className="font-semibold">
                                        {t("специальность")}
                                    </p>
                                    <p className="font-semibold">
                                        {t("форма обучения")}
                                    </p>
                                </div>
                                <div className="ml-3">
                                    <p className="text-xs">
                                        {t("Факультет управления")}
                                    </p>
                                    <p className="text-xs">{t("Магистр")}</p>
                                    <p className="text-xs">
                                        {t(
                                            "Информатика и вычислительная техника"
                                        )}
                                    </p>
                                    <p className="text-xs">{t("Очная")}</p>
                                </div>
                            </div>
                        </section>
                        <section className="mt-5">
                            <div>
                                <p className="font-semibold">
                                    {t(
                                        "МОСКОВСКИЙ АВТОМОБИЛЬНО-ДОРОЖНЫЙ ГОСУДАРСТВЕННЫЙ ТЕХНИЧЕСКИЙ УНИВЕРСИТЕТ (МАДИ)"
                                    )}
                                </p>
                                <p className="text-xs">{"2020-2024"}</p>
                            </div>
                            <div className="flex">
                                <div>
                                    <p className="font-semibold">
                                        {t("факультет")}
                                    </p>
                                    <p className="font-semibold">
                                        {t("степень")}
                                    </p>
                                    <p className="font-semibold">
                                        {t("специальность")}
                                    </p>
                                    <p className="font-semibold">
                                        {t("форма обучения")}
                                    </p>
                                </div>
                                <div className="ml-3">
                                    <p className="text-xs">
                                        {t("Факультет управления")}
                                    </p>
                                    <p className="text-xs">{t("Бакалавр")}</p>
                                    <p className="text-xs">
                                        {t(
                                            "Информатика и вычислительная техника"
                                        )}
                                    </p>
                                    <p className="text-xs">{t("Очная")}</p>
                                </div>
                            </div>
                        </section>
                    </section>

                    {/* секция "дополнительная информация" */}
                    <section className="mt-5">
                        <div className="text-center border-red-aqua border-t-2 border-b-2">
                            <p className="text-xl font-bold">
                                {t("дополнительная информация")}
                            </p>
                        </div>
                        <div className="mt-5">
                            <p className="font-semibold">
                                {t("ВЛАДЕНИЕ ИНОСТРАННЫМИ ЯЗЫКАМИ")}
                            </p>
                            <p className="text-xs">{t("Английский (B1)")}</p>
                        </div>
                        <div className="mt-5">
                            <p className="font-semibold">{t("ДОСТИЖЕНИЯ")}</p>
                            <div className="mt-3">
                                <p className="text-xs">{t("май 2024")}</p>
                                <li className="text-xs">
                                    {t(
                                        "ИТ-Чемпионат в области ИТС и цифровых технологий на транспорте (2 этап), призёр"
                                    )}
                                </li>
                                <li className="text-xs">
                                    {t(
                                        "Создать веб-сервис по работе с отраслевым классификаторами строительной информации, строительных ресурсов и федеральной сметной нормативной базой, то есть свести объекты дорожной инфраструктуры с действующими сметными нормами."
                                    )}
                                </li>
                            </div>
                            <div className="mt-3">
                                <p className="text-xs">{t("сентябрь 2024")}</p>
                                <li className="text-xs">
                                    {t(
                                        "ИТ-Чемпионат в области ИТС и цифровых технологий на транспорте (финал)"
                                    )}
                                </li>
                            </div>
                        </div>
                        <div className="mt-5">
                            <p className="font-semibold">{t("О СЕБЕ")}</p>
                            <p className="text-xs">
                                {t(
                                    "Я активный и целеустремленный человек. В свободное время занимаюсь спортом: играю в футбол, хоккей, настольный теннис."
                                )}
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
