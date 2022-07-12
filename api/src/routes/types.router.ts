
import { Router } from "express";
import { getAllTypes } from "../modules/types/getAllTypesCommand";
import {storeSentence} from "../modules/types/storeSentenceCommand";
import {getAllTypeWords} from "../modules/types/getAllTypeWordsCommand";
import { getAllPrevioulsBuiltSentences } from "../modules/types/getAllPreviouslyBuiltSentencesCommand";
export const router = Router({
  strict: true,
});

//Get all word types
router.get('/', getAllTypes);

//Get all type words
router.get('/:id', getAllTypeWords);

router.post('/sentences', storeSentence);

router.get('/sentences/:word', getAllPrevioulsBuiltSentences);