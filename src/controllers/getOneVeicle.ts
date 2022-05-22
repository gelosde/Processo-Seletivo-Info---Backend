import { Request, Response } from "express";
import veicleRepoitory from "../repositories/veicles/viecles.repository";

const getOneVeicle = async (req: Request, res: Response) => {
  const veicleInfo = req.params.finder;

  const plateFound = await new veicleRepoitory().getOneVeiclePlate(veicleInfo);

  const idFound = await new veicleRepoitory().getOneVeicle(veicleInfo);

  let code: Response<any, Record<string, any>>;
  if (plateFound) {
    code = res.status(302).json({ plateFound });
  } else if (idFound) {
    code = res.status(302).json({ idFound });
  } else
    code = res.status(404).json({ msg: "don't have any plate or id found" });

  return code;
};

export default getOneVeicle;
