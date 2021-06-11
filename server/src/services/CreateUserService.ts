import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import User from '../models/User';
import * as Yup from 'yup';

class CreateUserService{

    async create (req: Request, res: Response){
        const{
            name,
            cpf,
            bloodType,
            telephone,
            city,
            state,  
        } =req.body;

const userRepository = getRepository(User);
const data={
    name,
    cpf,
    bloodType,
    telephone,
    city,
    state,  
}
// const schema = Yup.object().shape({
//     name: Yup.string().required(),
//     cpf: Yup.string().required(),

//     bloodType: Yup.string().required(),
//     telephone: Yup.string().required(),
//     city: Yup.string().required(),
//     state: Yup.string().required()
// });
// await schema.validate(data,{
//     abortEarly:false,
// })


const user =userRepository.create(data);
await userRepository.save(user);

return res.status(201).json(user);

}

}

export default CreateUserService;
