"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Movie_1 = __importDefault(require("../domain/Movie"));
test('should create a Movie instance with correct properties', () => {
    const movie = new Movie_1.default(1, 'Avengers', 1500, 2012, 'USA', 'Avengers, assemble!', 'sci-fi, action, fantasy, adventure', '137 мин. / 02:17');
    expect(movie.id).toBe(1);
    expect(movie.name).toBe('Avengers');
    expect(movie.prise).toBe(1500);
    expect(movie.year).toBe(2012);
    expect(movie.country).toBe('USA');
    expect(movie.slogan).toBe('Avengers, assemble!');
    expect(movie.genre).toBe('sci-fi, action, fantasy, adventure');
    expect(movie.time).toBe('137 мин. / 02:17');
});
//# sourceMappingURL=Movie.test.js.map