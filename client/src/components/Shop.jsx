
 import React, { useState, useEffect } from 'react';
import { ProductCard } from './ProductCard';

export function Shop() {
const [products, setProducts] = useState([]);
const [filter, setFilter] = useState('All');
const [loading, setLoading] = useState(true);
const [error, setError] = useState('');

const categories = [
'All',
'Fiction',
'Non-Fiction',
'Novels',
'Bestsellers',
'Staff Picks'
];

useEffect(() => {
async function fetchProducts() {
try {
setLoading(true);
setError('');

const response = await fetch('/api/products');

if (!response.ok) {
throw new Error('Failed to fetch products');
}

const data = await response.json();

setProducts(data);
} catch (err) {
console.error('Error fetching products:', err);
setError('Unable to load books. Please try again.');
} finally {
setLoading(false);
}
}

fetchProducts();
}, []);

const filtered =
filter === 'All'
? products
: products.filter(
(product) =>
product.category?.toLowerCase() ===
filter.toLowerCase()
);

return (
<div className="max-w-7xl mx-auto px-4 py-8">

<div className="mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">

<h2 className="text-2xl font-bold text-gray-800">
Explore Our Bookstore
</h2>

<div className="flex flex-wrap gap-2">
{categories.map((cat) => (
<button
key={cat}
type="button"
onClick={() => setFilter(cat)}
className={`rounded-full px-4 py-1.5 text-sm transition ${
filter === cat
? 'bg-amber-700 text-white shadow-md'
: 'border border-gray-300 text-gray-600 hover:border-gray-500'
}`}
>
{cat}
</button>
))}
</div>
</div>

{loading ? (
<p className="text-center text-gray-500 py-12">
Loading books...
</p>
) : error ? (
<p className="text-center text-red-500 py-12">
{error}
</p>
) : filtered.length === 0 ? (
<p className="text-center text-gray-500 py-12">
No books found.
</p>
) : (
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
{filtered.map((product) => (
<ProductCard
key={product.id}
product={product}
/>
))}
</div>
)}

</div>
);
}
