import { HttpException, HttpStatus, Inject, Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { ShipperEntity } from "../entities/shipper.entity";
import { ShipperDto } from "../dto/shipper.dto";
import { UpdateShipperDto } from "../dto/update-shipper.dto";
import { CoreEnum } from "src/modules/enums/providers.enum";
import { SupplierEntity } from "../entities/supplier.entity";

@Injectable()
export class ShippersService{
    constructor(
        @Inject(CoreEnum.SHIPPER_REPOSITORY) 
        private repository:Repository<SupplierEntity>
    ){}

    async findAll(){
        return await this.repository.find()
    }

    async findOne(id:string){
        const shipper = await this.repository.findOne({
            where: {id},
        });
        if(!shipper){
            throw new NotFoundException ('Trasportista Encontrado')
        }
        return shipper;
    }

    async create(shipper:ShipperDto){
        const newShipper = this.repository.create(shipper)
        return await this.repository.save(newShipper)
    }

    /* async update(id:string, updateShipper:UpdateShipperDto){
        const shipper = await this.repository.findOne({where:{id}});
        if(!shipper){
            throw new NotFoundException('Proveedor no encontrado')
        }
        return this.repository.update(id,updateShipper);
    } */

    async remove(id:string){
        const shipper = await this.repository.findOneBy({id})
        if(!shipper){
            throw this.repository.softRemove(shipper);
        }
    }
}