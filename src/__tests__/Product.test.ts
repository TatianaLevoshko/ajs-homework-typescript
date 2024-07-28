import Product from '../domain/Product';

test('should create a Product instance with correct properties', () => {
  const product = new Product(1, 'Generic Product', 500);

  expect(product.id).toBe(1);
  expect(product.name).toBe('Generic Product');
  expect(product.price).toBe(500);
});
