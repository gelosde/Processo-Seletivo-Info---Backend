import fs from "fs";
import { Request, Response } from "express";

const deletArquive = (req: Request, res: Response) => {
  const id = req.params.id;

  if (!id) {
    fs.unlink("../arquive/allVeicles.txt", (err) => {
      if (err) throw err;
    });
  } else
    fs.unlink(`../arquive/${id}.txt`, (err) => {
      if (err) throw err;
    });

  return res.status(200).json({ msg: "arquive is deleted!" });
};
export default deletArquive;
