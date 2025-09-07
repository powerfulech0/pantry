import express from 'express';
import { z } from 'zod';

import Item from '../models/item';

const router = express.Router();

router.get('/', async (_, res) => {
  try {
    const items = await Item.findAll();

    if (items.length === 0) {
      return res.status(404).json({ error: 'No items found' });
    }

    return res.json(items);
  } catch (error) {
    console.error('Error fetching items:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/', async (req, res) => {
  const newItem = req.body;

  const schema = z.object({
    name: z.string().min(2).max(100),
    amount: z.number().min(1),
    amountType: z.enum(['g', 'oz', 'pieces']),
  });

  const validation = schema.safeParse(newItem);
  if (!validation.success) {
    return res.status(400).json({ errors: validation.error.issues });
  }

  try {
    await Item.create(validation.data);
  } catch (error) {
    console.error('Error creating item:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }

  return res.status(201).json({ message: 'Item creation successful' });
});

export default router;
