import { Component, OnInit } from '@angular/core';
import { RPGCharacter } from '../../classes/rpgcharacter';

@Component({
  selector: 'app-charsheet',
  templateUrl: './charsheet.component.html',
  styleUrls: ['./charsheet.component.css']
})
export class CharsheetComponent implements OnInit {
  public character: RPGCharacter;

  constructor() {
    this.character = new RPGCharacter([10, 12, 14, 12, 12, 8]);

  }

  ngOnInit() {

  }
}
