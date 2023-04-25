import * as mongoose from 'mongoose';
import salesforceentityModel from '../models/daomodels/salesforceentity';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'


export class salesforceentityDao {
    private salesforceentity = salesforceentityModel;
    constructor() { }
    
    public async GpGetNounCreatedBy(salesforceentityData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into salesforceentityDao.ts: GpGetNounCreatedBy');

    

    
    
    
    this.salesforceentity.aggregate(([
                        { $match: { $and: [{ created_by: salesforceentityData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from salesforceentityDao.ts: GpGetNounCreatedBy');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounCreatedBy(salesforceentityData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into salesforceentityDao.ts: GpGetNounCreatedBy');

    

    
    
    
    this.salesforceentity.aggregate(([
                        { $match: { $and: [{ created_by: salesforceentityData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from salesforceentityDao.ts: GpGetNounCreatedBy');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounCreatedBy(salesforceentityData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into salesforceentityDao.ts: GpGetNounCreatedBy');

    

    
    
    
    this.salesforceentity.aggregate(([
                        { $match: { $and: [{ created_by: salesforceentityData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from salesforceentityDao.ts: GpGetNounCreatedBy');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounCreatedBy(salesforceentityData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into salesforceentityDao.ts: GpGetNounCreatedBy');

    

    
    
    
    this.salesforceentity.aggregate(([
                        { $match: { $and: [{ created_by: salesforceentityData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from salesforceentityDao.ts: GpGetNounCreatedBy');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounCreatedBy(salesforceentityData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into salesforceentityDao.ts: GpGetNounCreatedBy');

    

    
    
    
    this.salesforceentity.aggregate(([
                        { $match: { $and: [{ created_by: salesforceentityData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from salesforceentityDao.ts: GpGetNounCreatedBy');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounCreatedBy(salesforceentityData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into salesforceentityDao.ts: GpGetNounCreatedBy');

    

    
    
    
    this.salesforceentity.aggregate(([
                        { $match: { $and: [{ created_by: salesforceentityData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from salesforceentityDao.ts: GpGetNounCreatedBy');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounCreatedBy(salesforceentityData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into salesforceentityDao.ts: GpGetNounCreatedBy');

    

    
    
    
    this.salesforceentity.aggregate(([
                        { $match: { $and: [{ created_by: salesforceentityData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from salesforceentityDao.ts: GpGetNounCreatedBy');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}


}