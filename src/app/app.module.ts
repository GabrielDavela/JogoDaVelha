import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JogoVelhaModule } from './pages/jogoVelha/jogoVelha.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    JogoVelhaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
