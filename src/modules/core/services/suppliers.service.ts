import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { In, Repository } from "typeorm";
import { SupplierEntity } from "../entities/supplier.entity";
import { CoreEnum } from "src/modules/enums/providers.enum";
import { UpdateSupplierDto } from "../dto/update-supplier.dto";
import { ShopEntity } from "../entities/shop.entity";
import { ProductDto } from "../dto/product.dto";
import { SupplierDto } from "../dto/supplier.dto";

@Injectable()
export class SuppliersService{
    constructor(
        @Inject(CoreEnum.SUPPLIER_REPOSITORY) 
        private repository:Repository<SupplierEntity>,

        @Inject(CoreEnum.SHOP_REPOSITORY)
        private readonly shopRepository: Repository<ShopEntity>,
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

    async create(supplierDto:SupplierDto){
        const shops = await this.shopRepository.find({
            where: {id:In(supplierDto.shipper)},
        })
        console.log(shops)
        const {shipper, ...product} = supplierDto
        const newProduct = this.repository.create({
            ...product, 
            shops
        })
        return await this.repository.save(newProduct)
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