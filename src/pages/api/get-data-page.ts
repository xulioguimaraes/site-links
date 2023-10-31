// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { database } from "@/services/firebase";
import { IDataPage } from "@/types/IDataPage";
import { child, get, ref } from "firebase/database";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  data: IDataPage;
  notFoundInfo?: boolean; //uma flag para quando não encontar nenhuma informação cadastrada.
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let dataPage = {} as IDataPage;
  let notFoundInfo = false;
  if (!!req.query.id) {
    try {
      await get(child(ref(database), "links/" + req.query.id)).then(
        (snapshot) => {
          if (snapshot.exists()) {
            let info = snapshot.val();
            dataPage = info;
          } else {
            notFoundInfo = true;
          }
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  res.status(200).json({ data: dataPage, notFoundInfo });
}
