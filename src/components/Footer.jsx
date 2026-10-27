export function Footer() {
return (
<footer className="border-t border-gray-200 bg-white text-gray-600">
<div className="mx-auto max-w-[1100px] px-6 py-8">
<div className="mb-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
<div>
<h3 className="mb-3 text-sm font-semibold text-gray-900">Hue & Pages Bookstore</h3>
<p className="text-sm text-gray-500">
Curating thoughtful stories and independent reads to inspire your reading space.
</p>
</div>
<div>
<h3 className="mb-3 text-sm font-semibold text-gray-900">Contact</h3>
<p className="text-sm text-gray-500">hello@bookstore.example</p>
<p className="text-sm text-gray-500">Riyadh, Saudi Arabia</p>
</div>
</div>
<div className="border-t border-gray-100 py-4 text-center text-xs text-gray-400">
<p>&copy; 2026 Hue & Pages. Built as a learning project.</p>
</div>
</div>
</footer>
)
}