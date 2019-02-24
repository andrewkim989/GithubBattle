import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BattleService } from "./battle.service";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ResultsComponent } from './results/results.component';
import { RankingsComponent } from './rankings/rankings.component';
import { OrdinalPipe } from './ordinal.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ResultsComponent,
    RankingsComponent,
    OrdinalPipe
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule, HttpClientModule
  ],
  providers: [BattleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
