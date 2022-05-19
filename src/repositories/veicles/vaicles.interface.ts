import { DeleteResult } from "typeorm";

interface Iveicles {
  plate: string;

  chassis: string;

  renavam: number;

  model: string;

  brand: string;

  year: string;
}

interface IveiclesRepo {
  saveVeicle: (veicle: Iveicles) => Promise<Iveicles>;

  deleteVeicle: (veicleId: string) => Promise<DeleteResult>;
}

export { Iveicles, IveiclesRepo };
