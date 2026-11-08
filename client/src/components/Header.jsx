import { Link } from 'react-router-dom';
import { useSession, signOut } from '../lib/auth-client';

export function Header() {
// جلب بيانات الجلسة (Session) لمعرفة هل المستخدم مسجل دخول أم لا
const { data: session } = useSession();

return (
<header className="sticky top-0 z-10 border-b border-line bg-bg">
<nav className="mx-auto flex max-w-[1100px] flex-col items-center gap-3 px-6 py-4 sm:flex-row sm:justify-between">

{/* الشعار (Logo) */}
<Link to="/" className="text-xl font-bold">
Brew<span className="text-ember">Haus</span>
</Link>

{/* روابط التنقل */}
<ul className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
<li>
<Link to="/" className="text-ink-soft transition-colors hover:text-ember">
Home
</Link>
</li>
<li>
<Link to="/shop" className="text-ink-soft transition-colors hover:text-ember">
Shop
</Link>
</li>
<li>
<Link to="/about" className="text-ink-soft transition-colors hover:text-ember">
About
</Link>
</li>
</ul>

{/* الجزء الخاص بالمستخدم (تسجيل دخول / خروج) */}
<div>
{session?.user ? (
// يظهر هذا الجزء إذا كان المستخدم مسجلاً للدخول
<div className="flex items-center gap-4">
{/* اختياري: عرض اسم المستخدم */}
<span className="text-sm text-ink-soft hidden sm:block">
Hi, {session.user.name}
</span>
<button
type="button"
onClick={() => signOut()}
className="text-sm font-medium text-ink-soft transition-colors hover:text-ember"
>
Sign out
</button>
</div>
) : (
// يظهر هذا الجزء إذا لم يكن المستخدم مسجلاً
<Link
to="/login"
className="text-sm font-medium text-ink-soft transition-colors hover:text-ember"
>
Sign In
</Link>
)}
</div>

</nav>
</header>
);
}

