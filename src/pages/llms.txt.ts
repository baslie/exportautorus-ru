import type { APIRoute } from "astro";

export const GET: APIRoute = () => {
  const body = `# Korea Motors

> Импорт автомобилей из Южной Кореи под ключ

Korea Motors — сервис прямого импорта автомобилей из Южной Кореи в Россию. Работаем без посредников через собственных агентов в Корее.

## Услуги
- Подбор автомобиля под бюджет клиента
- Импорт авто до 160 л.с. без переплаты за утильсбор
- Фиксированная комиссия от 35 000 ₽
- Оплата в 5 этапов
- Доставка по России

## Бренды
Genesis, Porsche, BMW, Mercedes-Benz, Audi, Hyundai, Kia, Volkswagen

## Контакты
- Telegram: https://t.me/exportautorus
- Email: korea-motorstsk@yandex.ru
- Сайт: https://exportautorus.ru

## Реквизиты
ИП Дума Евгений Максимович
ОГРНИП: 320703100031915
ИНН: 701770650489
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
