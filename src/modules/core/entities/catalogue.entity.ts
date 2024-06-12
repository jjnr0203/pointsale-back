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

  @Column({ type: 'varchar', name: 'name', nullable:false, comment:'nombre de catálogo' })
  name: string;

  @Column({ type: 'int', name: 'code', nullable:true, comment:'código para identificar'})
  code: number;

  @Column({ type: 'varchar', name: 'description', comment:'descripción del catálogo' })
  description: string;

  @Column({ type: 'varchar', name: 'type', nullable:false, comment:'tipo de catálogo' })
  type: string;
}
