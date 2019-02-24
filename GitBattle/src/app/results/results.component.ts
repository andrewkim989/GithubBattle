import { Component, OnInit } from '@angular/core';
import { BattleService } from "../battle.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  player1: any;
  player2: any;
  score1: Number;
  score2: Number;

  constructor(private battleService: BattleService, private router: Router) { 
  }

  ngOnInit() {
    this.player1 = this.battleService.data1;
    this.player2 = this.battleService.data2;
    if (this.player1) {
      this.score1 = this.player1.score;
    }
    if (this.player2) {
      this.score2 = this.player2.score;
    }
  }

  reset() {
    this.router.navigate(["/"]);
  }


}
