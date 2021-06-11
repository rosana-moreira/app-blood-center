import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';
import BloodCenter from '../models/BloodCenter';

class CreateBloodCenterService{
async create (req: Request, res: Response){
    const{
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends,
        
    } =req.body;
    
    const bloodCenterRepository = getRepository(BloodCenter)
    const requestImages = req.files as Express.Multer.File[];

     const  images = requestImages.map((image) => {
     return { path: image.filename };
        });
        const data={
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends,
            images
        }

    const schema = Yup.object().shape({
        name: Yup.string().required(),
        latitude: Yup.number().required(),
        longitude: Yup.number().required(),
        about: Yup.string().required().max(300),
        instructions: Yup.string().required(),
        opening_hours: Yup.string().required(),
        open_on_weekends: Yup.boolean().required(),
        images: Yup.array(
          Yup.object().shape({
            path: Yup.string().required(),
          })
        ),
      });
     await schema.validate(data,{
         abortEarly:false,
     })
  
    const bloodCenter =  bloodCenterRepository.create(data);
    await bloodCenterRepository.save(bloodCenter);

   return res.status(201).json(bloodCenter);
}}

export default CreateBloodCenterService;



