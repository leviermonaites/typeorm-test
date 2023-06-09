import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany, PrimaryGeneratedColumn, JoinColumn,
} from 'typeorm';
// import BookGenre from './book-genre.entity';
import { Field, ObjectType } from 'type-graphql';
import Author from './author.entity';
import Book from './book.entity';

@ObjectType()
@Entity({ name: 'genres' })
export default class Genre {

  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ name: 'name' })
  name: string;

  @Field()
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @Field()
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @Field(() => [Book], { nullable: true })
  @OneToMany(() => Book, book => book.genre)
  books: Book[];
}
