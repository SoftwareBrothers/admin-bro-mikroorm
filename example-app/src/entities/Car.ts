/* eslint-disable no-use-before-define */
import {
  BaseEntity,
  Entity,
  ManyToOne,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';

import type { Seller } from './Seller.js';
import type { User } from './User.js';

@Entity({ tableName: 'cars' })
export class Car extends BaseEntity {
  @PrimaryKey()
    id: number;

  @Property({ fieldName: 'name', columnType: 'text' })
    name: string;

  @Property({ fieldName: 'meta', columnType: 'jsonb', default: '{}' })
    meta: Record<string, any>;

  @Property({ fieldName: 'created_at', columnType: 'timestamptz' })
    createdAt: Date = new Date();

  @Property({
    fieldName: 'updated_at',
    columnType: 'timestamptz',
    onUpdate: () => new Date(),
  })
    updatedAt: Date = new Date();

  @ManyToOne(() => 'User', { mapToPk: true })
    owner: User;

  @ManyToOne(() => 'Seller', { mapToPk: true })
    seller: Seller;
}
