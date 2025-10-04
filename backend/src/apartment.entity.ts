import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Apartment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  unit_name: string;

  @Column()
  unit_number: string;

  @Column()
  project: string;

  @Column({ nullable: true, type: 'text' })
  description: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column()
  bedrooms: number;

  @Column()
  bathrooms: number;

  @Column('decimal', { precision: 10, scale: 2 })
  area: number;

  @Column()
  floor: number;

  @Column({ default: true })
  is_available: boolean;

  @Column()
  order: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}