import {Entity, PrimaryGeneratedColumn,Column,} from 'typeorm';

@Entity('categories', {
    schema: 'core',
  })
  export class categoryEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
 
  @Column({
    name: 'categoryname',
    type: 'varchar',
  })
  categoryname: string;

  @Column({
    name: 'description',
    type: 'varchar',
  })
  description: string;

}