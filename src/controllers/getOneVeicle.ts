import { Request, Response } from "express";
import veicleRepoitory from "../repositories/veicles/viecles.repository";

const getOneVeicle = async (req: Request, res: Response) => {
  const veicleInfo = req.params.finder;

  const plateFound = await new veicleRepoitory().getOneVeiclePlate(veicleInfo);

  const idFound = await new veicleRepoitory().getOneVeicle(veicleInfo);

  if (plateFound) {
    return res.status(302).json({ plateFound });
  } else if (idFound) {
    return res.status(302).json({ idFound });
  } else
    return res.status(404).json({ msg: "don't have any plate or id found" });
};

export default getOneVeicle;
