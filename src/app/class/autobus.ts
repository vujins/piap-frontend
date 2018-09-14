import { Slika } from "./slika";

export class Autobus {
    id: number;
    marka: string;
    model: string;
    broj_sedista: number;
    slike: Array<Slika>;
}
