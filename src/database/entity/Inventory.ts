import { User } from './User';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Inventory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: '255'
  })
  title: string;

  @Column({
    type: 'text'
  })
  description: string;

  @Column()
  cost: number;

  @Column()
  buyedAt: Date;

  @Column()
  photo: string;

  @Column()
  barcode: string;

  @Column({
    length: 10
  })
  invCode: string;

  @ManyToOne(
    type => User,
    user => inventories.user
  )
  user: User;
}
