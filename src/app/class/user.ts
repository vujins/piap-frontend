import { Tip } from "./tip";

export class User {
    ime: string;
    prezime: string;

    username: string;
    password: string;

    opstina: string;
    grad: string;
    adresa: string;

    rodjendan: string;
    telefon: string;

    zaposlen: string;

    email: string;

    tipovi: Array<Tip>;

    constructor() {
        this.ime = this.prezime = this.username = this.password =
        this.opstina = this.grad = this.adresa = 
        this.telefon = this. zaposlen= this.rodjendan = "asd";
        this.tipovi = [
            new Tip(1, 'ROLE_USER')
        ];
    }
}
