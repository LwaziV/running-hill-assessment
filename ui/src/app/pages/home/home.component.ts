import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Sentences, WordsFromType, WordTypes } from 'src/app/models/types.model';
import { WordsService } from '../../services/words.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  wordtypes: WordTypes[]
  wordsFromType: WordsFromType[];
  sentences: Sentences[];
  selectedWord: string;
  sentence!: string;
  openSentences: boolean = false;
  constructor(private wordsService: WordsService, private snackbar_: MatSnackBar) { }

  ngOnInit(): void {
    this.getAllTypes();
  }

  // get all word types and expose them on dropdown menu
  getAllTypes() {
    this.wordsService.getAllTypes()
      .subscribe(async (response: any) => {
        this.wordtypes = response;
      }, error => {
        this.snackbar_.open(error);
      });
  }

  // get all words that are related to the selected word
  findWords() {
    this.openSentences = false;
    this.sentences = [];
    let type: any = document.getElementById("selectedType");
    if (type.options[type.selectedIndex].value === "") {
      this.snackbar_.open("Please select a type");
      return;
    }
    let typeId: string = type.options[type.selectedIndex].value;
    this.wordsService.findWords(typeId)
      .subscribe(async (response: any) => {
        this.wordsFromType = response;
      }, error => {
        this.snackbar_.open(error);
      });
  }

  // listen to events when selecting a different word
  // check backend if there are any previously stored sentences containing the selected word and allow the user to view them.
  wordChanged() {
    let word: any = document.getElementById("selectedWord");
    this.selectedWord = word.options[word.selectedIndex].text;
    this.viewPreviouslyBuiltSentences(); 
  }

  // Allow the user to build a sentence from the word they selected.
  buildSentence() {
    if(!this.sentence) {
      this.snackbar_.open("Please enter a sentence using the chosen word");
      return;
    }
    this.wordsService.buildSentence(this.sentence)
      .subscribe(async (response: any) => {
        this.snackbar_.open(response);
      }, error => {
        this.snackbar_.open('Failed to build sentence, Please try again.');
      });
  }

    // check backend if there are any previously stored sentences containing the selected word and allow the user to view them.
  viewPreviouslyBuiltSentences(){
    this.wordsService.getAllWordSentences(this.selectedWord)
      .subscribe(async (response: any) => {
        this.sentences = response;
      }, error => {
        this.snackbar_.open('Failed to get previously generated sentences, Please try again.');
      });
  }

  // Allow user to open the list of sentences from the currently selected word
  viewSentences() {
    this.openSentences = true;
  }

}
