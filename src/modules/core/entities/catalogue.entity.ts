import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('catalogues',{schema:'core'})
export class CatalogueEntity{
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column({type:'varchar',name:'name'})
    name:string;

    @Column({type:'varchar',name:'description'})
    description:string;

    @Column({type:'varchar',name:'type'})
    type:string;
}