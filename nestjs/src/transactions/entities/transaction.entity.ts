import { BankAccount } from 'src/bank-accounts/entities/bank-account.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

export enum TransactionStatus {
  pending = 'pending',
  completed = 'completed',
  error = 'error',
}

export enum TransactionOperation {
  debit = 'debit',
  credit = 'credit',
}

@Entity({ name: 'transactions' })
export class Transaction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true, type: 'uuid' })
  related_transaction_id: string;

  @Column()
  amount: number;

  @Column()
  description: string;

  @ManyToOne(() => BankAccount)
  @JoinColumn({ name: 'bank_account_id' })
  bankAccount: BankAccount;

  @Column()
  bank_account_id: string;

  @Column({ nullable: true })
  bank_account_from_id: string;

  @Column()
  pix_key_key: string;

  @Column()
  pix_key_kind: string;

  @Column()
  status: TransactionStatus = TransactionStatus.pending;

  @Column()
  operation: TransactionOperation;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;
}
