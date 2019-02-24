import { Component, OnInit } from '@angular/core';
import { BattleService } from "../battle.service";

@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.css']
})
export class RankingsComponent implements OnInit {
  users: any;

  constructor(private battleService: BattleService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    let u = this.battleService.getUsers();
    u.subscribe(data => {
      this.users = data;
      this.users.sort(this.compare);
    });
  }

  compare(a,b) {
    if (a.score > b.score)
      return -1;
    if (a.score < b.score)
      return 1;
    return 0;
  }

}
