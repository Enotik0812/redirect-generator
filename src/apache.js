/**
 * Собирает правила для .htaccess (Apache, mod_rewrite).
 *
 * Порядок важен: сначала свои редиректы, потом протокол и зеркало
 * одним правилом (чтобы не было цепочки http → https → без www),
 * потом index.php и слеш.
 *
 * @param {import('./options.js').Options} options
 * @returns {string} готовый текст для .htaccess
 */
export function buildHtaccess(options) {
  // TODO: RewriteEngine On + правила в правильном порядке
  throw new Error('buildHtaccess: не реализовано');
}
