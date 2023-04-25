import { Request, Response } from 'express';
import {salesforceentityDao} from '../dao/salesforceentityDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let salesforceentity = new salesforceentityDao();

export class salesforceentityService {
    
    constructor() { }
    
    public  GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into salesforceentityService.ts: GpDelete')
     let  salesforceentityId = req.params.id;
     salesforceentity.GpDelete(salesforceentityId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from salesforceentityService.ts: GpDelete')
         callback(response);
         });
    }
    
public  GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into salesforceentityService.ts: GpSearch')
     let  salesforceentityData = req.query;
     salesforceentity.GpSearch(salesforceentityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from salesforceentityService.ts: GpSearch')
         callback(response);
         });
    }
    
public  GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into salesforceentityService.ts: GpUpdate')
     let  salesforceentityData = req.body;
     salesforceentity.GpUpdate(salesforceentityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from salesforceentityService.ts: GpUpdate')
         callback(response);
         });
    }
    
public  GpGetEntityById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into salesforceentityService.ts: GpGetEntityById')
     let  salesforceentityId = req.params.id;
     salesforceentity.GpGetEntityById(salesforceentityId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from salesforceentityService.ts: GpGetEntityById')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into salesforceentityService.ts: GpGetAllValues')
     
     salesforceentity.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from salesforceentityService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into salesforceentityService.ts: GpCreate')
     let  salesforceentityData = req.body;
     salesforceentity.GpCreate(salesforceentityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from salesforceentityService.ts: GpCreate')
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