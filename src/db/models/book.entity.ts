import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column, OneToMany,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
// import BookGenre from './book-genre.entity';
import Author from './author.entity';
import { Field, ObjectType } from 'type-graphql';
import Genre from './genre.entity';

@ObjectType()
@Entity({ name: 'books' })
export default class Book {

  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column({ name: 'author_id' })
  authorId: number;

  @Column({ name: 'genre_id' })
  genreId: number;

  @Field()
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @Field()
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @Field(() => Author)
  author: Author;

  @Field(() => Genre)
  @ManyToOne(() => Genre, genre => genre.books)
  @JoinColumn({ name: 'genre_id', referencedColumnName: 'id' })
  genre: Promise<Genre>;
  // Associations

  // @ManyToOne(() => Author, author => author.bookConnection, {
  //   primary:
  //     true
  // })
  // @JoinColumn({ name: 'author_id' })
  // authorConnection: Promise<Author>;

}
