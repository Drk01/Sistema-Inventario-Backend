import {Inventory} from './Inventory';
import {Ticket} from './Ticket';
import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';

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
    nullable: false,
    unique: true
  })
  username: string;

  @Column({
    length: 100,
    nullable: false
  })
  password: string;

  @Column({
    nullable: false,
    unique: true
  })
  email: string;

  @Column({
    length: 100,
    nullable: true
  })
  resetCode: string;

  @Column({
    nullable: false,
    default: 0
  })
  active: boolean;

  @OneToMany(
    type => Ticket,
      ticket => ticket.user
  )
  tickets: Ticket[];

  @OneToMany(
    type => Inventory,
      inventory => inventory.user
  )
  inventories: Inventory[];
}
