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
    private respository: Repository<ShopEntity>,
  ) {}

  async findAll(): Promise<ShopEntity[]> {
    return await this.respository.find();
  }


  async findOne(id: string) {
    const shop = await this.respository.findOne({
      where: { id },
    });

    if (!shop) {
      throw new NotFoundException('Tienda no encontrada');
    }
    return shop;
  }

  async create(shopDto: ShopDto) {
    return this.respository.create(shopDto);
  }

  async update(id: string, shopDto: UpdateShopDto) {
    const shop = await this.respository.findBy({ id });
    if (!shop) {
      throw new NotFoundException('No se encontro la tienda');
    }
    return this.respository.update(id, shopDto);
  }

  async findShopsByUser(userId: string) {
    const shops = await this.respository.find({
      where: { user: { id: userId } },
    });
    return shops;
  }
  async findCustomersByShop(id: string) {
    const customers = await this.respository.findOne({
      where: { id },
      relations: { customers: true },
    });
    return customers;
  }

  async remove(id: string) {
    const shop = await this.respository.findBy({ id });
    return this.respository.softRemove(shop);
  }
}
