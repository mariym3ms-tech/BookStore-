import { db } from './index.js';
import { products, productImages } from './schema.js';
import { productsData } from './products.data.js';
import { randomUUID } from 'crypto';

async function seed() {
try {
for (const p of productsData) {
const productValues = {
...p,
price: Number(p.price),
updatedAt: new Date(),
};

const [savedProduct] = await db
.insert(products)
.values({
id: randomUUID(),
...productValues,
})
.onConflictDoUpdate({
target: products.slug,
set: productValues,
})
.returning();

console.log(`Updated: ${savedProduct.name}`);
}

console.log('Done - products updated successfully.');
} catch (error) {
console.error('Seed failed:', error);
process.exitCode = 1;
} finally {
process.exit();
}
}

seed();
