import { Request, Response } from 'express';
import {salesforceentityDao} from '../dao/salesforceentityDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let salesforceentity = new salesforceentityDao();

export class salesforceentityService {
    
    constructor() { }
    
    public  (req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into salesforceentityService.ts: ')
     let  salesforceentityData = { created_by: req.query.createdby };
     salesforceentity.(salesforceentityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from salesforceentityService.ts: ')
         callback(response);
         });
    }
    
public  (req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into salesforceentityService.ts: ')
     let  salesforceentityData = { created_by: req.query.createdby };
     salesforceentity.(salesforceentityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from salesforceentityService.ts: ')
         callback(response);
         });
    }
    
public  (req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into salesforceentityService.ts: ')
     let  salesforceentityData = { created_by: req.query.createdby };
     salesforceentity.(salesforceentityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from salesforceentityService.ts: ')
         callback(response);
         });
    }
    
public  (req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into salesforceentityService.ts: ')
     let  salesforceentityData = { created_by: req.query.createdby };
     salesforceentity.(salesforceentityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from salesforceentityService.ts: ')
         callback(response);
         });
    }
    
public  (req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into salesforceentityService.ts: ')
     let  salesforceentityData = { created_by: req.query.createdby };
     salesforceentity.(salesforceentityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from salesforceentityService.ts: ')
         callback(response);
         });
    }
    
public  (req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into salesforceentityService.ts: ')
     let  salesforceentityData = { created_by: req.query.createdby };
     salesforceentity.(salesforceentityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from salesforceentityService.ts: ')
         callback(response);
         });
    }
    
public  GpGetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into salesforceentityService.ts: GpGetNounCreatedBy')
     let  salesforceentityData = { created_by: req.query.createdby };
     salesforceentity.GpGetNounCreatedBy(salesforceentityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from salesforceentityService.ts: GpGetNounCreatedBy')
         callback(response);
         });
    }
    
    
    
    
}