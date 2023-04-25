import { Request, Response, NextFunction } from "express";
import { salesforceentityController } from '../controller/salesforceentityController';


export class Routes {
    private salesforceentity: salesforceentityController = new salesforceentityController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/salesforceentity/:id').delete(this.salesforceentity.GpDelete);
app.route('/salesforceentity/get/search').get(this.salesforceentity.GpSearch);
app.route('/salesforceentity').put(this.salesforceentity.GpUpdate);
app.route('/salesforceentity/:id').get(this.salesforceentity.GpGetEntityById);
app.route('/salesforceentity').get(this.salesforceentity.GpGetAllValues);
app.route('/salesforceentity').post(this.salesforceentity.GpCreate);
app.route('/salesforceentity/userid/created_by').get(this.salesforceentity.GpGetNounCreatedBy);
     }

}