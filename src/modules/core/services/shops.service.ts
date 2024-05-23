import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { ShopEntity } from "../entities/shop.entity";
import { ShopDto } from "../dto/shop.dto";
import { UpdateShopDto } from "../dto/update-shop.dto";

 @Injectable()
 export class ShopsService{
    constructor(
        @Inject('SHOPS_REPOSITORY')
        private respository: Repository<ShopEntity>
    ){}

    async finAll(){
        return await this.respository.find();
    }

    async findOne(id:string){
        const shop = await this.respository.findOne({
            where: {id},
        });
        
        if(!shop) {
            throw new NotFoundException('Tienda no encontrada');
        }
        return shop;
    }

    async create(shopDto:ShopDto){
        return this.respository.create(shopDto)
    }

    async update(id:string, shopDto:UpdateShopDto){
        const shop = await this.respository.findBy({id});
        if(!shop){
            throw new NotFoundException('No se encontro la tienda')
        }
        return this.respository.update(id, shopDto);
    }

    async remove(id:string){
        const shop = await this.respository.findBy({ id });
        return this.respository.softRemove(shop);
    }
 }