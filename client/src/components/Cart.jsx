import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function getSavedCart() {
try {
return JSON.parse(localStorage.getItem('cart') || '[]');
} catch {
return [];
}
}

export function Cart() {
const [items, setItems] = useState(getSavedCart);

useEffect(() => {
localStorage.setItem('cart', JSON.stringify(items));
}, [items]);

const updateQuantity = (slug, amount) => {
setItems(current =>
current.map(item => {
if (item.slug !== slug) return item;

const quantity = Math.max(
1,
Math.min(item.quantity + amount, item.stock)
);

return { ...item, quantity };
})
);
};

const removeItem = slug => {
setItems(current =>
current.filter(item => item.slug !== slug)
);
};

const total = items.reduce(
(sum, item) =>
sum + Number(item.price) * item.quantity,
0
);

if (items.length === 0) {
return (
<div className="mx-auto max-w-5xl px-6 py-20 text-center">
<h1 className="mb-4 text-3xl font-bold">
Your Cart
</h1>

<p className="mb-6 text-gray-500">
Your shopping cart is empty.
</p>

<Link
to="/"
className="rounded-full bg-amber-700 px-6 py-3 text-white"
>
Continue Shopping
</Link>
</div>
);
}

return (
<div className="mx-auto max-w-5xl px-6 py-12">
<h1 className="mb-8 text-3xl font-bold">
Your Shopping Cart
</h1>

<div className="space-y-5">
{items.map(item => (
<div
key={item.slug}
className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-4 sm:flex-row sm:items-center"
>
<img
src={item.imageUrl || 'https://placehold.co/100x130?text=Book'}
alt={item.name}
className="h-32 w-24 rounded-lg object-cover"
/>

<div className="flex-1">
<h2 className="text-lg font-bold">
{item.name}
</h2>

<p className="mt-1 text-gray-500">
{Number(item.price).toFixed(2)}
</p>

<div className="mt-4 flex items-center gap-3">
<button
onClick={() => updateQuantity(item.slug, -1)}
disabled={item.quantity <= 1}
className="rounded border px-3 py-1 disabled:opacity-40"
>
−
</button>

<span>{item.quantity}</span>

<button
onClick={() => updateQuantity(item.slug, 1)}
disabled={item.quantity >= item.stock}
className="rounded border px-3 py-1 disabled:opacity-40"
>
+
</button>
</div>
</div>

<div className="flex flex-col gap-3 sm:items-end">
<p className="font-bold">
{(Number(item.price) * item.quantity).toFixed(2)}
</p>

<button
onClick={() => removeItem(item.slug)}
className="text-sm text-red-600 underline"
>
Remove
</button>
</div>
</div>
))}
</div>

<div className="mt-8 rounded-xl bg-gray-50 p-6">
<div className="flex justify-between text-xl font-bold">
<span>Total</span>
<span>{total.toFixed(2)}</span>
</div>

<Link
to="/"
className="mt-6 inline-block rounded-full bg-amber-700 px-6 py-3 text-white"
>
Continue Shopping
</Link>
</div>
</div>
);
}