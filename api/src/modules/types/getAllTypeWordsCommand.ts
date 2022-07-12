import DbClient from "../../services/db-client";
import { Request, Response } from 'express';
import { ObjectId } from "mongodb";

export const getAllTypeWords = async (req: Request, res: Response) => {
    let exists = DbClient.db.collection('types').findOne({ _id:  new ObjectId(req.params.typeId) });
    if (!exists) return res.status(404).send({ error: true, message: 'Type not found!' });
    DbClient.db.collection('words').find({ typeId: new ObjectId(req.params.id) }).toArray((err, result) => {
        if (err) {
            res.status(500).send({ error: true, message: "Failed to get type words, Please try again." });
        } else {
            res.status(200).send(result);
        }
    });
}