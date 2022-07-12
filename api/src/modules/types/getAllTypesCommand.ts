import DbClient from "../../services/db-client";
import { Request, Response } from 'express';

export const getAllTypes = async (req: Request, res: Response) => {
    DbClient.db.collection('types').find({}).toArray((err, result) => {
        if (err) {
            res.status(500).send({ error: true, message: 'Error getting word types' });
        } else {
            res.status(200).send(result);
        }
    });
}