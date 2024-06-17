import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { ShipperEntity } from "../entities/shipper.entity";
import { ShipperDto } from "../dto/shipper.dto";
import { UpdateShipperDto } from "../dto/update-shipper.dto";
import { CoreEnum } from "src/modules/enums/providers.enum";
import { SupplierEntity } from "../entities/supplier.entity";
import { UsersService } from "src/modules/auth/services";

@Injectable()
export class ShippersService{
    constructor(
        @Inject(CoreEnum.SHIPPER_REPOSITORY) 
        private repository:Repository<ShipperEntity>,
        private userService: UsersService
    ){}

    async findAll(){
        return await this.repository.find();
    }


    async findShippersBySuppierId(supplierId: SupplierEntity) {
        const supplier = await this.repository.find({
          where: { supplier: supplierId },
          relations: ['supplier'],
        });
        return supplier
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

    async create(shipperDto: ShipperDto) {
       const{user, supplier}= shipperDto;
       const newUser = await this.userService.create(user)
       shipperDto.user = newUser
       const newShipper = this.repository.create(shipperDto)
       await this.repository.save(shipperDto)
       return newShipper
    }

   /*  async create(shipper:ShipperDto){
        const newShipper = this.repository.create(shipper)
        return await this.repository.save(newShipper)
    } */

    /* async update(id:string, updateShipper:UpdateShipperDto){
        const shipper = await this.repository.findOne({where:{id}});
        if(!shipper){
            throw new NotFoundException('Proveedor no encontrado')
        }
        return this.repository.update(id,updateShipper);
    } */

    async remove(id:string){   
        return this.repository.softDelete(id);
    }
}