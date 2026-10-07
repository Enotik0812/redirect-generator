/**
 * Составляет команды curl, которыми можно проверить каждое правило:
 * код ответа и адрес, куда ведёт редирект.
 *
 * @param {import('./options.js').Options} options
 * @returns {{ title: string, command: string, expect: string }[]}
 */
export function buildCurlChecks(options) {
  // TODO: для каждого правила — исходный адрес, ожидаемый код и Location
  //       пример: curl -sI http://www.example.com/ | grep -iE "^(HTTP|location)"
  throw new Error('buildCurlChecks: не реализовано');
}
