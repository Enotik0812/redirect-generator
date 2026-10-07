/**
 * Настройки, которые пользователь выбирает в форме.
 * Генераторы (apache.js, nginx.js, curl.js) получают объект такого вида.
 *
 * @typedef {Object} Options
 * @property {string}  domain         Основной домен без протокола, например "example.com"
 * @property {boolean} https          Перенаправлять HTTP → HTTPS
 * @property {'add'|'remove'|'keep'} www            Что делать с www
 * @property {'add'|'remove'|'keep'} trailingSlash  Что делать со слешем в конце адреса
 * @property {boolean} stripIndex     index.php / index.html → /
 * @property {{from: string, to: string}[]} custom  Свои редиректы «старый адрес → новый»
 */

/** @type {Options} */
export const defaultOptions = {
  domain: '',
  https: true,
  www: 'remove',
  trailingSlash: 'keep',
  stripIndex: true,
  custom: [],
};

/**
 * Приводит данные формы к Options и проверяет их.
 *
 * @param {Partial<Options>} raw
 * @returns {{ options: Options, errors: string[] }}
 */
export function normalizeOptions(raw) {
  // TODO: убрать протокол и слеш из домена, проверить формат домена,
  //       отбросить пустые пары в custom, вернуть понятные ошибки
  throw new Error('normalizeOptions: не реализовано');
}

/**
 * Разбирает вставленный текст со своими редиректами.
 * Каждая строка: «старый адрес» и «новый адрес» через пробел, таб или запятую.
 *
 * @param {string} text
 * @returns {{from: string, to: string}[]}
 */
export function parseCustomRedirects(text) {
  // TODO: поддержать разделители пробел / таб / запятая / точка с запятой
  throw new Error('parseCustomRedirects: не реализовано');
}
