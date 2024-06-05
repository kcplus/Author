import type {Metadata, Viewport} from "next";
import "./globals.css";

export const viewport: Viewport = {
    initialScale: 1,
    width: 'device-width',
    // height: 1080,
    // width: 1920,
    // userScalable: false,
}
export const metadata: Metadata = {
    title: "Author",
    description: "Предоставляем услуги такие как: лазерная резка из дерева, лазерная резьба по дереву, резка по дереву чпу резка на чпу, фрезеровка дерева, резка лазером по дереву, изделия из дерева на лазерном станке, изготовление картин по фотографии, картины на заказ с фотографии, заказать картину из фото, печать картин на заказ.",
    keywords: [
        'Резка',
        'лазерная резка',
        'фрезеровка',
        'изготовление',
        'любые материалы',
        'печать',
        'Гомель',
        'чпу',
        'вывески',
        'баннер',
        'баннеры',
        'фотообои',
        'печать',
        'заказать',
        '3д',
        'оргстекло',
        'на заказ',
        'фотозона распечатать',
        'распечатать',
        'дешево',
        'наружная реклама',
        'реклама',
        'пвх',
        'буквы пвх'
    ],
    openGraph: {
        type: "website",
        title: 'Author',
        description: 'Мы креативная команда, готовая воплотить все ваши идеи в жизнь',
        url: 'https://author.by',
        images: [
            {url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fyandex.ru%2Fmaps%2Forg%2Fgomel_reklama%2F185542797553%2F&psig=AOvVaw3uGEWBeJHY0G7PJptJk6C1&ust=1714548557212000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCICeyaC16YUDFQAAAAAdAAAAABAE'}
        ]
    }
};

export default function RootLayout({children,}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
            <html lang="ru">
            <head>
                <link rel="shortcut icon" href="./assets/logobrows.svg" type="image/x-icon"/>
            </head>
            <body>
            {children}
            </body>
            </html>
    );
}
