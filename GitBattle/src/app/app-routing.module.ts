import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ResultsComponent } from './results/results.component';
import { RankingsComponent } from './rankings/rankings.component';

const routes: Routes = [
  { path: "", component: UserComponent },
  { path: "results", component: ResultsComponent },
  { path: "rankings", component: RankingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
