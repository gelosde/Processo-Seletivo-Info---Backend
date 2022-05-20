import { Request, Response } from "express";
import veicleRepoitory from "../repositories/veicles/viecles.repository";
import fs from "fs";

const fileDataDownload = async (req: Request, res: Response) => {
  const id = req.params.id;

  if (id) {
    const findId = await new veicleRepoitory().getOneVeicle(id);
    if (!findId) {
      return res.status(404).json({ msg: "Veicle not found" });
    }

    fs.writeFile(
      `../arquive/${id}.txt`,
      String(findId),
      { flag: "w" },
      (err) => {
        if (err) throw err;
        return res.download("../arquive/", `${id}.txt`);
      }
    );
  } else {
    const getallVeicle = await new veicleRepoitory().getallVeicle();

    fs.writeFile(
      "../arquive/allVeicles.txt",
      String(getallVeicle),
      { flag: "w" },
      (err) => {
        if (err) throw err;
        return res.download("../arquive/", "allVeicles.txt");
      }
    );
  }

  return res.status(200).json({ msg: "arquive in download" });
};

export default fileDataDownload;
