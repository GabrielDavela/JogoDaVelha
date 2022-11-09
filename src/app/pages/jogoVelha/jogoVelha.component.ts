import { NgModule } from "@angular/compiler/src/core";
import { Component, OnInit } from "@angular/core";
import { NgModel } from "@angular/forms";


@Component({
    selector: "jogo-velha",
    templateUrl: "./jogoVelha.component.html",
    styleUrls: ["./jogoVelha.component.css"]
})
export class JogoVelhaComponent implements OnInit {

    ngOnInit(): void {
    }
    
    valor1: string = ""
    valor2: string = ""
    valor3: string = ""
    valor4: string = ""
    valor5: string = ""
    valor6: string = ""
    valor7: string = ""
    valor8: string = ""
    valor9: string = ""

    jogador1:number = 0
    jogador2:number = 0

    
    procuraDB = () => JSON.parse(localStorage.getItem("db_placar")) || [];
    adicionaDB = (placar: () => void) => localStorage.setItem("db_produtos", JSON.stringify(placar));
    
    boaTime = JSON.parse(localStorage.getItem("db_produtos"))

    createPlacar = (placar) => {
        const placarzinho = this.procuraDB();
        placarzinho.push(placar);
        this.adicionaDB(placarzinho);
    }

    placar(){
        const placar = {
            jogador1: this.jogador1,
            jogador2: this.jogador2
        }
        localStorage.clear()
        this.createPlacar(placar)
    }

    contador = 0;

    teste(number: number) {
        this.contador++;
        if (!(this.contador % 2 === 0)) {
            let xizinho = "X"
            switch (number) {
                case 1:
                    this.valor1 = xizinho
                    break;
                case 2:
                    this.valor2 = xizinho
                    break
                case 3:
                    this.valor3 = xizinho
                    break
                case 4:
                    this.valor4 = xizinho
                    break
                case 5:
                    this.valor5 = xizinho
                    break
                case 6:
                    this.valor6 = xizinho
                    break
                case 7:
                    this.valor7 = xizinho
                    break
                case 8:
                    this.valor8 = xizinho
                    break
                case 9:
                    this.valor9 = xizinho
                    break
            }
        } else if (this.contador % 2 === 0) {
            let zerinho = "O"
            switch (number) {
                case 1:
                    this.valor1 = zerinho
                    break;
                case 2:
                    this.valor2 = zerinho
                    break
                case 3:
                    this.valor3 = zerinho
                    break
                case 4:
                    this.valor4 = zerinho
                    break
                case 5:
                    this.valor5 = zerinho
                    break
                case 6:
                    this.valor6 = zerinho
                    break
                case 7:
                    this.valor7 = zerinho
                    break
                case 8:
                    this.valor8 = zerinho
                    break
                case 9:
                    this.valor9 = zerinho
                    break
            }
        }

        if (this.contador >= 5) {
            let auxiliar = this.verificar()
            if (auxiliar) {
                this.limparTabela()
                this.contador = 0;
            }
        }
        if (this.contador === 9) {
            let auxiliar = confirm("Deu velha!")
            if (auxiliar || !auxiliar) {
                this.limparTabela()
                this.contador = 0;
            }
        }
    }

    verificar() {
        if ((this.valor1 === "X" && this.valor2 === "X" && this.valor3 === "X") ||
            this.valor1 === "X" && this.valor4 === "X" && this.valor7 === "X" ||
            this.valor1 === "X" && this.valor5 === "X" && this.valor9 === "X" ||
            this.valor2 === "X" && this.valor5 === "X" && this.valor8 === "X" ||
            this.valor1 === "X" && this.valor5 === "X" && this.valor9 === "X" ||
            this.valor4 === "X" && this.valor5 === "X" && this.valor6 === "X" ||
            this.valor7 === "X" && this.valor8 === "X" && this.valor9 === "X" ||
            this.valor3 === "X" && this.valor5 === "X" && this.valor7 === "X" ||
            this.valor3 === "X" && this.valor6 === "X" && this.valor9 === "X") {
            confirm("Jogador 1 ganhou!")
            this.jogador1++;
            this.placar()
            // document.location.reload()
            return true
        } else if ((this.valor1 === "O" && this.valor2 === "O" && this.valor3 === "O") ||
            this.valor1 === "O" && this.valor4 === "O" && this.valor7 === "O" ||
            this.valor1 === "O" && this.valor5 === "O" && this.valor9 === "O" ||
            this.valor2 === "O" && this.valor5 === "O" && this.valor8 === "O" ||
            this.valor1 === "O" && this.valor5 === "O" && this.valor9 === "O" ||
            this.valor4 === "O" && this.valor5 === "O" && this.valor6 === "O" ||
            this.valor7 === "O" && this.valor8 === "O" && this.valor9 === "O" ||
            this.valor3 === "O" && this.valor5 === "O" && this.valor7 === "O" ||
            this.valor3 === "O" && this.valor6 === "O" && this.valor9 === "O"
        ) {
            confirm("Jogador 2 ganhou!")
            this.jogador2++;
            this.placar()
            // document.location.reload()
            return true
        }
        return false;
    }

    limparTabela() {
        this.valor1 = ""
        this.valor2 = ""
        this.valor3 = ""
        this.valor4 = ""
        this.valor5 = ""
        this.valor6 = ""
        this.valor7 = ""
        this.valor8 = ""
        this.valor9 = ""
    }

    resetar(){
        localStorage.clear()
        this.jogador1 = 0
        this.jogador2 = 0
    }

    exibirPlacar(){
        confirm(this.jogador1 + " vs " + this.jogador2)
    }
    
}
