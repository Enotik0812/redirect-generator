/**
 * Собирает конфиг для nginx: отдельные server-блоки для лишних
 * зеркал и правила внутри основного сервера.
 *
 * @param {import('./options.js').Options} options
 * @returns {string} готовый фрагмент конфига nginx
 */
export function buildNginx(options) {
  // TODO: server { return 301 ... } для зеркал, rewrite для index.php и слеша,
  //       location = /old { return 301 /new; } для своих редиректов
  throw new Error('buildNginx: не реализовано');
}
