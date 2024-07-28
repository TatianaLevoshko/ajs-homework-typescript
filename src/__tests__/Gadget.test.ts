import Gadget from '../domain/Gadget';

test('should create a Gadget instance with correct properties', () => {
  const gadget = new Gadget(1, 'iPhone', 1000, 'iPhone 12', 'Apple');

  expect(gadget.id).toBe(1);
  expect(gadget.name).toBe('iPhone');
  expect(gadget.prise).toBe(1000);
  expect(gadget.model).toBe('iPhone 12');
  expect(gadget.manufacturer).toBe('Apple');
});
