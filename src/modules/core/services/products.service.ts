import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { In, Repository } from "typeorm";
import { ProductEntity } from "../entities/product.entity";
import { ProductDto } from "../dto/product.dto";
import { UpdateProductDto } from "../dto/update-product.dto";
import { CoreEnum } from "src/modules/enums/providers.enum";
import { ShopEntity } from "../entities/shop.entity";

@Injectable()
export class ProductsService {
    constructor(
        @Inject(CoreEnum.PRODUCT_REPOSITORY)
        private repository: Repository<ProductEntity>,

        @Inject(CoreEnum.SHOP_REPOSITORY)
        private readonly shopRepository: Repository<ShopEntity>,

    ) { }


    async findAll() {
        return await this.repository.find();
    }

    async findByShop(idShop: string) {
        return await this.repository.find({
            where: { shops: { id: idShop } },
        });

    }

    async findOne(id: string) {
        const product = await this.repository.findOne({
            where: { id },
        });
        if (!product) {
            throw new NotFoundException('Producto no encontrado');
        }
        return product;
    }

    async create(productDto: ProductDto) {
        const newProduct = this.repository.create(productDto)
        return await this.repository.save(newProduct)
    }

    async update(id: string, productDto: UpdateProductDto) {
        const product = await this.repository.findBy({ id });
        if (!product) {
            throw new NotFoundException('No se encontro el producto')
        }
        return this.repository.update(id, productDto);

    }

    async remove(id: string) {
        const product = await this.repository.findBy({ id });
        return this.repository.softRemove(product);
    }
}