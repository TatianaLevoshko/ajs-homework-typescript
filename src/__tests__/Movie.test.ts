import Movie from '../domain/Movie';

test('should create a Movie instance with correct properties', () => {
  const movie = new Movie(1, 'Avengers', 1500, 2012, 'USA', 'Avengers, assemble!', 'sci-fi, action, fantasy, adventure', '137 мин. / 02:17');

  expect(movie.id).toBe(1);
  expect(movie.name).toBe('Avengers');
  expect(movie.prise).toBe(1500);
  expect(movie.year).toBe(2012);
  expect(movie.country).toBe('USA');
  expect(movie.slogan).toBe('Avengers, assemble!');
  expect(movie.genre).toBe('sci-fi, action, fantasy, adventure');
  expect(movie.time).toBe('137 мин. / 02:17');
});
