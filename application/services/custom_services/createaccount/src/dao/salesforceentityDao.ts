import * as mongoose from 'mongoose';
import salesforceentityModel from '../models/daomodels/salesforceentity';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'


export class salesforceentityDao {
    private salesforceentity = salesforceentityModel;
    constructor() { }
    
    public async GpDelete(salesforceentityId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into salesforceentityDao.ts: GpDelete');

    

    
    
    
    this.salesforceentity.findByIdAndRemove(salesforceentityId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from salesforceentityDao.ts: GpDelete');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearch(salesforceentityData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into salesforceentityDao.ts: GpSearch');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(salesforceentityData).forEach(
                            ([key,value]) => {
                                if(value !== ''){
                                    andkey = key;
                                    and_obj[andkey] = value;
                                }
                                else{
                                    orkey = key;
                                    or_obj[orkey] = { $ne: '' }
                                }
                            }
                        );;
    this.salesforceentity.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from salesforceentityDao.ts: GpSearch');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpUpdate(salesforceentityData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into salesforceentityDao.ts: GpUpdate');

    

    
    
    
    this.salesforceentity.findOneAndUpdate({ _id: salesforceentityData._id }, salesforceentityData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from salesforceentityDao.ts: GpUpdate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetEntityById(salesforceentityId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into salesforceentityDao.ts: GpGetEntityById');

    

    
    
    
    this.salesforceentity.findById(salesforceentityId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from salesforceentityDao.ts: GpGetEntityById');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into salesforceentityDao.ts: GpGetAllValues');

    

    
    
    
    this.salesforceentity.find().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from salesforceentityDao.ts: GpGetAllValues');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(salesforceentityData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into salesforceentityDao.ts: GpCreate');

    let temp = new salesforceentityModel(salesforceentityData);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from salesforceentityDao.ts: GpCreate');

        

        
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