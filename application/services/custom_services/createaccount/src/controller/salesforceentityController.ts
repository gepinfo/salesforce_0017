import { Request, Response } from 'express';
import { salesforceentityService } from '../service/salesforceentityService';
import { CustomLogger } from '../config/Logger'
let salesforceentity = new salesforceentityService();

export class salesforceentityController {
    
    constructor() { }
    
    public (req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    salesforceentity.(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into salesforceentityController.ts: ');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from salesforceentityController.ts: ');
    })}
public (req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    salesforceentity.(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into salesforceentityController.ts: ');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from salesforceentityController.ts: ');
    })}
public (req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    salesforceentity.(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into salesforceentityController.ts: ');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from salesforceentityController.ts: ');
    })}
public (req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    salesforceentity.(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into salesforceentityController.ts: ');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from salesforceentityController.ts: ');
    })}
public (req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    salesforceentity.(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into salesforceentityController.ts: ');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from salesforceentityController.ts: ');
    })}
public (req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    salesforceentity.(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into salesforceentityController.ts: ');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from salesforceentityController.ts: ');
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