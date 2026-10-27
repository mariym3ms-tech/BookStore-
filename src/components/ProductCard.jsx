import { useState } from 'react'
import { QuantityStepper } from './QuantityStepper'

export function ProductCard({ product }) {
const [qty, setQty] = useState(1)

return (
<article className="overflow-hidden rounded-2xl border border-gray-200 transition hover:shadow-lg bg-white">
<img
src={product.image}
alt={product.title}
className="w-full h-64 object-cover rounded-t-lg"
/>
<div className="p-4">
<h3 className="font-semibold text-gray-900">{product.title}</h3>
<p className="text-sm text-gray-500">{product.category}</p>
<p className="mt-1 font-semibold text-gray-900">{product.price}</p>
<div className="mt-3">
<QuantityStepper value={qty} onChange={setQty} />
</div>
</div>
</article>
)
}