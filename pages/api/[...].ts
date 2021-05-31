import { NextApiRequest, NextApiResponse } from 'next';

import deezerApi from '../../services/deezerApi';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.url.replace('/api', ''));
  return deezerApi.get(req.url.replace('/api', ''))
    .then((deezerRes) => res.status(200).json(deezerRes.data))
    .catch((err) => res.status(err.response.status).json(err));
}
