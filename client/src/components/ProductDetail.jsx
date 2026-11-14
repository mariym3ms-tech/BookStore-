import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

export function ProductDetail() {
const { slug } = useParams();
const navigate = useNavigate();

const [product, setProduct] = useState(null);
const [loading, setLoading] = useState(true);
const [notFound, setNotFound] = useState(false);
const [quantity, setQuantity] = useState(1);

useEffect(() => {
async function loadProduct() {
try {
setLoading(true);
setNotFound(false);
setProduct(null);

if (!slug || slug === 'undefined') {
setNotFound(true);
return;
}

const response = await fetch(
`/api/products/${encodeURIComponent(slug)}`
);

if (!response.ok) {
if (response.status === 404) {
setNotFound(true);
return;
}
throw new Error('Failed to load product');
}

const data = await response.json();
setProduct(data);
setQuantity(1);

} catch (error) {
console.error(error);
setNotFound(true);
} finally {
setLoading(false);
}
}

loadProduct();
}, [slug]);

const addToCart = () => {
if (!product || product.stock <= 0) return;

try {
const savedCart = JSON.parse(
localStorage.getItem('cart') || '[]'
);

const existing = savedCart.find(
item => item.slug === product.slug
);

if (existing) {
existing.quantity = Math.min(
existing.quantity + quantity,
product.stock
);
} else {
savedCart.push({
slug: product.slug,
name: product.name,
price: product.price,
imageUrl: product.imageUrl,
stock: product.stock,
quantity
});
}

localStorage.setItem('cart', JSON.stringify(savedCart));

navigate('/cart');
} catch (error) {
console.error('Error adding to cart:', error);
alert('Could not add this book to your cart.');
}
};

if (loading) {
return <p className="px-6 py-16">Loading...</p>;
}

if (notFound || !product) {
return (
<div className="px-6 py-16">
<p>No such product.</p>
<Link to="/">Back to shop</Link>
</div>
);
}

return (
<div className="mx-auto max-w-[1100px] px-6 py-16">

<div className="mb-8 flex justify-between">
<Link to="/" className="text-amber-700 underline">
Back to shop
</Link>

<Link to="/cart" className="text-amber-700 underline">
Shopping Cart 🛒
</Link>
</div>

<div className="grid gap-10 md:grid-cols-2">

<div>
<img
src={
product.imageUrl ||
'https://placehold.co/400x500?text=Book'
}
alt={product.name}
className="w-full rounded-xl object-cover"
/>
</div>

<div className="flex flex-col">

<p className="mb-3 text-sm text-gray-500">
{product.category}
</p>

<h1 className="mb-3 text-3xl font-bold">
{product.name}
</h1>

{product.tagline && (
<p className="mb-4 text-gray-500">
{product.tagline}
</p>
)}

<p className="mb-6 leading-7 text-gray-600">
{product.description || 'No description available.'}
</p>

<p className="mb-4 text-2xl font-bold">
{Number(product.price).toFixed(2)}
</p>

<p className="mb-6 text-sm">
{product.stock > 0
? `In stock: ${product.stock}`
: 'Out of stock'}
</p>

{product.stock > 0 && (
<>
<p className="mb-3 font-semibold">
Quantity
</p>

<div className="mb-6 flex items-center gap-4">

<button
onClick={() =>
setQuantity(q => Math.max(1, q - 1))
}
disabled={quantity <= 1}
className="rounded-lg border px-4 py-2 disabled:opacity-40"
>
−
</button>

<span className="text-lg font-bold">
{quantity}
</span>

<button
onClick={() =>
setQuantity(q =>
Math.min(product.stock, q + 1)
)
}
disabled={quantity >= product.stock}
className="rounded-lg border px-4 py-2 disabled:opacity-40"
>
+
</button>

</div>

<button
onClick={addToCart}
className="rounded-full bg-amber-700 px-6 py-3 font-semibold text-white transition hover:bg-amber-800"
>
Add to Cart 🛒
</button>
</>
)}

{product.stock <= 0 && (
<button
disabled
className="rounded-full bg-gray-300 px-6 py-3 text-gray-600"
>
Out of Stock
</button>
)}

</div>
</div>
</div>
);
}

