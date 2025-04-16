import { NextApiRequest, NextApiResponse } from 'next';

let products: any[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, price, description, image } = req.body;
    const newProduct = { id: Date.now(), name, price, description, image };
    products.push(newProduct);
    res.status(200).json({ success: true, product: newProduct });
  } else if (req.method === 'GET') {
    res.status(200).json(products);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}