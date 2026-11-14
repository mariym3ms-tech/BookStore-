import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn, signUp } from '../lib/auth-client';

export function Login() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [name, setName] = useState('');

const [authMode, setAuthMode] = useState('signin');
const [error, setError] = useState(null);
const [isBusy, setIsBusy] = useState(false);

const navigate = useNavigate();

async function handleSubmit(e) {
e.preventDefault();
setError(null);
setIsBusy(true);

try {
let result;

if (authMode === 'signup') {
result = await signUp.email({
email,
password,
name,
});
} else {
result = await signIn.email({
email,
password,
});
}

if (result?.error) {
setError(
result.error.message || 'Something went wrong. Try again.'
);
return;
}

navigate('/');
} catch (err) {
console.error('Authentication error:', err);
setError(err.message || 'Something went wrong. Try again.');
} finally {
setIsBusy(false);
}
}

function toggleMode() {
setAuthMode(authMode === 'signin' ? 'signup' : 'signin');
setError(null);
}

return (
<div className="mx-auto max-w-md px-6 py-16">
<h1 className="mb-6 text-3xl font-bold">
{authMode === 'signin'
? 'Sign In'
: 'Create an Account'}
</h1>

{error && (
<div className="mb-4 rounded bg-red-100 p-3 text-red-700">
{error}
</div>
)}

<form onSubmit={handleSubmit} className="flex flex-col gap-4">
{authMode === 'signup' && (
<div>
<label className="mb-1 block text-sm font-medium">
Name
</label>
<input
type="text"
value={name}
onChange={(e) => setName(e.target.value)}
required
className="w-full rounded border p-2"
placeholder="Your name"
/>
</div>
)}

<div>
<label className="mb-1 block text-sm font-medium">
Email
</label>
<input
type="email"
value={email}
onChange={(e) => setEmail(e.target.value)}
required
className="w-full rounded border p-2"
placeholder="Enter your email"
/>
</div>

<div>
<label className="mb-1 block text-sm font-medium">
Password
</label>
<input
type="password"
value={password}
onChange={(e) => setPassword(e.target.value)}
required
className="w-full rounded border p-2"
placeholder="Enter your password"
/>
</div>

<button
type="submit"
disabled={isBusy}
className="rounded bg-blue-600 p-2 text-white hover:bg-blue-700 disabled:opacity-50"
>
{isBusy
? 'Loading...'
: authMode === 'signin'
? 'Sign In'
: 'Sign Up'}
</button>
</form>

<div className="mt-6 text-center">
<button
type="button"
onClick={toggleMode}
className="text-blue-600 hover:underline"
>
{authMode === 'signin'
? "Don't have an account? Sign up"
: 'Already have an account? Sign in'}
</button>
</div>
</div>
);
}