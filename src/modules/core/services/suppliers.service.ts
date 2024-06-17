import { HttpException, HttpStatus, Inject, Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { SupplierEntity } from "../entities/supplier.entity";
import { SupplierDto } from "../dto/supplier.dto";
import { CoreEnum } from "src/modules/enums/providers.enum";
import { UpdateSupplierDto } from "../dto/update-supplier.dto";

@Injectable()
export class SuppliersService{

    constructor(
        @Inject(CoreEnum.SUPPLIER_REPOSITORY) 
        private repository:Repository<SupplierEntity>
    ){}

    async findAll(){
        const suppliers = await this.repository.find()
        console.log(suppliers)
        return suppliers
    }

    async findOne(id:string){
        const supplier = await this.repository.findOne({
            where:{id},
        });
        if(!supplier){
            throw new NotFoundException('Provedor no encontrado')
        };
        return supplier;
    }

    async findSupplierByUser(id:string){
        const supplier = await this.repository.findOne({
            where:{user:{id}}
        })
        return supplier
    }
    

    async create(supplier: SupplierDto){
        const newSupplier = this.repository.create(supplier)
        return await this.repository.save(newSupplier)
    }

    async update(id:string, updateSupplier:UpdateSupplierDto){
        const supplier = await this.repository.findOne({where:{id}});
        if(!supplier){
            throw new NotFoundException('Proveedor no encontrado')
        }
        return this.repository.update(id,updateSupplier);
    }

    async remove(id:string){
        const supplier = await this.repository.findOneBy({id})
        if(!supplier){
            throw this.repository.softRemove(supplier);
        }
    }

}