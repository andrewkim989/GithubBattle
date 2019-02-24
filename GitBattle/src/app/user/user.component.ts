import { Component, OnInit } from '@angular/core';
import { BattleService } from "../battle.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  playerOne: any;
  playerTwo: any;
  found1: boolean = false;
  data1: any;
  error1: boolean = false;
  found2: boolean = false;
  data2: any;
  error2: boolean = false;

  constructor(private battleService: BattleService, private router: Router) { }

  ngOnInit() {
    this.playerOne = {name: ""};
    this.playerTwo = {name: ""};
  }

  findPlayerOne() {
    let p1 = this.battleService.getPlayer(this.playerOne.name);
    p1.subscribe(
      data => {
        this.data1 = data;
        this.error1 = false;
        this.playerOne = {name: ""};
        this.found1 = true;
      },
      error => {
        this.error1 = true;
      }
    )
  }

  findPlayerTwo() {
    let p2 = this.battleService.getPlayer(this.playerTwo.name);
    p2.subscribe(
      data => {
        this.data2 = data;
        this.error2 = false;
        this.playerOne = {name: ""};
        this.found2 = true;
      },
      error => {
        this.error2 = true;
      }
    )
  }
  
  fight() {
    let score1 = 12 * (this.data1.public_repos + this.data1.followers);
    let p1 = {name: this.data1.login, image: this.data1.avatar_url, score: score1};
    let score2 = 12 * (this.data2.public_repos + this.data2.followers);
    let p2 = {name: this.data2.login, image: this.data2.avatar_url, score: score2};

    this.battleService.data1 = p1;
    this.battleService.data2 = p2;

    this.battleService.addUser(p1).subscribe();
    this.battleService.addUser(p2).subscribe();
    this.router.navigate(["/results"]);
  }
}
