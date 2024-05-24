import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ShipperEntity } from "./shipper.entity";
import { ShopEntity } from "./shop.entity";

@Entity ('supplier', {schema: 'core'})
export class SupplierEntity{
    @PrimaryGeneratedColumn('uuid')
    id: String;

    @CreateDateColumn({
        name: 'create_at',
        type: 'timestamp',
        default: ()=> 'CURRENT_TIMESTAMP', 
    })
    create_at: Date;
    
    @DeleteDateColumn({        
        name: 'delete_at',
        type: 'timestamp',
    })
    delete_at: Date;
    
    @Column({
        name: 'shipperName',
        type: 'varchar'
    })
    shipperName: String

    @Column({
        name: 'phone',
        type: 'varchar',
    })
    phone: String

    @Column({
        name: 'email',
        type: 'varchar',
    })
    email: String;

    @ManyToOne(()=>ShipperEntity, {nullable: false})
    @JoinColumn({name:'shipper_id', referencedColumnName:'id'})
    shipper: ShipperEntity

    @ManyToOne(()=>ShopEntity, {nullable: false})
    @JoinColumn({name:'shop_id', referencedColumnName:'id'})
    shop: ShopEntity

}
