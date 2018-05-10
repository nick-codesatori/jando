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
    this.character = new RPGCharacter();
    this.character.Strength.Base = 10;
    this.character.Strength.Mods = [2];
  }

  ngOnInit() {
  }

}
