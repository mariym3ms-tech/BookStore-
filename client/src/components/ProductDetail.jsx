import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

export function ProductDetail() {
const { slug } = useParams();

const [product, setProduct] = useState(null);
const [loading, setLoading] = useState(true);
const [notFound, setNotFound] = useState(false);
const [activeImage, setActiveImage] = useState(null);

useEffect(() => {
async function loadProduct() {
try {
setLoading(true);
setNotFound(false);

const response = await fetch(`/api/products/${slug}`);

if (response.status === 404) {
setNotFound(true);
return;
}

if (!response.ok) {
throw new Error('Failed to load product');
}

const data = await response.json();

setProduct(data);
setActiveImage(data.imageUrl);
} catch (error) {
console.error('Error loading product:', error);
setNotFound(true);
} finally {
setLoading(false);
}
}

loadProduct();
}, [slug]);

if (loading) {
return (
<p className="mx-auto max-w-[1100px] px-6 py-16 text-ink-soft">
Loading...
</p>
);
}

if (notFound || !product) {
return (
<div className="mx-auto max-w-[1100px] px-6 py-16">
<p className="text-ink-soft">No such product.</p>

<Link
to="/"
className="mt-2 inline-block text-ember underline"
>
Back to shop
</Link>
</div>
);
}

return (
<div className="mx-auto max-w-[1100px] px-6 py-16">
<Link
to="/"
className="mb-8 inline-block text-ember underline"
>
Back to shop
</Link>

<div className="grid gap-10 md:grid-cols-2">
<div>
<img
src={activeImage || product.imageUrl}
alt={product.name}
className="w-full rounded-xl object-cover"
/>
</div>

<div className="flex flex-col">
<p className="mb-3 text-sm text-ink-soft">
{product.category}
</p>

<h1 className="mb-3 text-3xl font-bold">
{product.name}
</h1>

{product.tagline && (
<p className="mb-4 text-ink-soft">
{product.tagline}
</p>
)}

<p className="mb-6 leading-7 text-ink-soft">
{product.description}
</p>

<p className="mb-4 text-2xl font-bold">
{Number(product.price).toFixed(2)}
</p>

<p className="mb-6 text-sm text-ink-soft">
{product.stock > 0
? `In stock: ${product.stock}`
: 'Out of stock'}
</p>

{product.featured && (
<span className="mb-6 text-sm font-semibold">
Featured Product
</span>
)}
</div>
</div>
</div>
);
}

