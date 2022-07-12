import DbClient from "../../services/db-client";
import { Request, Response } from 'express';

export const storeSentence = async (req: Request, res: Response) => {
    const sentenceExists = await DbClient.db.collection('sentences').findOne({ sentence: req.body });
    if (sentenceExists) {
        res.status(200).send({ error: false, message: 'Sentence already exists!' });
    } else {
        DbClient.db.collection('sentences').insertOne(req.body, (err, result) => {
            if (err) {
                res.status(500).send({ error: true, message: err });
            } else {
                res.status(200).send({result, message: 'Sentence successfully stored!'});
            }
        });
    }
}