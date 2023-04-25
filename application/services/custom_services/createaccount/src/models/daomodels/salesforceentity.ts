
import * as mongoose from 'mongoose';
import {  } from '../entitymodels/ticket';

const Schema = mongoose.Schema;

export const salesforceentitySchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: { type: String },
   company: { type: String }
})

const salesforceentityModel = mongoose.model('salesforceentity', salesforceentitySchema, 'salesforceentity');
export default salesforceentityModel;
