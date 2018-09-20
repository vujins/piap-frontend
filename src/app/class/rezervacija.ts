import { LinijaMedjugradska } from "./linija-medjugradska";
import { User } from "./user";

export class Rezervacija {
    id: number;
    linija: LinijaMedjugradska = new LinijaMedjugradska();
    korisnik: User = new User();
    odobren: boolean;
}
