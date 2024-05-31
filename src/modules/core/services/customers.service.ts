import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CustomerEntity } from '../entities/customer.entity';
import { CustomerDto} from '../dto/customer.dto';
import { UpdateCustomerDto } from '../dto/update-customer.dto';

@Injectable()
export class CustomersService {
  constructor(
    @Inject('CUSTOMER_REPOSITORY')
    private repository: Repository<CustomerEntity>,
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

  async create(customerDto: CustomerDto) {
    const newUser = await this.repository.create(customerDto);
    return await this.repository.save(newUser)
  }

  async remove(id: string) {
    const customer = await this.repository.findBy({ id });
    return this.repository.softRemove(customer);
  }
}
