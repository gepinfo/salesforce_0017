
import { CustomLogger } from '../config/Logger'


export class UserController {
    
    constructor() { }
    
    public (req: Request, res: Response) {
User.(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into UserController.ts: ');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from UserController.ts: ');
    })}


}