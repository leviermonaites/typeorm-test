import DataLoader = require('dataloader');
import Book from '../models/book.entity';
import { getRepository } from 'typeorm';
import Genre from '../models/genre.entity';

const batchBooks = async (genreIds: string[]) => {
  console.log('I AM HERE 1');
  const bookGenres = await getRepository(Genre)
    .createQueryBuilder('genre')
    .leftJoinAndSelect('genre.books', 'books')
    .where('genre.id IN(:...ids)', { ids: genreIds })
    .getMany();
  console.log('I AM HERE 2');
  const genreIdToBooks: { [key: string]: Book[] } = {};
  bookGenres.forEach(bookGenre => {
    // console.log(bookGenre.books);
    if (!genreIdToBooks[bookGenre.id]) {
      genreIdToBooks[bookGenre.id] = [(bookGenre as any).books];
    } else {
      genreIdToBooks[bookGenre.id].push((bookGenre as any).books);
    }
  });
  return genreIds.map(genreId => genreIdToBooks[genreId]);
};
const genreBooksLoader = () => new DataLoader(batchBooks);

export {
  genreBooksLoader,
};
