const { test, expect } = require('@playwright/test');

test('RETO 1 - no debería permitirse agregar un producto con cantidad cero', async ({ page }) => {
  await page.goto('/');

  const hamburguesa = page.locator('article.card').filter({
    has: page.getByRole('heading', { name: 'Hamburguesa Clásica' })
  });

// TODO 1
await hamburguesa.locator('[data-minus="1"]').click();

// TODO 2
await hamburguesa
  .getByRole('button', { name: 'Agregar' })
  .click();

// TODO 3
await expect(
  page.getByText('Hamburguesa Clásica', { exact: true })
).toHaveCount(1);
  //
  // Pista: piensa qué texto podrías buscar y cuántas veces
  // debería aparecer "Hamburguesa Clásica" si NO fue agregada.


  // Ejemplos de estructuras que puedes utilizar:
  // await hamburguesa.locator('...').click();
  // await hamburguesa.getByRole('button', { name: '...' }).click();
  // await expect(page.getByText('...', { exact: true })).toHaveCount(...);
});