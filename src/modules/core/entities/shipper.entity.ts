import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('shippers',{schema: 'core'})
export class ShipperEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn ({
        name: 'create_at',
        type: 'timestamp',
        default:()=> 'CURRENT_TIMESTAMP', 
    })
    create_at: Date;

    @DeleteDateColumn({
        name: 'delete_at',
        type: 'timestamp',
    })
    delete_at: Date;   
}

