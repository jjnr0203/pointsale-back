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

  async update(id: string, catalogueDto: UpdateCatalogueDto) {
    const catalogue = await this.repository.findBy({ id });
    if (!catalogue) {
      throw new NotFoundException('catálogo no encontrado');
    }
    return this.repository.update(id, catalogueDto);
  }

  async create(catalogueDto: CatalogueDto) {
    return await this.repository.create(catalogueDto);
  }

  async remove(id: string) {
    const catalogue = await this.repository.findBy({ id });
    return this.repository.softRemove(catalogue);
  }
}
