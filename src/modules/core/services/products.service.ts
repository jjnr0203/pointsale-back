import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { ProductEntity } from "../entities/product.entity";
import { ProductDto } from "../dto/product.dto";
import { UpdateProductDto } from "../dto/update-product.dto";
import { CoreEnum } from "src/modules/enums/providers.enum";

 @Injectable()
 export class ProductsService{
    constructor(
        @Inject(CoreEnum.PRODUCT_REPOSITORY)
        private repository: Repository<ProductEntity>
    ){}

    async findAll(){
        return await this.repository.find();
    }

    async findOne(id:string){
        const product = await this.repository.findOne({
            where: {id},
        });
        if(!product){
            throw new NotFoundException('Producto no encontrado');
        }
        return product;
    }

    async create(productDto:ProductDto){
        return this.repository.create(productDto)
    }

    async update(id:string, productDto:UpdateProductDto){
        const product = await this.repository.findBy({id});
        if(!product){
            throw new NotFoundException('No se encontro el producto')
        }
        return this.repository.update(id, productDto);

    }

    async remove(id:string){
        const product = await this.repository.findBy({id});
        return this.repository.softRemove(product);
}
}