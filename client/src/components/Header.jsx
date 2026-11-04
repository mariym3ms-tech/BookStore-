export function Header() {
return (
<header className="sticky top-0 z-10 border-b border-line bg-bg">
<nav className="mx-auto flex max-w-[1100px] items-center justify-between px-6 py-4">
<a href="#hero" className="text-xl font-bold">
Hue & <span className="text-ember">Pages</span>
</a>

<ul className="flex gap-6">
<li><a href="#hero" className="text-ink-soft transition-colors hover:text-ember">Novels</a></li>
<li><a href="#shop" className="text-ink-soft transition-colors hover:text-ember">Non-Fiction</a></li>
<li><a href="#about" className="text-ink-soft transition-colors hover:text-ember">Staff Picks</a></li>
<li><a href="#contact" className="text-ink-soft transition-colors hover:text-ember">Contact</a></li>
</ul>
</nav>
</header>
)
}

