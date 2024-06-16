import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { EmployeeEntity } from '../entities/employee.entity';
import { EmployeDto } from '../dto/employee.dto';
import { UsersService } from 'src/modules/auth/services';

@Injectable()
export class EmployesService {
  newUser: any [];

  constructor(
    @Inject('EMPLOYEE_REPOSITORY')
    private repository: Repository<EmployeeEntity>,
    private userService: UsersService,
  ) {}

  async findAll() {
    return await this.repository.find();
  }

  async findEmployeesByShop(shopId: string): Promise<EmployeeEntity[]> {
    const employees = await this.repository
      .createQueryBuilder('employee')
      .leftJoinAndSelect('employee.user', 'user') 
      .where('employee.shop_id = :shopId', { shopId })
      .getMany();
  
    return employees;
  }

  async findOne(id: string)  {
    const employe = await this.repository.findOne({
      where: { id },
    });

    if (!employe) {
      throw new NotFoundException('Empleado no encontrado');
    }
    return employe;
  }

    async create(employeDto: EmployeDto) {
      /* try {
          const { user, shop } = employeDto;
          let newUser;
          const newEmployee = this.repository.create({ user, shop });
          await this.repository.save(newEmployee);
          employeDto.user = newUser.id
          employeDto.shop = employeDto.shop
  
          const newEmploye = this.repository.create(employeDto)
          return newEmployee;
      } catch (error) {
          console.error(error);
          throw new Error('Error al crear el empleado');
      } */
     console.log(employeDto)
     const{user, shop}= employeDto;
     const newUser = await this.userService.create(user)
     employeDto.user = newUser
     const newEmployee = this.repository.create(employeDto)
     await this.repository.save(employeDto)
     return newEmployee

  }
  

  async remove(id: string) {
    const employe = await this.repository.findBy({ id });
    return this.repository.softRemove(employe);
  }

}
