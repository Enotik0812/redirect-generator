import { defaultOptions } from './options.js';

// Точка входа страницы.
// TODO:
//  1. заполнить форму значениями defaultOptions
//  2. на любое изменение формы: normalizeOptions → buildHtaccess / buildNginx / buildCurlChecks
//  3. вывести результат во вкладки, показать ошибки рядом с полями
//  4. кнопки «Скопировать» и «Скачать»

const form = document.querySelector('#rules-form');

console.info('redirect-generator: каркас загружен', { form, defaultOptions });
