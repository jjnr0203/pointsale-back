import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { EmployeeEntity } from '../entities/employee.entity';
import { EmployeDto } from '../dto/employee.dto';

@Injectable()
export class EmployesService {
  constructor(
    @Inject('EMPLOYEE_REPOSITORY')
    private repository: Repository<EmployeeEntity>,
  ) {}

  async findAll() {
    return await this.repository.find();
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

  async create(EmployesDto: EmployeDto) {
    const newEmploye = await this.repository.create(EmployesDto);
    return await this.repository.save(newEmploye)
  }

  async remove(id: string) {
    const employe = await this.repository.findBy({ id });
    return this.repository.softRemove(employe);
  }

}
