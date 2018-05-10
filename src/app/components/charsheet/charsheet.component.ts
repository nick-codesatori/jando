import { Component, OnInit } from '@angular/core';
import { Rpgcharacter } from '../../classes/rpgcharacter';

@Component({
  selector: 'app-charsheet',
  templateUrl: './charsheet.component.html',
  styleUrls: ['./charsheet.component.css']
})
export class CharsheetComponent implements OnInit {
  public character: Rpgcharacter;

  constructor() {
    this.character = new Rpgcharacter();
    this.character.Strength_Base = 10;
    this.character.Strength_Mods = [2];
  }

  ngOnInit() {
  }

}
