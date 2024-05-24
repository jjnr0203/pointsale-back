import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { ProductEntity } from "../entities/product.entity";
import { ProductDto } from "../dto/product.dto";
import { UpdateProductDto } from "../dto/update-product.dto";

 @Injectable()
 export class ProductsService{
    constructor(
        @Inject('PRODUCTS_REPOSITORY')
        private respository: Repository<ProductEntity>
    ){}

    async finAll(){
        return await this.respository.find();
    }

    async findOne(id:string){
        const product = await this.respository.findOne({
            where: {id},
        });
        if(!product){
            throw new NotFoundException('Producto no encontrado');
        }
        return product;
    }

    async create(productDto:ProductDto){
        return this.respository.create(productDto)
    }

    async update(id:string, productDto:UpdateProductDto){
        const product = await this.respository.findBy({id});
        if(!product){
            throw new NotFoundException('No se encontro el producto')
        }
        return this.respository.update(id, productDto);

    }

    async remove(id:string){
        const product = await this.respository.findBy({id});
        return this.respository.softRemove(product);
}
}