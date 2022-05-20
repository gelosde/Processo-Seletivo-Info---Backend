import { getRepository, Repository } from "typeorm";
import { veicleTable } from "../../entities/veicles";
import { Iveicles, IveiclesRepo } from "./vaicles.interface";

class veicleRepoitory implements IveiclesRepo {
  private ormrepository: Repository<veicleTable>;

  constructor() {
    this.ormrepository = getRepository(veicleTable);
  }

  saveVeicle = async (veicle: Iveicles) =>
    await this.ormrepository.save(veicle);

  getOneVeiclePlate = async (plate: string) =>
    await this.ormrepository.findOne({ plate: plate });

  getOneVeicle = async (veicle: string) =>
    await this.ormrepository.findOne({ id: veicle });

  getallVeicle = async () => await this.ormrepository.find();

  updateVeicle = async (
    veicleInitStatus: Iveicles,
    modificatedVeicle: Iveicles
  ) => await this.ormrepository.update(veicleInitStatus, modificatedVeicle);

  deleteVeicle = async (id: string) => await this.ormrepository.delete({ id });
}

export default veicleRepoitory;
