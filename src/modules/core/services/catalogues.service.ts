import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CatalogueEntity } from '../entities/catalogue.entity';
import { Repository } from 'typeorm';
import { CatalogueDto } from '../dto/catalogue.dto';
import { UpdateCatalogueDto } from '../dto/update-catalogue.dto';

@Injectable()
export class CataloguesService {
  constructor(
    @Inject('CATALOGUE_REPOSITORY')
    private repository: Repository<CatalogueEntity>,
  ) {}

  async findAll() {
    return await this.repository.find();
  }

  async findOne(id: string) {
    const catalogue = await this.repository.findOne({
      where: { id },
    });

    if (!catalogue) {
      throw new NotFoundException('Catalogo no encontrado');
    }
    return catalogue;
  }
  
  async findRoleByName(name: string) {
    const catalogue = await this.repository.find({
      where: { name },
    });
    if (!catalogue) {
      throw new NotFoundException('Catalogo no encontrado');
    }
    return catalogue;
  }

  async findByType(type: string) {
    const catalogue = await this.repository.find({
      where: { type },
    });

    if (!catalogue) {
      throw new NotFoundException('Catalogo no encontrado');
    }
    return catalogue;
  }

  async update(id: string, updateCatalogueDto: UpdateCatalogueDto) {
    const catalogue = await this.repository.findBy({ id });
    if (!catalogue) {
      throw new NotFoundException('catálogo no encontrado');
    }
    await this.repository.update(id, updateCatalogueDto);
    return this.repository.findBy({id})
  }

  async create(catalogueDto: CatalogueDto) {
    const newcatalogue = await this.repository.create(catalogueDto);
    return this.repository.save(newcatalogue)
  }

  async remove(id: string) {
    const catalogue = await this.repository.findBy({ id });
    return this.repository.softRemove(catalogue);
  }
}
