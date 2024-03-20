import { Book } from '../models/book.model';
import { http, HttpResponse } from 'msw';
import { fakerKO as faker } from '@faker-js/faker';

const mockBestBooksData: Book[] = Array.from({ length: 10 }).map((item, index) => ({
  id: index,
  title: faker.lorem.sentence(),
  img: faker.helpers.rangeToNumber({ min: 20, max: 50 }),
  categoryId: faker.helpers.rangeToNumber({ min: 0, max: 4 }),
  form: '종이책',
  isbn: faker.helpers.rangeToNumber({ min: 0, max: 4 }),
  summary: faker.lorem.paragraph(),
  detail: faker.lorem.paragraph(),
  author: faker.person.firstName(),
  pages: faker.helpers.rangeToNumber({ min: 100, max: 500 }),
  contents: faker.lorem.paragraph(),
  price: faker.helpers.rangeToNumber({ min: 10000, max: 50000 }),
  pubDate: faker.date.past().toISOString(),
  likes: faker.helpers.rangeToNumber({ min: 0, max: 100 }),
}));

export const bestBooks = http.get('http://localhost:9999/books/best', () => {
  return HttpResponse.json(mockBestBooksData, {
    status: 200,
  });
});
