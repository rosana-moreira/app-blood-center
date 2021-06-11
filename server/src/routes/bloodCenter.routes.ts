import { Router } from "express";
import multer from 'multer';
import uploadConfig from '../config/upload'
import CreateBloodCenterService from '../services/CreateBloodCenterService'
import ListBloodCenterService from "../services/ListBloodCenterServer"

const BloodCenterRouter = Router();
const upload = multer(uploadConfig);

const createBloodCenter = new CreateBloodCenterService;

BloodCenterRouter.post('/create', upload.array('image'),
createBloodCenter.create)

BloodCenterRouter.get('/lists',async (request, response)=>{
const listBloodCenter = new ListBloodCenterService();
const bloodCenter = await listBloodCenter.index(request, response);

return response.json(bloodCenter);
});

BloodCenterRouter.get('/list/:id',async (request, response)=>{
    const listBloodCenter = new ListBloodCenterService();
    const bloodCenter = await listBloodCenter.show(request, response);
    
    return response.json(bloodCenter);
    });
    

export default BloodCenterRouter;
