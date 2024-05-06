import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CatalogueEntity } from "../core/entities/catalogue.entity";

@Entity('users',{schema:'auth'})
export class UserEntity{
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @CreateDateColumn({
        name: 'created_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    })
    createdAt: Date;

    @DeleteDateColumn({
        name: 'deleted_at',
        type: 'timestamp',
        nullable: true,
    })
    deletedAt: Date;
    
    @Column({type:'varchar',name: 'name', nullable:false})
    name:string;

    @Column({type:'varchar', name:'email', nullable:false})
    email:string;

    @Column({type:'varchar',name:'password', nullable:false})
    password:string;

    @Column({type:'uuid',name:'role_id', nullable:false})
    roleID:string
    @ManyToOne(()=> CatalogueEntity)
    @JoinColumn({name:'role_id', referencedColumnName:'id'})
    roleUser:CatalogueEntity;

}