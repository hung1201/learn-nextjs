// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
interface Posts {
  id: String;
  productName: String;
}
type Data =
  | {
      posts: Posts[];
    }
  | { name: String };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method != "GET") {
    return res.status(404).json({ name: "Method not supported" });
  }
  const data = await fetch(
    "https://63ce87f7d2e8c29a9bd94d45.mockapi.io/product"
  );
  const response = await data.json();
  res.status(200).json(response);
}
