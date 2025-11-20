import { Injectable } from "@nestjs/common";
import { Chamado, Situacao } from "./chamado.entity";

@Injectable()
export class ChamadoService {
    async getAll() {
        const chamados = await Chamado.find();

        return chamados;
    }

    async findOne(id: number) {
        const chamado = await Chamado.findOne({ where: { id: id }});

        return chamado;
    }

    async create(data: any) {
        const chamado = Chamado.create({ ...data, situacao: Situacao.Aberto });

        return await chamado.save();
    }
    
    async update(id: number, data: any) {
        return await Chamado.update(id, { ...data });
    }

    async remove(id: number) {
        await Chamado.delete(id);
    }
}