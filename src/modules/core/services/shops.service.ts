import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ShopEntity } from '../entities/shop.entity';
import { ShopDto } from '../dto/shop.dto';
import { UpdateShopDto } from '../dto/update-shop.dto';
import { CoreEnum } from 'src/modules/enums/providers.enum';
import { UserEntity } from 'src/modules/auth/entities/user.entity';

@Injectable()
export class ShopsService {
  constructor(
    @Inject(CoreEnum.SHOP_REPOSITORY)
    private repository: Repository<ShopEntity>,
  ) {}

  async findAll(): Promise<ShopEntity[]> {
    return await this.repository.find();
  }


  async findOne(id: string) {
    const shop = await this.repository.findOne({
      where: { id },
    });

    if (!shop) {
      throw new NotFoundException('Tienda no encontrada');
    }
    return shop;
  }

  async create(shopDto: ShopDto) {
      const newShop = this.repository.create(
        shopDto
      )
      return await this.repository.save(newShop)
  } 

  async update(id: string, shopDto: UpdateShopDto) {
    const shop = await this.repository.findBy({ id });
    if (!shop) {
      throw new NotFoundException('No se encontro la tienda');
    }
    return this.repository.update(id, shopDto);
  }

  async findShopsByUser(userId: string) {
    const shops = await this.repository.find({
      where: { user: { id: userId } },
    });
    return shops;
  }
  async findCustomersByShop(id: string) {
    const customers = await this.repository.findOne({
      where: { id },
      relations: { customers: true },
    });
    return customers;
  }

  async remove(id: string) {
    const shop = await this.repository.findBy({ id });
    return this.repository.softRemove(shop);
  }
}
