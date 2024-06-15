import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { In, Repository } from 'typeorm';
import { CustomerEntity } from '../entities/customer.entity';
import { CustomerDto} from '../dto/customer.dto';
import { UpdateCustomerDto } from '../dto/update-customer.dto';
import { CoreEnum } from 'src/modules/enums/providers.enum';
import { ShopEntity } from '../entities/shop.entity';

@Injectable()
export class CustomersService {
  constructor(
    @Inject('CUSTOMER_REPOSITORY')
    private repository: Repository<CustomerEntity>,
    @Inject(CoreEnum.SHOP_REPOSITORY)
    private readonly shopRepository: Repository<ShopEntity>,
  ) {}

  async findAll() {
    return await this.repository.find();
  }

  async findOne(id: string)  {
    const customer = await this.repository.findOne({
      where: { id },
    });

    if (!customer) {
      throw new NotFoundException('Cliente no encontrado');
    }
    return customer;
  }

  async update(id: string, customerDto: UpdateCustomerDto) {
    const customer = await this.repository.findBy({ id });
    if (!customer) {
      throw new NotFoundException('cliente no encontrado');
    }
    return this.repository.update(id, customerDto);
  }

  async findByShop(id:string){
   /*  const shop= await this.shopRepository.findOne({
      where:{id:id}
    }) */
    const customers= await this.repository.find({
      where:{shops:{id}}
    })
    return customers
  }

  async create(customerDto: CustomerDto) {
    const shops= await this.shopRepository.find({
      where:{id: In(customerDto.shopIds)}
    })

    const {shopIds, ...customer} = customerDto
    const newCustomer = this.repository.create({
      ...customer,
      shops
    });
    return await this.repository.save(newCustomer)
  }

  async remove(id: string) {
    const customer = await this.repository.findBy({ id });
    return this.repository.softRemove(customer);
  }
}
