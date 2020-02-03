import { Inventory } from './Inventory';
import { Ticket } from './Ticket';
import { PrimaryGeneratedColumn, Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
    nullable: false
  })
  name: string;

  @Column({
    length: 100,
    nullable: false
  })
  lastname: string;

  @Column({
    length: 100,
    nullable: false
  })
  motherLastname: string;

  @Column({
    length: 100,
    nullable: false
  })
  username: string;

  @Column({
    length: 100,
    nullable: false
  })
  password: string;

  @Column({
    nullable: false
  })
  email: string;

  @Column({
    length: 100
  })
  resetCode: string;

  @Column({
    nullable: false,
    default: false
  })
  active: boolean;

  @OneToMany(
    type => Ticket,
    ticket => user.tickets
  )
  tickets: Ticket[];

  @OneToMany(
    type => Inventory,
    inventory => user.inventories
  )
  inventories: Inventory[];
}
