import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { JogoVelhaComponent } from "./jogoVelha.component";


@NgModule({
    imports: [
        CommonModule
    ],
    declarations:[
        JogoVelhaComponent
    ],
    exports: [
        JogoVelhaComponent
    ]
})
export class JogoVelhaModule{  }