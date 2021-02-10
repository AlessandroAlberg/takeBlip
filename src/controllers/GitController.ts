import { NextFunction, Request, Response} from 'express';
import req from 'request';   
import util from 'util';
const RepositorioResponse = require('../responses/gitResponse');

class GitController {
    async index(request: Request, response: Response, next: NextFunction) {
        try {
            const path = 'search/repositories';
            const params = 'q=user%3Atakenet+language%3AC%23&type=Repositories&sort=updated&order=desc&per_page=5&page=1';
            const URL = 'https://api.github.com/' + path + '?' + params;
            let Request = req.defaults({
                headers: {'User-Agent': 'processo-seletivo-takeblip'}
            });
            const requestPromise: any = util.promisify(Request); 

            let res = await requestPromise(URL);
            let result = JSON.parse(res.body);
            let repositorios = result.items.map((item: any) => RepositorioResponse.to(item));
            return response.json(repositorios);
            
        } catch (error) {
            next(error)
        }
    }

}

export default GitController;   