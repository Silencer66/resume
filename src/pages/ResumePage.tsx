import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { ProfileImage } from "@/shared/ui/ProfileImage";

import photo from "../../public/profile-photo.jpg";

export function ResumePage() {
    return (
        <div className="m-5 max-w-5xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-center">
                <div className="m-3 text-left">
                    <div className="mt">
                        <p className="text-2xl sm:text-xxl font-bold">
                            ПАЛАМАРЧУК
                        </p>
                    </div>
                    <div>
                        <p className="text-2xl sm:text-xxl font-bold">
                            АРТЕМ МАКСИМОВИЧ
                        </p>
                    </div>
                    <div className="mt-2">
                        <p className="text-md sm:text-lg text-red-aqua">
                            программист
                        </p>
                    </div>
                    <div className="mt-2 flex items-center">
                        <FaPhone className="mr-2 text-red-aqua" />
                        <p className="text-md sm:text-lg">+7(908)510-88-31</p>
                    </div>
                    <div className="mt-2 flex items-center">
                        <IoMail className="mr-2 text-red-aqua" />
                        <p className="text-md sm:text-lg">
                            tema.palamar4uck@yandex.ru
                        </p>
                    </div>
                    <div className="mt-2 flex items-center">
                        <FaLocationDot className="mr-2 text-red-aqua" />
                        <p className="text-md sm:text-lg">Москва</p>
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
                    <section className="mt-5">
                        <div className="text-center border-red-aqua border-t-2 border-b-2">
                            <p className="text-xl font-bold">основное</p>
                        </div>
                        <div className="mt-4">
                            <p className="font-bold">график работы</p>
                            <p className="text-xs">
                                Гибкий график. Полный день. Удалённая работа.
                            </p>
                        </div>
                        <div className="mt-3">
                            <p className="font-bold">занятость</p>
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
                            <p className="font-bold">дата рождения</p>
                            <p className="text-xs">23 мая 2002</p>
                        </div>
                        <div className="mt-3">
                            <p className="font-bold">образование</p>
                            <p className="text-xs">Высшее</p>
                        </div>
                        <div className="mt-3">
                            <p className="font-bold">гражданство</p>
                            <p className="text-xs">Россия</p>
                        </div>
                    </section>
                </div>

                <div className="col-span-2">
                    {/* секция "опыт работы" */}
                    <section className="mt-5">
                        <div className="text-center border-red-aqua border-t-2 border-b-2">
                            <p className="text-xl font-bold">опыт работы</p>
                        </div>

                        <section className="mt-5">
                            <div>
                                <p className="font-semibold">ООО ТОПСРМ</p>
                                <p className="text-xs">
                                    Февраль 2023 - Октябрь 2023
                                </p>
                            </div>
                            <div className="mt-3">
                                <p className="font-semibold">
                                    младший инженер программист
                                </p>
                                <p className="text-xs">
                                    Доработка и обслуживание CRM системы.
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Написание плагинов, бизнес-процессов в
                                        low code платформе.
                                    </li>
                                    <li>
                                        Работа с sql базами данных, CRUD
                                        запросы.
                                    </li>
                                    <li>Написание web-сервисов.</li>
                                </ul>
                            </div>
                        </section>

                        <section className="mt-6">
                            <div>
                                <p className="font-semibold">ПАРАМЕТРИКА</p>
                                <p className="text-xs">
                                    Октябрь 2023 - по настоящее время
                                </p>
                            </div>
                            <div className="mt-3">
                                <p className="font-semibold">
                                    младший инженер программист
                                </p>
                                <p className="text-xs">
                                    Разработка ПО для архитекторов на базе
                                    ASP.NET и React.
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>Работа с C# и TypeScript.</li>
                                    <li>Поддержка базы данных MongoDB.</li>
                                    <li>Применение паттернов MVC и MediatR.</li>
                                    <li>Unit-тесты и Swagger.</li>
                                    <li>Разработка REST API и WebSockets.</li>
                                    <li>
                                        Интеграция FSD (Feature-Sliced Design).
                                    </li>
                                    <li>
                                        Компонентные тесты и Storybook для UI.
                                    </li>
                                    <li>
                                        Настройка Webpack и работа с Next.js.
                                    </li>
                                    <li>Three.js для 3D-графики.</li>
                                </ul>
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
                                <p className="font-semibold">
                                    МОСКОВСКИЙ АВТОМОБИЛЬНО-ДОРОЖНЫЙ
                                    ГОСУДАРСТВЕННЫЙ ТЕХНИЧЕСКИЙ УНИВЕРСИТЕТ
                                    (МАДИ)
                                </p>
                                <p className="text-xs">2024</p>
                            </div>
                            <div className="flex">
                                <div>
                                    <p className="font-semibold">факультет</p>
                                    <p className="font-semibold">
                                        специальность
                                    </p>
                                    <p className="font-semibold">
                                        форма обучения
                                    </p>
                                </div>
                                <div className="ml-3">
                                    <p className="text-xs">
                                        Факультет управления
                                    </p>
                                    <p className="text-xs">
                                        Информатика и вычислительная техника
                                    </p>
                                    <p className="text-xs">Очная</p>
                                </div>
                            </div>
                        </section>
                    </section>

                    {/* секция "дополнительная информация" */}
                    <section className="mt-5">
                        <div className="text-center border-red-aqua border-t-2 border-b-2">
                            <p className="text-xl font-bold">
                                дополнительная информация
                            </p>
                        </div>
                        <div className="mt-5">
                            <p className="font-semibold">
                                ВЛАДЕНИЕ ИНОСТРАННЫМИ ЯЗЫКАМИ
                            </p>
                            <p className="text-xs">Английский (разговорный)</p>
                        </div>
                        <div className="mt-5">
                            <p className="font-semibold">ЛИЧНЫЕ КАЧЕСТВА</p>
                            <p className="text-xs">
                                Самостоятельность. Ответственность. Стремление к
                                обучению. Командный игрок.
                            </p>
                        </div>
                        <div className="mt-5">
                            <p className="font-semibold">О СЕБЕ</p>
                            <p className="text-xs">
                                Я активный и целеустремленный человек. В
                                свободное время занимаюсь спортом: играю в
                                футбол, хоккей, настольный теннис.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
