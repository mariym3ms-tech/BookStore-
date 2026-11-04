export function QuantityStepper({ value, onChange, min = 1, max = 20 }) {
return (
<div className="inline-flex items-center gap-1 rounded-full border border-line p-1">
{/* Decrease Button */}
<button
type="button"
onClick={() => onChange(Math.max(min, value - 1))}
disabled={value <= min}
aria-label="Decrease quantity"
className="flex h-7 w-7 items-center justify-center rounded-full text-lg text-gray-700 transition hover:bg-gray-100 disabled:opacity-30"
>
-
</button>

{/* Quantity Value */}
<span
className="w-8 text-center text-sm font-semibold text-black"
aria-live="polite"
aria-label={`Quantity: ${value}`}
>
{value}
</span>

{/* Increase Button */}
<button
type="button"
onClick={() => onChange(Math.min(max, value + 1))}
disabled={value >= max}
aria-label="Increase quantity"
className="flex h-7 w-7 items-center justify-center rounded-full text-lg text-gray-700 transition hover:bg-gray-100 disabled:opacity-30"
>
+
</button>
</div>
);
}

