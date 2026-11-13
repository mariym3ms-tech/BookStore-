import { db } from './index.js';
import { products, productImages } from './schema.js';
import { productsData } from './products.data.js';
import { randomUUID } from 'crypto';

async function seed() {
try {
for (const p of productsData) {
const id = randomUUID();

const [inserted] = await db
.insert(products)
.values({
id,
...p,
price: Number(p.price),
})
.onConflictDoNothing()
.returning();

if (inserted) {
await db.insert(productImages).values({
id: randomUUID(),
productId: inserted.id,
url: inserted.imageUrl,
sortOrder: 0,
});
}
}

console.log(`Done - seeded ${productsData.length} products.`);
} catch (error) {
console.error('Seed failed:', error);
} finally {
process.exit(0);
}
}

seed();
