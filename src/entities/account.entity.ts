import { Entity, PrimaryColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import UserEntity, { IUserEntity } from './user.entity';

export interface IAccount {
  userId: number;
  firstname: string;
  lastname: string;
  birthDate: Date;
  sex: string;
  emailValidated: number;
  cgu: Date | null;
  newsletter: number;
  newsletterPartners: number;
  referrer: string | null;
  source: string | null;
  data: string;
}

export interface IAccountEntity extends IAccount {
  user: IUserEntity;
}

@Entity({ name: 'sampleaccount' })
export default class AccountEntity implements IAccountEntity {
  @PrimaryColumn({ name: 'user_id' })
  userId: number;

  @Column({ type: 'varchar' })
  firstname: string;

  @Column({ type: 'varchar' })
  lastname: string;

  @Column({ type: 'varchar' })
  sex: string;

  @Column({ name: 'email_validated', type: 'tinyint' })
  emailValidated: number;

  @Column({ type: 'datetime', nullable: true })
  cgu: Date | null;

  @Column({ type: 'tinyint' })
  newsletter: number;

  @Column({ name: 'newsletter_partners', type: 'tinyint' })
  newsletterPartners: number;

  @Column({ type: 'varchar', nullable: true })
  referrer: string | null;

  @Column({ type: 'varchar', nullable: true })
  source: string | null;

  @Column({ type: 'text' })
  data: string;

  @Column({ name: 'birthdate', type: 'datetime', nullable: true })
  birthDate: Date;

  @OneToOne(() => UserEntity)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: UserEntity;
}
