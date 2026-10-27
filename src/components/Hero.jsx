export function Hero() {
return (
<section id="hero" className="mx-auto max-w-[1100px] px-6 pt-20 pb-16">
<p className="mb-4 text-xs tracking-[0.15em] text-clay uppercase">
Discover new worlds · Curated reads
</p>

<h1 className="max-w-xl text-6xl leading-[1.05] font-bold">
Cozy Corners & <span className="text-ember">Great Stories</span>.
</h1>

<p className="mt-5 max-w-lg text-lg text-ink-soft">
Your independent sanctuary for inspiring novels, thought-provoking non-fiction, and wonderful literary gatherings.
</p>

<a
href="#shop"
className="mt-8 inline-block rounded-full bg-ember px-7 py-3 font-semibold text-white transition-transform hover:-translate-y-0.5 hover:opacity-90"
>
Explore the Collection
</a>
</section>
)
}