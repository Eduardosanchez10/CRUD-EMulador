import { CustomError } from './custom.error';
import { Response } from "express";

export class HandleError{
    static error( error: unknown, res: Response ){
        if( error instanceof CustomError ){
            res.status( error.statusCode ).json({error: error.message});
            return;
        }

        res.status( 500 ).json({error:'internal server error'});
        return;
    }
}