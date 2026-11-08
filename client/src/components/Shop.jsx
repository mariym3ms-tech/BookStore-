
import React, { useState, useEffect } from 'react';
import {ProductCard} from './ProductCard';

export  function Shop() {
const [products, setProducts] = useState([]);
const [filter, setFilter] = useState('All');
const [loading, setLoading] = useState(true);

// Categories list for your bookstore
const categories = ['All', 'Fiction', 'Non-Fiction', 'Bestsellers', 'Staff picks'];

// Fetching or simulating products data
useEffect(() => {
// You can replace this with your actual API or products data import
setTimeout(() => {
setProducts([
{ id: 1, title: 'Architecture of memory', category: 'Fiction', price: 45 ,imageUrl:'/images/Booksproducts/Architecture-of-memory.jpg' },
{ id: 2, title: 'Echoes of quiet days', category: 'Non-Fiction', price: 60 ,imageUrl:'/images/Booksproducts/Echoes-of-quiet-days.jpg' },
{ id: 3, title: 'The amber city', category: 'Sci-Fi', price: 75 ,imageUrl:'/images/Booksproducts/the-amber-city.jpg' },
{ id: 4, title: 'The art of slow living', category: 'Bestsellers', price: 40 ,imageUrl: '/images/Booksproducts/the-art-of-slow-living.jpg' },
{ id: 5, title: 'When Wildflowers Bloom' ,category: 'staff Picks' , price: 50 ,imageUrl: '/images/Booksproducts/When-Wildflowers-Bloom.jpg'},
]);


setLoading(false);
}, 1000);
}, []);

// Filter products based on selected category
const filtered = filter === 'All'
? products
: products.filter(p => p.category === filter);

return (
<div className="max-w-7xl mx-auto px-4 py-8">
{/* Header and Filter Buttons */}
<div className="mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
<h2 className="text-2xl font-bold text-gray-800">Explore Our Bookstore</h2>

{/* Categories Filter */}
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

{/* Loading State or Products Grid */}
{loading ? (
<p className="text-center text-gray-500 py-12">Loading books...</p>
) : (
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
{filtered.map((product) => (
<ProductCard key={product.id} product={product} />
))}
</div>
)}
</div>
);
}
