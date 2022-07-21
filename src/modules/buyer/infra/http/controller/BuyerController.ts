import { Request, Response } from 'express';
import CreateBuyerService from '../../../services/CreateBuyerService';
import ListBuyerService from '../../../services/ListBuyerService';
import ShowBuyerService from '../../../services/ShowBuyerService';
import DeleteBuyerService from '../../../services/DeleteBuyerService';
import UpdateBuyerService from '../../../services/UpdateBuyerService';
import BuyerRepository from '../../../../../modules/buyer/typeorm/repositories/BuyerRepository';
import { container } from 'tsyringe';

export default class BuyerController {
    public async index(req: Request, res: Response): Promise<Response> {
        const page = req.query.page ? Number(req.query.page) : 1;
        const limit = req.query.limit ? Number(req.query.limit) : 15;

        const listBuyer = container.resolve(ListBuyerService);

        const buyer = await listBuyer.execute({ page, limit });

        return res.json(buyer);
    }

    public async show(req: Request, res: Response) {
        const { id } = req.params;

        const showBuyer = container.resolve(ShowBuyerService);

        const buyer = await showBuyer.execute({ id });

        return res.json(buyer);
    }

    public async create(req: Request, res: Response) {
        const { name, email, document_type, document_serial } = req.body;

        const createBuyer = container.resolve(CreateBuyerService);

        const buyer = await createBuyer.execute({
            name, email, document_type, document_serial
        });

        return res.json(buyer)
    }

    public async update(req: Request, res: Response): Promise<Response> {
        const { name, email, document_type, document_serial } = req.body;

        const { id } = req.params;

        const updateBuyer = container.resolve(UpdateBuyerService);

        const buyer = await updateBuyer.execute({
            id,
            name, email, document_type, document_serial
        });

        return res.json(buyer)
    }

    public async delete(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        const deleteBuyer = container.resolve(DeleteBuyerService);

        await deleteBuyer.execute({ id });

        return res.json([]);
    }
}
