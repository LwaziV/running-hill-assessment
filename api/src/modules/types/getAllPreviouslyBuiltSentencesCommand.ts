import DbClient from "../../services/db-client";
import { Request, Response } from 'express';

export const getAllPrevioulsBuiltSentences = async (req: Request, res: Response) => {
    const sentence = req.params.word.toLowerCase().trim();
    await DbClient.db.collection('sentences').find(
        {
         sentence: { $regex: sentence}
        },
        {
          projection: {
            sentence: 1
          },
        },
      )
      .sort({ _id: -1 })
      .toArray()
      .then((sentences) => {
        res.status(200).send(sentences);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({ error: true, message: "Failed to get sentences" });
      });
  };