import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { ShipperEntity } from "../entities/shipper.entity";

@Injectable()
export class ShippersService{
    constructor(@Inject('SHIPPERS_REPOSITORY')
    private repository: Repository<ShipperEntity>,){}

    async findAll(){
        return await this.repository.find()
    }

    async findOne(id:string){
        const shipper = await this.repository.findOne({where: {id},});
        if(!shipper){
            throw new NotFoundException ('Trasportista Encontrado')
        }
        return shipper;
    }

    async create(){
        const data = this.repository.create()
    }
}