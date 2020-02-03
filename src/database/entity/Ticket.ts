import { User } from './User';
import { Priorities } from './../enums/TicketPriorities';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Ticket {
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

  @Column({
    type: 'enum',
    enum: Priorities,
    default: Priorities.Low
  })
  priority: Priorities;

  @ManyToOne({
    type => User, user => tickets.user
  })
  user: User;
}
