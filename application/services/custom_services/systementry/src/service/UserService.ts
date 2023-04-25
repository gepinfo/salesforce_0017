
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';


export class UserService {
    
    constructor() { }
    
    public  (req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into UserService.ts: ')
     let  UserId = req.params.id;
     User.(UserId, req.query.mailid,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from UserService.ts: ')
         callback(response);
         });
    }
    
    
    
    
}