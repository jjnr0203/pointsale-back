import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { In, Repository } from "typeorm";
import { SupplierEntity } from "../entities/supplier.entity";
import { CoreEnum } from "src/modules/enums/providers.enum";
import { UpdateSupplierDto } from "../dto/update-supplier.dto";
import { ShopEntity } from "../entities/shop.entity";
import { ProductDto } from "../dto/product.dto";
import { SupplierDto } from "../dto/supplier.dto";
import { UsersService } from "src/modules/auth/services";

@Injectable()
export class SuppliersService{
    constructor(
        @Inject(CoreEnum.SUPPLIER_REPOSITORY) 
        private repository:Repository<SupplierEntity>,
        private usersService:UsersService
    ){}

    async findAll(){
        const suppliers = await this.repository.find()
        console.log(suppliers)
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
    async findByUser(id:string){
        const supplier = await this.repository.findOne({
            where:{user:{id}},
        });
        if(!supplier){
            throw new NotFoundException('Provedor no encontrado')
        };
        return supplier;
    }
    async findByShop(id:string){
        const suppliers = await this.repository.find({
            where:{shops:{id}},
        });
        if(!suppliers){
            throw new NotFoundException('Provedor no encontrado')
        };
        return suppliers;
    }

    async create(supplierDto:SupplierDto){
        const {user, ...rest} = supplierDto
        const newUser = await this.usersService.create(user)
        supplierDto.user = newUser;
        const newSupplier = this.repository.create(supplierDto)
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
        const supplier = await this.repository.findBy({id})
        if(!supplier){
            throw this.repository.softRemove(supplier);
        }
    }

}