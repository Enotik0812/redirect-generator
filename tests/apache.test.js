import { test } from 'node:test';
// import assert from 'node:assert/strict';
// import { buildHtaccess } from '../src/apache.js';

test.todo('HTTP → HTTPS одним правилом');
test.todo('https и «без www» — один переход, без цепочки');
test.todo('index.php → / не ломает запросы с параметрами');
test.todo('свои редиректы идут раньше общих правил');
