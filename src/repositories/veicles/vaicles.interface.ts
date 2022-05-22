import { DeleteResult } from "typeorm";

interface Iveicles {
  id: string;

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
