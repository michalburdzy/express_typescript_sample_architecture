import { Entity, PrimaryColumn, Column } from 'typeorm';

export interface IUserEntity {
  id: number;
  name: string;
  username: string;
  email: string;
  password: string;
  usertype: string;
  block: number;
  sendEmail: number;
  registerDate: Date;
  lastvisitDate: Date;
  activation: string;
  params: string;
  lastResetTime: Date;
  resetCount: number;
}

@Entity({ name: 'sampleusers' })
export default class UserEntity implements IUserEntity {
  @PrimaryColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  username: string;

  @Column({ type: 'varchar' })
  email: string;

  @Column({ type: 'varchar' })
  password: string;

  @Column({ type: 'varchar' })
  usertype: string;

  @Column({ type: 'tinyint' })
  block: number;

  @Column({ type: 'tinyint' })
  sendEmail: number;

  @Column({ type: 'datetime' })
  registerDate: Date;

  @Column({ type: 'datetime' })
  lastvisitDate: Date;

  @Column({ type: 'varchar' })
  activation: string;

  @Column({ type: 'varchar' })
  params: string;

  @Column({ type: 'datetime' })
  lastResetTime: Date;

  @Column({ type: 'int' })
  resetCount: number;
}
