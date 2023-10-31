// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { database } from "@/services/firebase";
import { IDataPage } from "@/types/IDataPage";
import { child, get, ref } from "firebase/database";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  data: IDataPage;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IDataPage>
) {
  let dataPage = {} as IDataPage;
  if (!!req.query.id) {
    try {
      await get(
        child(ref(database), "links/" + "bl3rD0tfx4dxj5QZZ9rHh0T4FrF3")
      ).then((snapshot) => {
        if (snapshot.exists()) {
          let info = snapshot.val();
          dataPage = info;
        } else {
          console.log("No data available");
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  res.status(200).json(dataPage);
}
