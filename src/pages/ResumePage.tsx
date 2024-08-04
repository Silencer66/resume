import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { ProfileImage } from "@/shared/ui/ProfileImage";

import photo from "../../public/profile-photo.jpg";

export function ResumePage() {
    return (
        <div className="m-5">
            <div className="w-full flex justify-between">
                <div className="m-3 ml-24 w-1/2 text-left">
                    <div className="flex mt">
                        <p className="text-xxl">ПАЛАМАРЧУК</p>
                    </div>

                    <div className="flex">
                        <p className="text-xxl">АРТЕМ МАКСИМОВИЧ</p>
                    </div>

                    <div className="flex mt-2 break-all">
                        <p className="text-m text-red-aqua">программист</p>
                    </div>

                    <div className="flex mt-2 items-center">
                        <FaPhone className="mr-2 text-red-aqua" />
                        <p className="text-m">+7(908)510-88-31</p>
                    </div>

                    <div className="flex mt-2 break-all items-center">
                        <IoMail className="mr-2 text-red-aqua" />
                        <p className="text-m">tema.palamar4uck@yandex.ru</p>
                    </div>

                    <div className="flex mt-2 break-all items-center">
                        <FaLocationDot className="mr-2 text-red-aqua" />
                        <p className="text-m">Москва</p>
                    </div>
                </div>
                <ProfileImage image={photo} className="mr-24" />
            </div>
            <div className="w-full flex ">
                <div className="w-1/3 ml-24 mr-3">
                    {/* секция "основное" */}
                    <section className="mt-5">
                        <div className="text-center border-red-aqua border-t-2 border-b-2">
                            <p className="text-xl font-bold break-all">
                                основное
                            </p>
                        </div>

                        <div className="mt-5">
                            <p className="font-bold text-m ">
                                желаемая зарплата
                            </p>
                            <p className="text-xs">Договорная</p>
                        </div>
                        <div className="mt-4">
                            <p className="font-bold text-m ">график работы</p>
                            <p className="text-xs">
                                Гибкий график. Полный день. Удалённая работа.
                            </p>
                        </div>
                        <div className="mt-3">
                            <p className="font-bold text-m ">занятость</p>
                            <p className="text-xs">
                                Полная. Частичная. Проектная. Стажировка.
                            </p>
                        </div>
                    </section>

                    {/* секция "обо мне" */}
                    <section className="mt-5">
                        <div className="text-center border-red-aqua border-t-2 border-b-2">
                            <p className="text-xl font-bold">обо мне</p>
                        </div>
                        <div className="mt-5">
                            <p className="font-bold text-m ">дата рождения</p>
                            <p className="text-xs">23 мая 2002</p>
                        </div>
                        <div className="mt-4">
                            <p className="font-bold text-m ">пол</p>
                            <p className="text-xs">Мужской</p>
                        </div>
                        <div className="mt-3 break-all">
                            <p className="font-bold text-m ">образование</p>
                            <p className="text-xs">Высшее неполное</p>
                        </div>
                        <div className="mt-3 break-all">
                            <p className="font-bold text-m ">гражданство</p>
                            <p className="text-xs">Россия</p>
                        </div>
                    </section>
                </div>

                <div className="w-2/3 ml-3 mr-24">
                    {/* секция "опыт работы" */}
                    <section className="mt-5">
                        <div className="text-center border-red-aqua border-t-2 border-b-2">
                            <p className="text-xl font-bold">опыт работы</p>
                        </div>
                        {/* секция про ТОПСРМ */}
                        <section className="mt-5">
                            <div>
                                <p className="font-semibold text-m">
                                    ООО ТОПСРМ
                                </p>
                                <p className="text-xs">
                                    Февраль 2023 - Октябрь 2023
                                </p>
                            </div>
                            <div className="mt-3">
                                <p className="font-semibold text-m ">
                                    младший инженер программист
                                </p>
                                <p className="text-xs">
                                    Доработка и обслуживание уже готовой CRM
                                    системы.
                                </p>
                                <li className="mt-1">
                                    Написание плагинов, бизнес-процессов в low
                                    code платформе.
                                </li>
                                <li>
                                    Работа с sql базами данных, CRUD запросы.
                                </li>
                                <li>Написание web-сервисов.</li>
                            </div>
                        </section>

                        {/* секция про ПАРАМЕТРИКУ*/}
                        <section className="mt-6">
                            <div>
                                <p className="font-semibold text-m">
                                    ПАРАМЕТРИКА
                                </p>
                                <p className="text-xs">
                                    Октябрь 2023 - по настоящее время
                                </p>
                            </div>
                            <div className="mt-3">
                                <p className="font-semibold text-m ">
                                    младший инженер программист
                                </p>
                                <p className="text-xs">
                                    Разработка программного обеспечения для
                                    архитекторов на базе технологий ASP.NET и
                                    React.
                                </p>
                                <li className="mt-1">
                                    Начинал как Back-End разработчик, затем
                                    перешел на роль Full-Stack разработчика.
                                </li>
                                <li>
                                    Работа с языками программирования C# и
                                    TypeScript.
                                </li>
                                <li>
                                    Разработка и поддержка базы данных MongoDB.
                                </li>
                                <li>
                                    Применение паттернов проектирования MVC и
                                    MediatR для структурирования кода.
                                </li>
                                <li>
                                    Написание и поддержка unit-тестов для
                                    обеспечения качества кода.
                                </li>
                                <li>
                                    Документирование API с использованием
                                    Swagger.
                                </li>
                                <li>
                                    Разработка и интеграция REST API и
                                    WebSockets для обеспечения взаимодействия
                                    компонентов системы.
                                </li>
                                <li>
                                    Имплементация фронтенд-части по архитектуре
                                    FSD (Feature-Sliced Design).
                                </li>
                                <li>
                                    Написание компонентных тестов и
                                    использование Storybook для документирования
                                    и тестирования UI-компонентов.
                                </li>
                                <li>
                                    Разработка пользовательских компонентов и
                                    стилей без использования готовых библиотек
                                    стилей.
                                </li>
                                <li>
                                    Настройка и конфигурация Webpack для
                                    оптимизации и сборки проекта.
                                </li>
                                <li>
                                    Работа с Next.js для серверного рендеринга и
                                    создания статических сайтов.
                                </li>
                                <li>
                                    Понимание и использование библиотеки
                                    Three.js для 3D-графики на веб-сайте.
                                </li>
                            </div>
                        </section>
                    </section>

                    {/* секция "образование" */}
                    <section className="mt-5">
                        <div className="text-center border-red-aqua border-t-2 border-b-2">
                            <p className="text-xl font-bold">образование</p>
                        </div>

                        <section className="mt-5">
                            <div>
                                <p className="font-semibold text-m">
                                    МОСКОВСКИЙ АВТОМОБИЛЬНО-ДОРОЖНЫЙ
                                    ГОСУДАРСТВЕННЫЙ ТЕХНИЧЕСКИЙ УНИВЕРСИТЕТ
                                    (МАДИ)
                                </p>
                                <p className="text-xs">2024</p>
                            </div>
                            <div className="flex items-center ml-3">
                                <div className="items-center ml-3">
                                    <p className="text-m font-semibold">
                                        факультет
                                    </p>
                                    <p className="text-m font-semibold">
                                        специальность
                                    </p>
                                    <p className="text-m font-semibold">
                                        форма обучения
                                    </p>
                                </div>

                                <div className=" items-center ml-3">
                                    <p className="mt-2 text-xs ml-32">
                                        Факультет управления
                                    </p>
                                    <p className="mt-2 text-xs ml-32">
                                        Информатика и вычислительная техника
                                    </p>
                                    <p className="mt-2 text-xs ml-32">Очная</p>
                                </div>
                            </div>
                        </section>
                    </section>

                    {/* секция "дополнительная информация" */}
                    <section className="mt-5">
                        <div className="mt-5 text-center border-red-aqua border-t-2 border-b-2">
                            <p className="text-xl font-bold">
                                дополнительная информация
                            </p>
                        </div>
                        <div className="mt-5">
                            <p className="font-semibold text-m">
                                ВЛАДЕНИЕ ИНОСТРАННЫМИ ЯЗЫКАМИ
                            </p>
                            <p className="text-xs">Английский (разговорный)</p>
                        </div>
                        <div className="mt-5">
                            <p className="font-semibold text-m">
                                ЛИЧНЫЕ КАЧЕСТВА
                            </p>
                            <p className="text-xs">
                                Самостоятельность. Ответственность. Стремление к
                                обучению. Командный игрок.
                            </p>
                        </div>
                        <div className="mt-5">
                            <p className="font-semibold text-m">О СЕБЕ</p>
                            <p className="text-xs">
                                Я активный и целеустремленный человек. В
                                свободное время занимаюсь спортом: играю в
                                футбол, хоккей, настольный теннис. С детства
                                увлекаюсь различными спортивными активностями, в
                                школьные годы занимался дзюдо и настольным
                                теннисом.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
