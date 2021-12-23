// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type POSTPayload = {
  name: string;
};

type GETPayload = {
  name: string;
};

const handlePost = async (
  req: NextApiRequest,
  res: NextApiResponse<POSTPayload>
) => {
  return res.status(501).end('Method not implemented');
};

const handleGet = async (
  req: NextApiRequest,
  res: NextApiResponse<GETPayload>
) => {
  return res.status(501).end('Method not implemented');
};

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  switch (method) {
    case 'POST':
      return handlePost(req, res);
    case 'GET':
      return handleGet(req, res);
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};
