import { connectToDatabase } from '../../utils/mongodb.js';

export default async (request, response) => {
  const { name, type, value } = request.body;

  const { db } = await connectToDatabase();

  await db
    .collection('balanceItems')
    .createIndex({ email: 1 }, { unique: true });

  const balanceItem = {
    name,
    type,
    value,
    created_at: new Date(),
  };

  await db.collection('balanceItems').insertOne(balanceItem);

  return response.status(201).json(balanceItem);
};
