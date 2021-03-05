import { connectToDatabase } from '../../utils/mongodb.js';

export default async (request, response) => {
  const { db } = await connectToDatabase();

  const balanceItem = await db
    .collection('balanceItems')
    .find({})
    .limit(20)
    .toArray();

  response.json(balanceItem);
};
