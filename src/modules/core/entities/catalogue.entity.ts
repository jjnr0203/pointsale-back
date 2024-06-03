import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('catalogues', { schema: 'core' })
export class CatalogueEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @DeleteDateColumn({
    name: 'deleted_at',
    type: 'timestamp',
    nullable: true,
  })
  deletedAt: Date;

  @Column({ type: 'varchar', name: 'name', nullable:false })
  name: string;

  @Column({ type: 'int', name: 'code', nullable:true})
  code: number;

  @Column({ type: 'varchar', name: 'description' })
  description: string;

  @Column({ type: 'varchar', name: 'type', nullable:false })
  type: string;
}
