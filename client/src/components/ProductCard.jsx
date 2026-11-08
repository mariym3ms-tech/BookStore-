import { formatPrice } from '../lib/format';

export const ProductCard = ({ product }) => {
    return(
<article className="overflow-hidden rounded-2xl border border-gray-200 transition hover:shadow-lg bg-white">
<img
src={product.imageUrl || product.imageUrl || "https://placehold.co/300x400?text=Book"}
alt={product.title}
className="w-full h-80 object-cover rounded-t-lg"
/>
<div className="p-4">
<h3 className="font-semibold text-gray-900">{product.title}</h3>
<p className="text-sm text-gray-500">{product.category}</p>
<p className="mt-1 font-semibold text-gray-900">
   ${product.price || 0}
</p>
</div>
</article>
);
};