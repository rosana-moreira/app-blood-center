import { EntityRepository, Repository } from "typeorm";
import User from "../models/User";

@EntityRepository(User)
class UserRepository extends Repository<User>{
    public async  findByName(name:string): Promise<User[]> {
        const findName = await this.find({
            where:{
                name,
            },
            });
            return findName;
    }

    public async  findByBloodType(bloodType:string): Promise<User[]> {
        const findBloodType = await this.find({
            where:{
                bloodType,
            },
            });
            return findBloodType;
    }

    public async  findByCity(city:string): Promise<User[]> {
        const findCity = await this.find({
            where:{
                city,
            },
            });
            return findCity;
    }


    public async  findByState(state:string): Promise<User[]> {
        const findState = await this.find({
            where:{
                state,
            },
            });
            return findState;
    }
  
}export default UserRepository;
