import { Link } from 'react-router-dom';
import { formatPrice } from '../lib/format';

export const ProductCard = ({ product }) => {
return (
<article className="overflow-hidden rounded-2xl border border-gray-200 bg-white transition hover:shadow-lg">

<Link to={`/products/${product.slug}`}>
<img
src={
product.imageUrl ||
'https://placehold.co/300x400?text=Book'
}
alt={product.name}
className="h-80 w-full rounded-t-lg object-cover"
/>

<div className="p-4">
<h3 className="font-semibold text-gray-900">
{product.name}
</h3>

<p className="text-sm text-gray-500">
{product.category}
</p>

<p className="mt-1 font-semibold text-gray-900">
{formatPrice(product.price)}
</p>
</div>
</Link>

</article>
);
};
