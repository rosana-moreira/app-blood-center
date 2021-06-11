import { Router } from "express";
import { getCustomRepository } from "typeorm";
import UserRepository from "../repositories/UserRepository";
import CreateUserService from "../services/CreateUserService";
const UsersRouter  = Router();

const createUser = new CreateUserService();
UsersRouter.post('/create',createUser.create)

UsersRouter.get('/list/name/:name',async (request, response)=>{
    const filterRepository = getCustomRepository(UserRepository);
    const filterName = await filterRepository.findByName(request.params.name);
    
    return response.json(filterName);
    });

    UsersRouter.get('/list/blood/:bloodtype',async (request, response)=>{
        const filterRepository = getCustomRepository(UserRepository);
        const filterBloodType = await filterRepository.findByBloodType(request.params.bloodtype);
        
        return response.json(filterBloodType);
        });
    UsersRouter.get('/list/city/:city',async (request, response)=>{
        const filterRepository = getCustomRepository(UserRepository);
        const filterCity = await filterRepository.findByCity(request.params.city);
          
         return response.json(filterCity);
            });
    UsersRouter.get('/list/state/:state',async (request, response)=>{
        const filterRepository = getCustomRepository(UserRepository);
        const filterState = await filterRepository.findByState(request.params.state);
                
        return response.json(filterState);
                });
export default UsersRouter;
