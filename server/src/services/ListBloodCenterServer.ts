import {  getRepository } from 'typeorm';
import {Request, Response} from 'express';
import BloodCenter from '../models/BloodCenter';
import BloodCenterView from '../views/BloodCenterView';

class ListBloodCenterService{
    public async index(request: Request, response:Response){
        const bloodCenterRepository = getRepository(BloodCenter);
        const bloodCenters = await bloodCenterRepository.find({
            relations:['images']
        });

        return response.json(BloodCenterView.renderMany(bloodCenters));

    }
    public async show(request: Request, response:Response){
        const {id} = request.params;
        const bloodCenterRepository = getRepository(BloodCenter);
        const bloodCenter = await bloodCenterRepository.findOneOrFail(id,{
            relations:['images']
        });

        return response.json(BloodCenterView.render(bloodCenter));

    }
}

export default ListBloodCenterService;
