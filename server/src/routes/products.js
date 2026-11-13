import { Router } from 'express';
import { eq } from 'drizzle-orm';
import { db } from '../db/index.js';
import { products } from '../db/schema.js';

export const productsRouter = Router();

// Get all products
productsRouter.get('/', async (req, res) => {
try {
const rows = await db
.select()
.from(products);

res.json(rows);
} catch (error) {
console.error('Error fetching products:', error);
res.status(500).json({
error: 'Failed to fetch products',
});
}
});

// Get a single product by slug
productsRouter.get('/:slug', async (req, res) => {
try {
const [row] = await db
.select()
.from(products)
.where(eq(products.slug, req.params.slug))
.limit(1);

if (!row) {
return res.status(404).json({
error: 'No such product',
});
}

res.json(row);
} catch (error) {
console.error('Error fetching product:', error);
res.status(500).json({
error: 'Failed to fetch product',
});
}
});
