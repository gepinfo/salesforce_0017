import { Request, Response } from 'express';
import { salesforceentityService } from '../service/salesforceentityService';
import { CustomLogger } from '../config/Logger'
let salesforceentity = new salesforceentityService();

export class salesforceentityController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    salesforceentity.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into salesforceentityController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from salesforceentityController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    salesforceentity.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into salesforceentityController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from salesforceentityController.ts: GpSearch');
    })}
public GpUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    salesforceentity.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into salesforceentityController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from salesforceentityController.ts: GpUpdate');
    })}
public GpGetEntityById(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    salesforceentity.GpGetEntityById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into salesforceentityController.ts: GpGetEntityById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from salesforceentityController.ts: GpGetEntityById');
    })}
public GpGetAllValues(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    salesforceentity.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into salesforceentityController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from salesforceentityController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    salesforceentity.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into salesforceentityController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from salesforceentityController.ts: GpCreate');
    })}
public GpGetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    salesforceentity.GpGetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into salesforceentityController.ts: GpGetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from salesforceentityController.ts: GpGetNounCreatedBy');
    })}


}